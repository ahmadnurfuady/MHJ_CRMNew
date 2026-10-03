import { ref, defineAsyncComponent } from 'vue';
import { modals } from '@/core/data/uiKits/modal';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const CustomModalCard = defineAsyncComponent(() => import('@/module/uiKits/modal/rihoCustomModals/CustomModalCard.vue'));
const ProfileModal = defineAsyncComponent(() => import('@/module/uiKits/modal/rihoCustomModals/ProfileModal.vue'));
const ResultModal = defineAsyncComponent(() => import('@/module/uiKits/modal/rihoCustomModals/ResultModal.vue'));
const BalanceModal = defineAsyncComponent(() => import('@/module/uiKits/modal/rihoCustomModals/BalanceModal.vue'));
const dialog1Title = ref('<span>Dialog 1 -</span>Profile Dialog');
const dialog1Description = ref('Example of riho dashboard profile card.');
const dialog2Title = ref('<span>Dialog 2 -</span>Result Dialog');
const dialog2Description = ref('Example of riho login-form.');
const dialog3Title = ref('<span>Dialog 3 -</span>Balance Dialog');
const dialog3Description = ref('Example of riho dashboard balance card.');
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Riho Custom Modals'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Riho Custom Modals'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { header5: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-md-6 custom-alert text-center" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-alert']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.CustomModalCard | typeof __VLS_components.CustomModalCard} */
CustomModalCard;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    title: (__VLS_ctx.dialog1Title),
    description: (__VLS_ctx.dialog1Description),
}));
const __VLS_9 = __VLS_8({
    title: (__VLS_ctx.dialog1Title),
    description: (__VLS_ctx.dialog1Description),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openModal('profileModal');
            // @ts-ignore
            [dialog1Title, dialog1Description, openModal,];
        } },
    ...{ class: "btn btn-primary mx-auto mt-3" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
// @ts-ignore
[];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-md-6 custom-alert text-center" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-alert']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.CustomModalCard | typeof __VLS_components.CustomModalCard} */
CustomModalCard;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    title: (__VLS_ctx.dialog2Title),
    description: (__VLS_ctx.dialog2Description),
}));
const __VLS_15 = __VLS_14({
    title: (__VLS_ctx.dialog2Title),
    description: (__VLS_ctx.dialog2Description),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openModal('resultModal');
            // @ts-ignore
            [openModal, dialog2Title, dialog2Description,];
        } },
    ...{ class: "btn btn-primary mx-auto mt-3" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
// @ts-ignore
[];
var __VLS_16;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-md-12 custom-alert text-center" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-alert']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.CustomModalCard | typeof __VLS_components.CustomModalCard} */
CustomModalCard;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: (__VLS_ctx.dialog3Title),
    description: (__VLS_ctx.dialog3Description),
}));
const __VLS_21 = __VLS_20({
    title: (__VLS_ctx.dialog3Title),
    description: (__VLS_ctx.dialog3Description),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openModal('balanceModal');
            // @ts-ignore
            [openModal, dialog3Title, dialog3Description,];
        } },
    ...{ class: "btn btn-primary mx-auto mt-3" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
// @ts-ignore
[];
var __VLS_22;
// @ts-ignore
[];
var __VLS_3;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.ProfileModal} */
ProfileModal;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.profileModal),
}));
const __VLS_27 = __VLS_26({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.profileModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_30;
const __VLS_31 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal('profileModal');
            // @ts-ignore
            [modals, closeModal,];
        } });
var __VLS_28;
var __VLS_29;
let __VLS_32;
/** @ts-ignore @type {typeof __VLS_components.ResultModal} */
ResultModal;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.resultModal),
}));
const __VLS_34 = __VLS_33({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.resultModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_37;
const __VLS_38 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal('resultModal');
            // @ts-ignore
            [modals, closeModal,];
        } });
var __VLS_35;
var __VLS_36;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.BalanceModal} */
BalanceModal;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.balanceModal),
}));
const __VLS_41 = __VLS_40({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modals.balanceModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
let __VLS_44;
const __VLS_45 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal('balanceModal');
            // @ts-ignore
            [modals, closeModal,];
        } });
var __VLS_42;
var __VLS_43;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
