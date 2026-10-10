import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import type { InputProps } from '@/types/common'
import { validateNonEmptyFields, validateEmail } from '@/utils/validators/InputFieldValidators'

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
    const inputValue =
      props.formatValue && props.formatFunction
        ? props.formatFunction(target.value)
        : target.value
    if (target.value !== inputValue) target.value = inputValue
    updated(inputValue)
  }

  function updated(inputValue?: string | number | File | null) {
    changed.value = true

    if (props.validator) {
      const errorMessage = props.validator(String(inputValue ?? ''))
      validStatus.value = { valid: !errorMessage, errorMessage }
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

    let data: string | number | File | null | undefined = inputValue

    if (props.inputType === 'number') {
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
