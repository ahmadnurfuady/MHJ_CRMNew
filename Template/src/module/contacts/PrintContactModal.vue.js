import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useContact } from '@/store/contact';
import { getImages } from '@/utils/index';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
function handlePrint() {
    window.print();
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
    title: ('Print Preview'),
    modalOpen: (__VLS_ctx.contactState.openPrintContactModal),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Print Preview'),
    modalOpen: (__VLS_ctx.contactState.openPrintContactModal),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.contactState.openPrintContactModal = false;
            // @ts-ignore
            [contactState, contactState,];
        } });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body list-persons" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['list-persons']} */ ;
if (__VLS_ctx.contactState.activeContact) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "profile-mail pt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['profile-mail']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-flex align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid rounded-circle" },
        src: (__VLS_ctx.getImages(__VLS_ctx.contactState.activeContact.profile)),
        alt: (__VLS_ctx.contactState.activeContact.firstName),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1 mt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        id: "first-name",
    });
    (__VLS_ctx.contactState.activeContact.firstName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        id: "last-name",
    });
    (__VLS_ctx.contactState.activeContact.lastName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        id: "email",
    });
    (__VLS_ctx.contactState.activeContact.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "email-general" },
    });
    /** @type {__VLS_StyleScopedClasses['email-general']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary" },
        id: "email",
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    (__VLS_ctx.contactState.activeContact.email);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.handlePrint) },
    ...{ class: "btn btn-primary" },
    id: "btnPrint",
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.contactState.openPrintContactModal = false;
            // @ts-ignore
            [contactState, contactState, contactState, contactState, contactState, contactState, contactState, contactState, getImages, handlePrint,];
        } },
    ...{ class: "btn button-light-primary ms-2" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
