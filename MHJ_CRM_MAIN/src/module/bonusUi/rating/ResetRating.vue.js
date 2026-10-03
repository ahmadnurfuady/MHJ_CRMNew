import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const rating = ref(3);
function resetRating() {
    rating.value = 0;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Reset Rating'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Reset Rating'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "ratingCard" },
});
/** @type {__VLS_StyleScopedClasses['ratingCard']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "reset-rating" },
});
/** @type {__VLS_StyleScopedClasses['reset-rating']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "rating" },
});
/** @type {__VLS_StyleScopedClasses['rating']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.StarRating} */
StarRating;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    rating: (__VLS_ctx.rating),
    starSize: (40),
    showRating: (false),
    maxRating: (5),
}));
const __VLS_10 = __VLS_9({
    rating: (__VLS_ctx.rating),
    starSize: (40),
    showRating: (false),
    maxRating: (5),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "buttonContainer" },
});
/** @type {__VLS_StyleScopedClasses['buttonContainer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.resetRating());
            // @ts-ignore
            [rating, resetRating,];
        } },
    ...{ class: "reset-btn btn btn-primary" },
});
/** @type {__VLS_StyleScopedClasses['reset-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
