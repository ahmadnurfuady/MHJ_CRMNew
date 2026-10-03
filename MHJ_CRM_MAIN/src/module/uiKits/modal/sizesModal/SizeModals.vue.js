import { ref, defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SizeModal = defineAsyncComponent(() => import('@/module/uiKits/modal/sizesModal/SizeModal.vue'));
let modalDetails = {
    title: '',
    sizeClass: '',
};
const isModalOpen = ref(false);
function openModal(value) {
    isModalOpen.value = true;
    if (value == 'fullScreen') {
        modalDetails = { title: 'Full Screen Modal', sizeClass: 'modal-fullscreen' };
    }
    else if (value == 'extraLarge') {
        modalDetails = { title: 'Extra Large Modal', sizeClass: 'modal-xl' };
    }
    else if (value == 'large') {
        modalDetails = { title: 'Large Modal', sizeClass: 'modal-lg' };
    }
    else if (value == 'small') {
        modalDetails = { title: 'Small Modal', sizeClass: 'modal-sm' };
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Sizes Modal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Sizes Modal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1 f-m-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('fullScreen'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-secondary" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('extraLarge'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-info" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-info']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('large'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-success" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('small'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.SizeModal} */
SizeModal;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isModalOpen),
    modalDetails: (__VLS_ctx.modalDetails),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isModalOpen),
    modalDetails: (__VLS_ctx.modalDetails),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
const __VLS_14 = {
    /** @type {typeof __VLS_13.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.isModalOpen = false);
        // @ts-ignore
        [isModalOpen, isModalOpen, modalDetails,];
    },
};
var __VLS_11;
var __VLS_12;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
