import { ref, reactive, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { states } from '@/core/data/country';
import { resetForm } from '@/utils/index';
import { validateForm } from '@/utils/validators/formValidators';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const formSubmitted = ref(false);
let tooltipValidationForm = reactive({
    firstName: initInputField(),
    lastName: initInputField(),
    userName: initInputField(),
    city: initInputField(),
    state: initSelectField(),
    zip: initInputField(),
});
function submitForm() {
    formSubmitted.value = true;
    const { isValid, formData } = validateForm(tooltipValidationForm);
    if (isValid) {
        tooltipValidationForm = resetForm(tooltipValidationForm);
        formSubmitted.value = false;
    }
}
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
    headerTitle: ('Tooltip Form Validation'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Tooltip Form Validation'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            return (__VLS_ctx.submitForm());
            // @ts-ignore
            [submitForm,];
        } },
    ...{ class: "row g-3 needs-validation custom-input" },
    novalidate: true,
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    title: ('First Name'),
}));
const __VLS_10 = __VLS_9({
    title: ('First Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_11.slots;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first name'),
    tooltipValidation: (true),
}));
const __VLS_16 = __VLS_15({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first name'),
    tooltipValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
// @ts-ignore
[formSubmitted, tooltipValidationForm,];
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
let __VLS_19;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Last Name'),
}));
const __VLS_21 = __VLS_20({
    title: ('Last Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.lastName),
    inputId: ('last-name'),
    placeholder: ('Enter last name'),
    tooltipValidation: (true),
}));
const __VLS_27 = __VLS_26({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.lastName),
    inputId: ('last-name'),
    placeholder: ('Enter last name'),
    tooltipValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[formSubmitted, tooltipValidationForm,];
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
let __VLS_30;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    title: ('Username'),
}));
const __VLS_32 = __VLS_31({
    title: ('Username'),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_35 } = __VLS_33.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group has-validation" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['has-validation']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
    id: "validationTooltipUsernamePrepend",
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
let __VLS_36;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('User name is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.userName),
    inputId: ('user-name'),
    placeholder: ('Enter user name'),
    tooltipValidation: (true),
}));
const __VLS_38 = __VLS_37({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('User name is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.userName),
    inputId: ('user-name'),
    placeholder: ('Enter user name'),
    tooltipValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
// @ts-ignore
[formSubmitted, tooltipValidationForm,];
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
let __VLS_41;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    title: ('City'),
}));
const __VLS_43 = __VLS_42({
    title: ('City'),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
const { default: __VLS_46 } = __VLS_44.slots;
let __VLS_47;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('City is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.city),
    inputId: ('city'),
    placeholder: ('Enter city'),
    tooltipValidation: (true),
}));
const __VLS_49 = __VLS_48({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('City is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.city),
    inputId: ('city'),
    placeholder: ('Enter city'),
    tooltipValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
// @ts-ignore
[formSubmitted, tooltipValidationForm,];
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-3 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
let __VLS_52;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    title: ('State'),
}));
const __VLS_54 = __VLS_53({
    title: ('State'),
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const { default: __VLS_57 } = __VLS_55.slots;
let __VLS_58;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.tooltipValidationForm.state),
    errorMessage: ('Please select state.'),
    options: (__VLS_ctx.states),
    formSubmitted: (__VLS_ctx.formSubmitted),
    tooltipValidation: (true),
}));
const __VLS_60 = __VLS_59({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.tooltipValidationForm.state),
    errorMessage: ('Please select state.'),
    options: (__VLS_ctx.states),
    formSubmitted: (__VLS_ctx.formSubmitted),
    tooltipValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
// @ts-ignore
[formSubmitted, tooltipValidationForm, states,];
var __VLS_55;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-3 position-relative" },
});
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
let __VLS_63;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent1(__VLS_63, new __VLS_63({
    title: ('Zip'),
}));
const __VLS_65 = __VLS_64({
    title: ('Zip'),
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
const { default: __VLS_68 } = __VLS_66.slots;
let __VLS_69;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Zip is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.zip),
    inputId: ('zip'),
    placeholder: ('Enter zip'),
    tooltipValidation: (true),
}));
const __VLS_71 = __VLS_70({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Zip is required.'),
    modelValue: (__VLS_ctx.tooltipValidationForm.zip),
    inputId: ('zip'),
    placeholder: ('Enter zip'),
    tooltipValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
// @ts-ignore
[formSubmitted, tooltipValidationForm,];
var __VLS_66;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
