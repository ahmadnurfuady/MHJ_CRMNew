import { ref, onMounted, defineAsyncComponent, onBeforeUnmount } from 'vue';
import { stackingToast } from '@/core/data/bonusUI/toast';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const toasts = ref(stackingToast);
const toastTimers = {};
onMounted(() => {
    toasts.value.forEach((toast) => {
        if (!toast.show)
            return;
        toastTimers[toast.id] = window.setTimeout(() => {
            toast.show = false;
            delete toastTimers[toast.id];
        }, toast.timeOut);
    });
});
function closeToast(id) {
    const toast = toasts.value.find((t) => t.id === id);
    if (!toast)
        return;
    toast.show = false;
    if (toastTimers[id]) {
        clearTimeout(toastTimers[id]);
        delete toastTimers[id];
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
    headerTitle: ('Stacking Toasts'),
    border: (true),
    padding: (false),
    cardBodyClass: ('toast-rtl'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Stacking Toasts'),
    border: (true),
    padding: (false),
    cardBodyClass: ('toast-rtl'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-container position-static stacking-toast" },
});
/** @type {__VLS_StyleScopedClasses['toast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['position-static']} */ ;
/** @type {__VLS_StyleScopedClasses['stacking-toast']} */ ;
for (const [toast] of __VLS_vFor((__VLS_ctx.toasts))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (toast.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "toast" },
        ...{ class: (toast.show ? 'show' : 'hide') },
    });
    /** @type {__VLS_StyleScopedClasses['toast']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "toast-header" },
    });
    /** @type {__VLS_StyleScopedClasses['toast-header']} */ ;
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
    vueFeather;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        type: (toast.icon),
        ...{ class: ('toast-icons toast-' + toast.iconColor) },
    }));
    const __VLS_10 = __VLS_9({
        type: (toast.icon),
        ...{ class: ('toast-icons toast-' + toast.iconColor) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
        ...{ class: "me-auto" },
    });
    /** @type {__VLS_StyleScopedClasses['me-auto']} */ ;
    (toast.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({
        ...{ class: (toast.time == 'just now' ? 'txt-danger' : 'txt-secondary') },
    });
    (toast.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.closeToast(toast.id));
                // @ts-ignore
                [toasts, closeToast,];
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
    (toast.description);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
