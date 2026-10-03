import { ref, onMounted, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { currency } from '@/core/data/currency';
import { timezones } from '@/core/data/timezone';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const Editor = defineAsyncComponent(() => import('@/components/shared/Editor.vue'));
const editor = ref();
const generalSettingForm = ref({
    currency: initSelectField(),
    timezone: initSelectField(),
    orderAmount: initInputField(),
    minOrderShipping: initInputField(),
});
onMounted(async () => {
    const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic');
    editor.value = ClassicEditor;
    generalSettingForm.value.orderAmount.data = '0';
    generalSettingForm.value.minOrderShipping.data = '50';
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Meta Title'),
    ...{ class: ('col-md-3') },
}));
const __VLS_2 = __VLS_1({
    title: ('Meta Title'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('meta-title'),
    placeholder: ('Enter meta title'),
    required: (false),
}));
const __VLS_8 = __VLS_7({
    inputId: ('meta-title'),
    placeholder: ('Enter meta title'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Meta Description'),
    ...{ class: ('col-md-3') },
}));
const __VLS_13 = __VLS_12({
    title: ('Meta Description'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_16 } = __VLS_14.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.Editor} */
Editor;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({}));
const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Currency'),
    ...{ class: ('col-md-3') },
}));
const __VLS_24 = __VLS_23({
    title: ('Currency'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_27 } = __VLS_25.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select currency'),
    modelValue: (__VLS_ctx.generalSettingForm.currency),
    options: (__VLS_ctx.currency),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select currency'),
    modelValue: (__VLS_ctx.generalSettingForm.currency),
    options: (__VLS_ctx.currency),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
// @ts-ignore
[generalSettingForm, currency,];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    title: ('Timezone'),
    ...{ class: ('col-md-3') },
}));
const __VLS_35 = __VLS_34({
    title: ('Timezone'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_38 } = __VLS_36.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select timezone'),
    modelValue: (__VLS_ctx.generalSettingForm.timezone),
    options: (__VLS_ctx.timezones),
    required: (false),
}));
const __VLS_41 = __VLS_40({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select timezone'),
    modelValue: (__VLS_ctx.generalSettingForm.timezone),
    options: (__VLS_ctx.timezones),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
// @ts-ignore
[generalSettingForm, timezones,];
var __VLS_36;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_44;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    title: ('Min Order Amount'),
    ...{ class: ('col-md-3') },
}));
const __VLS_46 = __VLS_45({
    title: ('Min Order Amount'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_49 } = __VLS_47.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
    id: "minOrder",
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-dollar-sign" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-dollar-sign']} */ ;
let __VLS_50;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    inputId: ('min-order-amount'),
    placeholder: ('Enter min order amount'),
    modelValue: (__VLS_ctx.generalSettingForm.orderAmount),
    required: (false),
}));
const __VLS_52 = __VLS_51({
    inputId: ('min-order-amount'),
    placeholder: ('Enter min order amount'),
    modelValue: (__VLS_ctx.generalSettingForm.orderAmount),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "helper-text" },
});
/** @type {__VLS_StyleScopedClasses['helper-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "fst-italic c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['fst-italic']} */ ;
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
// @ts-ignore
[generalSettingForm,];
var __VLS_47;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    title: ('Min Order Free Shipping'),
    ...{ class: ('col-md-3') },
}));
const __VLS_57 = __VLS_56({
    title: ('Min Order Free Shipping'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_60 } = __VLS_58.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
    id: "minOrderShipping",
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-dollar-sign" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-dollar-sign']} */ ;
let __VLS_61;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    inputId: ('min-order-shipping'),
    placeholder: ('Enter min order free shipping'),
    inputType: ('number'),
    modelValue: (__VLS_ctx.generalSettingForm.minOrderShipping),
    required: (false),
}));
const __VLS_63 = __VLS_62({
    inputId: ('min-order-shipping'),
    placeholder: ('Enter min order free shipping'),
    inputType: ('number'),
    modelValue: (__VLS_ctx.generalSettingForm.minOrderShipping),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "helper-text" },
});
/** @type {__VLS_StyleScopedClasses['helper-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "fst-italic c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['fst-italic']} */ ;
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
// @ts-ignore
[generalSettingForm,];
var __VLS_58;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
