import { defineAsyncComponent } from 'vue';
import { switchIcon } from '@/core/data/forms/formWidgets';
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
    headerTitle: ('Switch with Icons'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex switch-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Switch with Icons'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex switch-wrapper'),
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
for (const [item, index] of __VLS_vFor((__VLS_ctx.switchIcon))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "col-form-label m-r-10" },
    });
    /** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-10']} */ ;
    (item.text);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`flex-grow-1 ${item.class}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "switch" },
    });
    /** @type {__VLS_StyleScopedClasses['switch']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "checkbox",
        checked: (item.value),
        disabled: (item.disable),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "switch-state" },
    });
    /** @type {__VLS_StyleScopedClasses['switch-state']} */ ;
    // @ts-ignore
    [switchIcon,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
