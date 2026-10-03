import { ref, defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
import { routes } from '@/router/routes';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const taskOverviewChart = ref(projectDetails.projectSummary.taskOverviewChart);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardType: ('classic'),
    headerTitle: (__VLS_ctx.taskOverviewChart.title),
    sortDescription: (__VLS_ctx.taskOverviewChart.sortDescription),
    cardBodyClass: ('pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.App.Task),
}));
const __VLS_2 = __VLS_1({
    cardType: ('classic'),
    headerTitle: (__VLS_ctx.taskOverviewChart.title),
    sortDescription: (__VLS_ctx.taskOverviewChart.sortDescription),
    cardBodyClass: ('pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.App.Task),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "task-overview" },
});
/** @type {__VLS_StyleScopedClasses['task-overview']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    height: "363",
    series: (__VLS_ctx.taskOverviewChart.series),
    options: (__VLS_ctx.taskOverviewChart.chartOptions),
}));
const __VLS_9 = __VLS_8({
    height: "363",
    series: (__VLS_ctx.taskOverviewChart.series),
    options: (__VLS_ctx.taskOverviewChart.chartOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[taskOverviewChart, taskOverviewChart, taskOverviewChart, taskOverviewChart, routes,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
