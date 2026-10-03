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
if (props.chart) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        cardClass: ('widget-2 budget-card'),
        cardBodyClass: ('common-space'),
    }));
    const __VLS_2 = __VLS_1({
        cardClass: ('widget-2 budget-card'),
        cardBodyClass: ('common-space'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5 = {};
    const { default: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "pb-2 c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (props.chart.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (props.chart.value);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`f-14 txt-${props.chart.profitType == 'profit' ? 'success' : 'danger'} f-w-500`) },
    });
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        type: (props.chart.profitType == 'profit' ? 'arrow-up' : 'arrow-down'),
        ...{ class: ('me-1') },
    }));
    const __VLS_9 = __VLS_8({
        type: (props.chart.profitType == 'profit' ? 'arrow-up' : 'arrow-down'),
        ...{ class: ('me-1') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    /** @type {__VLS_StyleScopedClasses['me-1']} */ ;
    (props.chart.profitType == 'profit' ? '+' : '-');
    (props.chart.profit);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "expense-chart-wrap" },
    });
    /** @type {__VLS_StyleScopedClasses['expense-chart-wrap']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        id: "expense-chart",
    });
    if (props.chart.chartDetails.chart) {
        let __VLS_12;
        /** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
        apexchart;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
            height: (props.chart.chartDetails.chart.height),
            series: (props.chart.chartSeries),
            options: (props.chart.chartDetails),
        }));
        const __VLS_14 = __VLS_13({
            height: (props.chart.chartDetails.chart.height),
            series: (props.chart.chartSeries),
            options: (props.chart.chartDetails),
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    var __VLS_3;
}
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
