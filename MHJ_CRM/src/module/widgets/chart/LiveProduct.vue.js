import { defineAsyncComponent } from 'vue';
import { widgetsChartSeries11, widgetsChart11 } from '@/core/data/widgets/chart';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "small-chart-widget chart-widgets-small" },
});
/** @type {__VLS_StyleScopedClasses['small-chart-widget']} */ ;
/** @type {__VLS_StyleScopedClasses['chart-widgets-small']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Live Products'),
    border: (true),
    padding: (true),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Live Products'),
    border: (true),
    padding: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chart-container" },
});
/** @type {__VLS_StyleScopedClasses['chart-container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "chart-widget6",
});
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    type: "area",
    height: (320),
    options: (__VLS_ctx.widgetsChart11),
    series: (__VLS_ctx.widgetsChartSeries11),
}));
const __VLS_8 = __VLS_7({
    type: "area",
    height: (320),
    options: (__VLS_ctx.widgetsChart11),
    series: (__VLS_ctx.widgetsChartSeries11),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[widgetsChart11, widgetsChartSeries11,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
