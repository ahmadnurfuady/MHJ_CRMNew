import { ref, reactive, defineAsyncComponent } from 'vue';
import { initInputField } from '@/core/data/common';
import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const showPassword = ref({
    password: false,
    confirmPassword: false,
});
const form = reactive({
    password: initInputField(),
    confirmPassword: initInputField(),
});
function togglePassword(key) {
    showPassword.value[key] = !showPassword.value[key];
}
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
    title: ('New Password'),
    ...{ class: ('col-form-label') },
}));
const __VLS_8 = __VLS_7({
    title: ('New Password'),
    ...{ class: ('col-form-label') },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-input position-relative" },
});
/** @type {__VLS_StyleScopedClasses['form-input']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.InputField | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword['password'] ? 'text' : 'password'),
    required: (false),
    modelValue: (__VLS_ctx.form.password),
}));
const __VLS_14 = __VLS_13({
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword['password'] ? 'text' : 'password'),
    required: (false),
    modelValue: (__VLS_ctx.form.password),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.togglePassword('password');
            // @ts-ignore
            [showPassword, form, togglePassword,];
        } },
    ...{ class: "show-hide" },
});
/** @type {__VLS_StyleScopedClasses['show-hide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: ({ show: !__VLS_ctx.showPassword['password'] }) },
});
/** @type {__VLS_StyleScopedClasses['show']} */ ;
// @ts-ignore
[showPassword,];
var __VLS_15;
// @ts-ignore
[];
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    title: ('Retype Password'),
    ...{ class: ('col-form-label') },
}));
const __VLS_20 = __VLS_19({
    title: ('Retype Password'),
    ...{ class: ('col-form-label') },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.InputField | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword['confirmPassword'] ? 'text' : 'password'),
    required: (false),
    modelValue: (__VLS_ctx.form.confirmPassword),
}));
const __VLS_26 = __VLS_25({
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword['confirmPassword'] ? 'text' : 'password'),
    required: (false),
    modelValue: (__VLS_ctx.form.confirmPassword),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const { default: __VLS_29 } = __VLS_27.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.togglePassword('confirmPassword');
            // @ts-ignore
            [showPassword, form, togglePassword,];
        } },
    ...{ class: "show-hide" },
});
/** @type {__VLS_StyleScopedClasses['show-hide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: ({ show: !__VLS_ctx.showPassword['confirmPassword'] }) },
});
/** @type {__VLS_StyleScopedClasses['show']} */ ;
// @ts-ignore
[showPassword,];
var __VLS_27;
// @ts-ignore
[];
var __VLS_21;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group mb-0" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "checkbox-primary form-check-input" },
    id: "checkbox1",
    type: "checkbox",
});
/** @type {__VLS_StyleScopedClasses['checkbox-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "text-muted form-check-label" },
    for: "checkbox1",
});
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary btn-block w-100 mt-3" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-4 mb-0 text-center" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    ...{ class: "ms-2" },
    to: (__VLS_ctx.routes.Auth.LoginSimple),
}));
const __VLS_32 = __VLS_31({
    ...{ class: "ms-2" },
    to: (__VLS_ctx.routes.Auth.LoginSimple),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
const { default: __VLS_35 } = __VLS_33.slots;
// @ts-ignore
[routes,];
var __VLS_33;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
