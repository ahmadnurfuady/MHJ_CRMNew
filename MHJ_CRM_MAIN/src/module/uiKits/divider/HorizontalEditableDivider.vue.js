import { defineAsyncComponent } from 'vue';
import { horizontalEditable } from '@/core/data/uiKits/divider';
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
    headerTitle: ('Horizontal Editable Divider'),
    border: (true),
    padding: (false),
    cardBodyClass: ('main-divider horizontal-variation'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Horizontal Editable Divider'),
    border: (true),
    padding: (false),
    cardBodyClass: ('main-divider horizontal-variation'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0 mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
for (const [divider, index] of __VLS_vFor((__VLS_ctx.horizontalEditable))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`divider linear-line double-line double-line-${index + 1}`) },
        contenteditable: "true",
    });
    (divider.value);
    // @ts-ignore
    [horizontalEditable,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
