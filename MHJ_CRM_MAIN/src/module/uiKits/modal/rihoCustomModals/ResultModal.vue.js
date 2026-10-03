import { defineAsyncComponent } from 'vue';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
function close() {
    emits('closeModal');
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
/** @ts-ignore @type { | typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.close());
        // @ts-ignore
        [close,];
    },
};
var __VLS_7;
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-content" },
});
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body social-profile text-start dark-sign-up" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['social-profile']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-sign-up']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-toggle-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['modal-toggle-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "f-light" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_9;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
    title: ('Email'),
}));
const __VLS_11 = __VLS_10({
    title: ('Email'),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
const { default: __VLS_14 } = __VLS_12.slots;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    inputId: ('email'),
    placeholder: ('Enter your email'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_17 = __VLS_16({
    inputId: ('email'),
    placeholder: ('Enter your email'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[];
var __VLS_12;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    title: ('Password'),
}));
const __VLS_22 = __VLS_21({
    title: ('Password'),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_25 } = __VLS_23.slots;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    inputId: ('password'),
    placeholder: ('Enter your password'),
    inputType: ('password'),
    required: (false),
}));
const __VLS_28 = __VLS_27({
    inputId: ('password'),
    placeholder: ('Enter your password'),
    inputType: ('password'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
// @ts-ignore
[];
var __VLS_23;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
let __VLS_31;
/** @ts-ignore @type { | typeof __VLS_components.Checkbox} */
Checkbox;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    label: ('Check me out'),
    inputId: ('basic-checkbox'),
    required: (false),
}));
const __VLS_33 = __VLS_32({
    label: ('Check me out'),
    inputId: ('basic-checkbox'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.close());
            // @ts-ignore
            [close,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
