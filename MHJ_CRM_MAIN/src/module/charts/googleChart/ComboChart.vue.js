import { defineAsyncComponent } from 'vue';
import { comboChart } from '@/core/data/charts/googleChart';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
    headerTitle: ('Combo Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('chart-block'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Combo Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('chart-block'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chart-overflow" },
    id: "combo-chart",
});
/** @type {__VLS_StyleScopedClasses['chart-overflow']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.GChart | typeof __VLS_components.GChart} */
GChart;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    type: (__VLS_ctx.comboChart.chartType),
    data: (__VLS_ctx.comboChart.dataTable),
    options: (__VLS_ctx.comboChart.options),
}));
const __VLS_9 = __VLS_8({
    type: (__VLS_ctx.comboChart.chartType),
    data: (__VLS_ctx.comboChart.dataTable),
    options: (__VLS_ctx.comboChart.options),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[comboChart, comboChart, comboChart,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
