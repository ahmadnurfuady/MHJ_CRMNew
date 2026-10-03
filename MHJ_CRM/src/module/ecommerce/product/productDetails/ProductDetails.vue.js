import { computed, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from '@/router/routes';
import { social } from '@/core/data/ecommerce';
import { useProduct } from '@/store/product';
import { storeToRefs } from 'pinia';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'));
const StockView = defineAsyncComponent(() => import('@/module/ecommerce/product/productDetails/StockView.vue'));
const store = useProduct();
const { productState } = storeToRefs(store);
const { addToCart, updateCartQuantity } = store;
const router = useRouter();
let paramId = router.currentRoute.value.params.id;
if (Array.isArray(paramId)) {
    paramId = paramId[0];
}
const routeId = parseInt(paramId);
const productData = productState.value.product.find((item) => item.id === routeId);
const cartProduct = computed(() => productState.value.cart.find((item) => item.id === routeId));
const displayedProduct = computed(() => cartProduct.value || productData);
function increment(product) {
    addToCart(product);
    updateCartQuantity({ product, qty: 1 });
}
function decrement(product) {
    updateCartQuantity({ product, qty: -1 });
}
function addToCarts(product) {
    addToCart(product);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.displayedProduct) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-5 box-col-6 order-xxl-0 order-1" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['order-xxl-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['order-1']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-page-details" },
    });
    /** @type {__VLS_StyleScopedClasses['product-page-details']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    (__VLS_ctx.displayedProduct?.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-price" },
    });
    /** @type {__VLS_StyleScopedClasses['product-price']} */ ;
    (__VLS_ctx.displayedProduct?.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.del, __VLS_intrinsics.del)({});
    (__VLS_ctx.displayedProduct?.salePrice);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "product-color" },
    });
    /** @type {__VLS_StyleScopedClasses['product-color']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "bg-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "bg-secondary" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "bg-success" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-success']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "bg-info" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-info']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "bg-warning" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-warning']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.displayedProduct?.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.StockView} */
    StockView;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "f-w-600 product-title" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-8" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-8']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['product-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "product-social" },
    });
    /** @type {__VLS_StyleScopedClasses['product-social']} */ ;
    for (const [item, index] of __VLS_vFor((__VLS_ctx.social))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "d-inline-block" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: (item.link),
            target: "_blank",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: (item.icon) },
        });
        // @ts-ignore
        [displayedProduct, displayedProduct, displayedProduct, displayedProduct, displayedProduct, social,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ class: "d-inline-block f-right" },
    });
    /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-right']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row g-sm-3 g-1" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-sm-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "f-w-600 product-title" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-8" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-8']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "touchspin-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['touchspin-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.displayedProduct))
                    return;
                __VLS_ctx.decrement(__VLS_ctx.displayedProduct);
                // @ts-ignore
                [displayedProduct, decrement,];
            } },
        ...{ class: "decrement-touchspin btn-touchspin touchspin-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['decrement-touchspin']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-touchspin']} */ ;
    /** @type {__VLS_StyleScopedClasses['touchspin-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa fa-minus" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-minus']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "input-touchspin spin-outline-primary" },
        type: "number",
        readonly: true,
    });
    (__VLS_ctx.displayedProduct.quantity);
    /** @type {__VLS_StyleScopedClasses['input-touchspin']} */ ;
    /** @type {__VLS_StyleScopedClasses['spin-outline-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.displayedProduct))
                    return;
                __VLS_ctx.increment(__VLS_ctx.displayedProduct);
                // @ts-ignore
                [displayedProduct, displayedProduct, increment,];
            } },
        ...{ class: "increment-touchspin btn-touchspin touchspin-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['increment-touchspin']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-touchspin']} */ ;
    /** @type {__VLS_StyleScopedClasses['touchspin-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa fa-plus" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "f-w-600 product-title" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-8" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-8']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "main-star-rating common-f-start" },
    });
    /** @type {__VLS_StyleScopedClasses['main-star-rating']} */ ;
    /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-flex star-box" },
    });
    /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['star-box']} */ ;
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.RatingStars} */
    RatingStars;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        rating: (__VLS_ctx.displayedProduct?.star || 0),
    }));
    const __VLS_13 = __VLS_12({
        rating: (__VLS_ctx.displayedProduct?.star || 0),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "m-t-15 btn-showcase" },
    });
    /** @type {__VLS_StyleScopedClasses['m-t-15']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-showcase']} */ ;
    let __VLS_16;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
        ...{ 'onClick': {} },
        ...{ class: "btn btn-primary btn-hover-effect" },
        to: (__VLS_ctx.routes.Ecommerce.Cart),
    }));
    const __VLS_18 = __VLS_17({
        ...{ 'onClick': {} },
        ...{ class: "btn btn-primary btn-hover-effect" },
        to: (__VLS_ctx.routes.Ecommerce.Cart),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_21;
    const __VLS_22 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!(__VLS_ctx.displayedProduct))
                    return;
                __VLS_ctx.addToCarts(__VLS_ctx.displayedProduct);
                // @ts-ignore
                [displayedProduct, displayedProduct, routes, addToCarts,];
            } });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-hover-effect']} */ ;
    const { default: __VLS_23 } = __VLS_19.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa fa-shopping-basket me-1" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-shopping-basket']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-1']} */ ;
    // @ts-ignore
    [];
    var __VLS_19;
    var __VLS_20;
    let __VLS_24;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
        ...{ class: "btn btn-danger btn-hover-effect" },
        to: (__VLS_ctx.routes.Ecommerce.Wishlist),
    }));
    const __VLS_26 = __VLS_25({
        ...{ class: "btn btn-danger btn-hover-effect" },
        to: (__VLS_ctx.routes.Ecommerce.Wishlist),
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-hover-effect']} */ ;
    const { default: __VLS_29 } = __VLS_27.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa fa-heart me-1" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-heart']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-1']} */ ;
    // @ts-ignore
    [routes,];
    var __VLS_27;
    // @ts-ignore
    [];
    var __VLS_3;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
