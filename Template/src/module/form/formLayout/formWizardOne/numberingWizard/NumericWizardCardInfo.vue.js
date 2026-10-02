import { defineAsyncComponent } from 'vue';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
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
        ...{ class: "stepper-two row g-3 needs-validation custom-input" },
        novalidate: true,
    });
    /** @type {__VLS_StyleScopedClasses['stepper-two']} */ ;
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('Placeholder Name'),
    }));
    const __VLS_2 = __VLS_1({
        title: ('Placeholder Name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Placeholder name is required.'),
        modelValue: (props.form.placeholderName),
        inputId: ('placeholder-name'),
        placeholder: ('Placeholder name'),
    }));
    const __VLS_8 = __VLS_7({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Placeholder name is required.'),
        modelValue: (props.form.placeholderName),
        inputId: ('placeholder-name'),
        placeholder: ('Placeholder name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-4 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: ('Card Number'),
    }));
    const __VLS_13 = __VLS_12({
        title: ('Card Number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Card number is required.'),
        modelValue: (props.form.cardNumber),
        inputId: ('card-number'),
        inputType: ('number'),
        placeholder: ('xxxx xxxx xxxx xxxx'),
    }));
    const __VLS_19 = __VLS_18({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Card number is required.'),
        modelValue: (props.form.cardNumber),
        inputId: ('card-number'),
        inputType: ('number'),
        placeholder: ('xxxx xxxx xxxx xxxx'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    var __VLS_14;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-4 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        title: ('Expiration(MM/YY)'),
    }));
    const __VLS_24 = __VLS_23({
        title: ('Expiration(MM/YY)'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    const { default: __VLS_27 } = __VLS_25.slots;
    let __VLS_28;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Expiration date is required.'),
        modelValue: (props.form.expiration),
        inputId: ('expiration-date'),
        inputType: ('number'),
        placeholder: ('xx/xx'),
    }));
    const __VLS_30 = __VLS_29({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Expiration date is required.'),
        modelValue: (props.form.expiration),
        inputId: ('expiration-date'),
        inputType: ('number'),
        placeholder: ('xx/xx'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    var __VLS_25;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
    let __VLS_33;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
        title: ('CVV Number'),
    }));
    const __VLS_35 = __VLS_34({
        title: ('CVV Number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    const { default: __VLS_38 } = __VLS_36.slots;
    let __VLS_39;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('CVV number date is required.'),
        modelValue: (props.form.cvv),
        inputId: ('cvv'),
        inputType: ('number'),
        placeholder: ('xxx'),
    }));
    const __VLS_41 = __VLS_40({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('CVV number date is required.'),
        modelValue: (props.form.cvv),
        inputId: ('cvv'),
        inputType: ('number'),
        placeholder: ('xxx'),
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
        title: ('Upload Documentation'),
    }));
    const __VLS_46 = __VLS_45({
        title: ('Upload Documentation'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const { default: __VLS_49 } = __VLS_47.slots;
    let __VLS_50;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('file is required.'),
        modelValue: (props.form.uploadDocument),
        inputId: ('file'),
        inputType: ('file'),
    }));
    const __VLS_52 = __VLS_51({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('file is required.'),
        modelValue: (props.form.uploadDocument),
        inputId: ('file'),
        inputType: ('file'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    var __VLS_47;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    let __VLS_55;
    /** @ts-ignore @type {typeof __VLS_components.Checkbox} */
    Checkbox;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
        ...{ class: ('form-check-input') },
        label: ('All the above information is correct'),
        inputId: ('card-info-agreement'),
        modelValue: (props.form.isInformationCorrect),
        formSubmitted: (props.formSubmitted),
    }));
    const __VLS_57 = __VLS_56({
        ...{ class: ('form-check-input') },
        label: ('All the above information is correct'),
        inputId: ('card-info-agreement'),
        modelValue: (props.form.isInformationCorrect),
        formSubmitted: (props.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
}
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
