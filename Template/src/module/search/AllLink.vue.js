import { defineAsyncComponent } from 'vue';
import { allItem } from '@/core/data/searchResult';
import { getImages } from '@/utils/index';
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-8 col-xl-6 box-col-7" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-7']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.allItem.slice(0, 4)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "info-block" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['info-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({});
    (item.link);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (item.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "star-ratings" },
    });
    /** @type {__VLS_StyleScopedClasses['star-ratings']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "search-info" },
    });
    /** @type {__VLS_StyleScopedClasses['search-info']} */ ;
    if (item.rating) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "rating" },
        });
        /** @type {__VLS_StyleScopedClasses['rating']} */ ;
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.RatingStars} */
        RatingStars;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            rating: (item.rating),
        }));
        const __VLS_2 = __VLS_1({
            rating: (item.rating),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    // @ts-ignore
    [allItem,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-xl-6 box-col-5 mt-4" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card o-hidden" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['o-hidden']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "blog-box blog-shadow" },
});
/** @type {__VLS_StyleScopedClasses['blog-box']} */ ;
/** @type {__VLS_StyleScopedClasses['blog-shadow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('blog/blog.jpg')),
    alt: "IMAGES",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "blog-details" },
});
/** @type {__VLS_StyleScopedClasses['blog-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
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
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-thumbs-up" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-thumbs-up']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.allItem.slice(4, 6)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "info-block" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['info-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({});
    (item.link);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (item.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "star-ratings" },
    });
    /** @type {__VLS_StyleScopedClasses['star-ratings']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "search-info" },
    });
    /** @type {__VLS_StyleScopedClasses['search-info']} */ ;
    if (item.rating) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "rating" },
        });
        /** @type {__VLS_StyleScopedClasses['rating']} */ ;
        let __VLS_5;
        /** @ts-ignore @type { | typeof __VLS_components.RatingStars} */
        RatingStars;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            rating: (item.rating),
        }));
        const __VLS_7 = __VLS_6({
            rating: (item.rating),
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    // @ts-ignore
    [allItem, getImages,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 m-t-30" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['m-t-30']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    'aria-label': "...",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "pagination pagination-primary justify-content-end" },
});
/** @type {__VLS_StyleScopedClasses['pagination']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "page-item disabled" },
});
/** @type {__VLS_StyleScopedClasses['page-item']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "page-link" },
    href: "#",
    tabindex: "-1",
});
/** @type {__VLS_StyleScopedClasses['page-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "page-item" },
});
/** @type {__VLS_StyleScopedClasses['page-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "page-link" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['page-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "page-item active" },
});
/** @type {__VLS_StyleScopedClasses['page-item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "page-link" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['page-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "sr-only" },
});
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "page-item" },
});
/** @type {__VLS_StyleScopedClasses['page-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "page-link" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['page-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "page-item" },
});
/** @type {__VLS_StyleScopedClasses['page-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "page-link" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['page-link']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
