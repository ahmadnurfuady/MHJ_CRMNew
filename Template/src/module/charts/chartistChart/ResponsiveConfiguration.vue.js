import { defineAsyncComponent } from 'vue';
import { chart9 } from '@/core/data/charts/chartistChart';
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
    headerTitle: ('Extreme responsive configuration'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Extreme responsive configuration'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.chartist | typeof __VLS_components.Chartist | typeof __VLS_components.chartist | typeof __VLS_components.Chartist} */
chartist;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "ct-12 flot-chart-container" },
    ratio: "1",
    type: "Bar",
    data: (__VLS_ctx.chart9.data),
    options: (__VLS_ctx.chart9.options),
    responsiveOptions: (__VLS_ctx.chart9.responsiveOptions),
}));
const __VLS_9 = __VLS_8({
    ...{ class: "ct-12 flot-chart-container" },
    ratio: "1",
    type: "Bar",
    data: (__VLS_ctx.chart9.data),
    options: (__VLS_ctx.chart9.options),
    responsiveOptions: (__VLS_ctx.chart9.responsiveOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['ct-12']} */ ;
/** @type {__VLS_StyleScopedClasses['flot-chart-container']} */ ;
// @ts-ignore
[chart9, chart9, chart9,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
