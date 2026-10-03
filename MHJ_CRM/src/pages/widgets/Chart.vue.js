import { defineAsyncComponent } from 'vue';
import { commonLineCharts } from '@/core/data/widgets/chart';
const TopWidgetsChart = defineAsyncComponent(() => import('@/module/widgets/chart/TopWidgetsChart.vue'));
const MonthlyHistory = defineAsyncComponent(() => import('@/module/widgets/chart/MonthlyHistory.vue'));
const SkillStatusChart = defineAsyncComponent(() => import('@/module/widgets/chart/SkillStatusChart.vue'));
const OrderStatusChart = defineAsyncComponent(() => import('@/module/widgets/chart/OrderStatusChart.vue'));
const LiveProduct = defineAsyncComponent(() => import('@/module/widgets/chart/LiveProduct.vue'));
const CryptocurrencyAnnotationsChart = defineAsyncComponent(() => import('@/module/widgets/chart/CryptocurrencyAnnotationsChart.vue'));
const CryptocurrencyPricesChart = defineAsyncComponent(() => import('@/module/widgets/chart/CryptocurrencyPricesChart.vue'));
const TurnOverChart = defineAsyncComponent(() => import('@/module/widgets/chart/TurnOverChart.vue'));
const StockMarketChart = defineAsyncComponent(() => import('@/module/widgets/chart/StockMarketChart.vue'));
const FinanceChart = defineAsyncComponent(() => import('@/module/widgets/chart/FinanceChart.vue'));
const OrderStatus2Chart = defineAsyncComponent(() => import('@/module/widgets/chart/OrderStatus2Chart.vue'));
const UsersChart = defineAsyncComponent(() => import('@/module/widgets/chart/UsersChart.vue'));
const MonthlySalesChart = defineAsyncComponent(() => import('@/module/widgets/chart/MonthlySalesChart.vue'));
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
for (const [chart, index] of __VLS_vFor((__VLS_ctx.commonLineCharts))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 col-md-12 box-col-12" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.TopWidgetsChart} */
    TopWidgetsChart;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        chart: (chart),
    }));
    const __VLS_2 = __VLS_1({
        chart: (chart),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [commonLineCharts,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.MonthlyHistory} */
MonthlyHistory;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6 col-lg-12 box-col-6 xl-50" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.SkillStatusChart} */
SkillStatusChart;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6 col-lg-12 box-col-6 xl-50" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.OrderStatusChart} */
OrderStatusChart;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "xl-50 col-xl-7 col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.LiveProduct} */
LiveProduct;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "xl-50 col-xl-5 col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.TurnOverChart} */
TurnOverChart;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "xl-50 col-xl-6 col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.CryptocurrencyPricesChart} */
CryptocurrencyPricesChart;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "xl-50 col-xl-6 col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.CryptocurrencyAnnotationsChart} */
CryptocurrencyAnnotationsChart;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_40;
/** @ts-ignore @type {typeof __VLS_components.StockMarketChart} */
StockMarketChart;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({}));
const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-5 col-lg-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_45;
/** @ts-ignore @type {typeof __VLS_components.FinanceChart} */
FinanceChart;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({}));
const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-7 col-lg-12 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_50;
/** @ts-ignore @type {typeof __VLS_components.OrderStatus2Chart} */
OrderStatus2Chart;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({}));
const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "xl-50 col-xl-5 col-lg-12 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.MonthlySalesChart} */
MonthlySalesChart;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({}));
const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "xl-50 col-xl-7 col-lg-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.UsersChart} */
UsersChart;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({}));
const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
