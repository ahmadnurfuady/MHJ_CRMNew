import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Dark Color Card'),
    headerClass: ('text-white'),
    header: ('bg-dark'),
    padding: (false),
    border: (true),
    cardClass: ('basic-dark-card'),
    cardBodyClass: ('bg-dark'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Dark Color Card'),
    headerClass: ('text-white'),
    header: ('bg-dark'),
    padding: (false),
    border: (true),
    cardClass: ('basic-dark-card'),
    cardBodyClass: ('bg-dark'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center gap-3 pills-blogger" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['pills-blogger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "blog-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['blog-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "blog-img" },
    src: (__VLS_ctx.getImages('dashboard-2/headphones.png')),
    alt: "head-phone",
});
/** @type {__VLS_StyleScopedClasses['blog-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "blog-content" },
});
/** @type {__VLS_StyleScopedClasses['blog-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "light-white" },
});
/** @type {__VLS_StyleScopedClasses['light-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({
    ...{ class: "fw-bold" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
{
    const { details: __VLS_8 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-footer bg-dark" },
    });
    /** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-0 txt-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-light']} */ ;
    // @ts-ignore
    [getImages,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
