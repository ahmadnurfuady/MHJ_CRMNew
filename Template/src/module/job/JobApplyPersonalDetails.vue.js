import { ref, defineAsyncComponent, reactive, onMounted } from 'vue';
import { initSelectField } from '@/core/data/common';
import { month } from '@/core/data/jobs/applyForm';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const values = reactive({
    date: [],
    year: [],
});
const dob = ref({
    date: initSelectField(),
    month: initSelectField(),
    year: initSelectField(),
});
onMounted(() => {
    for (let i = 1; i <= 31; i++) {
        values.date.push({ value: i, label: i.toString() });
    }
    for (let i = new Date().getFullYear() - 100; i <= new Date().getFullYear(); i++) {
        values.year.push({ value: i, label: i.toString() });
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "form theme-form custom-input" },
});
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Full Name:'),
}));
const __VLS_2 = __VLS_1({
    title: ('Full Name:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('job-personal-details-name'),
    placeholder: ('Enter your full name'),
    required: (false),
}));
const __VLS_8 = __VLS_7({
    inputId: ('job-personal-details-name'),
    placeholder: ('Enter your full name'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Email:'),
}));
const __VLS_13 = __VLS_12({
    title: ('Email:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    inputId: ('job-personal-details-email'),
    inputType: ('email'),
    placeholder: ('Enter email'),
    required: (false),
}));
const __VLS_19 = __VLS_18({
    inputId: ('job-personal-details-email'),
    inputType: ('email'),
    placeholder: ('Enter email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Password:'),
}));
const __VLS_24 = __VLS_23({
    title: ('Password:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    inputId: ('job-personal-details-password'),
    inputType: ('password'),
    placeholder: ('Enter password'),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    inputId: ('job-personal-details-password'),
    inputType: ('password'),
    placeholder: ('Enter password'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_33;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    title: ('Repeat Password:'),
}));
const __VLS_35 = __VLS_34({
    title: ('Repeat Password:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_38 } = __VLS_36.slots;
let __VLS_39;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    inputId: ('job-personal-details-repeat-password'),
    inputType: ('password'),
    placeholder: ('Enter repeat password'),
    required: (false),
}));
const __VLS_41 = __VLS_40({
    inputId: ('job-personal-details-repeat-password'),
    inputType: ('password'),
    placeholder: ('Enter repeat password'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
var __VLS_36;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row select-values.date" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['select-values.date']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-form-label pt-0" },
});
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-form-label" },
});
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
let __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select month'),
    modelValue: (__VLS_ctx.dob.month),
    options: (__VLS_ctx.month),
    required: (false),
}));
const __VLS_46 = __VLS_45({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select month'),
    modelValue: (__VLS_ctx.dob.month),
    options: (__VLS_ctx.month),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-form-label" },
});
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
let __VLS_49;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select date'),
    modelValue: (__VLS_ctx.dob.date),
    options: (__VLS_ctx.values.date),
    required: (false),
}));
const __VLS_51 = __VLS_50({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select date'),
    modelValue: (__VLS_ctx.dob.date),
    options: (__VLS_ctx.values.date),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-form-label" },
});
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
let __VLS_54;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select year'),
    modelValue: (__VLS_ctx.dob.year),
    options: (__VLS_ctx.values.year),
    required: (false),
}));
const __VLS_56 = __VLS_55({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select year'),
    modelValue: (__VLS_ctx.dob.year),
    options: (__VLS_ctx.values.year),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_59;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    title: ('Phone Number:'),
}));
const __VLS_61 = __VLS_60({
    title: ('Phone Number:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
const { default: __VLS_64 } = __VLS_62.slots;
let __VLS_65;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent1(__VLS_65, new __VLS_65({
    inputId: ('job-personal-details-number'),
    inputType: ('number'),
    placeholder: ('Enter phone no.'),
    required: (false),
}));
const __VLS_67 = __VLS_66({
    inputId: ('job-personal-details-number'),
    inputType: ('number'),
    placeholder: ('Enter phone no.'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
// @ts-ignore
[dob, dob, dob, month, values, values,];
var __VLS_62;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
