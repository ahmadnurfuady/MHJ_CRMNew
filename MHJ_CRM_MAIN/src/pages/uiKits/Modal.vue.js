import { defineAsyncComponent } from 'vue';
import { modals } from '@/core/data/uiKits/modal';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const BasicModals = defineAsyncComponent(() => import('@/module/uiKits/modal/basicModals/BasicModals.vue'));
const SizesModals = defineAsyncComponent(() => import('@/module/uiKits/modal/sizesModal/SizeModals.vue'));
const FullscreenModals = defineAsyncComponent(() => import('@/module/uiKits/modal/FullscreenModals.vue'));
const CenteredModal = defineAsyncComponent(() => import('@/module/uiKits/modal/CenteredModal.vue'));
const ConnectAccountModal = defineAsyncComponent(() => import('@/module/uiKits/modal/ConnectAccountModal.vue'));
const StaticBackdropModal = defineAsyncComponent(() => import('@/module/uiKits/modal/StaticBackdropModal.vue'));
const GridModal = defineAsyncComponent(() => import('@/module/uiKits/modal/GridModal.vue'));
const ScrollingLongModal = defineAsyncComponent(() => import('@/module/uiKits/modal/ScrollingLongModal.vue'));
const CustomModals = defineAsyncComponent(() => import('@/module/uiKits/modal/rihoCustomModals/CustomModals.vue'));
function openModal(value) {
    modals[value] = true;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.BasicModals} */
BasicModals;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.SizesModals} */
SizesModals;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.FullscreenModals} */
FullscreenModals;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    headerTitle: ('Centered Modal'),
    border: (true),
    padding: (false),
}));
const __VLS_17 = __VLS_16({
    headerTitle: ('Centered Modal'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const { default: __VLS_20 } = __VLS_18.slots;
{
    const { header5: __VLS_21 } = __VLS_18.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('centeredModal'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-success" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
// @ts-ignore
[];
var __VLS_18;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    headerTitle: ('Toggle Between Modal'),
    border: (true),
    padding: (false),
}));
const __VLS_24 = __VLS_23({
    headerTitle: ('Toggle Between Modal'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
{
    const { header5: __VLS_28 } = __VLS_25.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('connectAccountModal'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-dark" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-dark']} */ ;
// @ts-ignore
[];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    headerTitle: ('Static Backdrop Modal'),
    border: (true),
    padding: (false),
}));
const __VLS_31 = __VLS_30({
    headerTitle: ('Static Backdrop Modal'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const { default: __VLS_34 } = __VLS_32.slots;
{
    const { header5: __VLS_35 } = __VLS_32.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('staticBackdrop'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-warning" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-warning']} */ ;
// @ts-ignore
[];
var __VLS_32;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_36;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    cardClass: ('height-equal'),
    headerTitle: ('Grid Modal'),
    border: (true),
    padding: (false),
}));
const __VLS_38 = __VLS_37({
    cardClass: ('height-equal'),
    headerTitle: ('Grid Modal'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const { default: __VLS_41 } = __VLS_39.slots;
{
    const { header5: __VLS_42 } = __VLS_39.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('gridModal'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-warning" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-warning']} */ ;
// @ts-ignore
[];
var __VLS_39;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_43;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    cardClass: ('height-equal'),
    headerTitle: ('Scrolling Long Content Modal'),
    border: (true),
    padding: (false),
}));
const __VLS_45 = __VLS_44({
    cardClass: ('height-equal'),
    headerTitle: ('Scrolling Long Content Modal'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const { default: __VLS_48 } = __VLS_46.slots;
{
    const { header5: __VLS_49 } = __VLS_46.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal('scrollingContentModal'));
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
// @ts-ignore
[];
var __VLS_46;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_50;
/** @ts-ignore @type { | typeof __VLS_components.CustomModals} */
CustomModals;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({}));
const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
let __VLS_55;
/** @ts-ignore @type { | typeof __VLS_components.CenteredModal} */
CenteredModal;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.centeredModal),
}));
const __VLS_57 = __VLS_56({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.centeredModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
let __VLS_60;
const __VLS_61 = {
    /** @type {typeof __VLS_60.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('centeredModal'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_58;
var __VLS_59;
let __VLS_62;
/** @ts-ignore @type { | typeof __VLS_components.ConnectAccountModal} */
ConnectAccountModal;
// @ts-ignore
const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.connectAccountModal),
}));
const __VLS_64 = __VLS_63({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.connectAccountModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
let __VLS_67;
const __VLS_68 = {
    /** @type {typeof __VLS_67.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('connectAccountModal'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_65;
var __VLS_66;
let __VLS_69;
/** @ts-ignore @type { | typeof __VLS_components.StaticBackdropModal} */
StaticBackdropModal;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.staticBackdrop),
}));
const __VLS_71 = __VLS_70({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.staticBackdrop),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
let __VLS_74;
const __VLS_75 = {
    /** @type {typeof __VLS_74.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('staticBackdrop'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_72;
var __VLS_73;
let __VLS_76;
/** @ts-ignore @type { | typeof __VLS_components.GridModal} */
GridModal;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.gridModal),
}));
const __VLS_78 = __VLS_77({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.gridModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
let __VLS_81;
const __VLS_82 = {
    /** @type {typeof __VLS_81.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('gridModal'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_79;
var __VLS_80;
let __VLS_83;
/** @ts-ignore @type { | typeof __VLS_components.ScrollingLongModal} */
ScrollingLongModal;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.scrollingContentModal),
}));
const __VLS_85 = __VLS_84({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.scrollingContentModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
let __VLS_88;
const __VLS_89 = {
    /** @type {typeof __VLS_88.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal('scrollingContentModal'));
        // @ts-ignore
        [modals, closeModal,];
    },
};
var __VLS_86;
var __VLS_87;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
