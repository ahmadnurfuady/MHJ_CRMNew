import { defineAsyncComponent } from 'vue';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('o-hidden small-widget'),
    padding: (false),
    cardBodyClass: (__VLS_ctx.item.class1),
    header: ('total-revenue'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('o-hidden small-widget'),
    padding: (false),
    cardBodyClass: (__VLS_ctx.item.class1),
    header: ('total-revenue'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light f-w-500 f-14" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['f-14']} */ ;
(__VLS_ctx.item.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "project-details" },
});
/** @type {__VLS_StyleScopedClasses['project-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "project-counter" },
});
/** @type {__VLS_StyleScopedClasses['project-counter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "f-w-600 counter" },
    'data-target': "1523",
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
/** @type {__VLS_StyleScopedClasses['counter']} */ ;
(__VLS_ctx.item.number);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-12 f-w-400" },
});
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-400']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-sub" },
    ...{ class: ('bg-light-' + __VLS_ctx.item.class2) },
});
/** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    icon: (__VLS_ctx.item.icon),
    svgClass: "invoice-icon",
}));
const __VLS_9 = __VLS_8({
    icon: (__VLS_ctx.item.icon),
    svgClass: "invoice-icon",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "bubbles" },
});
/** @type {__VLS_StyleScopedClasses['bubbles']} */ ;
for (const [index] of __VLS_vFor((8))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "bubble" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['bubble']} */ ;
    // @ts-ignore
    [item, item, item, item, item,];
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
