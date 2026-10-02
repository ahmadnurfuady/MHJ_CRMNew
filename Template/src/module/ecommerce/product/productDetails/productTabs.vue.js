import { productTabs } from '@/core/data/ecommerce';
import { defineAsyncComponent, ref } from 'vue';
const Description = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/Description.vue'));
const AdditionalInfo = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/AdditionalInfo.vue'));
const WriteReview = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/WriteReview.vue'));
const activeTab = ref('top-home');
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row product-page-main" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['product-page-main']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-tabs border-tab nav-primary mb-0" },
    id: "top-tab",
    role: "tablist",
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
for (const [tab] of __VLS_vFor((__VLS_ctx.productTabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
        key: (tab.productId),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "nav-link" },
        ...{ class: ({ active: tab.active }) },
        id: (`${tab.productId}-tab`),
        'data-bs-toggle': "tab",
        href: (tab.target),
        role: "tab",
        'aria-controls': (tab.productId),
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (tab.label);
    // @ts-ignore
    [productTabs,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "top-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade" },
    ...{ class: ({ 'show active': __VLS_ctx.activeTab === 'top-home' }) },
    id: "top-home",
    role: "tabpanel",
    'aria-labelledby': "top-home-tab",
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Description} */
Description;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade" },
    ...{ class: ({ 'show active': __VLS_ctx.activeTab === 'contact-top' }) },
    id: "top-contact",
    role: "tabpanel",
    'aria-labelledby': "contact-top-tab",
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.AdditionalInfo} */
AdditionalInfo;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade" },
    ...{ class: ({ 'show active': __VLS_ctx.activeTab === 'brand-top' }) },
    id: "top-brand",
    role: "tabpanel",
    'aria-labelledby': "brand-top-tab",
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.WriteReview} */
WriteReview;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[activeTab, activeTab, activeTab,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
