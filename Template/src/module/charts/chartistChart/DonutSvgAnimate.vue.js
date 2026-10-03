import { defineAsyncComponent } from 'vue';
import { chart6 } from '@/core/data/charts/chartistChart';
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
    headerTitle: ('Animating a Donut with Svg.animate'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Animating a Donut with Svg.animate'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.chartist | typeof __VLS_components.Chartist | typeof __VLS_components.chartist | typeof __VLS_components.Chartist} */
chartist;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "ct-8 flot-chart-container" },
    ratio: "1",
    type: "Pie",
    data: (__VLS_ctx.chart6.data),
    options: (__VLS_ctx.chart6.options),
}));
const __VLS_9 = __VLS_8({
    ...{ class: "ct-8 flot-chart-container" },
    ratio: "1",
    type: "Pie",
    data: (__VLS_ctx.chart6.data),
    options: (__VLS_ctx.chart6.options),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['ct-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flot-chart-container']} */ ;
// @ts-ignore
[chart6, chart6,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
