import { defineAsyncComponent } from 'vue';
import { useProduct } from '@/store/product';
import { getImages } from '@/utils/index';
import { storeToRefs } from 'pinia';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const EmptyCart = defineAsyncComponent(() => import('@/module/ecommerce/cart/EmptyCart.vue'));
const ProductAction = defineAsyncComponent(() => import('@/module/ecommerce/cart/ProductAction.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const store = useProduct();
const { productState } = storeToRefs(store);
const { removeProduct, updateCartQuantity, confirmClearAll } = store;
function increment(product) {
    updateCartQuantity({ product, qty: 1 });
}
function decrement(product) {
    updateCartQuantity({ product, qty: -1 });
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-9 xl-100 box-col-8" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-8']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardBodyClass: ('shopping-cart-table'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('shopping-cart-table'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
if (__VLS_ctx.productState.cart.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "recent-table table-responsive custom-scrollbar" },
    });
    /** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
    /** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dt-container dt-empty-footer" },
    });
    /** @type {__VLS_StyleScopedClasses['dt-container']} */ ;
    /** @type {__VLS_StyleScopedClasses['dt-empty-footer']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dt-layout-row dt-layout-table" },
    });
    /** @type {__VLS_StyleScopedClasses['dt-layout-row']} */ ;
    /** @type {__VLS_StyleScopedClasses['dt-layout-table']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
        ...{ class: "table" },
        id: "cart-table",
    });
    /** @type {__VLS_StyleScopedClasses['table']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
        ...{ class: "datatable-checkbox" },
    });
    /** @type {__VLS_StyleScopedClasses['datatable-checkbox']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "cb-select-checkbox" },
        type: "checkbox",
        'aria-label': "Select all rows",
    });
    /** @type {__VLS_StyleScopedClasses['cb-select-checkbox']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
        'data-orderable': "false",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "c-o-light f-w-600" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge badge-dark rounded-circle" },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    /** @type {__VLS_StyleScopedClasses['badge-dark']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    (__VLS_ctx.productState.cart.length);
    for (const [index] of __VLS_vFor((3))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            'data-orderable': "false",
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "c-o-light f-w-600" },
        });
        /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
        // @ts-ignore
        [productState, productState,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
        ...{ onClick: (__VLS_ctx.confirmClearAll) },
        'data-orderable': "false",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "c-o-light f-w-600" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        icon: "trash1",
    }));
    const __VLS_8 = __VLS_7({
        icon: "trash1",
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
    for (const [item, index] of __VLS_vFor((__VLS_ctx.productState.cart))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
            ...{ class: "inbox-data" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['inbox-data']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
            ...{ class: "datatable-checkbox" },
        });
        /** @type {__VLS_StyleScopedClasses['datatable-checkbox']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "cb-select-checkbox" },
            type: "checkbox",
            'aria-label': "Select all rows",
        });
        /** @type {__VLS_StyleScopedClasses['cb-select-checkbox']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "product-names" },
        });
        /** @type {__VLS_StyleScopedClasses['product-names']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "light-product-box" },
        });
        /** @type {__VLS_StyleScopedClasses['light-product-box']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid" },
            src: (__VLS_ctx.getImages(item.images[0])),
            alt: "headphone",
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
        (item.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (item.brand);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "common-dot" },
        });
        /** @type {__VLS_StyleScopedClasses['common-dot']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (item.colors[0]);
        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "cart-price" },
        });
        /** @type {__VLS_StyleScopedClasses['cart-price']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
        (item.price);
        __VLS_asFunctionalElement1(__VLS_intrinsics.del, __VLS_intrinsics.del)({
            ...{ class: "c-o-light" },
        });
        /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
        (item.salePrice);
        let __VLS_11;
        /** @ts-ignore @type { | typeof __VLS_components.ProductAction} */
        ProductAction;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            ...{ 'onDelete': {} },
            ...{ 'onIncrement': {} },
            ...{ 'onDecrement': {} },
            item: (item),
        }));
        const __VLS_13 = __VLS_12({
            ...{ 'onDelete': {} },
            ...{ 'onIncrement': {} },
            ...{ 'onDecrement': {} },
            item: (item),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        let __VLS_16;
        const __VLS_17 = {
            /** @type {typeof __VLS_16.delete} */
            onDelete: (__VLS_ctx.removeProduct),
        };
        const __VLS_18 = {
            /** @type {typeof __VLS_16.increment} */
            onIncrement: (__VLS_ctx.increment),
        };
        const __VLS_19 = {
            /** @type {typeof __VLS_16.decrement} */
            onDecrement: (__VLS_ctx.decrement),
        };
        var __VLS_14;
        var __VLS_15;
        // @ts-ignore
        [productState, confirmClearAll, getImages, removeProduct, increment, decrement,];
    }
}
else {
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.EmptyCart} */
    EmptyCart;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
