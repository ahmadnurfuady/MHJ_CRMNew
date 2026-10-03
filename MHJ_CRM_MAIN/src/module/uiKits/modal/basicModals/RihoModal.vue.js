import { ref, defineAsyncComponent } from 'vue';
import { OnClickOutside } from '@vueuse/components';
import { initCheckboxField, initInputField } from '@/core/data/common';
import { resetForm } from '@/utils/index';
import { validateForm } from '@/utils/validators/formValidators';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
const form = ref({
    firstName: initInputField(),
    lastName: initInputField(),
    email: initInputField(),
    condition: initCheckboxField(),
});
const formSubmitted = ref(false);
function close() {
    submitForm();
}
function submitForm() {
    formSubmitted.value = true;
    const { isValid, formData } = validateForm(form.value);
    if (isValid) {
        form.value = resetForm(form.value);
        formSubmitted.value = false;
        emits('closeModal');
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    name: "modals",
}));
const __VLS_2 = __VLS_1({
    name: "modals",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
if (props.modalOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal fade show d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['modal']} */ ;
    /** @type {__VLS_StyleScopedClasses['fade']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-dialog" },
        role: "document",
    });
    /** @type {__VLS_StyleScopedClasses['modal-dialog']} */ ;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.OnClickOutside | typeof __VLS_components.OnClickOutside} */
    OnClickOutside;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ 'onTrigger': {} },
        ...{ class: "modal-content" },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onTrigger': {} },
        ...{ class: "modal-content" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_11;
    const __VLS_12 = {
        /** @type {typeof __VLS_11.trigger} */
        onTrigger: (...[$event]) => {
            if (!(props.modalOpen))
                throw 0;
            return (__VLS_ctx.close());
            // @ts-ignore
            [close,];
        },
    };
    /** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
    const { default: __VLS_13 } = __VLS_9.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-toggle-wrapper social-profile text-start dark-sign-up" },
    });
    /** @type {__VLS_StyleScopedClasses['modal-toggle-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['social-profile']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['dark-sign-up']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "modal-header justify-content-center border-0" },
    });
    /** @type {__VLS_StyleScopedClasses['modal-header']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-body" },
    });
    /** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ onSubmit: (...[$event]) => {
                if (!(props.modalOpen))
                    throw 0;
                return (__VLS_ctx.submitForm());
                // @ts-ignore
                [submitForm,];
            } },
        ...{ class: "row g-3 needs-validation" },
        novalidate: true,
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    let __VLS_14;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        title: ('First Name'),
        required: (true),
    }));
    const __VLS_16 = __VLS_15({
        title: ('First Name'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const { default: __VLS_19 } = __VLS_17.slots;
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('First name is required.'),
        modelValue: (__VLS_ctx.form.firstName),
        inputId: ('first-name'),
        placeholder: ('Enter first name'),
    }));
    const __VLS_22 = __VLS_21({
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('First name is required.'),
        modelValue: (__VLS_ctx.form.firstName),
        inputId: ('first-name'),
        placeholder: ('Enter first name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    // @ts-ignore
    [formSubmitted, form,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    let __VLS_25;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
        title: ('Last Name'),
        required: (true),
    }));
    const __VLS_27 = __VLS_26({
        title: ('Last Name'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const { default: __VLS_30 } = __VLS_28.slots;
    let __VLS_31;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Last name is required.'),
        modelValue: (__VLS_ctx.form.lastName),
        inputId: ('last-name'),
        placeholder: ('Enter last name'),
    }));
    const __VLS_33 = __VLS_32({
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Last name is required.'),
        modelValue: (__VLS_ctx.form.lastName),
        inputId: ('last-name'),
        placeholder: ('Enter last name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    // @ts-ignore
    [formSubmitted, form,];
    var __VLS_28;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_36;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
        title: ('Email address'),
        required: (true),
    }));
    const __VLS_38 = __VLS_37({
        title: ('Email address'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const { default: __VLS_41 } = __VLS_39.slots;
    let __VLS_42;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (__VLS_ctx.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('Rihotheme@gmail.com'),
    }));
    const __VLS_44 = __VLS_43({
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (__VLS_ctx.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('Rihotheme@gmail.com'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    // @ts-ignore
    [formSubmitted, form,];
    var __VLS_39;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_47;
    /** @ts-ignore @type { | typeof __VLS_components.Checkbox} */
    Checkbox;
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
        formSubmitted: (__VLS_ctx.formSubmitted),
        ...{ class: ('form-check-input') },
        label: ('You accept our Terms and Privacy Policy by clicking Submit below.'),
        errorMessage: ('You must agree before submitting.'),
        modelValue: (__VLS_ctx.form.condition),
        inputId: ('condition'),
    }));
    const __VLS_49 = __VLS_48({
        formSubmitted: (__VLS_ctx.formSubmitted),
        ...{ class: ('form-check-input') },
        label: ('You accept our Terms and Privacy Policy by clicking Submit below.'),
        errorMessage: ('You must agree before submitting.'),
        modelValue: (__VLS_ctx.form.condition),
        inputId: ('condition'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-primary" },
        type: "submit",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    // @ts-ignore
    [formSubmitted, form,];
    var __VLS_9;
    var __VLS_10;
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_52;
/** @ts-ignore @type { | typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    name: "modals",
}));
const __VLS_54 = __VLS_53({
    name: "modals",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const { default: __VLS_57 } = __VLS_55.slots;
if (props.modalOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-backdrop fade show" },
    });
    /** @type {__VLS_StyleScopedClasses['modal-backdrop']} */ ;
    /** @type {__VLS_StyleScopedClasses['fade']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
}
// @ts-ignore
[];
var __VLS_55;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
