import { defineAsyncComponent } from 'vue';
import { courseList } from '@/core/data/courses';
const HorizontalBlog = defineAsyncComponent(() => import('@/module/blog/HorizontalBlog.vue'));
const VerticalBlog = defineAsyncComponent(() => import('@/module/blog/VerticalBlog.vue'));
const CourseFilter = defineAsyncComponent(() => import('@/module/course/CourseFilter.vue'));
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [list] of __VLS_vFor((__VLS_ctx.courseList.slice(0, 2)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-12" },
        key: (list.id),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.HorizontalBlog} */
    HorizontalBlog;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        blog: (list),
    }));
    const __VLS_2 = __VLS_1({
        blog: (list),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [courseList,];
}
for (const [list] of __VLS_vFor((__VLS_ctx.courseList.slice(2, __VLS_ctx.courseList.length)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 xl-50 col-sm-6 box-col-6" },
        key: (list.id),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
    let __VLS_5;
    /** @ts-ignore @type {typeof __VLS_components.VerticalBlog} */
    VerticalBlog;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        blog: (list),
    }));
    const __VLS_7 = __VLS_6({
        blog: (list),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    // @ts-ignore
    [courseList, courseList,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 xl-40 box-col-12 learning-filter" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-40']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['learning-filter']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.CourseFilter} */
CourseFilter;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
