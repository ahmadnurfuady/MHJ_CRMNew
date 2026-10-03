import { defineAsyncComponent } from 'vue';
import { chart8 } from '@/core/data/charts/chartistChart';
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
    headerTitle: ('Advanced SMIL Animations'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Advanced SMIL Animations'),
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
    ...{ class: "ct-6 flot-chart-container" },
    ratio: "1",
    type: "Line",
    data: (__VLS_ctx.chart8.data),
    options: (__VLS_ctx.chart8.options),
}));
const __VLS_9 = __VLS_8({
    ...{ class: "ct-6 flot-chart-container" },
    ratio: "1",
    type: "Line",
    data: (__VLS_ctx.chart8.data),
    options: (__VLS_ctx.chart8.options),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['ct-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flot-chart-container']} */ ;
// @ts-ignore
[chart8, chart8,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
