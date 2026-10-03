import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useContact } from '@/store/contact';
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
function closeModal() {
    contactState.value.openCategoryModal = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Add Category'),
    modalOpen: (__VLS_ctx.contactState.openCategoryModal),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Add Category'),
    modalOpen: (__VLS_ctx.contactState.openCategoryModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [contactState, closeModal,];
        } });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "form-bookmark" },
});
/** @type {__VLS_StyleScopedClasses['form-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_9;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
    inputId: ('category-name'),
    placeholder: ('Enter category name'),
    required: (false),
}));
const __VLS_11 = __VLS_10({
    inputId: ('category-name'),
    placeholder: ('Enter category name'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary me-2" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [closeModal,];
        } },
    ...{ class: "btn button-light-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
