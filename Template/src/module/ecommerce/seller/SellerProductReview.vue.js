import { sellerDetails } from '@/core/data/seller';
import { getImages } from '@/utils/index';
const productReview = sellerDetails.review;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "review-people" },
});
/** @type {__VLS_StyleScopedClasses['review-people']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "review-list custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['review-list']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [review, index] of __VLS_vFor((__VLS_ctx.productReview))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "people-box" },
    });
    /** @type {__VLS_StyleScopedClasses['people-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(review.image)),
        alt: (review.name),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "people-comment" },
    });
    /** @type {__VLS_StyleScopedClasses['people-comment']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "people-name" },
    });
    /** @type {__VLS_StyleScopedClasses['people-name']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "name" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['name']} */ ;
    (review.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "date-time" },
    });
    /** @type {__VLS_StyleScopedClasses['date-time']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "text-content" },
    });
    /** @type {__VLS_StyleScopedClasses['text-content']} */ ;
    (review.product);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-rating" },
    });
    /** @type {__VLS_StyleScopedClasses['product-rating']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.StarRating} */
    StarRating;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        rating: (review.rating),
        starSize: (20),
        readOnly: (true),
        showRating: (false),
        maxRating: (5),
        increment: (0.5),
    }));
    const __VLS_2 = __VLS_1({
        rating: (review.rating),
        starSize: (20),
        readOnly: (true),
        showRating: (false),
        maxRating: (5),
        increment: (0.5),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (review.reviewText);
    // @ts-ignore
    [productReview, getImages,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
