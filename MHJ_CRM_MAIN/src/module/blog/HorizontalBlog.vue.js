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
        ...{ class: "blog-box blog-list row" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['blog-list']} */ ;
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-5" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-5']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid sm-100-w" },
        src: (__VLS_ctx.getImages(props.blog.image)),
        alt: (props.blog.title),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm-100-w']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-7" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-7']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "blog-details" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-details']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "blog-date" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-date']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (props.blog.date);
    (props.blog.year);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (props.blog.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "blog-bottom-content" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-bottom-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "blog-social" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-social']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    (props.blog.createdBy);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    (props.blog.hits);
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
    (props.blog.description);
}
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
