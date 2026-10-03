import { defineAsyncComponent, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { countryCodes } from '@/core/data/country';
import { usePassword } from '@/store/handlePassword';
import { getImages } from '@/utils/index';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const passwordStore = usePassword();
const { form, formSubmitted, resendEnabled, timer, otpSent, otpDigits, showLoader, inputs } = storeToRefs(passwordStore);
const { sendOTP, handleOTP, handleInput, handleKeyDown, verifyOTP, clearTimers } = passwordStore;
onUnmounted(() => {
    clearTimers();
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid p-0" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "login-card login-dark" },
});
/** @type {__VLS_StyleScopedClasses['login-card']} */ ;
/** @type {__VLS_StyleScopedClasses['login-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "logo" },
    to: ('/'),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "logo" },
    to: ('/'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-light" },
    src: (__VLS_ctx.getImages('logo/logo_dark.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-dark" },
    src: (__VLS_ctx.getImages('logo/logo.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-dark']} */ ;
// @ts-ignore
[getImages, getImages,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "login-main" },
});
/** @type {__VLS_StyleScopedClasses['login-main']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.sendOTP();
            // @ts-ignore
            [sendOTP,];
        } },
    ...{ class: "theme-form" },
});
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    title: ('Enter Your Mobile Number'),
    ...{ class: ('col-form-label') },
    required: (true),
}));
const __VLS_8 = __VLS_7({
    title: ('Enter Your Mobile Number'),
    ...{ class: ('col-form-label') },
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-4 col-sm-3" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Code'),
    modelValue: (__VLS_ctx.form.countryCode),
    options: (__VLS_ctx.countryCodes),
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Please select a valid country code.'),
}));
const __VLS_14 = __VLS_13({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Code'),
    modelValue: (__VLS_ctx.form.countryCode),
    options: (__VLS_ctx.countryCodes),
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Please select a valid country code.'),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-8 col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Mobile number is required.'),
    modelValue: (__VLS_ctx.form.contactNumber),
    inputId: ('mobile-number'),
}));
const __VLS_19 = __VLS_18({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Mobile number is required.'),
    modelValue: (__VLS_ctx.form.contactNumber),
    inputId: ('mobile-number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-end" },
});
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary btn-block m-t-10" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
/** @type {__VLS_StyleScopedClasses['m-t-10']} */ ;
// @ts-ignore
[form, form, countryCodes, formSubmitted, formSubmitted,];
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-4 mb-4" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "reset-password-link" },
});
/** @type {__VLS_StyleScopedClasses['reset-password-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleOTP();
            // @ts-ignore
            [handleOTP,];
        } },
    ...{ class: "btn btn-link text-danger" },
    disabled: (!__VLS_ctx.resendEnabled),
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-danger']} */ ;
if (!__VLS_ctx.resendEnabled && __VLS_ctx.timer < 30) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-muted" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
    (__VLS_ctx.timer);
}
if (__VLS_ctx.otpSent) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-group" },
    });
    /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "col-form-label pt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    for (const [digit, index] of __VLS_vFor((__VLS_ctx.otpDigits))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['col']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ onInput: (...[$event]) => {
                    if (!(__VLS_ctx.otpSent))
                        return;
                    __VLS_ctx.handleInput(index);
                    // @ts-ignore
                    [resendEnabled, resendEnabled, timer, timer, otpSent, otpDigits, handleInput,];
                } },
            ...{ onKeydown: (...[$event]) => {
                    if (!(__VLS_ctx.otpSent))
                        return;
                    __VLS_ctx.handleKeyDown(index, $event);
                    // @ts-ignore
                    [handleKeyDown,];
                } },
            type: "text",
            ...{ class: "form-control text-center opt-text" },
            maxlength: "1",
            value: (__VLS_ctx.otpDigits[index]),
            ref: "inputs",
        });
        /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['opt-text']} */ ;
        // @ts-ignore
        [otpDigits,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.otpSent))
                    return;
                __VLS_ctx.verifyOTP();
                // @ts-ignore
                [verifyOTP,];
            } },
        ...{ class: "btn btn-primary btn-block w-100 mt-3" },
        type: "button",
        ...{ class: ({ disabled: __VLS_ctx.showLoader }) },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
    if (__VLS_ctx.showLoader) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-spinner fa-spin-pulse" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-spinner']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-spin-pulse']} */ ;
    }
}
// @ts-ignore
[showLoader, showLoader,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
