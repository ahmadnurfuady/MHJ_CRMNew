import { defineAsyncComponent } from 'vue';
import { modals } from '@/core/data/uiKits/modal';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const RihoModal = defineAsyncComponent(() => import('@/module/uiKits/modal/basicModals/RihoModal.vue'));
const SimpleModal = defineAsyncComponent(() => import('@/module/uiKits/modal/basicModals/SimpleModal.vue'));
const ScrollingContentModal = defineAsyncComponent(() => import('@/module/uiKits/modal/basicModals/ScrollingContentModal.vue'));
const TooltipPopoverModal = defineAsyncComponent(() => import('@/module/uiKits/modal/basicModals/TooltipPopoverModal.vue'));
function openModal(type) {
    modals[type] = true;
}
function closeModal(type) {
    modals[type] = false;
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
    headerTitle: ('Basic Modals'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Basic Modals'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('simpleModalOpen'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('scrollingModalOpen'));
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
            return (__VLS_ctx.openModal('tooltipModalOpen'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-info" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-info']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('rihoModalOpen'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.SimpleModal} */
SimpleModal;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.simpleModalOpen),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.simpleModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
const __VLS_14 = {
    /** @type {typeof __VLS_13.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('simpleModalOpen'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_11;
var __VLS_12;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.ScrollingContentModal} */
ScrollingContentModal;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.scrollingModalOpen),
}));
const __VLS_17 = __VLS_16({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.scrollingModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_20;
const __VLS_21 = {
    /** @type {typeof __VLS_20.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('scrollingModalOpen'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_18;
var __VLS_19;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.TooltipPopoverModal} */
TooltipPopoverModal;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.tooltipModalOpen),
}));
const __VLS_24 = __VLS_23({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.tooltipModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
let __VLS_27;
const __VLS_28 = {
    /** @type {typeof __VLS_27.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('tooltipModalOpen'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_25;
var __VLS_26;
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.RihoModal} */
RihoModal;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.rihoModalOpen),
}));
const __VLS_31 = __VLS_30({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.rihoModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
let __VLS_34;
const __VLS_35 = {
    /** @type {typeof __VLS_34.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('rihoModalOpen'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_32;
var __VLS_33;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
