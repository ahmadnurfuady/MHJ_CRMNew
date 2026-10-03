import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { imageSize } from '@/core/data/uiKits/helperClasses';
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
    cardClass: ('height-equal helper-height-equal'),
    headerTitle: ('Images Sizes'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal helper-height-equal'),
    headerTitle: ('Images Sizes'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
for (const [sizes, index] of __VLS_vFor((__VLS_ctx.imageSize))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12 helper-col-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['helper-col-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-wrapper border rounded-3 h-100" },
    });
    /** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-100']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "gradient-border gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['gradient-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    for (const [size, index] of __VLS_vFor((sizes.size))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: (size.class) },
            src: (__VLS_ctx.getImages(sizes.image)),
            alt: (size.class),
            key: (index),
        });
        // @ts-ignore
        [imageSize, getImages,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
