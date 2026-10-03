import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Icon In Heading'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Icon In Heading'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { icon: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icofont icofont-library me-2" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-library']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
}
{
    const { header5: __VLS_8 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex gap-3 align-items-center list-behavior-1" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['list-behavior-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-shrink-0" },
});
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "tab-img img-fluid" },
    src: (__VLS_ctx.getImages('blog/img.png')),
    alt: "home",
});
/** @type {__VLS_StyleScopedClasses['tab-img']} */ ;
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1 ms-0" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-xl-0 mb-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['mb-xl-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-sm-4']} */ ;
// @ts-ignore
[getImages,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
