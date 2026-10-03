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
    headerTitle: ('Vibrant Rating'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Vibrant Rating'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "main-star-rating" },
});
/** @type {__VLS_StyleScopedClasses['main-star-rating']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex star-box justify-content-center" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['star-box']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "rating" },
});
/** @type {__VLS_StyleScopedClasses['rating']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.StarRating} */
StarRating;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    rating: (3),
    starSize: (40),
    inactiveColor: ('var(--theme-secondary)'),
    activeColor: ('var(--theme-default)'),
    showRating: (false),
    maxRating: (5),
}));
const __VLS_10 = __VLS_9({
    rating: (3),
    starSize: (40),
    inactiveColor: ('var(--theme-secondary)'),
    activeColor: ('var(--theme-default)'),
    showRating: (false),
    maxRating: (5),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
