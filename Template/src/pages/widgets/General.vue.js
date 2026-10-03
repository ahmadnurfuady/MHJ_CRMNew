import { topProjectWidgets } from '@/core/data/dashboard/project';
import { defineAsyncComponent } from 'vue';
const TopProjectWidgets = defineAsyncComponent(() => import('@/module/dashboard/project/TopProjectWidgets.vue'));
const ProductCosting = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/ProductCosting.vue'));
const UserVisits = defineAsyncComponent(() => import('@/module/dashboard/default/UserVisits.vue'));
const SaleCard = defineAsyncComponent(() => import('@/module/dashboard/default/SaleCard.vue'));
const Deliveries = defineAsyncComponent(() => import('@/module/dashboard/default/Deliveries.vue'));
const TimeLine = defineAsyncComponent(() => import('@/module/dashboard/project/TimeLine.vue'));
const SalesChart = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/SalesChart.vue'));
const SpecialOfferCard = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/SpecialOfferCard.vue'));
const ProductWidget = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/ProductWidget.vue'));
const TotalRevenue = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/TotalRevenue.vue'));
const TotalOrder = defineAsyncComponent(() => import('@/module/dashboard/ecommerce/TotalOrder.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid general-widgets" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['general-widgets']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row size-column" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['size-column']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [items, index] of __VLS_vFor((__VLS_ctx.topProjectWidgets))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-3 col-sm-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.TopProjectWidgets} */
    TopProjectWidgets;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        item: (items),
    }));
    const __VLS_2 = __VLS_1({
        item: (items),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [topProjectWidgets,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.ProductCosting} */
ProductCosting;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.UserVisits} */
UserVisits;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    chartDropdown: (false),
    chartHeight: (330),
}));
const __VLS_12 = __VLS_11({
    chartDropdown: (false),
    chartHeight: (330),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.SaleCard} */
SaleCard;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.Deliveries} */
Deliveries;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    amount: (false),
}));
const __VLS_22 = __VLS_21({
    amount: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6 col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.TimeLine} */
TimeLine;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_30;
/** @ts-ignore @type { | typeof __VLS_components.SalesChart} */
SalesChart;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    dropdown: (false),
    chartHeight: (350),
}));
const __VLS_32 = __VLS_31({
    dropdown: (false),
    chartHeight: (350),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 d-xxl-block d-none box-col-none" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['d-xxl-block']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12 special-Offer-banner" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['special-Offer-banner']} */ ;
let __VLS_35;
/** @ts-ignore @type { | typeof __VLS_components.SpecialOfferCard} */
SpecialOfferCard;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_40;
/** @ts-ignore @type { | typeof __VLS_components.ProductWidget} */
ProductWidget;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
    banner: (false),
}));
const __VLS_42 = __VLS_41({
    banner: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_45;
/** @ts-ignore @type { | typeof __VLS_components.TotalRevenue} */
TotalRevenue;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
    chartHeight: (150),
}));
const __VLS_47 = __VLS_46({
    chartHeight: (150),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_50;
/** @ts-ignore @type { | typeof __VLS_components.TotalOrder} */
TotalOrder;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    chartHeight: (150),
}));
const __VLS_52 = __VLS_51({
    chartHeight: (150),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
