import { defineAsyncComponent } from 'vue';
import { Doughnut } from 'vue-chartjs';
import { doughnutChart } from '@/core/data/charts/chatjsChart';
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
    headerTitle: ('Doughnut Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('chart-block chart-vertical-center'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Doughnut Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('chart-block chart-vertical-center'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.Doughnut} */
Doughnut;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    data: (__VLS_ctx.doughnutChart.data),
    options: (__VLS_ctx.doughnutChart.options),
    id: "myDoughnutGraph",
}));
const __VLS_9 = __VLS_8({
    data: (__VLS_ctx.doughnutChart.data),
    options: (__VLS_ctx.doughnutChart.options),
    id: "myDoughnutGraph",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[doughnutChart, doughnutChart,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
