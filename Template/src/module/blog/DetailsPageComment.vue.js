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
if (props.comments) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        ...{ class: "comment-box pb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['comment-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    for (const [comment] of __VLS_vFor((__VLS_ctx.comments))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: (comment.reply ? 'is-reply' : 'is-sent') },
            key: (comment.id),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`media d-flex ${comment.comments == 598 ? 'align-self-center' : ''}`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "align-self-center" },
            src: (__VLS_ctx.getImages(comment.image)),
            alt: "Generic placeholder image",
        });
        /** @type {__VLS_StyleScopedClasses['align-self-center']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex-grow-1" },
        });
        /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "row" },
        });
        /** @type {__VLS_StyleScopedClasses['row']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-md-4 xl-100" },
        });
        /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "mt-0" },
        });
        /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
        (comment.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (comment.designation);
        if (!comment.reply) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "col-md-8 xl-100" },
            });
            /** @type {__VLS_StyleScopedClasses['col-md-8']} */ ;
            /** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
                ...{ class: "comment-social float-start float-md-end learning-comment" },
            });
            /** @type {__VLS_StyleScopedClasses['comment-social']} */ ;
            /** @type {__VLS_StyleScopedClasses['float-start']} */ ;
            /** @type {__VLS_StyleScopedClasses['float-md-end']} */ ;
            /** @type {__VLS_StyleScopedClasses['learning-comment']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: "icofont icofont-thumbs-up" },
            });
            /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
            /** @type {__VLS_StyleScopedClasses['icofont-thumbs-up']} */ ;
            (comment.hits);
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: "icofont icofont-ui-chat" },
            });
            /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
            /** @type {__VLS_StyleScopedClasses['icofont-ui-chat']} */ ;
            (comment.comments);
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (comment.description);
        // @ts-ignore
        [comments, getImages,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "cmt-box p-0" },
    });
    /** @type {__VLS_StyleScopedClasses['cmt-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-label" },
        for: "exampleFormControlTextarea1",
    });
    /** @type {__VLS_StyleScopedClasses['form-label']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-f-start gap-1" },
    });
    /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)({
        ...{ class: "form-control" },
        id: "exampleFormControlTextarea1",
        rows: "2",
        placeholder: "Comment Here..",
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-paper-plane" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-paper-plane']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
