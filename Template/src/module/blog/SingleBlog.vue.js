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
        ...{ class: "blog-box blog-shadow" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['blog-shadow']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(props.blog.image)),
        alt: (props.blog.title),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "blog-details" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-details']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (props.blog.date);
    (props.blog.year);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: "text-white" },
    });
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    (props.blog.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "blog-social" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-social']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icofont icofont-user" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-user']} */ ;
    (props.blog.createdBy);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icofont icofont-thumbs-up" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-thumbs-up']} */ ;
    (props.blog.hits);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icofont icofont-ui-chat" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-ui-chat']} */ ;
    (props.blog.comment);
}
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
