import { defineAsyncComponent } from 'vue';
import { donutChartOptions, donutChartSeries } from '@/core/data/charts/apexChart';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
    headerTitle: ('Donut Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('apex-chart'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Donut Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('apex-chart'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "donut-chart",
});
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    height: (380),
    type: "donut",
    options: (__VLS_ctx.donutChartOptions),
    series: (__VLS_ctx.donutChartSeries),
}));
const __VLS_9 = __VLS_8({
    height: (380),
    type: "donut",
    options: (__VLS_ctx.donutChartOptions),
    series: (__VLS_ctx.donutChartSeries),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[donutChartOptions, donutChartSeries,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
