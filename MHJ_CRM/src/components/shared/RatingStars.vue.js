const __VLS_props = withDefaults(defineProps(), {
    maxStars: 5,
});
const __VLS_defaults = {
    maxStars: 5,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "rating" },
});
/** @type {__VLS_StyleScopedClasses['rating']} */ ;
for (const [i] of __VLS_vFor((__VLS_ctx.maxStars))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        key: (i),
        ...{ class: (i <= Math.round(__VLS_ctx.rating) ? 'fa-solid fa-star txt-warning' : 'fa-regular fa-star txt-warning') },
    });
    // @ts-ignore
    [maxStars, rating,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
