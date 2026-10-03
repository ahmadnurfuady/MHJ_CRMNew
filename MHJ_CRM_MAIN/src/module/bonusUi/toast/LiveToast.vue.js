import { defineAsyncComponent, ref, onBeforeUnmount } from 'vue';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const toast = ref({
    topRight: false,
    bottomRight: false,
    topLeft: false,
    bottomLeft: false,
});
const toastTimers = {};
function showToast(value) {
    toast.value[value] = true;
    if (toastTimers[value]) {
        clearTimeout(toastTimers[value]);
    }
    toastTimers[value] = window.setTimeout(() => {
        toast.value[value] = false;
        delete toastTimers[value];
    }, 5000);
}
function closeToast(value) {
    toast.value[value] = false;
    if (toastTimers[value]) {
        clearTimeout(toastTimers[value]);
        delete toastTimers[value];
    }
}
onBeforeUnmount(() => {
    Object.values(toastTimers).forEach((timer) => {
        if (timer)
            clearTimeout(timer);
    });
});
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
    headerTitle: ('Live Toast'),
    border: (true),
    padding: (false),
    cardBodyClass: ('position-relative common-flex live-toast'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Live Toast'),
    border: (true),
    padding: (false),
    cardBodyClass: ('position-relative common-flex live-toast'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.showToast('topRight'));
            // @ts-ignore
            [showToast,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl" },
});
/** @type {__VLS_StyleScopedClasses['toast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['position-fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-index']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-rtl']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast toast fade" },
    ...{ class: ({ show: __VLS_ctx.toast['topRight'] }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-header toast-img" },
});
/** @type {__VLS_StyleScopedClasses['toast-header']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "rounded me-2" },
    src: (__VLS_ctx.getImages('dashboard/profile.png')),
    alt: "profile",
});
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "me-auto" },
});
/** @type {__VLS_StyleScopedClasses['me-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeToast('topRight'));
            // @ts-ignore
            [toast, getImages, closeToast,];
        } },
    ...{ class: "btn-close" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body toast-dark" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.showToast('bottomRight'));
            // @ts-ignore
            [showToast,];
        } },
    ...{ class: "btn btn-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl" },
});
/** @type {__VLS_StyleScopedClasses['toast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['position-fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-index']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-rtl']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast toast fade" },
    ...{ class: ({ show: __VLS_ctx.toast['bottomRight'] }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-content-between alert-secondary" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeToast('bottomRight'));
            // @ts-ignore
            [toast, closeToast,];
        } },
    ...{ class: "btn-close btn-close-white me-2 m-auto" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-close-white']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['m-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.showToast('topLeft'));
            // @ts-ignore
            [showToast,];
        } },
    ...{ class: "btn btn-warning" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl" },
});
/** @type {__VLS_StyleScopedClasses['toast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['position-fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['start-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-index']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-rtl']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast toast fade" },
    ...{ class: ({ show: __VLS_ctx.toast['topLeft'] }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-header toast-img" },
});
/** @type {__VLS_StyleScopedClasses['toast-header']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "rounded me-2" },
    src: (__VLS_ctx.getImages('dashboard/profile.png')),
    alt: "profile",
});
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "me-auto" },
});
/** @type {__VLS_StyleScopedClasses['me-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({
    ...{ class: "d-sm-block d-none" },
});
/** @type {__VLS_StyleScopedClasses['d-sm-block']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeToast('topLeft'));
            // @ts-ignore
            [toast, getImages, closeToast,];
        } },
    ...{ class: "btn-close" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body toast-dark" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "txt-success" },
});
/** @type {__VLS_StyleScopedClasses['txt-success']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.showToast('bottomLeft'));
            // @ts-ignore
            [showToast,];
        } },
    ...{ class: "btn btn-success" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl" },
});
/** @type {__VLS_StyleScopedClasses['toast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['position-fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['start-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-index']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-rtl']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast toast fade" },
    ...{ class: ({ show: __VLS_ctx.toast['bottomLeft'] }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-header toast-img" },
});
/** @type {__VLS_StyleScopedClasses['toast-header']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "rounded me-2" },
    src: (__VLS_ctx.getImages('dashboard/profile.png')),
    alt: "profile",
});
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "me-auto" },
});
/** @type {__VLS_StyleScopedClasses['me-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeToast('bottomLeft'));
            // @ts-ignore
            [toast, getImages, closeToast,];
        } },
    ...{ class: "btn-close" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body toast-dark" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-2 pt-2 border-top d-flex gap-2" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-top']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-dark btn-sm" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeToast('bottomLeft'));
            // @ts-ignore
            [closeToast,];
        } },
    ...{ class: "btn btn-danger btn-sm" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
