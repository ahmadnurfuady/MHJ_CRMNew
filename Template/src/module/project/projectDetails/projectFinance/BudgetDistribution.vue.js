import { ref, defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const budgetDistributionChart = ref(projectDetails.finance.budgetDistribution);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('get-card'),
    headerTitle: ('Budget Distribution'),
    padding: (false),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('get-card'),
    headerTitle: ('Budget Distribution'),
    padding: (false),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "project-chart-wrap" },
});
/** @type {__VLS_StyleScopedClasses['project-chart-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "project-chart",
});
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    height: "260",
    series: (__VLS_ctx.budgetDistributionChart.series),
    options: (__VLS_ctx.budgetDistributionChart.chartOptions),
}));
const __VLS_9 = __VLS_8({
    height: "260",
    series: (__VLS_ctx.budgetDistributionChart.series),
    options: (__VLS_ctx.budgetDistributionChart.chartOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[budgetDistributionChart, budgetDistributionChart,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
