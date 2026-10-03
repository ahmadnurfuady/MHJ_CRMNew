import { topRevenueProduct, topRevenueProductSeries } from '@/core/data/dashboard/ecommerce';
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
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Top Revenue Product '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Top Revenue Product '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "sales-chart-dropdown-select" },
    });
    /** @type {__VLS_StyleScopedClasses['sales-chart-dropdown-select']} */ ;
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
        id: "dropdownMenuButtonup",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        'aria-labelledby': "dropdownMenuButtonup",
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "revenueproduct" },
    id: "revenueproduct",
});
/** @type {__VLS_StyleScopedClasses['revenueproduct']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    height: (230),
    series: (__VLS_ctx.topRevenueProductSeries),
    options: (__VLS_ctx.topRevenueProduct),
}));
const __VLS_10 = __VLS_9({
    height: (230),
    series: (__VLS_ctx.topRevenueProductSeries),
    options: (__VLS_ctx.topRevenueProduct),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sales-chart-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['sales-chart-dropdown']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "balance-data flex-wrap flex" },
});
/** @type {__VLS_StyleScopedClasses['balance-data']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
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
[topRevenueProductSeries, topRevenueProduct,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
