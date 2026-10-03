import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { validateNonEmptyFields, validateEmail } from '@/utils/validators/InputFieldValidators';
export function useInputField(props, emit) {
    const validStatus = ref({ errorMessage: '', valid: false });
    const changed = ref(false);
    const animationClass = ref('');
    let animationTimer = null;
    watch(() => props.formSubmitted, () => {
        if (props.formSubmitted)
            updated(props.modelValue?.data || '');
    });
    onMounted(() => {
        if (props.formSubmitted) {
            updated(props.modelValue?.data || '');
        }
    });
    onBeforeUnmount(() => {
        if (animationTimer) {
            clearTimeout(animationTimer);
        }
    });
    function onFileChange(event) {
        const target = event.target;
        const file = target.files?.[0] || null;
        updated(file);
    }
    function onInput(event) {
        const target = event.target;
        if (!target)
            return;
        updated(target.value);
    }
    function updated(inputValue) {
        changed.value = true;
        if (props.required) {
            if (props.inputType === 'email') {
                validStatus.value = validateEmail(String(inputValue));
            }
            else if (props.inputType === 'file') {
                const isValid = !!inputValue;
                validStatus.value = {
                    valid: isValid,
                    errorMessage: isValid ? '' : props.errorMessage || 'File is required.',
                };
            }
            else {
                validStatus.value = validateNonEmptyFields({
                    value: String(inputValue),
                    minLength: props.minLength,
                    errorMessage: props.errorMessage,
                });
            }
        }
        else {
            validStatus.value = { valid: true, errorMessage: '' };
        }
        let data = inputValue;
        if (props.inputType === 'number') {
            data = inputValue === '' || inputValue == null ? '' : Number(inputValue);
        }
        else if (props.inputType === 'file') {
            data = inputValue instanceof File ? inputValue : null;
        }
        emit('update:modelValue', {
            data,
            errorMessage: validStatus.value.errorMessage,
        });
        if (props.animation && !inputValue) {
            triggerAnimation();
        }
    }
    function triggerAnimation() {
        if (props.modelValue?.errorMessage && !props.browserValidation && props.animation) {
            if (animationTimer)
                clearTimeout(animationTimer);
            animationClass.value = 'animated input-shake';
            animationTimer = window.setTimeout(() => {
                animationClass.value = '';
                animationTimer = null;
            }, 1000);
        }
    }
    function showBadge() {
        if (props.showLengthBadge) {
            emit('badgeVisible', true);
        }
    }
    function hideBadge() {
        if (props.showLengthBadge) {
            emit('badgeVisible', false);
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
    };
}
