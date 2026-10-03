import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useProduct } from '@/store/product';
const AddProductDetails = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/AddProductDetails.vue'));
const ProductGallery = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/ProductGallery.vue'));
const ProductCategories = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/ProductCategories.vue'));
const ProductPriceDiscount = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/ProductPriceDiscount.vue'));
const AdditionalOptions = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/AdditionalOptions.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const productStore = useProduct();
const { productState } = storeToRefs(productStore);
const { handleTab, handlePage } = productStore;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Product Form'),
    padding: (false),
    border: (true),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Product Form'),
    padding: (false),
    border: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-xl-5 g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-xl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-xl-4 box-col-4e sidebar-left-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-4e']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-left-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "sidebar-left-icons nav nav-pills" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-left-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-pills']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.productState.tabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTab(tab.value, index + 1);
                // @ts-ignore
                [productState, handleTab,];
            } },
        ...{ class: "nav-link" },
        href: "#",
        ...{ class: ({ active: __VLS_ctx.productState.activeTab == tab.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "nav-rounded" },
    });
    /** @type {__VLS_StyleScopedClasses['nav-rounded']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-icons" },
    });
    /** @type {__VLS_StyleScopedClasses['product-icons']} */ ;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        icon: (tab.icon),
    }));
    const __VLS_8 = __VLS_7({
        icon: (tab.icon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-tab-content" },
    });
    /** @type {__VLS_StyleScopedClasses['product-tab-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (tab.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (tab.description);
    // @ts-ignore
    [productState,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 col-xl-8 box-col-8 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-8']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content custom-input" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.productState.activeTab == 'product') {
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.AddProductDetails} */
    AddProductDetails;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }));
    const __VLS_13 = __VLS_12({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    let __VLS_16;
    const __VLS_17 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.activeTab == 'product'))
                    return;
                __VLS_ctx.handlePage($event);
                // @ts-ignore
                [productState, productState, handlePage,];
            } });
    var __VLS_14;
    var __VLS_15;
}
if (__VLS_ctx.productState.activeTab == 'gallery') {
    let __VLS_18;
    /** @ts-ignore @type {typeof __VLS_components.ProductGallery} */
    ProductGallery;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }));
    const __VLS_20 = __VLS_19({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    let __VLS_23;
    const __VLS_24 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.activeTab == 'gallery'))
                    return;
                __VLS_ctx.handlePage($event);
                // @ts-ignore
                [productState, productState, handlePage,];
            } });
    var __VLS_21;
    var __VLS_22;
}
if (__VLS_ctx.productState.activeTab == 'category') {
    let __VLS_25;
    /** @ts-ignore @type {typeof __VLS_components.ProductCategories} */
    ProductCategories;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }));
    const __VLS_27 = __VLS_26({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    let __VLS_30;
    const __VLS_31 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.activeTab == 'category'))
                    return;
                __VLS_ctx.handlePage($event);
                // @ts-ignore
                [productState, productState, handlePage,];
            } });
    var __VLS_28;
    var __VLS_29;
}
if (__VLS_ctx.productState.activeTab == 'pricing') {
    let __VLS_32;
    /** @ts-ignore @type {typeof __VLS_components.ProductPriceDiscount} */
    ProductPriceDiscount;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }));
    const __VLS_34 = __VLS_33({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_37;
    const __VLS_38 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.activeTab == 'pricing'))
                    return;
                __VLS_ctx.handlePage($event);
                // @ts-ignore
                [productState, productState, handlePage,];
            } });
    var __VLS_35;
    var __VLS_36;
}
if (__VLS_ctx.productState.activeTab == 'advance') {
    let __VLS_39;
    /** @ts-ignore @type {typeof __VLS_components.AdditionalOptions} */
    AdditionalOptions;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }));
    const __VLS_41 = __VLS_40({
        ...{ 'onChangeTab': {} },
        activeTabId: (__VLS_ctx.productState.activeTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    let __VLS_44;
    const __VLS_45 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.activeTab == 'advance'))
                    return;
                __VLS_ctx.handlePage($event);
                // @ts-ignore
                [productState, productState, handlePage,];
            } });
    var __VLS_42;
    var __VLS_43;
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
