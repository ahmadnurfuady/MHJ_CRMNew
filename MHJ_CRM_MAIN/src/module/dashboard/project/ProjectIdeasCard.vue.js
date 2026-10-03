import { routes } from '@/router/routes';
import { defineAsyncComponent } from 'vue';
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
    cardClass: ('overflow-hidden'),
    padding: (false),
    cardBodyClass: ('project-ideas-card'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('overflow-hidden'),
    padding: (false),
    cardBodyClass: ('project-ideas-card'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "project-card" },
});
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-22 f-w-500 text-center" },
});
/** @type {__VLS_StyleScopedClasses['f-22']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-showcase text-center" },
});
/** @type {__VLS_StyleScopedClasses['btn-showcase']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    to: (__VLS_ctx.routes.Pages.Pricing),
}));
const __VLS_9 = __VLS_8({
    to: (__VLS_ctx.routes.Pages.Pricing),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-pill btn-outline-primary-2x b-r-8 active" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-pill']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-primary-2x']} */ ;
/** @type {__VLS_StyleScopedClasses['b-r-8']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
// @ts-ignore
[routes,];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
