import { todayWorkList } from '@/core/data/dashboard/project';
import { routes } from '@/router/routes';
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
    headerTitle: ('Todays Work'),
    padding: (false),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Todays Work'),
    padding: (false),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "today-work-table table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['today-work-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "today-working-table w-100" },
});
/** @type {__VLS_StyleScopedClasses['today-working-table']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [item, index] of __VLS_vFor((__VLS_ctx.todayWorkList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500 f-light d-block f-12 mb-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    (item.task);
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-w-500 f-14" },
    }));
    const __VLS_16 = __VLS_15({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-w-500 f-14" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    (item.title);
    // @ts-ignore
    [routes, todayWorkList,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500 f-light d-block f-12 mb-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    (item.assignedLabel);
    let __VLS_20;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-w-500 f-14" },
    }));
    const __VLS_22 = __VLS_21({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-w-500 f-14" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    const { default: __VLS_25 } = __VLS_23.slots;
    (item.assignedTo);
    // @ts-ignore
    [routes,];
    var __VLS_23;
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500 f-light d-block f-12 mb-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    (item.daysLeftLabel);
    let __VLS_26;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-w-500 f-14" },
    }));
    const __VLS_28 = __VLS_27({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-w-500 f-14" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    const { default: __VLS_31 } = __VLS_29.slots;
    (item.daysLeft);
    // @ts-ignore
    [routes,];
    var __VLS_29;
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "text-end" },
    });
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (item.badgeClass + ' product-sub badge rounded-pill') },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.priority);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
