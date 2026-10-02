import { defineAsyncComponent } from 'vue';
import { routes } from '@/router/routes';
import { formatDecimalOnly } from '@/utils/index';
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
if (props.billingDetails) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        headerTitle: ('Summary'),
        padding: (false),
        rightSideDetails: (true),
        cardBodyClass: ('pt-0'),
    }));
    const __VLS_2 = __VLS_1({
        headerTitle: ('Summary'),
        padding: (false),
        rightSideDetails: (true),
        cardBodyClass: ('pt-0'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5 = {};
    const { default: __VLS_6 } = __VLS_3.slots;
    {
        const { header3: __VLS_7 } = __VLS_3.slots;
        let __VLS_8;
        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
        routerLink;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            ...{ class: "btn btn-primary" },
            to: (__VLS_ctx.routes.Ecommerce.Invoice.Invoice2),
        }));
        const __VLS_10 = __VLS_9({
            ...{ class: "btn btn-primary" },
            to: (__VLS_ctx.routes.Ecommerce.Invoice.Invoice2),
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
        const { default: __VLS_13 } = __VLS_11.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-regular fa-file-lines pe-2 f-14" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-file-lines']} */ ;
        /** @type {__VLS_StyleScopedClasses['pe-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
        // @ts-ignore
        [routes,];
        var __VLS_11;
        // @ts-ignore
        [];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "tracking-total" },
    });
    /** @type {__VLS_StyleScopedClasses['tracking-total']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.formatDecimalOnly(props.billingDetails.subTotal));
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.formatDecimalOnly(props.billingDetails.couponDiscount));
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.formatDecimalOnly(props.billingDetails.tax));
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "txt-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
    (props.billingDetails.shipping);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.formatDecimalOnly(props.billingDetails.total));
    // @ts-ignore
    [formatDecimalOnly, formatDecimalOnly, formatDecimalOnly, formatDecimalOnly,];
    var __VLS_3;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
