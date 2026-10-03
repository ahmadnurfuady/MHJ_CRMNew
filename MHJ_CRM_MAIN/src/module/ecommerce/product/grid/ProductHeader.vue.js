import { ref, defineAsyncComponent } from 'vue';
import { useProduct } from '@/store/product';
import { routes } from '@/router/routes';
import { storeToRefs } from 'pinia';
const ShowingProduct = defineAsyncComponent(() => import('@/module/ecommerce/product/grid/ShowingProduct.vue'));
const ProductFilterBar = defineAsyncComponent(() => import('@/module/ecommerce/common/ProductFilterBar.vue'));
const ProductDetail = defineAsyncComponent(() => import('@/module/ecommerce/product/grid/ProductDetail.vue'));
const ProductSearch = defineAsyncComponent(() => import('@/module/ecommerce/product/grid/ProductSearch.vue'));
const filtered = ref(false);
const store = useProduct();
const { productState } = storeToRefs(store);
const { setTags, grid2, grid3, grid4, grid6, listView, gridView } = store;
const allFilters = ref([]);
function allFilter(selectedVal) {
    const products = selectedVal;
    allFilters.value = products;
    setTags(products);
}
function collapseFilter() {
    filtered.value = !filtered.value;
}
const updateSearchTerm = (newSearchTerm) => {
    productState.value.searchTerm = newSearchTerm;
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_ctx.filtered ? 'container-fluid product-wrapper sidebaron' : 'container-fluid product-wrapper') },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-grid" },
});
/** @type {__VLS_StyleScopedClasses['product-grid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "feature-products" },
});
/** @type {__VLS_StyleScopedClasses['feature-products']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-f-start justify-content-md-end mb-3" },
});
/** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-md-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: (__VLS_ctx.routes.Ecommerce.Products.AddProduct),
    ...{ class: "btn btn-primary f-w-500" },
}));
const __VLS_2 = __VLS_1({
    to: (__VLS_ctx.routes.Ecommerce.Products.AddProduct),
    ...{ class: "btn btn-primary f-w-500" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-plus pe-2" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-2']} */ ;
// @ts-ignore
[filtered, routes,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6 products-total" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['products-total']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "square-product-setting d-inline-block" },
});
/** @type {__VLS_StyleScopedClasses['square-product-setting']} */ ;
/** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.gridView());
            // @ts-ignore
            [gridView,];
        } },
    ...{ class: "icon-grid grid-layout-view" },
});
/** @type {__VLS_StyleScopedClasses['icon-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-layout-view']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    type: "grid",
}));
const __VLS_8 = __VLS_7({
    type: "grid",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "square-product-setting d-inline-block" },
});
/** @type {__VLS_StyleScopedClasses['square-product-setting']} */ ;
/** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.listView());
            // @ts-ignore
            [listView,];
        } },
    ...{ class: "icon-grid m-0 list-layout-view" },
});
/** @type {__VLS_StyleScopedClasses['icon-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
/** @type {__VLS_StyleScopedClasses['list-layout-view']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    type: "list",
}));
const __VLS_13 = __VLS_12({
    type: "list",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.collapseFilter());
            // @ts-ignore
            [collapseFilter,];
        } },
    ...{ class: "d-none-productlist filter-toggle" },
});
/** @type {__VLS_StyleScopedClasses['d-none-productlist']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "ms-2" },
});
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
let __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    ...{ class: "toggle-data" },
    type: "chevron-down",
}));
const __VLS_18 = __VLS_17({
    ...{ class: "toggle-data" },
    type: "chevron-down",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
/** @type {__VLS_StyleScopedClasses['toggle-data']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid-options d-inline-block" },
});
/** @type {__VLS_StyleScopedClasses['grid-options']} */ ;
/** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.grid2(true));
            // @ts-ignore
            [grid2,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "product-2-layout-view" },
});
/** @type {__VLS_StyleScopedClasses['product-2-layout-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-1 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-1']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-2 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.grid3());
            // @ts-ignore
            [grid3,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "product-3-layout-view" },
});
/** @type {__VLS_StyleScopedClasses['product-3-layout-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-3 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-4 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-5 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.grid4());
            // @ts-ignore
            [grid4,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "product-4-layout-view" },
});
/** @type {__VLS_StyleScopedClasses['product-4-layout-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-6 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-7 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-7']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-8 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-9 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-9']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.grid6());
            // @ts-ignore
            [grid6,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "product-6-layout-view" },
});
/** @type {__VLS_StyleScopedClasses['product-6-layout-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-10 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-10']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-11 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-11']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-12 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-12']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-13 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-13']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-14 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-14']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "line-grid line-grid-15 bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['line-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['line-grid-15']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
let __VLS_21;
/** @ts-ignore @type { | typeof __VLS_components.ShowingProduct} */
ShowingProduct;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-3" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-sidebar" },
    ...{ class: (__VLS_ctx.filtered ? 'open' : '') },
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
    ...{ class: "card-header" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "mb-0 f-w-700" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-700']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.collapseFilter());
            // @ts-ignore
            [filtered, collapseFilter,];
        } },
    ...{ class: "pull-right" },
});
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-chevron-down toggle-data" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-chevron-down']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-data']} */ ;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.ProductFilterBar} */
ProductFilterBar;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    ...{ 'onAllFilters': {} },
}));
const __VLS_28 = __VLS_27({
    ...{ 'onAllFilters': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
let __VLS_31;
const __VLS_32 = {
    /** @type {typeof __VLS_31.allFilters} */
    onAllFilters: (__VLS_ctx.allFilter),
};
var __VLS_29;
var __VLS_30;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9 col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_33;
/** @ts-ignore @type { | typeof __VLS_components.ProductSearch} */
ProductSearch;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    ...{ 'onUpdateSearch': {} },
}));
const __VLS_35 = __VLS_34({
    ...{ 'onUpdateSearch': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
let __VLS_38;
const __VLS_39 = {
    /** @type {typeof __VLS_38.updateSearch} */
    onUpdateSearch: (__VLS_ctx.updateSearchTerm),
};
var __VLS_36;
var __VLS_37;
let __VLS_40;
/** @ts-ignore @type { | typeof __VLS_components.ProductDetail} */
ProductDetail;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
    searchTerm: (__VLS_ctx.productState.searchTerm),
}));
const __VLS_42 = __VLS_41({
    searchTerm: (__VLS_ctx.productState.searchTerm),
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
// @ts-ignore
[allFilter, updateSearchTerm, productState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
