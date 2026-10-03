import { defineAsyncComponent } from 'vue';
import { widgetsChart17, widgetsChartSeries17 } from '@/core/data/widgets/chart';
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
    headerTitle: ('Order Status'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Order Status'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chart-container" },
});
/** @type {__VLS_StyleScopedClasses['chart-container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "line-chart",
});
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    type: "line",
    height: (400),
    options: (__VLS_ctx.widgetsChart17),
    series: (__VLS_ctx.widgetsChartSeries17),
}));
const __VLS_9 = __VLS_8({
    type: "line",
    height: (400),
    options: (__VLS_ctx.widgetsChart17),
    series: (__VLS_ctx.widgetsChartSeries17),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[widgetsChart17, widgetsChartSeries17,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
