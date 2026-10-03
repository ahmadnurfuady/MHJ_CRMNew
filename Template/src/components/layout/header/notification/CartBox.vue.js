import { getImages } from '@/utils';
import { useProduct } from '@/store/product';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { routes } from '@/router/routes';
const store = useProduct();
const { productState, getTotalAmount } = storeToRefs(store);
const { removeProduct, updateCartQuantity } = store;
const cart = computed(() => productState.value.cart);
const totalAmount = computed(() => getTotalAmount.value);
function removeProducts(product) {
    removeProduct(product);
}
function increment(product, qty = 1) {
    updateCartQuantity({ product, qty });
}
function decrement(product, qty = -1) {
    updateCartQuantity({ product, qty });
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cart-dropdown mt-4" },
});
/** @type {__VLS_StyleScopedClasses['cart-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
if (__VLS_ctx.cart.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "cart-main-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['cart-main-wrapper']} */ ;
    for (const [item, index] of __VLS_vFor((__VLS_ctx.cart))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
            ...{ class: "cart-product pr-0 pl-0 pb-3" },
        });
        /** @type {__VLS_StyleScopedClasses['cart-product']} */ ;
        /** @type {__VLS_StyleScopedClasses['pr-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['pl-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "media" },
        });
        /** @type {__VLS_StyleScopedClasses['media']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid b-r-5 me-3 img-60" },
            src: (__VLS_ctx.getImages(item.images[0])),
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['b-r-5']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-60']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "media-body" },
        });
        /** @type {__VLS_StyleScopedClasses['media-body']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "f-light f-w-500" },
        });
        /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
        (item.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-qty-box" },
        });
        /** @type {__VLS_StyleScopedClasses['product-qty-box']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "qty-box" },
        });
        /** @type {__VLS_StyleScopedClasses['qty-box']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "input-group" },
        });
        /** @type {__VLS_StyleScopedClasses['input-group']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cart.length))
                        return;
                    __VLS_ctx.decrement(item);
                    // @ts-ignore
                    [cart, cart, getImages, decrement,];
                } },
            ...{ class: "btn decrement-touchspin btn-touchspin quantity-left-minus" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['decrement-touchspin']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-touchspin']} */ ;
        /** @type {__VLS_StyleScopedClasses['quantity-left-minus']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "input-touchspin spin-outline-light" },
            type: "number",
        });
        (item.quantity);
        /** @type {__VLS_StyleScopedClasses['input-touchspin']} */ ;
        /** @type {__VLS_StyleScopedClasses['spin-outline-light']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cart.length))
                        return;
                    __VLS_ctx.increment(item);
                    // @ts-ignore
                    [increment,];
                } },
            ...{ class: "btn increment-touchspin btn-touchspin touchspin-light quantity-right-plus" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['increment-touchspin']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-touchspin']} */ ;
        /** @type {__VLS_StyleScopedClasses['touchspin-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['quantity-right-plus']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "font-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
        (item.price);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "close-circle" },
        });
        /** @type {__VLS_StyleScopedClasses['close-circle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cart.length))
                        return;
                    __VLS_ctx.removeProducts(item);
                    // @ts-ignore
                    [removeProducts,];
                } },
            ...{ class: "bg-danger" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['bg-danger']} */ ;
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            type: "x",
        }));
        const __VLS_2 = __VLS_1({
            type: "x",
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        // @ts-ignore
        [];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "mb-3 total" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['total']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-right" },
    });
    /** @type {__VLS_StyleScopedClasses['f-right']} */ ;
    (__VLS_ctx.totalAmount);
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cart-empty show" },
    });
    /** @type {__VLS_StyleScopedClasses['cart-empty']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cart-image" },
    });
    /** @type {__VLS_StyleScopedClasses['cart-image']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages('ecommerce/order-trash.gif')),
        alt: "empty",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-footer pb-0 pr-0 pl-0" },
});
/** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    to: (__VLS_ctx.routes.Ecommerce.Cart),
    ...{ class: "btn btn-primary" },
}));
const __VLS_7 = __VLS_6({
    to: (__VLS_ctx.routes.Ecommerce.Cart),
    ...{ class: "btn btn-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
const { default: __VLS_10 } = __VLS_8.slots;
// @ts-ignore
[getImages, totalAmount, routes,];
var __VLS_8;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
