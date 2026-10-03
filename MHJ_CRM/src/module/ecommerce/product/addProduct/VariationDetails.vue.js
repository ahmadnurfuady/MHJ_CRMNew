import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { colorOptionName, colorOptionValue } from '@/core/data/product';
import { useProduct } from '@/store/product';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const emits = defineEmits(['changeTab']);
const { changeTab } = useProduct();
const colors = ref(['Green', 'Purple', 'Yellow', 'Blue']);
const form = ref({
    optionName: initSelectField(),
    optionValue: initSelectField(),
});
function handleTab(value) {
    if (props.additionalTabId) {
        const updatedId = changeTab(value, props.additionalTabId);
        if (updatedId) {
            emits('changeTab', updatedId);
        }
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3 common-form" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-2 product-tag" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
/** @type {__VLS_StyleScopedClasses['product-tag']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label d-block m-0" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.TagInput} */
TagInput;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    tags: (__VLS_ctx.colors),
}));
const __VLS_2 = __VLS_1({
    tags: (__VLS_ctx.colors),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    title: ('Option Name'),
}));
const __VLS_7 = __VLS_6({
    title: ('Option Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_10 } = __VLS_8.slots;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Color'),
    modelValue: (__VLS_ctx.form.optionName),
    options: (__VLS_ctx.colorOptionName),
}));
const __VLS_13 = __VLS_12({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Color'),
    modelValue: (__VLS_ctx.form.optionName),
    options: (__VLS_ctx.colorOptionName),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
// @ts-ignore
[colors, form, colorOptionName,];
var __VLS_8;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_16;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    title: ('Option Value'),
}));
const __VLS_18 = __VLS_17({
    title: ('Option Value'),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_21 } = __VLS_19.slots;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.form.optionValue),
    options: (__VLS_ctx.colorOptionValue),
}));
const __VLS_24 = __VLS_23({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.form.optionValue),
    options: (__VLS_ctx.colorOptionValue),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
// @ts-ignore
[form, colorOptionValue,];
var __VLS_19;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-buttons" },
});
/** @type {__VLS_StyleScopedClasses['product-buttons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(-1);
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_27;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    icon: ('back-arrow'),
}));
const __VLS_29 = __VLS_28({
    icon: ('back-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(1);
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_32;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    icon: ('front-arrow'),
}));
const __VLS_34 = __VLS_33({
    icon: ('front-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
