import { deliveryStats } from '@/core/data/dashboard/default';
import { defineAsyncComponent, ref } from 'vue';
const items = ref(deliveryStats);
function formatCurrency(val) {
    return '$' + val.toLocaleString('en-US');
}
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
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
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Deliveries'),
    padding: (true),
    header: ('sales-chart'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Deliveries'),
    padding: (true),
    header: ('sales-chart'),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "icon-menu-header" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-menu-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        id: "dropdownMenuButtonicon99",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
        role: "menu",
    });
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        icon: "more-horizontal",
        svgClass: "invoice-icon",
    }));
    const __VLS_10 = __VLS_9({
        icon: "more-horizontal",
        svgClass: "invoice-icon",
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        'aria-labelledby': "dropdownMenuButtonicon99",
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
    ...{ class: "table-responsive custom-scrollbar deliveries-percentage" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['deliveries-percentage']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "percentage-data w-100" },
});
/** @type {__VLS_StyleScopedClasses['percentage-data']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "f-light f-12 f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "f-light f-12 f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
if (__VLS_ctx.amount) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
        ...{ class: "f-light f-12 f-w-500 text-end" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [item] of __VLS_vFor((__VLS_ctx.items))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (item.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "f-w-400 f-10" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-400']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "line-clamp" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['line-clamp']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress-value d-flex gap-2 align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['progress-value']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress" },
    });
    /** @type {__VLS_StyleScopedClasses['progress']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress-bar bg-primary" },
        role: "progressbar",
        ...{ style: ({ width: item.percentage + '%' }) },
        'aria-valuenow': (item.percentage),
        'aria-valuemin': "0",
        'aria-valuemax': "100",
    });
    /** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.percentage);
    if (__VLS_ctx.amount) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
            ...{ class: "f-w-500 f-10 text-end" },
        });
        /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
        /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
        (__VLS_ctx.formatCurrency(item.amount));
    }
    // @ts-ignore
    [amount, amount, items, formatCurrency,];
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
