import { defineAsyncComponent } from 'vue';
const props = defineProps();
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
        cardClass: ('o-hidden'),
        cardBodyClass: ('row pb-0 m-0'),
    }));
    const __VLS_2 = __VLS_1({
        cardClass: ('o-hidden'),
        cardBodyClass: ('row pb-0 m-0'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5 = {};
    const { default: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-9 col-lg-8 col-9 p-0" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-lg-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-9']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    (props.chart.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (props.chart.value);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (props.chart.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-3 col-lg-4 col-3 text-end p-0" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-lg-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "txt-success" },
    });
    /** @type {__VLS_StyleScopedClasses['txt-success']} */ ;
    (props.chart.increaseValue);
    {
        const { details: __VLS_7 } = __VLS_3.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            id: "chart-widget1",
        });
        let __VLS_8;
        /** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
        apexchart;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            ref: "chart",
            height: "200",
            series: (props.chart.chartSeries),
            options: (props.chart.chartDetails),
        }));
        const __VLS_10 = __VLS_9({
            ref: "chart",
            height: "200",
            series: (props.chart.chartSeries),
            options: (props.chart.chartDetails),
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        var __VLS_13 = {};
        var __VLS_11;
    }
    var __VLS_3;
}
// @ts-ignore
var __VLS_14 = __VLS_13;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
