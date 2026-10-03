import { getImages } from '@/utils/index';
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
if (props.blog) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "blog-box blog-grid text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['blog-grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid top-radius-blog" },
        src: (__VLS_ctx.getImages(props.blog.image)),
        alt: (props.blog.title),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['top-radius-blog']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "blog-details-main" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-details-main']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "blog-social" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-social']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    (props.blog.date);
    (props.blog.year);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    (props.blog.createdBy);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    (props.blog.hits);
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "blog-bottom-details" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-bottom-details']} */ ;
    (props.blog.title);
}
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
