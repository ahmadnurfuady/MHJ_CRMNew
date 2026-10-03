import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { country } from '@/core/data/country';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const infoForm = ref({
    country: initSelectField(),
    state: initSelectField(),
    city: initSelectField(),
});
const states = ref([]);
const cities = ref([]);
function countryChange(value) {
    if (value && value.selected && value.selected.data) {
        states.value = value.selected.data;
    }
}
function stateChange(value) {
    if (value && value.selected && value.selected.data) {
        cities.value = value.selected.data;
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "stepper-one row g-3 needs-validation custom-input" },
    novalidate: true,
});
/** @type {__VLS_StyleScopedClasses['stepper-one']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Full Name'),
}));
const __VLS_2 = __VLS_1({
    title: ('Full Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('full-name'),
    placeholder: ('Enter your full name'),
    required: (false),
}));
const __VLS_8 = __VLS_7({
    inputId: ('full-name'),
    placeholder: ('Enter your full name'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Phone'),
}));
const __VLS_13 = __VLS_12({
    title: ('Phone'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    inputId: ('phone'),
    placeholder: ('Enter your phone number'),
    inputType: ('number'),
    required: (false),
}));
const __VLS_19 = __VLS_18({
    inputId: ('phone'),
    placeholder: ('Enter your phone number'),
    inputType: ('number'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Country'),
}));
const __VLS_24 = __VLS_23({
    title: ('Country'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.infoForm.country),
    options: (__VLS_ctx.country),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.infoForm.country),
    options: (__VLS_ctx.country),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
let __VLS_33;
const __VLS_34 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.countryChange($event);
            // @ts-ignore
            [infoForm, country, countryChange,];
        } });
var __VLS_31;
var __VLS_32;
// @ts-ignore
[];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    title: ('State'),
}));
const __VLS_37 = __VLS_36({
    title: ('State'),
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
const { default: __VLS_40 } = __VLS_38.slots;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.infoForm.state),
    options: (__VLS_ctx.states),
    required: (false),
}));
const __VLS_43 = __VLS_42({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.infoForm.state),
    options: (__VLS_ctx.states),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
let __VLS_46;
const __VLS_47 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.stateChange($event);
            // @ts-ignore
            [infoForm, states, stateChange,];
        } });
var __VLS_44;
var __VLS_45;
// @ts-ignore
[];
var __VLS_38;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({
    title: ('City'),
}));
const __VLS_50 = __VLS_49({
    title: ('City'),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select city'),
    modelValue: (__VLS_ctx.infoForm.city),
    options: (__VLS_ctx.cities),
    required: (false),
}));
const __VLS_56 = __VLS_55({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select city'),
    modelValue: (__VLS_ctx.infoForm.city),
    options: (__VLS_ctx.cities),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
// @ts-ignore
[infoForm, cities,];
var __VLS_51;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_59;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    title: ('Email'),
}));
const __VLS_61 = __VLS_60({
    title: ('Email'),
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
const { default: __VLS_64 } = __VLS_62.slots;
let __VLS_65;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent1(__VLS_65, new __VLS_65({
    inputId: ('email'),
    placeholder: ('Enter your email'),
    inputType: ('number'),
    required: (false),
}));
const __VLS_67 = __VLS_66({
    inputId: ('email'),
    placeholder: ('Enter your email'),
    inputType: ('number'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
// @ts-ignore
[];
var __VLS_62;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_70;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_71 = __VLS_asFunctionalComponent1(__VLS_70, new __VLS_70({
    title: ('Postal Code'),
}));
const __VLS_72 = __VLS_71({
    title: ('Postal Code'),
}, ...__VLS_functionalComponentArgsRest(__VLS_71));
const { default: __VLS_75 } = __VLS_73.slots;
let __VLS_76;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({
    inputId: ('postalCode'),
    placeholder: ('Enter your postal code'),
    inputType: ('number'),
    required: (false),
}));
const __VLS_78 = __VLS_77({
    inputId: ('postalCode'),
    placeholder: ('Enter your postal code'),
    inputType: ('number'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
// @ts-ignore
[];
var __VLS_73;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
