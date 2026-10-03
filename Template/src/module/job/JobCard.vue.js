import { getImages } from '@/utils/index';
import { defineAsyncComponent } from 'vue';
const props = defineProps();
const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.details) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card" },
        ...{ class: ({ 'ribbon-vertical-left-wrapper': __VLS_ctx.details.ribbon }) },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    /** @type {__VLS_StyleScopedClasses['ribbon-vertical-left-wrapper']} */ ;
    if (__VLS_ctx.details.ribbon) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ribbon ribbon-bookmark ribbon-vertical-left ribbon-warning" },
        });
        /** @type {__VLS_StyleScopedClasses['ribbon']} */ ;
        /** @type {__VLS_StyleScopedClasses['ribbon-bookmark']} */ ;
        /** @type {__VLS_StyleScopedClasses['ribbon-vertical-left']} */ ;
        /** @type {__VLS_StyleScopedClasses['ribbon-warning']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: (`icofont icofont-${__VLS_ctx.details.ribbonIcon}`) },
        });
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "job-search" },
    });
    /** @type {__VLS_StyleScopedClasses['job-search']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body" },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-40 img-fluid m-r-20" },
        src: (__VLS_ctx.getImages(__VLS_ctx.details.image)),
        alt: (__VLS_ctx.details.title),
    });
    /** @type {__VLS_StyleScopedClasses['img-40']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    (__VLS_ctx.details.title);
    if (__VLS_ctx.details.tagTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "badge badge-primary pull-right" },
        });
        /** @type {__VLS_StyleScopedClasses['badge']} */ ;
        /** @type {__VLS_StyleScopedClasses['badge-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
        (__VLS_ctx.details.tagTitle);
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "pull-right" },
        });
        /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
        (__VLS_ctx.details.time);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
    (__VLS_ctx.details.subTitle);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "ps-sm-1" },
    });
    /** @type {__VLS_StyleScopedClasses['ps-sm-1']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Rate} */
    Rate;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        rating: (__VLS_ctx.details.rating),
    }));
    const __VLS_2 = __VLS_1({
        rating: (__VLS_ctx.details.rating),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.details.description);
}
// @ts-ignore
[details, details, details, details, details, details, details, details, details, details, details, details, getImages,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
