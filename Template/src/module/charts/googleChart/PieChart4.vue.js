import { defineAsyncComponent } from 'vue';
import { pieChart4 } from '@/core/data/charts/googleChart';
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
    headerTitle: ('Pie Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('p-0 chart-block'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Pie Chart'),
    border: (true),
    padding: (false),
    cardBodyClass: ('p-0 chart-block'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header4: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chart-overflow" },
    id: "pie-chart4",
});
/** @type {__VLS_StyleScopedClasses['chart-overflow']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.GChart | typeof __VLS_components.GChart} */
GChart;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    type: (__VLS_ctx.pieChart4.chartType),
    data: (__VLS_ctx.pieChart4.dataTable),
    options: (__VLS_ctx.pieChart4.options),
}));
const __VLS_10 = __VLS_9({
    type: (__VLS_ctx.pieChart4.chartType),
    data: (__VLS_ctx.pieChart4.dataTable),
    options: (__VLS_ctx.pieChart4.options),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
// @ts-ignore
[pieChart4, pieChart4, pieChart4,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
