import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const DetailsPageComment = defineAsyncComponent(() => import('@/module/blog/DetailsPageComment.vue'));
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
if (props.details || props.comment) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        border: (false),
        padding: (false),
    }));
    const __VLS_2 = __VLS_1({
        border: (false),
        padding: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5 = {};
    const { default: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "blog-single" },
    });
    /** @type {__VLS_StyleScopedClasses['blog-single']} */ ;
    if (props.details) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "blog-box blog-details" },
        });
        /** @type {__VLS_StyleScopedClasses['blog-box']} */ ;
        /** @type {__VLS_StyleScopedClasses['blog-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid w-100" },
            src: (__VLS_ctx.getImages(__VLS_ctx.details.image)),
            alt: "blog-main",
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "blog-details" },
        });
        /** @type {__VLS_StyleScopedClasses['blog-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
            ...{ class: "blog-social" },
        });
        /** @type {__VLS_StyleScopedClasses['blog-social']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        (__VLS_ctx.details.date);
        (__VLS_ctx.details.year);
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icofont icofont-user" },
        });
        /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
        /** @type {__VLS_StyleScopedClasses['icofont-user']} */ ;
        (__VLS_ctx.details.createdBy);
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icofont icofont-thumbs-up" },
        });
        /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
        /** @type {__VLS_StyleScopedClasses['icofont-thumbs-up']} */ ;
        (__VLS_ctx.details.hits);
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icofont icofont-ui-chat" },
        });
        /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
        /** @type {__VLS_StyleScopedClasses['icofont-ui-chat']} */ ;
        (__VLS_ctx.details.comment);
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
        (__VLS_ctx.details.text);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "single-blog-content-top" },
        });
        /** @type {__VLS_StyleScopedClasses['single-blog-content-top']} */ ;
        for (const [detail, index] of __VLS_vFor((__VLS_ctx.details.description))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                key: (index),
            });
            (detail.title);
            // @ts-ignore
            [getImages, details, details, details, details, details, details, details, details,];
        }
    }
    if (props.comment) {
        let __VLS_7;
        /** @ts-ignore @type {typeof __VLS_components.DetailsPageComment} */
        DetailsPageComment;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
            comments: (__VLS_ctx.comment),
        }));
        const __VLS_9 = __VLS_8({
            comments: (__VLS_ctx.comment),
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    }
    // @ts-ignore
    [comment,];
    var __VLS_3;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
