import { topProducts } from '@/core/data/dashboard/default';
import { routes } from '@/router/routes';
import { getImages } from '@/utils/index';
import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const products = ref(topProducts);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('height-equal'),
    header: ('total-revenue '),
    padding: (false),
    headerTitle: ('Top Products'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    header: ('total-revenue '),
    padding: (false),
    headerTitle: ('Top Products'),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "top-product-card" },
});
/** @type {__VLS_StyleScopedClasses['top-product-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [product] of __VLS_vFor((__VLS_ctx.products))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (product.id),
        ...{ class: "d-flex top-product gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['top-product']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid product-img" },
        src: (__VLS_ctx.getImages(product.image)),
        alt: "product",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-img']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "w-100 d-flex justify-content-between align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-details" },
    });
    /** @type {__VLS_StyleScopedClasses['product-details']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge rounded-pill badge-light text-dark" },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
    /** @type {__VLS_StyleScopedClasses['badge-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
    (product.sku);
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-10 f-w-500 line-clamp" },
    }));
    const __VLS_16 = __VLS_15({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "f-10 f-w-500 line-clamp" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['line-clamp']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    (product.title);
    // @ts-ignore
    [routes, products, getImages,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-10 f-w-500 txt-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
    (product.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-items" },
    });
    /** @type {__VLS_StyleScopedClasses['product-items']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space gap-1" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-10 f-w-500 f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-10 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (product.qty);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space gap-1" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-10 f-w-500 f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-10 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (product.revenue);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space gap-1" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-10 f-w-500 f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-10 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (product.profit);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
