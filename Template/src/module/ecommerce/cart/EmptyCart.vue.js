import { routes } from '@/router/routes';
import { useProduct } from '@/store/product';
import { getImages } from '@/utils/index';
import { storeToRefs } from 'pinia';
const store = useProduct();
const { productState } = storeToRefs(store);
const cart = productState.value.cart;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (!__VLS_ctx.cart.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-12 empty-cart-cls text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['empty-cart-cls']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages('ecommerce/order-trash.gif')),
        ...{ class: "img-fluid my-3" },
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['my-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
    routerLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "btn btn-primary cart-btn-transform my-2" },
    }));
    const __VLS_2 = __VLS_1({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
        ...{ class: "btn btn-primary cart-btn-transform my-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['cart-btn-transform']} */ ;
    /** @type {__VLS_StyleScopedClasses['my-2']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    // @ts-ignore
    [cart, getImages, routes,];
    var __VLS_3;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
