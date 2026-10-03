import { defineAsyncComponent } from 'vue';
import { ticketListStatus } from '@/core/data/supportTicket';
const Counter = defineAsyncComponent(() => import('@/components/shared/Counter.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.ticketListStatus))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 col-sm-6 box-col-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card ecommerce-widget" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    /** @type {__VLS_StyleScopedClasses['ecommerce-widget']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body support-ticket-font" },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    /** @type {__VLS_StyleScopedClasses['support-ticket-font']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-5" },
    });
    /** @type {__VLS_StyleScopedClasses['col-5']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.statusTitle);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "total-num counter" },
    });
    /** @type {__VLS_StyleScopedClasses['total-num']} */ ;
    /** @type {__VLS_StyleScopedClasses['counter']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Counter} */
    Counter;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        counter: (item.order),
    }));
    const __VLS_2 = __VLS_1({
        counter: (item.order),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-7" },
    });
    /** @type {__VLS_StyleScopedClasses['col-7']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-end" },
    });
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "product-stts txt-success ms-2" },
    });
    /** @type {__VLS_StyleScopedClasses['product-stts']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-success']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
    (item.profit);
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icon-angle-up f-12 ms-1" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-angle-up']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "product-stts txt-danger ms-2" },
    });
    /** @type {__VLS_StyleScopedClasses['product-stts']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-danger']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
    (item.loss);
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icon-angle-down f-12 ms-1" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-angle-down']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress-showcase" },
    });
    /** @type {__VLS_StyleScopedClasses['progress-showcase']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress sm-progress-bar" },
    });
    /** @type {__VLS_StyleScopedClasses['progress']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm-progress-bar']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`progress-bar bg-${item.levelColor}`) },
        role: "progressbar",
        ...{ style: ({ width: item.level }) },
    });
    // @ts-ignore
    [ticketListStatus,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
