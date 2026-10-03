import { defineAsyncComponent } from 'vue';
import { widgetsChart4Series, widgetsChart4 } from '@/core/data/widgets/chart';
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
    cardClass: ('o-hidden'),
    headerTitle: ('Monthly History'),
    border: (true),
    padding: (false),
    cardBodyClass: ('bottom-content'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('o-hidden'),
    headerTitle: ('Monthly History'),
    border: (true),
    padding: (false),
    cardBodyClass: ('bottom-content'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    type: "bar",
    height: "380",
    options: (__VLS_ctx.widgetsChart4),
    series: (__VLS_ctx.widgetsChart4Series),
}));
const __VLS_9 = __VLS_8({
    type: "bar",
    height: "380",
    options: (__VLS_ctx.widgetsChart4),
    series: (__VLS_ctx.widgetsChart4Series),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[widgetsChart4, widgetsChart4Series,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
