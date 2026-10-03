import { projectRating } from '@/core/data/project';
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (`main-card-box bg-10-${__VLS_ctx.projectRating.cardColor} h-100`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-20 common-space" },
});
/** @type {__VLS_StyleScopedClasses['p-20']} */ ;
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
(__VLS_ctx.projectRating.rating);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
(__VLS_ctx.projectRating.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (`project-right-icon bg-10-${__VLS_ctx.projectRating.cardColor}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: (`fa-solid fa-${__VLS_ctx.projectRating.icon} fa-fade txt-${__VLS_ctx.projectRating.cardColor}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "highlight-content" },
});
/** @type {__VLS_StyleScopedClasses['highlight-content']} */ ;
for (const [details, index] of __VLS_vFor((__VLS_ctx.projectRating.details))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (details.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ class: (details.increase ? 'txt-success' : 'txt-danger') },
        type: (details.increase ? 'trending-up' : 'trending-down'),
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: (details.increase ? 'txt-success' : 'txt-danger') },
        type: (details.increase ? 'trending-up' : 'trending-down'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (details.rating);
    // @ts-ignore
    [projectRating, projectRating, projectRating, projectRating, projectRating, projectRating, projectRating,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
