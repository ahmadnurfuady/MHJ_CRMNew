import { defineAsyncComponent } from 'vue';
const ProductSwiper = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/ProductSwiper.vue'));
const ProductDetails = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/ProductDetails.vue'));
const FilterBlock = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/FilterBlock.vue'));
const productTabs = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/productTabs.vue'));
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row product-page-main p-0" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['product-page-main']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.ProductSwiper} */
ProductSwiper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.ProductDetails} */
ProductDetails;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.FilterBlock} */
FilterBlock;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.productTabs | typeof __VLS_components.ProductTabs} */
productTabs;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
