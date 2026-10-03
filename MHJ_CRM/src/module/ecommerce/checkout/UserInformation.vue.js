import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { country } from '@/core/data/country';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const infoForm = ref({
    country: initSelectField(),
    state: initSelectField(),
});
const states = ref([]);
function countryChange(value) {
    if (value && value.selected && value.selected.data) {
        states.value = value.selected.data;
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
    ...{ class: "stepper-one row g-3 needs-validation shipping-wizard" },
    novalidate: true,
});
/** @type {__VLS_StyleScopedClasses['stepper-one']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
/** @type {__VLS_StyleScopedClasses['shipping-wizard']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3 custom-input" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
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
    placeholder: ('Enter full name'),
    required: (false),
}));
const __VLS_8 = __VLS_7({
    inputId: ('full-name'),
    placeholder: ('Enter full name'),
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
    title: ('Contact Number'),
}));
const __VLS_13 = __VLS_12({
    title: ('Contact Number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    inputId: ('contact-number'),
    placeholder: ('Enter number'),
    inputType: ('number'),
    required: (false),
}));
const __VLS_19 = __VLS_18({
    inputId: ('contact-number'),
    placeholder: ('Enter number'),
    inputType: ('number'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Email'),
}));
const __VLS_24 = __VLS_23({
    title: ('Email'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    inputId: ('email'),
    placeholder: ('pixelstrap@example.com'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    inputId: ('email'),
    placeholder: ('pixelstrap@example.com'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    title: ('Current Address'),
}));
const __VLS_35 = __VLS_34({
    title: ('Current Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_38 } = __VLS_36.slots;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    inputId: ('current-address'),
    placeholder: ('Enter your current address'),
    inputType: ('textarea'),
    required: (false),
}));
const __VLS_41 = __VLS_40({
    inputId: ('current-address'),
    placeholder: ('Enter your current address'),
    inputType: ('textarea'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
var __VLS_36;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_44;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    title: ('Other Notes'),
}));
const __VLS_46 = __VLS_45({
    title: ('Other Notes'),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
let __VLS_50;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    inputId: ('other-note'),
    placeholder: ('Enter your queries...'),
    inputType: ('textarea'),
    required: (false),
}));
const __VLS_52 = __VLS_51({
    inputId: ('other-note'),
    placeholder: ('Enter your queries...'),
    inputType: ('textarea'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
var __VLS_47;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    title: ('Country'),
}));
const __VLS_57 = __VLS_56({
    title: ('Country'),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
const { default: __VLS_60 } = __VLS_58.slots;
let __VLS_61;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.infoForm.country),
    options: (__VLS_ctx.country),
    required: (false),
}));
const __VLS_63 = __VLS_62({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.infoForm.country),
    options: (__VLS_ctx.country),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
let __VLS_66;
const __VLS_67 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.countryChange($event);
            // @ts-ignore
            [infoForm, country, countryChange,];
        } });
var __VLS_64;
var __VLS_65;
// @ts-ignore
[];
var __VLS_58;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_68;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
    title: ('State'),
}));
const __VLS_70 = __VLS_69({
    title: ('State'),
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const { default: __VLS_73 } = __VLS_71.slots;
let __VLS_74;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.infoForm.state),
    options: (__VLS_ctx.states),
    required: (false),
}));
const __VLS_76 = __VLS_75({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.infoForm.state),
    options: (__VLS_ctx.states),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_75));
// @ts-ignore
[infoForm, states,];
var __VLS_71;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_79;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
    title: ('Postal Code'),
}));
const __VLS_81 = __VLS_80({
    title: ('Postal Code'),
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
const { default: __VLS_84 } = __VLS_82.slots;
let __VLS_85;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
    inputId: ('postal-code'),
    placeholder: ('Enter postal code'),
    required: (false),
}));
const __VLS_87 = __VLS_86({
    inputId: ('postal-code'),
    placeholder: ('Enter postal code'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
// @ts-ignore
[];
var __VLS_82;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
