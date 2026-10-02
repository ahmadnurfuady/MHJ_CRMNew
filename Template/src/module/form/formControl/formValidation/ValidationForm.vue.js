import { ref, reactive, defineAsyncComponent } from 'vue';
import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common';
import { states } from '@/core/data/country';
import { selectTheme } from '@/core/data/forms/formControl';
import { resetForm } from '@/utils/index';
import { validateForm } from '@/utils/validators/formValidators';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const formSubmitted = ref(false);
let validationForm = reactive({
    firstName: initInputField(),
    password: initInputField(),
    state: initSelectField(),
    city: initInputField(),
    zip: initInputField(),
    favoriteTheme: initSelectField(),
    document: initInputField(),
    description: initInputField(),
    condition: initCheckboxField(),
});
function submitForm() {
    formSubmitted.value = true;
    const { isValid, formData } = validateForm(validationForm);
    if (isValid) {
        validationForm = resetForm(validationForm);
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
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('height-equal'),
    headerTitle: ('Validation Form'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    headerTitle: ('Validation Form'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.submitForm();
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
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
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
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.validationForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first name'),
}));
const __VLS_16 = __VLS_15({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.validationForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
// @ts-ignore
[formSubmitted, validationForm,];
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Password'),
}));
const __VLS_21 = __VLS_20({
    title: ('Password'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Password is required.'),
    modelValue: (__VLS_ctx.validationForm.password),
    inputId: ('password'),
    inputType: ('password'),
    placeholder: ('Enter password'),
}));
const __VLS_27 = __VLS_26({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Password is required.'),
    modelValue: (__VLS_ctx.validationForm.password),
    inputId: ('password'),
    inputType: ('password'),
    placeholder: ('Enter password'),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[formSubmitted, validationForm,];
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    title: ('State'),
}));
const __VLS_32 = __VLS_31({
    title: ('State'),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_35 } = __VLS_33.slots;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.validationForm.state),
    errorMessage: ('Please select state.'),
    options: (__VLS_ctx.states),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_38 = __VLS_37({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.validationForm.state),
    errorMessage: ('Please select state.'),
    options: (__VLS_ctx.states),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
// @ts-ignore
[formSubmitted, validationForm, states,];
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
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
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('City is required.'),
    modelValue: (__VLS_ctx.validationForm.city),
    inputId: ('city'),
    placeholder: ('Enter city'),
}));
const __VLS_49 = __VLS_48({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('City is required.'),
    modelValue: (__VLS_ctx.validationForm.city),
    inputId: ('city'),
    placeholder: ('Enter city'),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
// @ts-ignore
[formSubmitted, validationForm,];
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_52;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    title: ('Zip'),
}));
const __VLS_54 = __VLS_53({
    title: ('Zip'),
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const { default: __VLS_57 } = __VLS_55.slots;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Zip is required.'),
    modelValue: (__VLS_ctx.validationForm.zip),
    inputId: ('zip'),
    placeholder: ('Enter zip'),
}));
const __VLS_60 = __VLS_59({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Zip is required.'),
    modelValue: (__VLS_ctx.validationForm.zip),
    inputId: ('zip'),
    placeholder: ('Enter zip'),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
// @ts-ignore
[formSubmitted, validationForm,];
var __VLS_55;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "radio-form" },
});
/** @type {__VLS_StyleScopedClasses['radio-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "validationFormCheck25",
    type: "radio",
    name: "radio-stacked",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label" },
    for: "validationFormCheck25",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "validationFormCheck23",
    type: "radio",
    name: "radio-stacked",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label" },
    for: "validationFormCheck23",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_63;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent1(__VLS_63, new __VLS_63({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Your Favorite Pixelstrap theme'),
    modelValue: (__VLS_ctx.validationForm.favoriteTheme),
    errorMessage: ('Please select your favorite pixelstrap theme.'),
    options: (__VLS_ctx.selectTheme),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_65 = __VLS_64({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Your Favorite Pixelstrap theme'),
    modelValue: (__VLS_ctx.validationForm.favoriteTheme),
    errorMessage: ('Please select your favorite pixelstrap theme.'),
    options: (__VLS_ctx.selectTheme),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_68;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
    title: ('Choose File'),
}));
const __VLS_70 = __VLS_69({
    title: ('Choose File'),
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const { default: __VLS_73 } = __VLS_71.slots;
let __VLS_74;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('File is required.'),
    modelValue: (__VLS_ctx.validationForm.document),
    inputId: ('document'),
    inputType: ('file'),
}));
const __VLS_76 = __VLS_75({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('File is required.'),
    modelValue: (__VLS_ctx.validationForm.document),
    inputId: ('document'),
    inputType: ('file'),
}, ...__VLS_functionalComponentArgsRest(__VLS_75));
// @ts-ignore
[formSubmitted, formSubmitted, validationForm, validationForm, selectTheme,];
var __VLS_71;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_79;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
    title: ('Description'),
}));
const __VLS_81 = __VLS_80({
    title: ('Description'),
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
const { default: __VLS_84 } = __VLS_82.slots;
let __VLS_85;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Description is required.'),
    modelValue: (__VLS_ctx.validationForm.description),
    inputId: ('description'),
    inputType: ('textarea'),
}));
const __VLS_87 = __VLS_86({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Description is required.'),
    modelValue: (__VLS_ctx.validationForm.description),
    inputId: ('description'),
    inputType: ('textarea'),
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
// @ts-ignore
[formSubmitted, validationForm,];
var __VLS_82;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
let __VLS_90;
/** @ts-ignore @type {typeof __VLS_components.Checkbox} */
Checkbox;
// @ts-ignore
const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({
    formSubmitted: (__VLS_ctx.formSubmitted),
    ...{ class: ('form-check-input') },
    label: ('Agree to terms and conditions'),
    errorMessage: ('You must agree before submitting.'),
    modelValue: (__VLS_ctx.validationForm.condition),
    inputId: ('condition'),
}));
const __VLS_92 = __VLS_91({
    formSubmitted: (__VLS_ctx.formSubmitted),
    ...{ class: ('form-check-input') },
    label: ('Agree to terms and conditions'),
    errorMessage: ('You must agree before submitting.'),
    modelValue: (__VLS_ctx.validationForm.condition),
    inputId: ('condition'),
}, ...__VLS_functionalComponentArgsRest(__VLS_91));
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
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
[formSubmitted, validationForm,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
