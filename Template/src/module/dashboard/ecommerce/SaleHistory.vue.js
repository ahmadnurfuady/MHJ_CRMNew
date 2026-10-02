import { saleHistoryData } from '@/core/data/dashboard/ecommerce';
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
    header: ('total-revenue '),
    padding: (true),
    headerTitle: ('Sale History'),
}));
const __VLS_2 = __VLS_1({
    header: ('total-revenue '),
    padding: (true),
    headerTitle: ('Sale History'),
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
        to: (__VLS_ctx.routes.Dashboards.Default),
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Dashboards.Default),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [item] of __VLS_vFor((__VLS_ctx.saleHistoryData))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (item.id),
        ...{ class: "sale-history-card" },
    });
    /** @type {__VLS_StyleScopedClasses['sale-history-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "history-price" },
    });
    /** @type {__VLS_StyleScopedClasses['history-price']} */ ;
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        to: (__VLS_ctx.routes.Ecommerce.Category),
        ...{ class: "f-w-500 f-14 mb-0" },
    }));
    const __VLS_16 = __VLS_15({
        to: (__VLS_ctx.routes.Ecommerce.Category),
        ...{ class: "f-w-500 f-14 mb-0" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    (item.title);
    // @ts-ignore
    [routes, saleHistoryData,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-0 txt-primary f-w-600 f-16" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-16']} */ ;
    (item.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "state-time" },
    });
    /** @type {__VLS_StyleScopedClasses['state-time']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500 f-14 f-light mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    (item.country);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-400 f-14 f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-400']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    (item.timeAgo);
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
