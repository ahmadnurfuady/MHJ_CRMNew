import { defineAsyncComponent } from 'vue';
import { radioToggle } from '@/core/data/forms/formControl';
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
    headerTitle: ('Radio Toggle Buttons'),
    cardBodyClass: ('common-flex main-radio-toggle'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Radio Toggle Buttons'),
    cardBodyClass: ('common-flex main-radio-toggle'),
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
}
for (const [radio, index] of __VLS_vFor((__VLS_ctx.radioToggle))) {
    (index);
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "btn-check radio-light-secondary" },
        id: (radio.id),
        type: "radio",
        name: "options",
        checked: (radio.checked),
        disabled: (radio.disabled),
    });
    /** @type {__VLS_StyleScopedClasses['btn-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['radio-light-secondary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "btn list-light-secondary" },
        for: (radio.id),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-light-secondary']} */ ;
    (radio.label);
    // @ts-ignore
    [radioToggle,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
