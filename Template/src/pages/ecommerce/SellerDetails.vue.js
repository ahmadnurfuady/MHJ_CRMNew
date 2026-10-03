import { ref, onMounted, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { storeGeneralDetails, stores } from '@/core/data/seller';
import { routes } from '@/router/routes';
const StoreGeneralDetails = defineAsyncComponent(() => import('@/module/ecommerce/seller/StoreGeneralDetails.vue'));
const SalesOverview = defineAsyncComponent(() => import('@/module/ecommerce/seller/SalesOverview.vue'));
const TopSellingProduct = defineAsyncComponent(() => import('@/module/ecommerce/seller/TopSellingProduct.vue'));
const SellerRecentOrder = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerRecentOrder.vue'));
const ProductListTable = defineAsyncComponent(() => import('@/module/ecommerce/product/productList/ProductListTable.vue'));
const SellerDetailsSidebar = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerDetailsSidebar.vue'));
const router = useRouter();
const storeId = router.currentRoute.value.params.id;
const currentStore = ref();
onMounted(() => {
    if (storeId) {
        stores.find((store) => {
            if (store.id === Number(storeId)) {
                currentStore.value = store;
            }
        });
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.currentStore) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "container-fluid seller-details-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['seller-details-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12 ord-xxl-2 box-ord-2" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['ord-xxl-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-ord-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    for (const [details, index] of __VLS_vFor((__VLS_ctx.storeGeneralDetails))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-xxl-3 col-sm-6" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.StoreGeneralDetails} */
        StoreGeneralDetails;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            details: (details),
        }));
        const __VLS_2 = __VLS_1({
            details: (details),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        // @ts-ignore
        [currentStore, storeGeneralDetails,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-9 xl-100 ord-xxl-3 box-ord-3 box-col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
    /** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['ord-xxl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-ord-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.SalesOverview} */
    SalesOverview;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.TopSellingProduct} */
    TopSellingProduct;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_15;
    /** @ts-ignore @type { | typeof __VLS_components.SellerRecentOrder} */
    SellerRecentOrder;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card heading-space seller-details-table" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    /** @type {__VLS_StyleScopedClasses['heading-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['seller-details-table']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header card-no-border text-end" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
    /** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "header-top" },
    });
    /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header-right-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
    routerLink;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        ...{ class: "btn btn-light-primary f-w-500" },
        to: (__VLS_ctx.routes.Ecommerce.Products.AddProduct),
    }));
    const __VLS_22 = __VLS_21({
        ...{ class: "btn btn-light-primary f-w-500" },
        to: (__VLS_ctx.routes.Ecommerce.Products.AddProduct),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-light-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    const { default: __VLS_25 } = __VLS_23.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-plus pe-2" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
    /** @type {__VLS_StyleScopedClasses['pe-2']} */ ;
    // @ts-ignore
    [routes,];
    var __VLS_23;
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
        ...{ class: "recent-table table-responsive custom-scrollbar" },
    });
    /** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
    /** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    let __VLS_26;
    /** @ts-ignore @type { | typeof __VLS_components.ProductListTable | typeof __VLS_components.ProductListTable} */
    ProductListTable;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
        pageSize: (6),
        hideColumns: (['sku', 'qty']),
    }));
    const __VLS_28 = __VLS_27({
        pageSize: (6),
        hideColumns: (['sku', 'qty']),
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-3 ord-xxl-1 box-ord-1" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['ord-xxl-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-ord-1']} */ ;
    let __VLS_31;
    /** @ts-ignore @type { | typeof __VLS_components.SellerDetailsSidebar} */
    SellerDetailsSidebar;
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
        currentStore: (__VLS_ctx.currentStore),
    }));
    const __VLS_33 = __VLS_32({
        currentStore: (__VLS_ctx.currentStore),
    }, ...__VLS_functionalComponentArgsRest(__VLS_32));
}
else {
}
// @ts-ignore
[currentStore,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
