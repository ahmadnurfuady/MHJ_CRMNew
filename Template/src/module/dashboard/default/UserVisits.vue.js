import { visitsChartSeries, visitsChart } from '@/core/data/dashboard/default';
import { routes } from '@/router/routes';
import { defineAsyncComponent } from 'vue';
const props = defineProps();
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
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
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('User Visits by Day'),
    padding: (false),
    header: ('total-revenue pb-0'),
    cardBodyClass: ('pt-0 pb-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('User Visits by Day'),
    padding: (false),
    header: ('total-revenue pb-0'),
    cardBodyClass: ('pt-0 pb-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
if (__VLS_ctx.chartDropdown) {
    {
        const { header5: __VLS_7 } = __VLS_3.slots;
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
            ...{ class: "circle bg-primary-1" },
        });
        /** @type {__VLS_StyleScopedClasses['circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-primary-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "f-light ms-1" },
        });
        /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "circle bg-primary-2" },
        });
        /** @type {__VLS_StyleScopedClasses['circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-primary-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "f-light ms-1" },
        });
        /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
        // @ts-ignore
        [chartDropdown,];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "user-visitsCharts" },
});
/** @type {__VLS_StyleScopedClasses['user-visitsCharts']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "visitsCharts",
});
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    height: (__VLS_ctx.chartHeight),
    series: (__VLS_ctx.visitsChartSeries),
    options: (__VLS_ctx.visitsChart),
}));
const __VLS_10 = __VLS_9({
    height: (__VLS_ctx.chartHeight),
    series: (__VLS_ctx.visitsChartSeries),
    options: (__VLS_ctx.visitsChart),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
{
    const { details: __VLS_13 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-footer" },
    });
    /** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        to: (__VLS_ctx.routes.Dashboards.Default),
        ...{ class: "f-w-600 f-14" },
    }));
    const __VLS_16 = __VLS_15({
        to: (__VLS_ctx.routes.Dashboards.Default),
        ...{ class: "f-w-600 f-14" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    // @ts-ignore
    [chartHeight, visitsChartSeries, visitsChart, routes,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-w-500 f-14 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "visited-dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['visited-dropdown']} */ ;
    let __VLS_20;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        icon: "arrow-down",
        svgClass: "'mb-0'",
    }));
    const __VLS_22 = __VLS_21({
        icon: "arrow-down",
        svgClass: "'mb-0'",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
