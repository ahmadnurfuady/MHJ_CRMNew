import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { contactTypes } from '@/core/data/contacts';
import { useContact } from '@/store/contact';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
const { saveContact } = contactStore;
function closeModal() {
    contactState.value.openAddContactModal = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Add Contact'),
    modalOpen: (__VLS_ctx.contactState.openAddContactModal),
    sizeClass: ('modal-lg'),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Add Contact'),
    modalOpen: (__VLS_ctx.contactState.openAddContactModal),
    sizeClass: ('modal-lg'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [contactState, closeModal,];
        } });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body custom-input" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.saveContact();
            // @ts-ignore
            [saveContact,];
        } },
    ...{ class: "form-bookmark needs-validation" },
});
/** @type {__VLS_StyleScopedClasses['form-bookmark']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_9;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
    title: ('First Name'),
}));
const __VLS_11 = __VLS_10({
    title: ('First Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
const { default: __VLS_14 } = __VLS_12.slots;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first Name'),
}));
const __VLS_17 = __VLS_16({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.firstName),
    inputId: ('first-name'),
    placeholder: ('Enter first Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[contactState, contactState,];
var __VLS_12;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    title: ('Last Name'),
}));
const __VLS_22 = __VLS_21({
    title: ('Last Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_25 } = __VLS_23.slots;
let __VLS_26;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.lastName),
    inputId: ('last-name'),
    placeholder: ('Enter last Name'),
}));
const __VLS_28 = __VLS_27({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.lastName),
    inputId: ('last-name'),
    placeholder: ('Enter last Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
// @ts-ignore
[contactState, contactState,];
var __VLS_23;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_31;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    title: ('Email Address'),
}));
const __VLS_33 = __VLS_32({
    title: ('Email Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
let __VLS_37;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.email),
    inputId: ('email'),
    inputType: ('email'),
    placeholder: ('Enter email'),
}));
const __VLS_39 = __VLS_38({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.email),
    inputId: ('email'),
    inputType: ('email'),
    placeholder: ('Enter email'),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
// @ts-ignore
[contactState, contactState,];
var __VLS_34;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_42;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
    title: ('Phone Number'),
}));
const __VLS_44 = __VLS_43({
    title: ('Phone Number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
const { default: __VLS_47 } = __VLS_45.slots;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('Contact number is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.contactNumber),
    inputId: ('contact-number'),
    placeholder: ('Enter contact number'),
}));
const __VLS_50 = __VLS_49({
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
    errorMessage: ('Contact number is required.'),
    modelValue: (__VLS_ctx.contactState.contactForm.contactNumber),
    inputId: ('contact-number'),
    placeholder: ('Enter contact number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
// @ts-ignore
[contactState, contactState,];
var __VLS_45;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_53;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent1(__VLS_53, new __VLS_53({
    title: ('Contact Type'),
}));
const __VLS_55 = __VLS_54({
    title: ('Contact Type'),
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
const { default: __VLS_58 } = __VLS_56.slots;
let __VLS_59;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select contact type'),
    modelValue: (__VLS_ctx.contactState.contactForm.contactType),
    options: (__VLS_ctx.contactTypes),
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
}));
const __VLS_61 = __VLS_60({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select contact type'),
    modelValue: (__VLS_ctx.contactState.contactForm.contactType),
    options: (__VLS_ctx.contactTypes),
    formSubmitted: (__VLS_ctx.contactState.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
// @ts-ignore
[contactState, contactState, contactTypes,];
var __VLS_56;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "index_var",
    type: "hidden",
    value: "5",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary me-2" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [closeModal,];
        } },
    ...{ class: "btn btn-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
