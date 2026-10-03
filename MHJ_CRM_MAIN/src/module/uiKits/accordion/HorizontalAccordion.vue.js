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
    headerTitle: ('Horizontal Accordion'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Horizontal Accordion'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-secondary" },
    type: "button",
    'data-bs-toggle': "collapse",
    'data-bs-target': "#collapseWidthExample",
    'aria-expanded': "false",
    'aria-controls': "collapseWidthExample",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-8 col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "collapse collapse-horizontal mt-3" },
    id: "collapseWidthExample",
});
/** @type {__VLS_StyleScopedClasses['collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse-horizontal']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card card-body accordion-h-space mb-0" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-h-space']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
