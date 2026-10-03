import { defineAsyncComponent } from 'vue';
import { EChartOptions } from '@/core/data/dashboard/default';
import VueECharts from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { PolarComponent } from 'echarts/components';
use([CanvasRenderer, BarChart, PolarComponent]);
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const vChart = VueECharts;
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
    headerTitle: ('Best Selling Products'),
    padding: (false),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Best Selling Products'),
    padding: (false),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "selling-product" },
});
/** @type {__VLS_StyleScopedClasses['selling-product']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "apache-container" },
});
/** @type {__VLS_StyleScopedClasses['apache-container']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vChart | typeof __VLS_components.VChart} */
vChart;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    option: (__VLS_ctx.EChartOptions),
    ...{ style: {} },
}));
const __VLS_9 = __VLS_8({
    option: (__VLS_ctx.EChartOptions),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sales-chart-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['sales-chart-dropdown']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "balance-data" },
});
/** @type {__VLS_StyleScopedClasses['balance-data']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "circle bg-primary" },
});
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light ms-1" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "circle bg-warning" },
});
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light ms-1" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "circle bg-secondary" },
});
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light ms-1" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "circle bg-light" },
});
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light ms-1" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
// @ts-ignore
[EChartOptions,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
