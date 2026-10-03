import { defineAsyncComponent } from 'vue';
import { becomeMember, simplePricingCard } from '@/core/data/pricing';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Become a member'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Become a member'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3 pricing-block" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['pricing-block']} */ ;
for (const [member, index] of __VLS_vFor((__VLS_ctx.becomeMember))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-lg-3 col-sm-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-lg-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "pricingtable" },
    });
    /** @type {__VLS_StyleScopedClasses['pricingtable']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "pricingtable-header" },
    });
    /** @type {__VLS_StyleScopedClasses['pricingtable-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "title" },
    });
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (member.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "price-value" },
    });
    /** @type {__VLS_StyleScopedClasses['price-value']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "currency" },
    });
    /** @type {__VLS_StyleScopedClasses['currency']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "amount" },
    });
    /** @type {__VLS_StyleScopedClasses['amount']} */ ;
    (member.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "duration" },
    });
    /** @type {__VLS_StyleScopedClasses['duration']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "pricing-content" },
    });
    /** @type {__VLS_StyleScopedClasses['pricing-content']} */ ;
    for (const [item, i] of __VLS_vFor((member.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (i),
        });
        (item.text);
        // @ts-ignore
        [becomeMember,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "pricingtable-signup" },
    });
    /** @type {__VLS_StyleScopedClasses['pricingtable-signup']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "btn btn-primary btn-lg" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-lg']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    headerTitle: ('Simple Pricing Card'),
    border: (true),
    padding: (false),
    cardBodyClass: ('pricing-content'),
}));
const __VLS_8 = __VLS_7({
    headerTitle: ('Simple Pricing Card'),
    border: (true),
    padding: (false),
    cardBodyClass: ('pricing-content'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-sm-4 g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-sm-4']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
for (const [price, index] of __VLS_vFor((__VLS_ctx.simplePricingCard))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-3 col-sm-6 box-col-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card text-center pricing-simple h-100" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['pricing-simple']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-100']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body" },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (price.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    (price.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "pricing-content" },
    });
    /** @type {__VLS_StyleScopedClasses['pricing-content']} */ ;
    for (const [item, i] of __VLS_vFor((price.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (i),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-circle-check" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-circle-check']} */ ;
        (item.text);
        // @ts-ignore
        [simplePricingCard,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "btn btn-lg btn-primary btn-block" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_9;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
