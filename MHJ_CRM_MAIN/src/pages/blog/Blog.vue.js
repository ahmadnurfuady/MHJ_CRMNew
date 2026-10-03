import { defineAsyncComponent } from 'vue';
import { blogs } from '@/core/data/blog';
const SingleBlog = defineAsyncComponent(() => import('@/module/blog/SingleBlog.vue'));
const HorizontalBlog = defineAsyncComponent(() => import('@/module/blog/HorizontalBlog.vue'));
const VerticalBlog = defineAsyncComponent(() => import('@/module/blog/VerticalBlog.vue'));
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
for (const [blog] of __VLS_vFor((__VLS_ctx.blogs.slice(0, 1)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-6 set-col-12 box-col-12" },
        key: (blog.id),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['set-col-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.SingleBlog} */
    SingleBlog;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        blog: (blog),
    }));
    const __VLS_2 = __VLS_1({
        blog: (blog),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [blogs,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6 set-col-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['set-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
for (const [blog] of __VLS_vFor((__VLS_ctx.blogs.slice(1, 3)))) {
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.HorizontalBlog} */
    HorizontalBlog;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        blog: (blog),
        key: (blog.id),
    }));
    const __VLS_7 = __VLS_6({
        blog: (blog),
        key: (blog.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    // @ts-ignore
    [blogs,];
}
for (const [blog] of __VLS_vFor((__VLS_ctx.blogs.slice(3, __VLS_ctx.blogs.length)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6 col-xxl-3 box-col-6" },
        key: (blog.id),
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.VerticalBlog} */
    VerticalBlog;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        blog: (blog),
    }));
    const __VLS_12 = __VLS_11({
        blog: (blog),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    // @ts-ignore
    [blogs, blogs,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
