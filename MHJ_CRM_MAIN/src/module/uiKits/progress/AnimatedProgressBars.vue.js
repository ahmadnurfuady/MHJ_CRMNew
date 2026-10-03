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
    headerTitle: ('Animated Progress Bars'),
    border: (true),
    padding: (false),
    cardBodyClass: ('progress-showcase'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Animated Progress Bars'),
    border: (true),
    padding: (false),
    cardBodyClass: ('progress-showcase'),
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
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress" },
});
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress-bar-animated bg-primary progress-bar-striped" },
    role: "progressbar",
    ...{ style: ({ width: '10%' }) },
});
/** @type {__VLS_StyleScopedClasses['progress-bar-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar-striped']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress" },
});
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress-bar-animated progress-bar-striped bg-warning" },
    role: "progressbar",
    ...{ style: ({ width: '25%' }) },
});
/** @type {__VLS_StyleScopedClasses['progress-bar-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar-striped']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress" },
});
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress-bar-animated progress-bar-striped bg-danger" },
    role: "progressbar",
    ...{ style: ({ width: '50%' }) },
});
/** @type {__VLS_StyleScopedClasses['progress-bar-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar-striped']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress" },
});
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "progress-bar-animated progress-bar-striped bg-success" },
    role: "progressbar",
    ...{ style: ({ width: '75%' }) },
});
/** @type {__VLS_StyleScopedClasses['progress-bar-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar-striped']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-success']} */ ;
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
