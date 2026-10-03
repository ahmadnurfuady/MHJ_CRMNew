import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { imageRadio } from '@/core/data/forms/formControl';
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
    headerTitle: ('Images with Radio'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Images with Radio'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "main-img-checkbox" },
});
/** @type {__VLS_StyleScopedClasses['main-img-checkbox']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.imageRadio))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-3 col-sm-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-wrapper border rounded-3 checkbox-checked" },
    });
    /** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "sub-title" },
    });
    /** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "img-checkbox" },
    });
    /** @type {__VLS_StyleScopedClasses['img-checkbox']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "main-img-cover form-check-input" },
        id: (`img-radio-${item.id}`),
        type: "radio",
        name: "radio6",
        checked: (item.checked),
        disabled: (item.disabled),
    });
    /** @type {__VLS_StyleScopedClasses['main-img-cover']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-check-label mb-0" },
        for: (`img-radio-${item.id}`),
    });
    /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(item.image)),
        alt: "coffee-beans",
    });
    // @ts-ignore
    [imageRadio, getImages,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
