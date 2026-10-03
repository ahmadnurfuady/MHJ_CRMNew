import { defineAsyncComponent } from 'vue';
import { knowledgeBase } from '@/core/data/knowledgeBase';
import { getImages } from '@/utils/index';
const FeatureCard = defineAsyncComponent(() => import('@/module/faq/FeatureCard.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "knowledgebase-bg" },
});
/** @type {__VLS_StyleScopedClasses['knowledgebase-bg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "bg-img-cover bg-center" },
    src: (__VLS_ctx.getImages('knowledgebase/bg_1.jpg')),
    alt: "image",
});
/** @type {__VLS_StyleScopedClasses['bg-img-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "knowledgebase-search" },
});
/** @type {__VLS_StyleScopedClasses['knowledgebase-search']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "form-inline" },
});
/** @type {__VLS_StyleScopedClasses['form-inline']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group w-100" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    type: ('search'),
}));
const __VLS_2 = __VLS_1({
    type: ('search'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-control-plaintext w-100" },
    type: "text",
    placeholder: "Type question here",
});
/** @type {__VLS_StyleScopedClasses['form-control-plaintext']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.FeatureCard} */
FeatureCard;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    details: (__VLS_ctx.knowledgeBase),
}));
const __VLS_7 = __VLS_6({
    details: (__VLS_ctx.knowledgeBase),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[getImages, knowledgeBase,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
