import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import type { InputProps } from '@/types/common'
import { validateNonEmptyFields, validateEmail } from '@/utils/validators/InputFieldValidators'
import { containsEmoji, EMOJI_ERROR_MESSAGE, stripEmoji } from '@/utils/validators/emoji'
import { formatThousandsInput, parseThousands } from '@/utils/numberFormat'

interface ValidationStatus {
  errorMessage: string
  valid: boolean
}

export function useInputField(
  props: InputProps,
  emit: (event: 'update:modelValue' | 'badgeVisible', value: unknown) => void
) {
  const validStatus = ref<ValidationStatus>({ errorMessage: '', valid: false })
  const changed = ref<boolean>(false)
  const animationClass = ref<string>('')

  let animationTimer: number | null = null

  watch(
    () => props.formSubmitted,
    () => {
      if (props.formSubmitted) updated(props.modelValue?.data || '')
    }
  )

  onMounted(() => {
    if (props.formSubmitted) {
      updated(props.modelValue?.data || '')
    }
  })

  onBeforeUnmount(() => {
    if (animationTimer) {
      clearTimeout(animationTimer)
    }
  })

  function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0] || null
    updated(file)
  }

  function onInput(event: Event) {
    const target = event.target as HTMLInputElement | null
    if (!target) return

    // Emoji ditolak backend (SafeText), jadi dibuang saat diketik maupun ditempel.
    const withoutEmoji = stripEmoji(target.value)
    if (target.value !== withoutEmoji) target.value = withoutEmoji

    let inputValue: string | number = target.value

    if (props.thousandSeparator) {
      const formattedValue = formatThousandsInput(target.value)
      if (target.value !== formattedValue) target.value = formattedValue
      inputValue = parseThousands(formattedValue)
    } else if (props.formatValue && props.formatFunction) {
      inputValue = props.formatFunction(target.value)
      if (target.value !== inputValue) target.value = String(inputValue)
    }

    updated(inputValue)
  }

  function updated(inputValue?: string | number | File | null) {
    changed.value = true

    if (props.validator) {
      // Validator bisa return:
      // - string: pesan error (kosong = valid)
      // - { valid, errorMessage }: hasil ValidationStatus langsung
      const output = props.validator(String(inputValue ?? ''))
      if (output && typeof output === 'object' && 'errorMessage' in output) {
        validStatus.value = {
          valid: Boolean((output as ValidationStatus).valid),
          errorMessage: String((output as ValidationStatus).errorMessage ?? ''),
        }
      } else {
        const errorMessage = typeof output === 'string' ? output : ''
        validStatus.value = { valid: !errorMessage, errorMessage }
      }
    } else if (props.required) {
      if (props.inputType === 'email') {
        validStatus.value = validateEmail(String(inputValue))
      } else if (props.inputType === 'file') {
        const isValid = !!inputValue
        validStatus.value = {
          valid: isValid,
          errorMessage: isValid ? '' : props.errorMessage || 'File is required.',
        }
      } else {
        validStatus.value = validateNonEmptyFields({
          value: String(inputValue),
          minLength: props.minLength,
          errorMessage: props.errorMessage,
        })
      }
    } else {
      validStatus.value = { valid: true, errorMessage: '' }
    }

    // Nilai yang masuk tanpa event input (prefill dari API, autofill browser)
    // tidak lewat stripEmoji, jadi tetap diberi tanda tidak valid di sini.
    if (containsEmoji(inputValue)) {
      validStatus.value = { valid: false, errorMessage: EMOJI_ERROR_MESSAGE }
    }

    let data: string | number | File | null | undefined = inputValue

    if (props.thousandSeparator) {
      data = inputValue === '' || inputValue == null ? '' : Number(inputValue)
    } else if (props.inputType === 'number') {
      data = inputValue === '' || inputValue == null ? '' : Number(inputValue)
    } else if (props.inputType === 'file') {
      data = inputValue instanceof File ? inputValue : null
    }

    emit('update:modelValue', {
      data,
      errorMessage: validStatus.value.errorMessage,
    })

    if (props.animation && !inputValue) {
      triggerAnimation()
    }
  }

  function triggerAnimation() {
    if (props.modelValue?.errorMessage && !props.browserValidation && props.animation) {
      if (animationTimer) clearTimeout(animationTimer)

      animationClass.value = 'animated input-shake'

      animationTimer = window.setTimeout(() => {
        animationClass.value = ''
        animationTimer = null
      }, 1000)
    }
  }

  function showBadge() {
    if (props.showLengthBadge) {
      emit('badgeVisible', true)
    }
  }

  function hideBadge() {
    if (props.showLengthBadge) {
      emit('badgeVisible', false)
    }
  }

  return {
    validStatus,
    changed,
    animationClass,
    onInput,
    onFileChange,
    showBadge,
    hideBadge,
    updated,
  }
}
