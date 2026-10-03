import { ref, defineAsyncComponent } from 'vue';
import { paymentTabs } from '@/core/data/setting';
const Paypal = defineAsyncComponent(() => import('@/module/ecommerce/settings/payment-method/Paypal.vue'));
const Razorpay = defineAsyncComponent(() => import('@/module/ecommerce/settings/payment-method/Razorpay.vue'));
const Mollie = defineAsyncComponent(() => import('@/module/ecommerce/settings/payment-method/Mollie.vue'));
const COD = defineAsyncComponent(() => import('@/module/ecommerce/settings/payment-method/COD.vue'));
const Stripe = defineAsyncComponent(() => import('@/module/ecommerce/settings/payment-method/Stripe.vue'));
const settingTabs = paymentTabs;
const activeTab = ref('paypal');
function handleTab(value) {
    activeTab.value = value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "advance-options" },
});
/** @type {__VLS_StyleScopedClasses['advance-options']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-tabs border-tab" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.settingTabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.handleTab(tab.value));
                // @ts-ignore
                [settingTabs, handleTab,];
            } },
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.activeTab === tab.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (tab.title);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.activeTab === 'paypal') {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Paypal} */
    Paypal;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
if (__VLS_ctx.activeTab === 'razorpay') {
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.Razorpay} */
    Razorpay;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
if (__VLS_ctx.activeTab === 'mollie') {
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.Mollie} */
    Mollie;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
if (__VLS_ctx.activeTab === 'cod') {
    let __VLS_15;
    /** @ts-ignore @type { | typeof __VLS_components.COD} */
    COD;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
}
if (__VLS_ctx.activeTab === 'stripe') {
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.Stripe} */
    Stripe;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
}
// @ts-ignore
[activeTab, activeTab, activeTab, activeTab, activeTab,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
