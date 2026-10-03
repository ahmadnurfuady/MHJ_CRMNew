import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const CommonPagination = defineAsyncComponent(() => import('@/module/bonusUi/pagination/CommonPagination.vue'));
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
    headerTitle: ('Pagination Sizing'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Pagination Sizing'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.CommonPagination} */
CommonPagination;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    color: ('info'),
    ...{ class: ('m-b-30') },
    sizeClass: ('pagination-lg'),
}));
const __VLS_10 = __VLS_9({
    color: ('info'),
    ...{ class: ('m-b-30') },
    sizeClass: ('pagination-lg'),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['m-b-30']} */ ;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.CommonPagination} */
CommonPagination;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    color: ('info'),
    ...{ class: ('m-b-30') },
    sizeClass: ('pagination-md'),
}));
const __VLS_15 = __VLS_14({
    color: ('info'),
    ...{ class: ('m-b-30') },
    sizeClass: ('pagination-md'),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {__VLS_StyleScopedClasses['m-b-30']} */ ;
let __VLS_18;
/** @ts-ignore @type { | typeof __VLS_components.CommonPagination} */
CommonPagination;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    color: ('info'),
    sizeClass: ('pagination-sm'),
}));
const __VLS_20 = __VLS_19({
    color: ('info'),
    sizeClass: ('pagination-sm'),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
