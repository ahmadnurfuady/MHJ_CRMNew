import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'));
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-faq" },
});
/** @type {__VLS_StyleScopedClasses['header-faq']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
(props.headerTitle);
if (props.details) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    for (const [featured] of __VLS_vFor((props.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-xl-3 xl-50 col-md-6 box-col-6" },
            key: (featured.id),
        });
        /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
        /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card features-faq product-box" },
        });
        /** @type {__VLS_StyleScopedClasses['card']} */ ;
        /** @type {__VLS_StyleScopedClasses['features-faq']} */ ;
        /** @type {__VLS_StyleScopedClasses['product-box']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "faq-image product-img" },
        });
        /** @type {__VLS_StyleScopedClasses['faq-image']} */ ;
        /** @type {__VLS_StyleScopedClasses['product-img']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid" },
            src: (__VLS_ctx.getImages(featured.image)),
            alt: (featured.title),
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-hover" },
        });
        /** @type {__VLS_StyleScopedClasses['product-hover']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icon-link" },
        });
        /** @type {__VLS_StyleScopedClasses['icon-link']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icon-import" },
        });
        /** @type {__VLS_StyleScopedClasses['icon-import']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "pb-1" },
        });
        /** @type {__VLS_StyleScopedClasses['pb-1']} */ ;
        (featured.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "c-light" },
        });
        /** @type {__VLS_StyleScopedClasses['c-light']} */ ;
        (featured.description);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-footer" },
        });
        /** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (featured.date);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "pull-right" },
        });
        /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.Rate} */
        Rate;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            rating: (featured.rating),
        }));
        const __VLS_2 = __VLS_1({
            rating: (featured.rating),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        // @ts-ignore
        [getImages,];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
