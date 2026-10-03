import { defineAsyncComponent } from 'vue';
import { states } from '@/core/data/country';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.form) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ class: "row g-3 needs-validation custom-input" },
        novalidate: true,
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('First Name'),
    }));
    const __VLS_2 = __VLS_1({
        title: ('First Name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('First name is required.'),
        modelValue: (props.form.firstName),
        inputId: ('first-name'),
        placeholder: ('Enter first name'),
    }));
    const __VLS_8 = __VLS_7({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('First name is required.'),
        modelValue: (props.form.firstName),
        inputId: ('first-name'),
        placeholder: ('Enter first name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: ('Last Name'),
    }));
    const __VLS_13 = __VLS_12({
        title: ('Last Name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Last name is required.'),
        modelValue: (props.form.lastName),
        inputId: ('last-name'),
        placeholder: ('Enter last name'),
    }));
    const __VLS_19 = __VLS_18({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Last name is required.'),
        modelValue: (props.form.lastName),
        inputId: ('last-name'),
        placeholder: ('Enter last name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    var __VLS_14;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_22;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
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
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (props.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('pixelstrap@gmail.com'),
    }));
    const __VLS_30 = __VLS_29({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (props.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('pixelstrap@gmail.com'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    var __VLS_25;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-5 col-sm-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
    let __VLS_33;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
        title: ('Select State'),
    }));
    const __VLS_35 = __VLS_34({
        title: ('Select State'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    const { default: __VLS_38 } = __VLS_36.slots;
    let __VLS_39;
    /** @ts-ignore @type { | typeof __VLS_components.Select} */
    Select;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select state'),
        modelValue: (props.form.state),
        options: (__VLS_ctx.states),
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Please select a valid state.'),
    }));
    const __VLS_41 = __VLS_40({
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select state'),
        modelValue: (props.form.state),
        options: (__VLS_ctx.states),
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Please select a valid state.'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    // @ts-ignore
    [states, formSubmitted,];
    var __VLS_36;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-3 col-sm-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
    let __VLS_44;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
        title: ('Postal Code'),
    }));
    const __VLS_46 = __VLS_45({
        title: ('Postal Code'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const { default: __VLS_49 } = __VLS_47.slots;
    let __VLS_50;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Postal code is required.'),
        modelValue: (props.form.postalCode),
        inputId: ('postal-code'),
        placeholder: ('Enter postal code'),
    }));
    const __VLS_52 = __VLS_51({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Postal code is required.'),
        modelValue: (props.form.postalCode),
        inputId: ('postal-code'),
        placeholder: ('Enter postal code'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    // @ts-ignore
    [];
    var __VLS_47;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
    let __VLS_55;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
        title: ('Contact Number'),
    }));
    const __VLS_57 = __VLS_56({
        title: ('Contact Number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const { default: __VLS_60 } = __VLS_58.slots;
    let __VLS_61;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Contact number is required.'),
        modelValue: (props.form.contactNumber),
        inputId: ('contact-number'),
        inputType: ('number'),
        placeholder: ('Enter contact number'),
    }));
    const __VLS_63 = __VLS_62({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Contact number is required.'),
        modelValue: (props.form.contactNumber),
        inputId: ('contact-number'),
        inputType: ('number'),
        placeholder: ('Enter contact number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    // @ts-ignore
    [];
    var __VLS_58;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    let __VLS_66;
    /** @ts-ignore @type { | typeof __VLS_components.Checkbox} */
    Checkbox;
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
        ...{ class: ('form-check-input') },
        label: ('Agree to terms and conditions'),
        inputId: ('basic-info-agreement'),
        modelValue: (props.form.infoAgreement),
        errorMessage: ('You must agree before submitting'),
        formSubmitted: (props.formSubmitted),
    }));
    const __VLS_68 = __VLS_67({
        ...{ class: ('form-check-input') },
        label: ('Agree to terms and conditions'),
        inputId: ('basic-info-agreement'),
        modelValue: (props.form.infoAgreement),
        errorMessage: ('You must agree before submitting'),
        formSubmitted: (props.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
