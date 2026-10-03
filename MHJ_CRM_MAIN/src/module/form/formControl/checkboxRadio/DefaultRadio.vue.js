import { ref, defineAsyncComponent } from 'vue';
import { defaultRadio } from '@/core/data/forms/formControl';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const defaultRadioList = ref(defaultRadio);
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
    headerTitle: ('Default Radio Buttons'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Default Radio Buttons'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
for (const [item, i] of __VLS_vFor((__VLS_ctx.defaultRadioList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6 col-xl-4" },
        key: (i),
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-wrapper border rounded-3 checkbox-checked" },
    });
    /** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "sub-title" },
    });
    /** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
    (item.title);
    for (const [radio, index] of __VLS_vFor((item.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-check" },
            ...{ class: ({ 'form-check-reverse p-0': radio.reverseLabel }) },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
        /** @type {__VLS_StyleScopedClasses['form-check-reverse']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-check-input" },
            id: (radio.id),
            type: "radio",
            name: (radio.name),
            value: (radio.name),
            disabled: (radio.disable),
        });
        (__VLS_ctx.defaultRadioList[i].selectedValue);
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label" },
            for: (radio.id),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        (radio.label);
        // @ts-ignore
        [defaultRadioList, defaultRadioList,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
