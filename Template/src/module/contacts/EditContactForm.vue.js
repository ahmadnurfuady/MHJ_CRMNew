import { ref, watch, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { contactTypes, urlTypes } from '@/core/data/contacts';
import { useContact } from '@/store/contact';
import { assignFormFieldValue } from '@/utils/index';
import { storeToRefs } from 'pinia';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
const contactForm = ref({
    firstName: initInputField(),
    lastName: initInputField(),
    email: initInputField(),
    contactNumber: initInputField(),
    contactType: initSelectField(),
    dob: initInputField(),
    personality: initInputField(),
    interest: initInputField(),
    city: initInputField(),
});
const url_type = ref(initSelectField());
const dateConfig = ref({
    dateFormat: 'd-m-Y',
});
const formSubmitted = ref(false);
const moreInformation = ref(false);
function editMoreInformation() {
    moreInformation.value = true;
}
function save() {
    moreInformation.value = false;
    contactState.value.isEditContact = false;
}
watch(() => contactState.value.activeContact, (newValue) => {
    if (newValue) {
        const date = new Date(newValue.dob);
        contactForm.value = assignFormFieldValue(contactForm.value, newValue);
        contactForm.value.dob.data = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    }
}, { immediate: true });
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "custom-input" },
});
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Name'),
}));
const __VLS_2 = __VLS_1({
    title: ('Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.contactForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first Name'),
}));
const __VLS_8 = __VLS_7({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.contactForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.contactForm.lastName),
    inputId: ('last-name'),
    placeholder: ('Enter last Name'),
}));
const __VLS_13 = __VLS_12({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.contactForm.lastName),
    inputId: ('last-name'),
    placeholder: ('Enter last Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
// @ts-ignore
[formSubmitted, formSubmitted, contactForm, contactForm,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_16;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    title: ('Email Address'),
}));
const __VLS_18 = __VLS_17({
    title: ('Email Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_21 } = __VLS_19.slots;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.contactForm.email),
    inputId: ('email'),
    inputType: ('email'),
    placeholder: ('Enter email'),
}));
const __VLS_24 = __VLS_23({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.contactForm.email),
    inputId: ('email'),
    inputType: ('email'),
    placeholder: ('Enter email'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
// @ts-ignore
[formSubmitted, contactForm,];
var __VLS_19;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_27;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    title: ('Phone'),
}));
const __VLS_29 = __VLS_28({
    title: ('Phone'),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
const { default: __VLS_32 } = __VLS_30.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Contact number is required.'),
    modelValue: (__VLS_ctx.contactForm.contactNumber),
    inputId: ('contact-number'),
    placeholder: ('Enter contact number'),
}));
const __VLS_35 = __VLS_34({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Contact number is required.'),
    modelValue: (__VLS_ctx.contactForm.contactNumber),
    inputId: ('contact-number'),
    placeholder: ('Enter contact number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_38;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select contact type'),
    modelValue: (__VLS_ctx.contactForm.contactType),
    options: (__VLS_ctx.contactTypes),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_40 = __VLS_39({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select contact type'),
    modelValue: (__VLS_ctx.contactForm.contactType),
    options: (__VLS_ctx.contactTypes),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
// @ts-ignore
[formSubmitted, formSubmitted, contactForm, contactForm, contactTypes,];
var __VLS_30;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row more-data" },
    ...{ style: ({ display: __VLS_ctx.moreInformation ? 'block' : 'none' }) },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['more-data']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_43;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    title: ('URLS'),
}));
const __VLS_45 = __VLS_44({
    title: ('URLS'),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const { default: __VLS_48 } = __VLS_46.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6 xl-100" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
let __VLS_49;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('url'),
    placeholder: ('Enter url'),
    required: (false),
}));
const __VLS_51 = __VLS_50({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('url'),
    placeholder: ('Enter url'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6 xl-100" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select url type'),
    modelValue: (__VLS_ctx.url_type),
    options: (__VLS_ctx.urlTypes),
    formSubmitted: (__VLS_ctx.formSubmitted),
    required: (false),
}));
const __VLS_56 = __VLS_55({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select url type'),
    modelValue: (__VLS_ctx.url_type),
    options: (__VLS_ctx.urlTypes),
    formSubmitted: (__VLS_ctx.formSubmitted),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
// @ts-ignore
[formSubmitted, formSubmitted, moreInformation, url_type, urlTypes,];
var __VLS_46;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-block" },
});
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "me-3" },
    for: "edo-ani2",
});
/** @type {__VLS_StyleScopedClasses['me-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "radio_animated" },
    id: "edo-ani2",
    type: "radio",
    name: "rdo-ani1",
    checked: (__VLS_ctx.contactState.activeContact && __VLS_ctx.contactState.activeContact.gender == 'Male'),
});
/** @type {__VLS_StyleScopedClasses['radio_animated']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "edo-ani3",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "radio_animated" },
    id: "edo-ani3",
    type: "radio",
    name: "rdo-ani1",
    checked: (__VLS_ctx.contactState.activeContact && __VLS_ctx.contactState.activeContact.gender == 'Female'),
});
/** @type {__VLS_StyleScopedClasses['radio_animated']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_59;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    config: (__VLS_ctx.dateConfig),
    modelValue: (__VLS_ctx.contactForm.dob.data),
}));
const __VLS_61 = __VLS_60({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    config: (__VLS_ctx.dateConfig),
    modelValue: (__VLS_ctx.contactForm.dob.data),
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_64;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    title: ('Personality'),
}));
const __VLS_66 = __VLS_65({
    title: ('Personality'),
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const { default: __VLS_69 } = __VLS_67.slots;
let __VLS_70;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_71 = __VLS_asFunctionalComponent1(__VLS_70, new __VLS_70({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Personality is required.'),
    modelValue: (__VLS_ctx.contactForm.personality),
    inputId: ('personality'),
    placeholder: ('Enter personality'),
}));
const __VLS_72 = __VLS_71({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Personality is required.'),
    modelValue: (__VLS_ctx.contactForm.personality),
    inputId: ('personality'),
    placeholder: ('Enter personality'),
}, ...__VLS_functionalComponentArgsRest(__VLS_71));
// @ts-ignore
[formSubmitted, contactForm, contactForm, contactState, contactState, contactState, contactState, dateConfig,];
var __VLS_67;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_75;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent1(__VLS_75, new __VLS_75({
    title: ('Interest'),
}));
const __VLS_77 = __VLS_76({
    title: ('Interest'),
}, ...__VLS_functionalComponentArgsRest(__VLS_76));
const { default: __VLS_80 } = __VLS_78.slots;
let __VLS_81;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent1(__VLS_81, new __VLS_81({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Interest is required.'),
    modelValue: (__VLS_ctx.contactForm.interest),
    inputId: ('interest'),
    placeholder: ('Enter interest'),
}));
const __VLS_83 = __VLS_82({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Interest is required.'),
    modelValue: (__VLS_ctx.contactForm.interest),
    inputId: ('interest'),
    placeholder: ('Enter interest'),
}, ...__VLS_functionalComponentArgsRest(__VLS_82));
// @ts-ignore
[formSubmitted, contactForm,];
var __VLS_78;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_86;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_87 = __VLS_asFunctionalComponent1(__VLS_86, new __VLS_86({
    title: ('Home Address'),
}));
const __VLS_88 = __VLS_87({
    title: ('Home Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_87));
const { default: __VLS_91 } = __VLS_89.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
let __VLS_92;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_93 = __VLS_asFunctionalComponent1(__VLS_92, new __VLS_92({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('address'),
    placeholder: ('Enter address'),
    required: (false),
}));
const __VLS_94 = __VLS_93({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('address'),
    placeholder: ('Enter address'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_93));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
let __VLS_97;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_98 = __VLS_asFunctionalComponent1(__VLS_97, new __VLS_97({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('City is required.'),
    modelValue: (__VLS_ctx.contactForm.city),
    inputId: ('city'),
    placeholder: ('Enter city'),
}));
const __VLS_99 = __VLS_98({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('City is required.'),
    modelValue: (__VLS_ctx.contactForm.city),
    inputId: ('city'),
    placeholder: ('Enter city'),
}, ...__VLS_functionalComponentArgsRest(__VLS_98));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
let __VLS_102;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('state'),
    placeholder: ('Enter State'),
    required: (false),
}));
const __VLS_104 = __VLS_103({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('state'),
    placeholder: ('Enter State'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_103));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_107;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent1(__VLS_107, new __VLS_107({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('country'),
    placeholder: ('Enter Country'),
    required: (false),
}));
const __VLS_109 = __VLS_108({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('country'),
    placeholder: ('Enter Country'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_108));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_112;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_113 = __VLS_asFunctionalComponent1(__VLS_112, new __VLS_112({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('postal-code'),
    placeholder: ('Enter postal code'),
    required: (false),
}));
const __VLS_114 = __VLS_113({
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputId: ('postal-code'),
    placeholder: ('Enter postal code'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_113));
// @ts-ignore
[formSubmitted, formSubmitted, formSubmitted, formSubmitted, formSubmitted, contactForm,];
var __VLS_89;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.editMoreInformation();
            // @ts-ignore
            [editMoreInformation,];
        } },
    ...{ class: "ps-0 edit-information" },
    href: "#",
    ...{ style: ({ display: __VLS_ctx.moreInformation ? 'none' : 'block' }) },
});
/** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
/** @type {__VLS_StyleScopedClasses['edit-information']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.save();
            // @ts-ignore
            [moreInformation, save,];
        } },
    ...{ class: "btn btn-primary update-contact me-2" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['update-contact']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn button-light-primary" },
    type: "button",
    'data-bs-dismiss': "modal",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
