import { ref, defineAsyncComponent } from "vue";
import { products } from "@/core/data/product";
import { useProduct } from "@/store/product";
import { storeToRefs } from "pinia";
import { getImages } from "@/utils/index";
import { routes } from "@/router/routes";
const ProductModel = defineAsyncComponent(() => import("@/module/ecommerce/product/grid/ProductModel.vue"));
const RatingStars = defineAsyncComponent(() => import("@/components/shared/RatingStars.vue"));
const modalShow = ref(false);
const store = useProduct();
const { addToCart, productData } = store;
const { filteredProducts, uiState } = storeToRefs(store);
productData(products);
const productDetails = ref(null);
function openModal(product) {
    modalShow.value = true;
    return (productDetails.value = product);
}
function addToCars(product) {
    addToCart(product);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-wrapper-grid" },
    ...{ class: (__VLS_ctx.uiState.listViewEnable ? 'list-view' : '') },
});
/** @type {__VLS_StyleScopedClasses['product-wrapper-grid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
if (__VLS_ctx.filteredProducts.length) {
    for (const [product, index] of __VLS_vFor((__VLS_ctx.filteredProducts))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: ([
                    __VLS_ctx.uiState.col2
                        ? 'col-md-6'
                        : __VLS_ctx.uiState.col3
                            ? 'col-xl-4 col-sm-4'
                            : __VLS_ctx.uiState.col4
                                ? 'col-xxl-3 col-md-4 col-sm-6 box-col-4'
                                : __VLS_ctx.uiState.col6
                                    ? 'col-xl-2 col-lg-4 col-md-6'
                                    : __VLS_ctx.uiState.list
                                        ? 'col-xl-3 col-lg-4 col-sm-6 xl-25 col-xl-12'
                                        : 'col-xl-3 col-md-6',
                ]) },
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card" },
        });
        /** @type {__VLS_StyleScopedClasses['card']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-box" },
        });
        /** @type {__VLS_StyleScopedClasses['product-box']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-img" },
        });
        /** @type {__VLS_StyleScopedClasses['product-img']} */ ;
        if (product.gift) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "ribbon ribbon-secondary ribbon-vertical-left" },
            });
            /** @type {__VLS_StyleScopedClasses['ribbon']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-secondary']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-vertical-left']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: "icon-gift" },
            });
            /** @type {__VLS_StyleScopedClasses['icon-gift']} */ ;
        }
        if (product.sale) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "ribbon ribbon-danger" },
            });
            /** @type {__VLS_StyleScopedClasses['ribbon']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-danger']} */ ;
        }
        if (product.off) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "ribbon ribbon-success ribbon-right" },
            });
            /** @type {__VLS_StyleScopedClasses['ribbon']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-success']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-right']} */ ;
        }
        if (product.ribbon) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "ribbon ribbon-bookmark ribbon-vertical-right ribbon-info" },
            });
            /** @type {__VLS_StyleScopedClasses['ribbon']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-bookmark']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-vertical-right']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-info']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: "icofont icofont-love" },
            });
            /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
            /** @type {__VLS_StyleScopedClasses['icofont-love']} */ ;
        }
        if (product.hot) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "ribbon ribbon-clip ribbon-warning" },
            });
            /** @type {__VLS_StyleScopedClasses['ribbon']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-clip']} */ ;
            /** @type {__VLS_StyleScopedClasses['ribbon-warning']} */ ;
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid" },
            src: (__VLS_ctx.getImages(product.images[0])),
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-hover" },
        });
        /** @type {__VLS_StyleScopedClasses['product-hover']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredProducts.length))
                        throw 0;
                    return (__VLS_ctx.addToCars(product));
                    // @ts-ignore
                    [uiState, uiState, uiState, uiState, uiState, uiState, filteredProducts, filteredProducts, getImages, addToCars,];
                } },
        });
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            to: (__VLS_ctx.routes.Ecommerce.Cart),
            ...{ class: "btn" },
        }));
        const __VLS_2 = __VLS_1({
            to: (__VLS_ctx.routes.Ecommerce.Cart),
            ...{ class: "btn" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        const { default: __VLS_5 } = __VLS_3.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icon-shopping-cart" },
        });
        /** @type {__VLS_StyleScopedClasses['icon-shopping-cart']} */ ;
        // @ts-ignore
        [routes,];
        var __VLS_3;
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredProducts.length))
                        throw 0;
                    return (__VLS_ctx.openModal(product));
                    // @ts-ignore
                    [openModal,];
                } },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "btn" },
            'data-bs-toggle': "modal",
            'data-bs-target': "#exampleModalCenter",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icon-eye" },
        });
        /** @type {__VLS_StyleScopedClasses['icon-eye']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "btn" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-code-compare fa-rotate-90" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-code-compare']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-rotate-90']} */ ;
        let __VLS_6;
        /** @ts-ignore @type { | typeof __VLS_components.ProductModel} */
        ProductModel;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            productDetails: (__VLS_ctx.productDetails),
        }));
        const __VLS_8 = __VLS_7({
            productDetails: (__VLS_ctx.productDetails),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-details" },
        });
        /** @type {__VLS_StyleScopedClasses['product-details']} */ ;
        let __VLS_11;
        /** @ts-ignore @type { | typeof __VLS_components.RatingStars} */
        RatingStars;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            rating: (product.star),
        }));
        const __VLS_13 = __VLS_12({
            rating: (product.star),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        let __VLS_16;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
            to: ('/product/details/' + product.id),
        }));
        const __VLS_18 = __VLS_17({
            to: ('/product/details/' + product.id),
        }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        const { default: __VLS_21 } = __VLS_19.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
        (product.name);
        // @ts-ignore
        [productDetails,];
        var __VLS_19;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (product.shortDescription);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-price" },
        });
        /** @type {__VLS_StyleScopedClasses['product-price']} */ ;
        (product.price);
        __VLS_asFunctionalElement1(__VLS_intrinsics.del, __VLS_intrinsics.del)({});
        (product.salePrice);
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "no-product text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['no-product']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-100 img-fluid m-r-20 rounded-circle update_img_0" },
        src: (__VLS_ctx.getImages('/mood-sad.png')),
        alt: "images",
    });
    /** @type {__VLS_StyleScopedClasses['img-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['update_img_0']} */ ;
}
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
