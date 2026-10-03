import { ref, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { checkoutTabs } from '@/core/data/order';
import { getImages } from '@/utils/index';
import { useProduct } from '@/store/product';
import { storeToRefs } from 'pinia';
const store = useProduct();
const { productState, getTotalAmount } = storeToRefs(store);
const cart = productState.value.cart;
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const UserInformation = defineAsyncComponent(() => import('@/module/ecommerce/checkout/UserInformation.vue'));
const ShippingInformation = defineAsyncComponent(() => import('@/module/ecommerce/checkout/ShippingInformation.vue'));
const PaymentInformation = defineAsyncComponent(() => import('@/module/ecommerce/checkout/PaymentInformation.vue'));
const OrderComplete = defineAsyncComponent(() => import('@/module/ecommerce/checkout/OrderComplete.vue'));
const router = useRouter();
const tabs = checkoutTabs;
const activeTab = ref(1);
function handleStep(value) {
    if (value == -1) {
        activeTab.value = activeTab.value - 1;
    }
    else if (value == 1 && activeTab.value < checkoutTabs.length) {
        activeTab.value = activeTab.value + 1;
    }
}
function placeOrder() {
    router.push('/order/details/1244');
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
    ...{ class: "row shipping-form" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['shipping-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-8" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('checkout-cart'),
    cardBodyClass: ('basic-wizard important-validation'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('checkout-cart'),
    cardBodyClass: ('basic-wizard important-validation'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stepper-horizontal custom-scrollbar" },
    id: "stepper1",
});
/** @type {__VLS_StyleScopedClasses['stepper-horizontal']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.tabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "stepper-one step" },
        ...{ class: ({ 'active done': tab.id < __VLS_ctx.activeTab }) },
    });
    /** @type {__VLS_StyleScopedClasses['stepper-one']} */ ;
    /** @type {__VLS_StyleScopedClasses['step']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['done']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-circle" },
    });
    /** @type {__VLS_StyleScopedClasses['step-circle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (tab.id);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-title" },
    });
    /** @type {__VLS_StyleScopedClasses['step-title']} */ ;
    (tab.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-bar-left" },
    });
    /** @type {__VLS_StyleScopedClasses['step-bar-left']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-bar-right" },
    });
    /** @type {__VLS_StyleScopedClasses['step-bar-right']} */ ;
    // @ts-ignore
    [tabs, activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "shipping-content" },
});
/** @type {__VLS_StyleScopedClasses['shipping-content']} */ ;
if (__VLS_ctx.activeTab === 1) {
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.UserInformation} */
    UserInformation;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
if (__VLS_ctx.activeTab === 2) {
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.ShippingInformation} */
    ShippingInformation;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
}
if (__VLS_ctx.activeTab === 3) {
    let __VLS_16;
    /** @ts-ignore @type { | typeof __VLS_components.PaymentInformation} */
    PaymentInformation;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({}));
    const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
}
if (__VLS_ctx.activeTab === 4) {
    let __VLS_21;
    /** @ts-ignore @type { | typeof __VLS_components.OrderComplete} */
    OrderComplete;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({}));
    const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "wizard-footer d-flex gap-2 justify-content-end mt-3" },
});
/** @type {__VLS_StyleScopedClasses['wizard-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleStep(-1));
            // @ts-ignore
            [activeTab, activeTab, activeTab, activeTab, handleStep,];
        } },
    ...{ class: "btn button-light-primary" },
    id: "back-btn",
    disabled: (__VLS_ctx.activeTab == 1),
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.activeTab == __VLS_ctx.checkoutTabs.length ? __VLS_ctx.placeOrder() : __VLS_ctx.handleStep(1));
            // @ts-ignore
            [activeTab, activeTab, handleStep, checkoutTabs, placeOrder,];
        } },
    ...{ class: "btn btn-primary" },
    id: "next-btn",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
(__VLS_ctx.activeTab == __VLS_ctx.checkoutTabs.length ? 'Finish' : 'Next');
// @ts-ignore
[activeTab, checkoutTabs,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    headerTitle: ('Order Details'),
    border: (true),
    padding: (false),
}));
const __VLS_28 = __VLS_27({
    headerTitle: ('Order Details'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const { default: __VLS_31 } = __VLS_29.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "summery-contain" },
});
/** @type {__VLS_StyleScopedClasses['summery-contain']} */ ;
if (!__VLS_ctx.cart.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
}
for (const [item, index] of __VLS_vFor((__VLS_ctx.cart))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(item.images[0])),
        alt: "headphone",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (item.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.quantity);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "price" },
    });
    /** @type {__VLS_StyleScopedClasses['price']} */ ;
    (item.price);
    // @ts-ignore
    [cart, cart, getImages,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "summary-total" },
});
/** @type {__VLS_StyleScopedClasses['summary-total']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "price" },
});
/** @type {__VLS_StyleScopedClasses['price']} */ ;
(__VLS_ctx.getTotalAmount);
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "price" },
});
/** @type {__VLS_StyleScopedClasses['price']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "price" },
});
/** @type {__VLS_StyleScopedClasses['price']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "price" },
});
/** @type {__VLS_StyleScopedClasses['price']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "list-total" },
});
/** @type {__VLS_StyleScopedClasses['list-total']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "price" },
});
/** @type {__VLS_StyleScopedClasses['price']} */ ;
(__VLS_ctx.getTotalAmount);
// @ts-ignore
[getTotalAmount, getTotalAmount,];
var __VLS_29;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
