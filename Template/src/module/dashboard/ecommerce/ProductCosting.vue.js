import { productCostingData } from '@/core/data/dashboard/ecommerce';
import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
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
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
for (const [item, index] of __VLS_vFor((__VLS_ctx.productCostingData))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        key: (index),
        ...{ class: "product-costing" },
    });
    /** @type {__VLS_StyleScopedClasses['product-costing']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "product-cost" },
    });
    /** @type {__VLS_StyleScopedClasses['product-cost']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (['product-icon', item.bgClass]) },
    });
    /** @type {__VLS_StyleScopedClasses['product-icon']} */ ;
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: (item.icon),
    }));
    const __VLS_9 = __VLS_8({
        icon: (item.icon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500 f-14 mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "f-w-600" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    (item.amount);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-14 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (item.subtitle);
    // @ts-ignore
    [productCostingData,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
