import { ref, onMounted, defineAsyncComponent } from "vue";
import { wishlistItems } from "@/core/data/wishlist";
import { routes } from "@/router/routes";
import { formatDecimalOnly, getImages } from "@/utils/index";
const Card = defineAsyncComponent(() => import("@/components/shared/card/Card.vue"));
const wishlistItemsList = ref([]);
onMounted(() => {
    const items = localStorage.getItem("wishlist");
    if (items && items !== "null" && items !== "" && JSON.parse(items).length > 0) {
        wishlistItemsList.value = JSON.parse(items);
    }
    else {
        wishlistItemsList.value = wishlistItems;
        localStorage.setItem("wishlist", JSON.stringify(wishlistItemsList.value));
    }
});
function removeItem(item) {
    wishlistItemsList.value = wishlistItemsList.value.filter((items) => items.id !== item.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItemsList.value));
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
(__VLS_ctx.wishlistItemsList && __VLS_ctx.wishlistItemsList.length
    ? __VLS_ctx.wishlistItemsList.length
    : 0);
// @ts-ignore
[wishlistItemsList, wishlistItemsList, wishlistItemsList,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3 m-b-20" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['m-b-20']} */ ;
if (__VLS_ctx.wishlistItemsList && __VLS_ctx.wishlistItemsList.length) {
    for (const [item, index] of __VLS_vFor((__VLS_ctx.wishlistItemsList))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-xxl-4 col-sm-6 box-col-6 inbox-data" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
        /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
        /** @type {__VLS_StyleScopedClasses['inbox-data']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card mb-0 h-100" },
        });
        /** @type {__VLS_StyleScopedClasses['card']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-100']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "wishlist-box card-body h-100" },
        });
        /** @type {__VLS_StyleScopedClasses['wishlist-box']} */ ;
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-100']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "wishlist-image" },
        });
        /** @type {__VLS_StyleScopedClasses['wishlist-image']} */ ;
        let __VLS_6;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        }));
        const __VLS_8 = __VLS_7({
            to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const { default: __VLS_11 } = __VLS_9.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            src: (__VLS_ctx.getImages(item.productImage)),
            alt: (item.productName),
        });
        // @ts-ignore
        [wishlistItemsList, wishlistItemsList, wishlistItemsList, routes, getImages,];
        var __VLS_9;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "wishlist-close-btn" },
        });
        /** @type {__VLS_StyleScopedClasses['wishlist-close-btn']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.wishlistItemsList && __VLS_ctx.wishlistItemsList.length))
                        throw 0;
                    return (__VLS_ctx.removeItem(item));
                    // @ts-ignore
                    [removeItem,];
                } },
            ...{ class: "btn trash-3" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['trash-3']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-xmark" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-xmark']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "wishlist-footer" },
        });
        /** @type {__VLS_StyleScopedClasses['wishlist-footer']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "brand-name" },
        });
        /** @type {__VLS_StyleScopedClasses['brand-name']} */ ;
        (item.brand);
        let __VLS_12;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
            to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        }));
        const __VLS_14 = __VLS_13({
            to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const { default: __VLS_17 } = __VLS_15.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
        (item.productName);
        // @ts-ignore
        [routes,];
        var __VLS_15;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (`txt-${item.status == 'Out of Stock' ? 'danger' : 'success'} mt-1`) },
        });
        (item.status);
        if (item.discountPrice) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
                ...{ class: "price" },
            });
            /** @type {__VLS_StyleScopedClasses['price']} */ ;
            (__VLS_ctx.formatDecimalOnly(item.discountPrice));
            __VLS_asFunctionalElement1(__VLS_intrinsics.del, __VLS_intrinsics.del)({});
            (__VLS_ctx.formatDecimalOnly(item.price));
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
                ...{ class: "price" },
            });
            /** @type {__VLS_StyleScopedClasses['price']} */ ;
            (__VLS_ctx.formatDecimalOnly(item.price));
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "common-flex" },
        });
        /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
        let __VLS_18;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
            ...{ class: "btn bg-primary btn-hover-effect" },
            ...{ class: ({ disabled: item.status == 'Out of Stock' }) },
            to: (__VLS_ctx.routes.Ecommerce.Cart),
        }));
        const __VLS_20 = __VLS_19({
            ...{ class: "btn bg-primary btn-hover-effect" },
            ...{ class: ({ disabled: item.status == 'Out of Stock' }) },
            to: (__VLS_ctx.routes.Ecommerce.Cart),
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-hover-effect']} */ ;
        /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
        const { default: __VLS_23 } = __VLS_21.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-cart-shopping me-2" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-cart-shopping']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
        // @ts-ignore
        [routes, formatDecimalOnly, formatDecimalOnly, formatDecimalOnly,];
        var __VLS_21;
        if (item.status == 'Out of Stock') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                ...{ class: "btn bg-danger btn-hover-effect" },
                href: "#",
            });
            /** @type {__VLS_StyleScopedClasses['btn']} */ ;
            /** @type {__VLS_StyleScopedClasses['bg-danger']} */ ;
            /** @type {__VLS_StyleScopedClasses['btn-hover-effect']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: "fa-solid fa-bell me-2" },
            });
            /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
            /** @type {__VLS_StyleScopedClasses['fa-bell']} */ ;
            /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
        }
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12 text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid empty-wishlist" },
        src: (`${__VLS_ctx.getImages('no-data.svg')}`),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['empty-wishlist']} */ ;
}
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
