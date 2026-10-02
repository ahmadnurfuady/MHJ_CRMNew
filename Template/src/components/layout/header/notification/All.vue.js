import { computed, ref, watch } from "vue";
import { getImages } from "@/utils";
import { routes } from "@/router/routes";
const props = defineProps();
const localItems = ref([]);
watch(() => props.items, (val) => {
    localItems.value = [...val];
}, { immediate: true });
const removeItem = (id) => {
    localItems.value = localItems.value.filter((item) => item.id !== id);
};
const cartItems = computed(() => localItems.value.filter((i) => i.type === "cart"));
const messageItems = computed(() => localItems.value.filter((i) => i.type === "message"));
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
    ...{ class: "user-message" },
});
/** @type {__VLS_StyleScopedClasses['user-message']} */ ;
if (__VLS_ctx.cartItems.length > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cart-dropdown notification-all" },
    });
    /** @type {__VLS_StyleScopedClasses['cart-dropdown']} */ ;
    /** @type {__VLS_StyleScopedClasses['notification-all']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "cart-main-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['cart-main-wrapper']} */ ;
    for (const [item] of __VLS_vFor((__VLS_ctx.cartItems))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (item.id),
            ...{ class: "pr-0 pl-0 pb-3 pt-3 first-product" },
        });
        /** @type {__VLS_StyleScopedClasses['pr-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['pl-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['pt-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['first-product']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "media" },
        });
        /** @type {__VLS_StyleScopedClasses['media']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid b-r-5 me-3 img-60" },
            src: (__VLS_ctx.getImages(item.image)),
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
        (item.title);
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
            ...{ class: "btn decrement-touchspin" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['decrement-touchspin']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "input-touchspin" },
            type: "number",
            value: (item.qty),
        });
        /** @type {__VLS_StyleScopedClasses['input-touchspin']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "btn increment-touchspin" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['increment-touchspin']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "font-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
        (item.price);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.cartItems.length > 0))
                        return;
                    __VLS_ctx.removeItem(item.id);
                    // @ts-ignore
                    [cartItems, cartItems, getImages, removeItem,];
                } },
            ...{ class: "close-circle" },
        });
        /** @type {__VLS_StyleScopedClasses['close-circle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "bg-danger" },
        });
        /** @type {__VLS_StyleScopedClasses['bg-danger']} */ ;
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
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
}
if (__VLS_ctx.cartItems.length === 0 && __VLS_ctx.messageItems.length === 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "firstcart-empty" },
    });
    /** @type {__VLS_StyleScopedClasses['firstcart-empty']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "cart-image" },
    });
    /** @type {__VLS_StyleScopedClasses['cart-image']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages('ecommerce/cleaning.gif')),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: "mb-3 text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [item] of __VLS_vFor((__VLS_ctx.messageItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (item.id),
        ...{ class: "first-product" },
    });
    /** @type {__VLS_StyleScopedClasses['first-product']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-alerts" },
    });
    /** @type {__VLS_StyleScopedClasses['user-alerts']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "user-image rounded-circle img-fluid me-2" },
        src: (__VLS_ctx.getImages(item.image)),
    });
    /** @type {__VLS_StyleScopedClasses['user-image']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-name" },
    });
    /** @type {__VLS_StyleScopedClasses['user-name']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "f-w-500 f-14" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    (item.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-w-500 f-12" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    (item.text);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.removeItem(item.id);
                // @ts-ignore
                [cartItems, getImages, getImages, removeItem, messageItems, messageItems,];
            } },
        ...{ class: "close-circle" },
    });
    /** @type {__VLS_StyleScopedClasses['close-circle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "bg-light" },
    });
    /** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
    let __VLS_5;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        type: "x",
    }));
    const __VLS_7 = __VLS_6({
        type: "x",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    // @ts-ignore
    [];
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
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    to: (__VLS_ctx.routes.Ecommerce.Cart),
    ...{ class: "btn btn-primary" },
}));
const __VLS_12 = __VLS_11({
    to: (__VLS_ctx.routes.Ecommerce.Cart),
    ...{ class: "btn btn-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
const { default: __VLS_15 } = __VLS_13.slots;
// @ts-ignore
[routes,];
var __VLS_13;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
