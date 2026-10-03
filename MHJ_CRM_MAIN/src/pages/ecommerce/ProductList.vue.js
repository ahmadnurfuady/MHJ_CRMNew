import { routes } from '@/router/routes';
import { defineAsyncComponent, ref } from 'vue';
const ProductFilter = defineAsyncComponent(() => import('@/module/ecommerce/common/ProductFilterBar.vue'));
const ProductListTable = defineAsyncComponent(() => import('@/module/ecommerce/product/productList/ProductListTable.vue'));
const filtered = ref(false);
function collapseFilter() {
    filtered.value = !filtered.value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid list-product-view product-wrapper" },
    ...{ class: ({ sidebaron: __VLS_ctx.filtered }) },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['list-product-view']} */ ;
/** @type {__VLS_StyleScopedClasses['product-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebaron']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['product-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "filter-section" },
});
/** @type {__VLS_StyleScopedClasses['filter-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header card-no-border" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.collapseFilter());
            // @ts-ignore
            [filtered, collapseFilter,];
        } },
    ...{ class: "mb-0 f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "pull-right" },
});
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-chevron-down toggle-data" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-chevron-down']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-data']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.ProductFilter} */
ProductFilter;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header card-no-border text-end" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header-right-icon" },
});
/** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ class: "btn btn-primary f-w-500" },
    to: (__VLS_ctx.routes.Ecommerce.Products.AddProduct),
}));
const __VLS_7 = __VLS_6({
    ...{ class: "btn btn-primary f-w-500" },
    to: (__VLS_ctx.routes.Ecommerce.Products.AddProduct),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
const { default: __VLS_10 } = __VLS_8.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus pe-2" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-2']} */ ;
// @ts-ignore
[routes,];
var __VLS_8;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body px-0 pt-0" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-product" },
});
/** @type {__VLS_StyleScopedClasses['list-product']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scrollbar product-list-table" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['product-list-table']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.ProductListTable} */
ProductListTable;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
