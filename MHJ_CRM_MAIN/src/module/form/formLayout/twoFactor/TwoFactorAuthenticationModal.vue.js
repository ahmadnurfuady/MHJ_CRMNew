import { ref, defineAsyncComponent } from 'vue';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const QRCodeModal = defineAsyncComponent(() => import('@/module/form/formLayout/twoFactor/QRCodeModal.vue'));
const props = defineProps();
const emit = defineEmits(['closeModal']);
const qrCodeModalOpen = ref(false);
function closeModal() {
    emit('closeModal');
}
function next() {
    closeModal();
    qrCodeModalOpen.value = true;
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
    title: ('Two-factor Authentication'),
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Two-factor Authentication'),
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal());
        // @ts-ignore
        [closeModal,];
    },
};
const { default: __VLS_7 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-toggle-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['modal-toggle-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "authentication-options" },
});
/** @type {__VLS_StyleScopedClasses['authentication-options']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check radio radio-primary ps-0" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['radio']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "radio-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['radio-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "radioOptionWizard1",
    type: "radio",
    name: "radio2",
    value: "option2",
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label mb-0" },
    for: "radioOptionWizard1",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-gear fa-spin" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-gear']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-spin']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "d-flex flex-column" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "radioOptionWizard2",
    type: "radio",
    name: "radio2",
    value: "option2",
    checked: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label mb-0" },
    for: "radioOptionWizard2",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-comments" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-comments']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "d-flex flex-column" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.next());
            // @ts-ignore
            [next,];
        } },
    ...{ class: "btn btn-dark rounded-pill w-100 mt-3" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeModal());
            // @ts-ignore
            [closeModal,];
        } },
    ...{ class: "btn rounded-pill w-100 pb-0 dark-toggle-btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-toggle-btn']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.QRCodeModal} */
QRCodeModal;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.qrCodeModalOpen),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.qrCodeModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
const __VLS_14 = {
    /** @type {typeof __VLS_13.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.qrCodeModalOpen = false);
        // @ts-ignore
        [qrCodeModalOpen, qrCodeModalOpen,];
    },
};
var __VLS_11;
var __VLS_12;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
