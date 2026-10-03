import { ref, defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const comments = ref(projectDetails.projectSummary.comments);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardType: ('classic'),
    headerTitle: ('Comments'),
    sortDescription: ('Total 120 Comments'),
    cardBodyClass: ('pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Courses.CourseDetails),
}));
const __VLS_2 = __VLS_1({
    cardType: ('classic'),
    headerTitle: ('Comments'),
    sortDescription: ('Total 120 Comments'),
    cardBodyClass: ('pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Courses.CourseDetails),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "user-comment-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['user-comment-wrapper']} */ ;
for (const [comment, index] of __VLS_vFor((__VLS_ctx.comments))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "common-align gap-2 align-items-start" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-start']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(comment.image)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space pb-1" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['pb-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (comment.name);
    if (!comment.isReply) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "btn c-o-light" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
        let __VLS_7;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
            icon: ('stroke-arrow'),
            type: "default",
            svgClass: ('me-2'),
        }));
        const __VLS_9 = __VLS_8({
            icon: ('stroke-arrow'),
            type: "default",
            svgClass: ('me-2'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (comment.message);
    // @ts-ignore
    [routes, comments, getImages,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cmt-box" },
});
/** @type {__VLS_StyleScopedClasses['cmt-box']} */ ;
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
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
