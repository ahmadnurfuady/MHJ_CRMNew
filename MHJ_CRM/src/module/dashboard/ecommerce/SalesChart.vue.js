import { saleChartChart, saleChartSeries } from '@/core/data/dashboard/ecommerce';
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Sales Chart'),
    padding: (true),
    header: ('sales-chart'),
    cardBodyClass: ('p-2 pt-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Sales Chart'),
    padding: (true),
    header: ('sales-chart'),
    cardBodyClass: ('p-2 pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
if (__VLS_ctx.dropdown) {
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
            ...{ class: "f-light ms-2" },
        });
        /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "circle bg-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "f-light ms-2" },
        });
        /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
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
            'data-bs-toggle': "dropdown",
            'aria-expanded': "false",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
        /** @type {__VLS_StyleScopedClasses['dropdown-toggle-store']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "dropdown-menu dropdown-menu-end" },
            'aria-labelledby': "dropdownMenuButtonToggle",
            role: "menu",
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
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-header-right-icon" },
        });
        /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "dropdown" },
        });
        /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "btn dropdown-toggle" },
            id: "dropdownMenuButton1",
            'data-bs-toggle': "dropdown",
            'aria-expanded': "false",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "dropdown-menu dropdown-menu-end" },
            'aria-labelledby': "dropdownMenuButton1",
            role: "menu",
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
        // @ts-ignore
        [dropdown,];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sales-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['sales-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "saleschart",
});
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    height: (__VLS_ctx.chartHeight),
    series: (__VLS_ctx.saleChartSeries),
    options: (__VLS_ctx.saleChartChart),
}));
const __VLS_10 = __VLS_9({
    height: (__VLS_ctx.chartHeight),
    series: (__VLS_ctx.saleChartSeries),
    options: (__VLS_ctx.saleChartChart),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
// @ts-ignore
[chartHeight, saleChartSeries, saleChartChart,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
