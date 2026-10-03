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
    headerTitle: ('Popover Directions'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex popover-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Popover Directions'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex popover-wrapper'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "example-popover btn btn-warning mb-0 me-0" },
    type: "button",
    'data-bs-placement': "top",
    title: "Top Popover",
    'data-bs-content': "Popovers need the tooltip plugin considering that a dependency.",
});
__VLS_asFunctionalDirective(__VLS_directives.vPopover, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['example-popover']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['me-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "example-popover btn btn-danger mb-0 me-0" },
    type: "button",
    'data-bs-placement': "right",
    title: "Right Popover",
    'data-bs-content': "Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself.",
});
__VLS_asFunctionalDirective(__VLS_directives.vPopover, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['example-popover']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['me-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "example-popover btn btn-info mb-0 me-0" },
    type: "button",
    'data-bs-placement': "bottom",
    title: "Bottom Popover",
    'data-bs-content': "Identify container:to evade rendering problems in more complex components (like Bootstrap input groups, button groups, etc).",
});
__VLS_asFunctionalDirective(__VLS_directives.vPopover, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['example-popover']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-info']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['me-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "example-popover btn btn-dark mb-0 me-0" },
    type: "button",
    'data-bs-placement': "left",
    title: "Left Popover",
    'data-bs-content': "Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself.",
});
__VLS_asFunctionalDirective(__VLS_directives.vPopover, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['example-popover']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['me-0']} */ ;
// @ts-ignore
[vPopover, vPopover, vPopover, vPopover,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
