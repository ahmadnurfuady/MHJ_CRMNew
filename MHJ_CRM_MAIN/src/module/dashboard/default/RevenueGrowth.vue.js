import { revenueGrowthChartSeries, revenueGrowthChart } from '@/core/data/dashboard/default';
import { defineAsyncComponent } from 'vue';
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
    headerTitle: ('Revenue Growth'),
    padding: (false),
    header: ('sales-chart'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Revenue Growth'),
    padding: (false),
    header: ('sales-chart'),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
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
        ...{ class: "circle bg-warning" },
    });
    /** @type {__VLS_StyleScopedClasses['circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-warning']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "ms-1 f-w-400" },
    });
    /** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-400']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "circle bg-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "ms-1 f-w-400" },
    });
    /** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-400']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "sales-chart-dropdown-select" },
    });
    /** @type {__VLS_StyleScopedClasses['sales-chart-dropdown-select']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header-right-icon online-store" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['online-store']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn dropdown-toggle dropdown-toggle-store" },
        id: "dropdownMenuButtonToggle",
        type: "button",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle-store']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        'aria-labelledby': "dropdownMenuButtonToggle",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-8 col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "revenuegrowth" },
});
/** @type {__VLS_StyleScopedClasses['revenuegrowth']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "revenuegrowth-chart" },
    id: "revenuegrowth",
});
/** @type {__VLS_StyleScopedClasses['revenuegrowth-chart']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    height: (315),
    series: (__VLS_ctx.revenueGrowthChartSeries),
    options: (__VLS_ctx.revenueGrowthChart),
}));
const __VLS_10 = __VLS_9({
    height: (315),
    series: (__VLS_ctx.revenueGrowthChartSeries),
    options: (__VLS_ctx.revenueGrowthChart),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-xl-4 d-xxl-block d-none" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['d-xxl-block']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "revenuegrowth-details" },
});
/** @type {__VLS_StyleScopedClasses['revenuegrowth-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "growth-details" },
});
/** @type {__VLS_StyleScopedClasses['growth-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light f-12 text-uppercase" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-uppercase']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "f-w-500 mb-2 counter" },
    'data-target': "5626508",
});
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['counter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-content-center align-items-center gap-2 mb-4" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0 f-w-500 f-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light f-12 f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0 f-w-500 f-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "growth-details" },
});
/** @type {__VLS_StyleScopedClasses['growth-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light f-12 text-uppercase" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-uppercase']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "f-w-500 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-content-center align-items-center gap-2 mb-4" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0 f-w-500 f-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "txt-secondary f-12 f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0 f-w-500 f-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "growth-details" },
});
/** @type {__VLS_StyleScopedClasses['growth-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light f-12 text-uppercase" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-uppercase']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "f-w-500 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-content-center align-items-center gap-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0 f-w-500 f-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-w-500 f-light f-12" },
});
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0 f-w-500 f-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
// @ts-ignore
[revenueGrowthChartSeries, revenueGrowthChart,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
