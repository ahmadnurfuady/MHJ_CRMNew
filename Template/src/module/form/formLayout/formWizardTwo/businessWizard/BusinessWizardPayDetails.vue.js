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
        ...{ class: "row g-3 needs-validation" },
        novalidate: true,
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('Card Holder'),
    }));
    const __VLS_2 = __VLS_1({
        title: ('Card Holder'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        inputId: ('card-holder'),
        placeholder: ('Enter card holder name'),
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Placeholder name is required.'),
        modelValue: (props.form.cardHolder),
    }));
    const __VLS_8 = __VLS_7({
        inputId: ('card-holder'),
        placeholder: ('Enter card holder name'),
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Placeholder name is required.'),
        modelValue: (props.form.cardHolder),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
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
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row g-3" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
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
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    let __VLS_44;
    /** @ts-ignore @type {typeof __VLS_components.Checkbox} */
    Checkbox;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
        ...{ class: ('form-check-input') },
        label: ('All the above information is correct'),
        inputId: ('card-info-agreement'),
        modelValue: (props.form.isInformationCorrect),
        formSubmitted: (props.formSubmitted),
    }));
    const __VLS_46 = __VLS_45({
        ...{ class: ('form-check-input') },
        label: ('All the above information is correct'),
        inputId: ('card-info-agreement'),
        modelValue: (props.form.isInformationCorrect),
        formSubmitted: (props.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
}
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
