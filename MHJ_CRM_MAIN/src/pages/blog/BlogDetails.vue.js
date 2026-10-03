import { defineAsyncComponent } from 'vue';
import { blog, blogComments } from '@/core/data/blog';
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
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.DetailsPage} */
DetailsPage;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    details: (__VLS_ctx.blog),
    comment: (__VLS_ctx.blogComments),
}));
const __VLS_2 = __VLS_1({
    details: (__VLS_ctx.blog),
    comment: (__VLS_ctx.blogComments),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[blog, blogComments,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
