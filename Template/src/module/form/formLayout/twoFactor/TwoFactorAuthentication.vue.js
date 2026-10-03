import { defineAsyncComponent, ref } from 'vue';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const TwoFactorAuthenticationModal = defineAsyncComponent(() => import('@/module/form/formLayout/twoFactor/TwoFactorAuthenticationModal.vue'));
const authenticationModalOpen = ref(false);
function openModal() {
    authenticationModalOpen.value = true;
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
    cardBodyClass: ('authentication-body'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('authentication-body'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "authentication-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['authentication-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.getImages('forms/qr-scan.png')),
    alt: "qr-scan",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openModal();
            // @ts-ignore
            [getImages, openModal,];
        } },
    ...{ class: "btn btn-primary mt-5" },
    href: "#",
    role: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
// @ts-ignore
[];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.TwoFactorAuthenticationModal} */
TwoFactorAuthenticationModal;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.authenticationModalOpen),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.authenticationModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.authenticationModalOpen = false;
            // @ts-ignore
            [authenticationModalOpen, authenticationModalOpen,];
        } });
var __VLS_9;
var __VLS_10;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
