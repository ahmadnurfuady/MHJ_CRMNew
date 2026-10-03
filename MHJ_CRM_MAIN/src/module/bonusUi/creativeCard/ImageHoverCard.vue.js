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
    cardClass: ('common-hover'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('common-hover'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "creative-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['creative-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('other-images/mountain.jpg')),
    alt: "background image",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "creative-info" },
});
/** @type {__VLS_StyleScopedClasses['creative-info']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
// @ts-ignore
[getImages,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
