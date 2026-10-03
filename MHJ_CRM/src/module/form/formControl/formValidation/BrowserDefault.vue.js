import { ref, reactive, defineAsyncComponent } from 'vue';
import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common';
import { states } from '@/core/data/country';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const formSubmitted = ref(false);
const browserDefaultForm = reactive({
    firstName: initInputField(),
    email: initInputField(),
    password: initInputField(),
    state: initSelectField(),
    file: initInputField(),
    description: initInputField(),
    policy: initCheckboxField(),
});
function submitForm() {
    formSubmitted.value = true;
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
    headerTitle: ('Browser Defaults'),
    cardBodyClass: ('custom-input'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    headerTitle: ('Browser Defaults'),
    cardBodyClass: ('custom-input'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.submitForm();
            // @ts-ignore
            [submitForm,];
        } },
    ...{ class: "row g-3" },
    ngNativeValidate: true,
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
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
    modelValue: (__VLS_ctx.browserDefaultForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first name'),
    browserValidation: (true),
}));
const __VLS_16 = __VLS_15({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first name'),
    browserValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
// @ts-ignore
[formSubmitted, browserDefaultForm,];
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
    title: ('Email Address'),
}));
const __VLS_21 = __VLS_20({
    title: ('Email Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.email),
    inputId: ('email'),
    inputType: ('email'),
    placeholder: ('pesamof475@saeoil.com'),
    browserValidation: (true),
}));
const __VLS_27 = __VLS_26({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.email),
    inputId: ('email'),
    inputType: ('email'),
    placeholder: ('pesamof475@saeoil.com'),
    browserValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[formSubmitted, browserDefaultForm,];
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
    title: ('Password'),
}));
const __VLS_32 = __VLS_31({
    title: ('Password'),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_35 } = __VLS_33.slots;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.password),
    inputId: ('password'),
    inputType: ('password'),
    placeholder: ('Enter password'),
    browserValidation: (true),
}));
const __VLS_38 = __VLS_37({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.password),
    inputId: ('password'),
    inputType: ('password'),
    placeholder: ('Enter password'),
    browserValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
// @ts-ignore
[formSubmitted, browserDefaultForm,];
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    title: ('State'),
}));
const __VLS_43 = __VLS_42({
    title: ('State'),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
const { default: __VLS_46 } = __VLS_44.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    ...{ class: "form-select" },
    id: "validationDefault04",
    required: true,
    value: (__VLS_ctx.browserDefaultForm.state.data),
});
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    selected: true,
    disabled: true,
    value: true,
});
for (const [state, index] of __VLS_vFor((__VLS_ctx.states))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        key: (index),
        value: (state.value),
    });
    (state.label);
    // @ts-ignore
    [browserDefaultForm, states,];
}
// @ts-ignore
[];
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    title: ('Choose file'),
}));
const __VLS_49 = __VLS_48({
    title: ('Choose file'),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
const { default: __VLS_52 } = __VLS_50.slots;
let __VLS_53;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent1(__VLS_53, new __VLS_53({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.file),
    inputId: ('file'),
    inputType: ('file'),
    placeholder: ('Choose file'),
    browserValidation: (true),
}));
const __VLS_55 = __VLS_54({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.file),
    inputId: ('file'),
    inputType: ('file'),
    placeholder: ('Choose file'),
    browserValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
// @ts-ignore
[formSubmitted, browserDefaultForm,];
var __VLS_50;
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
    id: "flexRadioDefault1",
    type: "radio",
    name: "flexRadioDefault",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label" },
    for: "flexRadioDefault1",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "flexRadioDefault2",
    type: "radio",
    name: "flexRadioDefault",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label" },
    for: "flexRadioDefault2",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "flexRadioDefault3",
    type: "radio",
    name: "flexRadioDefault",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label" },
    for: "flexRadioDefault3",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    title: ('Description'),
}));
const __VLS_60 = __VLS_59({
    title: ('Description'),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
const { default: __VLS_63 } = __VLS_61.slots;
let __VLS_64;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.description),
    inputId: ('description'),
    inputType: ('textarea'),
    placeholder: ('Enter description'),
    browserValidation: (true),
}));
const __VLS_66 = __VLS_65({
    formSubmitted: (__VLS_ctx.formSubmitted),
    modelValue: (__VLS_ctx.browserDefaultForm.description),
    inputId: ('description'),
    inputType: ('textarea'),
    placeholder: ('Enter description'),
    browserValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
// @ts-ignore
[formSubmitted, browserDefaultForm,];
var __VLS_61;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 checkbox-checked" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
let __VLS_69;
/** @ts-ignore @type {typeof __VLS_components.Checkbox} */
Checkbox;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    formSubmitted: (__VLS_ctx.formSubmitted),
    ...{ class: ('form-check-input') },
    label: ('I agree to the policies'),
    errorMessage: ('You must agree before submitting.'),
    modelValue: (__VLS_ctx.browserDefaultForm.policy),
    inputId: ('policy'),
    browserValidation: (true),
}));
const __VLS_71 = __VLS_70({
    formSubmitted: (__VLS_ctx.formSubmitted),
    ...{ class: ('form-check-input') },
    label: ('I agree to the policies'),
    errorMessage: ('You must agree before submitting.'),
    modelValue: (__VLS_ctx.browserDefaultForm.policy),
    inputId: ('policy'),
    browserValidation: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check form-switch" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "flexSwitchCheckDefault",
    type: "checkbox",
    role: "switch",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label" },
    for: "flexSwitchCheckDefault",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
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
[formSubmitted, browserDefaultForm,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
