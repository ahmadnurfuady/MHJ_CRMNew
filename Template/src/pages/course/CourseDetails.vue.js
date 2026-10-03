import { defineAsyncComponent } from 'vue';
import { corsesComments, courseDetails } from '@/core/data/courses';
const CourseFilter = defineAsyncComponent(() => import('@/module/course/CourseFilter.vue'));
const DetailsPage = defineAsyncComponent(() => import('@/module/blog/DetailsPage.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-9 xl-60 order-xl-0 order-1 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-60']} */ ;
/** @type {__VLS_StyleScopedClasses['order-xl-0']} */ ;
/** @type {__VLS_StyleScopedClasses['order-1']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.DetailsPage} */
DetailsPage;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    details: (__VLS_ctx.courseDetails),
    comment: (__VLS_ctx.corsesComments),
}));
const __VLS_2 = __VLS_1({
    details: (__VLS_ctx.courseDetails),
    comment: (__VLS_ctx.corsesComments),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 xl-40 box-col-12 learning-filter" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-40']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['learning-filter']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.CourseFilter} */
CourseFilter;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[courseDetails, corsesComments,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
