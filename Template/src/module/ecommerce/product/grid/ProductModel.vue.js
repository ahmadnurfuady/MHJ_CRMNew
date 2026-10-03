import { ref } from 'vue';
import { useProduct } from '@/store/product';
import { getImages } from '@/utils/index';
import { useRouter } from 'vue-router';
import { routes } from '@/router/routes';
const router = useRouter();
const counter = ref(1);
const store = useProduct();
const { addToCart } = store;
const props = defineProps();
function goToDetails() {
    if (props.productDetails?.id) {
        router.push(`/product/details/${props.productDetails.id}`);
    }
}
function increment() {
    if (props.productDetails && counter.value < props.productDetails.stock) {
        counter.value++;
    }
}
function decrement() {
    if (counter.value > 1)
        counter.value--;
}
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
    ...{ class: "modal fade" },
    id: "exampleModalCenter",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-dialog modal-lg modal-dialog-centered" },
});
/** @type {__VLS_StyleScopedClasses['modal-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-dialog-centered']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-box modal-content" },
});
/** @type {__VLS_StyleScopedClasses['product-box']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-header border-bottom-0" },
});
/** @type {__VLS_StyleScopedClasses['modal-header']} */ ;
/** @type {__VLS_StyleScopedClasses['border-bottom-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-box row" },
});
/** @type {__VLS_StyleScopedClasses['product-box']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-img col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['product-img']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
if (__VLS_ctx.productDetails?.images) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(__VLS_ctx.productDetails?.images[0])),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-6 text-start" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-details" },
});
/** @type {__VLS_StyleScopedClasses['product-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ onClick: (__VLS_ctx.goToDetails) },
    'data-bs-dismiss': "modal",
});
(__VLS_ctx.productDetails?.name);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-price" },
});
/** @type {__VLS_StyleScopedClasses['product-price']} */ ;
(__VLS_ctx.productDetails?.price);
__VLS_asFunctionalElement1(__VLS_intrinsics.del, __VLS_intrinsics.del)({});
(__VLS_ctx.productDetails?.salePrice);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-view" },
});
/** @type {__VLS_StyleScopedClasses['product-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
(__VLS_ctx.productDetails?.description);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-size" },
});
/** @type {__VLS_StyleScopedClasses['product-size']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-light" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-light mx-1" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-light']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-light" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-qnty" },
});
/** @type {__VLS_StyleScopedClasses['product-qnty']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.fieldset, __VLS_intrinsics.fieldset)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group bootstrap-touchspin" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['bootstrap-touchspin']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.decrement();
            // @ts-ignore
            [productDetails, productDetails, productDetails, productDetails, productDetails, productDetails, getImages, goToDetails, decrement,];
        } },
    ...{ class: "btn btn-primary btn-square bootstrap-touchspin-down" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-square']} */ ;
/** @type {__VLS_StyleScopedClasses['bootstrap-touchspin-down']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-minus" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-minus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "touchspin text-center form-control" },
    value: (__VLS_ctx.counter),
    name: "item.quantity",
    type: "text",
});
/** @type {__VLS_StyleScopedClasses['touchspin']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.increment();
            // @ts-ignore
            [counter, increment,];
        } },
    ...{ class: "btn btn-primary btn-square bootstrap-touchspin-up" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-square']} */ ;
/** @type {__VLS_StyleScopedClasses['bootstrap-touchspin-up']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: (__VLS_ctx.routes.Ecommerce.Cart),
}));
const __VLS_2 = __VLS_1({
    to: (__VLS_ctx.routes.Ecommerce.Cart),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.addToCart(__VLS_ctx.productDetails);
            // @ts-ignore
            [productDetails, routes, addToCart,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
    'data-original-title': "btn btn-info-gradien",
    'data-bs-dismiss': "modal",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onClick': {} },
    to: "/product/details",
    ...{ class: "btn btn-primary ms-2" },
    dataBsDismiss: "modal",
}));
const __VLS_8 = __VLS_7({
    ...{ 'onClick': {} },
    to: "/product/details",
    ...{ class: "btn btn-primary ms-2" },
    dataBsDismiss: "modal",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = ({ click: {} },
    { onClick: (__VLS_ctx.goToDetails) });
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
const { default: __VLS_13 } = __VLS_9.slots;
// @ts-ignore
[goToDetails,];
var __VLS_9;
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn-close" },
    type: "button",
    'data-bs-dismiss': "modal",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
