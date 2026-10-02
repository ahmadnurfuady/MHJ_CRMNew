import { widgets } from '@/core/data/dashboard/ecommerce';
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
if (__VLS_ctx.banner) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "div ecommerce-banner" },
    });
    /** @type {__VLS_StyleScopedClasses['div']} */ ;
    /** @type {__VLS_StyleScopedClasses['ecommerce-banner']} */ ;
}
for (const [widget, index] of __VLS_vFor((__VLS_ctx.widgets))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-12" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        cardClass: ('product-widget'),
        padding: (false),
        cardBodyClass: ('new-product'),
        header: ('total-revenue'),
    }));
    const __VLS_2 = __VLS_1({
        cardClass: ('product-widget'),
        padding: (false),
        cardBodyClass: ('new-product'),
        header: ('total-revenue'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-cost" },
    });
    /** @type {__VLS_StyleScopedClasses['product-cost']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "add-product" },
    });
    /** @type {__VLS_StyleScopedClasses['add-product']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (['product-icon', widget.bgClass]) },
    });
    /** @type {__VLS_StyleScopedClasses['product-icon']} */ ;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        icon: (widget.mainIcon),
    }));
    const __VLS_8 = __VLS_7({
        icon: (widget.mainIcon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-1" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    (widget.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    (widget.description);
    if (widget.secondaryIcon) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-icon" },
        });
        /** @type {__VLS_StyleScopedClasses['product-icon']} */ ;
        let __VLS_11;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            icon: (widget.secondaryIcon),
        }));
        const __VLS_13 = __VLS_12({
            icon: (widget.secondaryIcon),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    }
    // @ts-ignore
    [banner, widgets,];
    var __VLS_3;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
