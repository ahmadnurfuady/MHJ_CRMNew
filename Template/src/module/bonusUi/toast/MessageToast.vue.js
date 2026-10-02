import { defineAsyncComponent, ref, onBeforeUnmount } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const toast = ref({
    success: false,
    warning: false,
    error: false,
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
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Message Toasts'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex common-toasts'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Message Toasts'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex common-toasts'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showToast('success');
            // @ts-ignore
            [showToast,];
        } },
    ...{ class: "btn btn-success" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
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
    ...{ class: "toast" },
    ...{ class: ({ show: __VLS_ctx.toast['success'] }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space alert-light-success" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-success']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    type: ('check-square'),
    ...{ class: ('close-search stroke-success') },
}));
const __VLS_9 = __VLS_8({
    type: ('check-square'),
    ...{ class: ('close-search stroke-success') },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['close-search']} */ ;
/** @type {__VLS_StyleScopedClasses['stroke-success']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeToast('success');
            // @ts-ignore
            [toast, closeToast,];
        } },
    ...{ class: "btn-close" },
    type: "button",
    'data-bs-dismiss': "toast",
    'aria-label': "Close",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showToast('warning');
            // @ts-ignore
            [showToast,];
        } },
    ...{ class: "btn btn-warning" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-container position-fixed top-50 end-0 p-3 toast-index toast-rtl" },
});
/** @type {__VLS_StyleScopedClasses['toast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['position-fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-50']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-index']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-rtl']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast" },
    ...{ class: ({ show: __VLS_ctx.toast['warning'] }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space alert-light-warning" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    type: ('alert-triangle'),
    ...{ class: ('close-search stroke-warning') },
}));
const __VLS_14 = __VLS_13({
    type: ('alert-triangle'),
    ...{ class: ('close-search stroke-warning') },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['close-search']} */ ;
/** @type {__VLS_StyleScopedClasses['stroke-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeToast('warning');
            // @ts-ignore
            [toast, closeToast,];
        } },
    ...{ class: "btn-close" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showToast('error');
            // @ts-ignore
            [showToast,];
        } },
    ...{ class: "btn btn-danger" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
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
    ...{ class: "toast" },
    ...{ class: ({ show: __VLS_ctx.toast['error'] }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space alert-light-danger" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    type: ('x-circle'),
    ...{ class: ('close-search stroke-danger') },
}));
const __VLS_19 = __VLS_18({
    type: ('x-circle'),
    ...{ class: ('close-search stroke-danger') },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['close-search']} */ ;
/** @type {__VLS_StyleScopedClasses['stroke-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeToast('error');
            // @ts-ignore
            [toast, closeToast,];
        } },
    ...{ class: "btn-close" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
