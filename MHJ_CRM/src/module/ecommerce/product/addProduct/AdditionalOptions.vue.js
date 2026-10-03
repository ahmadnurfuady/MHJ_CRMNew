import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useProduct } from '@/store/product';
const InventoryDetails = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/InventoryDetails.vue'));
const SEOTagDetails = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/SEOTagDetails.vue'));
const ShippingDetails = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/ShippingDetails.vue'));
const VariationDetails = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/VariationDetails.vue'));
const PublicationDetails = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/PublicationDetails.vue'));
const props = defineProps();
const emits = defineEmits(['changeTab']);
const productStore = useProduct();
const { productState } = storeToRefs(productStore);
const { handleAdditionalTab, handleAdditionalPage } = productStore;
function handlePreviousPage(page) {
    if (page) {
        emits('changeTab', page);
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content custom-input" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sidebar-body advance-options" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-body']} */ ;
/** @type {__VLS_StyleScopedClasses['advance-options']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-tabs border-tab mb-0" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.productState.additionalTabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleAdditionalTab(tab.value, index + 1);
                // @ts-ignore
                [productState, handleAdditionalTab,];
            } },
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.productState.additionalActiveTab === tab.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (tab.title);
    // @ts-ignore
    [productState,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "advance-option-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "meta-body" },
});
/** @type {__VLS_StyleScopedClasses['meta-body']} */ ;
if (__VLS_ctx.productState.additionalActiveTab == 'inventory') {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.InventoryDetails} */
    InventoryDetails;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onPreviousPage': {} },
        ...{ 'onNextPage': {} },
        activeTabId: (props.activeTabId),
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onPreviousPage': {} },
        ...{ 'onNextPage': {} },
        activeTabId: (props.activeTabId),
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = ({ previousPage: {} },
        { onPreviousPage: (...[$event]) => {
                if (!(__VLS_ctx.productState.additionalActiveTab == 'inventory'))
                    return;
                __VLS_ctx.handlePreviousPage($event);
                // @ts-ignore
                [productState, productState, handlePreviousPage,];
            } });
    const __VLS_7 = ({ nextPage: {} },
        { onNextPage: (...[$event]) => {
                if (!(__VLS_ctx.productState.additionalActiveTab == 'inventory'))
                    return;
                __VLS_ctx.handleAdditionalPage($event);
                // @ts-ignore
                [handleAdditionalPage,];
            } });
    var __VLS_3;
    var __VLS_4;
}
if (__VLS_ctx.productState.additionalActiveTab == 'seo_tag') {
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.SEOTagDetails} */
    SEOTagDetails;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }));
    const __VLS_10 = __VLS_9({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_13;
    const __VLS_14 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.additionalActiveTab == 'seo_tag'))
                    return;
                __VLS_ctx.handleAdditionalPage($event);
                // @ts-ignore
                [productState, productState, handleAdditionalPage,];
            } });
    var __VLS_11;
    var __VLS_12;
}
if (__VLS_ctx.productState.additionalActiveTab == 'shipping') {
    let __VLS_15;
    /** @ts-ignore @type {typeof __VLS_components.ShippingDetails} */
    ShippingDetails;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }));
    const __VLS_17 = __VLS_16({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    let __VLS_20;
    const __VLS_21 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.additionalActiveTab == 'shipping'))
                    return;
                __VLS_ctx.handleAdditionalPage($event);
                // @ts-ignore
                [productState, productState, handleAdditionalPage,];
            } });
    var __VLS_18;
    var __VLS_19;
}
if (__VLS_ctx.productState.additionalActiveTab == 'variations') {
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.VariationDetails} */
    VariationDetails;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }));
    const __VLS_24 = __VLS_23({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_27;
    const __VLS_28 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.additionalActiveTab == 'variations'))
                    return;
                __VLS_ctx.handleAdditionalPage($event);
                // @ts-ignore
                [productState, productState, handleAdditionalPage,];
            } });
    var __VLS_25;
    var __VLS_26;
}
if (__VLS_ctx.productState.additionalActiveTab == 'publish') {
    let __VLS_29;
    /** @ts-ignore @type {typeof __VLS_components.PublicationDetails} */
    PublicationDetails;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }));
    const __VLS_31 = __VLS_30({
        ...{ 'onChangeTab': {} },
        additionalTabId: (__VLS_ctx.productState.additionalTabId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    let __VLS_34;
    const __VLS_35 = ({ changeTab: {} },
        { onChangeTab: (...[$event]) => {
                if (!(__VLS_ctx.productState.additionalActiveTab == 'publish'))
                    return;
                __VLS_ctx.handleAdditionalPage($event);
                // @ts-ignore
                [productState, productState, handleAdditionalPage,];
            } });
    var __VLS_32;
    var __VLS_33;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
