import { revenueChart, revenueChartSeries } from '@/core/data/dashboard/ecommerce';
import { routes } from '@/router/routes';
import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
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
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "total-revenue mb-2" },
});
/** @type {__VLS_StyleScopedClasses['total-revenue']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    to: (__VLS_ctx.routes.Dashboards.Default),
}));
const __VLS_9 = __VLS_8({
    to: (__VLS_ctx.routes.Dashboards.Default),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
// @ts-ignore
[routes,];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "f-w-600 counter" },
    'data-target': "97240",
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
/** @type {__VLS_StyleScopedClasses['counter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "total-chart" },
});
/** @type {__VLS_StyleScopedClasses['total-chart']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "data-grow d-flex gap-2" },
});
/** @type {__VLS_StyleScopedClasses['data-grow']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    type: ('arrow-up-right'),
    ...{ class: "font-primary" },
}));
const __VLS_15 = __VLS_14({
    type: ('arrow-up-right'),
    ...{ class: "font-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "total-revenue-chart" },
});
/** @type {__VLS_StyleScopedClasses['total-revenue-chart']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "revenue",
});
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    height: (__VLS_ctx.chartHeight),
    series: (__VLS_ctx.revenueChartSeries),
    options: (__VLS_ctx.revenueChart),
}));
const __VLS_20 = __VLS_19({
    height: (__VLS_ctx.chartHeight),
    series: (__VLS_ctx.revenueChartSeries),
    options: (__VLS_ctx.revenueChart),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
// @ts-ignore
[chartHeight, revenueChartSeries, revenueChart,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
