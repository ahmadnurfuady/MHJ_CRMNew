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
    headerTitle: ('Disabled Popover'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex popover-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Disabled Popover'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "d-inline-block" },
    tabindex: "0",
    role: "button",
    'data-bs-toggle': "popover",
    'data-bs-trigger': "hover focus",
    title: "Disable Popover Title",
    'data-bs-content': "And here's some amazing content. It's very engaging. Right?",
});
__VLS_asFunctionalDirective(__VLS_directives.vPopover, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary" },
    type: "button",
    disabled: true,
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[vPopover,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
