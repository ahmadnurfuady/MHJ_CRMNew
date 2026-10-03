import { ref, defineAsyncComponent } from 'vue';
import { sellerDetailsAccordion } from '@/core/data/seller';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SellerDetails = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerDetails.vue'));
const SellerRating = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerRating.vue'));
const SellerNotification = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerNotification.vue'));
const SellerPolicies = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerPolicies.vue'));
const SellerProductReview = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerProductReview.vue'));
const props = defineProps();
const sidebarOpen = ref(false);
function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
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
    ...{ class: "row review-box" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['review-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleSidebar();
            // @ts-ignore
            [toggleSidebar,];
        } },
    ...{ class: "btn btn-primary md-sidebar-toggle" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar-aside job-left-aside custom-scrollbar" },
    ...{ class: ({ open: __VLS_ctx.sidebarOpen }) },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['job-left-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-left-aside" },
});
/** @type {__VLS_StyleScopedClasses['email-left-aside']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "accordion seller-profile" },
    id: "accordionPanelsStayOpenExample",
});
/** @type {__VLS_StyleScopedClasses['accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['seller-profile']} */ ;
for (const [accordionItem, index] of __VLS_vFor((__VLS_ctx.sellerDetailsAccordion))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['accordion-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-header" },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "accordion-button" },
        type: "button",
        'data-bs-toggle': "collapse",
        'data-bs-target': (`#panelsStayOpen-${index + 1}`),
        'aria-expanded': "true",
        'aria-controls': (`panelsStayOpen-${index + 1}`),
    });
    /** @type {__VLS_StyleScopedClasses['accordion-button']} */ ;
    (accordionItem.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-collapse collapse show" },
        id: (`panelsStayOpen-${index + 1}`),
    });
    /** @type {__VLS_StyleScopedClasses['accordion-collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-body bg-white" },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-body']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
    if (accordionItem.value == 'details') {
        let __VLS_6;
        /** @ts-ignore @type {typeof __VLS_components.SellerDetails} */
        SellerDetails;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            currentStore: (props.currentStore),
        }));
        const __VLS_8 = __VLS_7({
            currentStore: (props.currentStore),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    if (accordionItem.value == 'rating') {
        let __VLS_11;
        /** @ts-ignore @type {typeof __VLS_components.SellerRating} */
        SellerRating;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({}));
        const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    }
    if (accordionItem.value == 'notification') {
        let __VLS_16;
        /** @ts-ignore @type {typeof __VLS_components.SellerNotification} */
        SellerNotification;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({}));
        const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
    }
    if (accordionItem.value == 'policy') {
        let __VLS_21;
        /** @ts-ignore @type {typeof __VLS_components.SellerPolicies} */
        SellerPolicies;
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({}));
        const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
    }
    if (accordionItem.value == 'review') {
        let __VLS_26;
        /** @ts-ignore @type {typeof __VLS_components.SellerProductReview} */
        SellerProductReview;
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({}));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    }
    // @ts-ignore
    [sidebarOpen, sellerDetailsAccordion,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
