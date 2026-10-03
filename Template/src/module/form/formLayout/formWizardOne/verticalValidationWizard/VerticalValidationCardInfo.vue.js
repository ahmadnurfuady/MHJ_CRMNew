import { defineAsyncComponent } from 'vue';
import { cardInfo } from '@/core/data/forms/formLayout';
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
        ...{ class: "row g-3 needs-validation custom-input" },
        novalidate: true,
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
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
    for (const [radio] of __VLS_vFor((__VLS_ctx.cardInfo))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-check" },
            key: (radio.id),
        });
        /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-check-input" },
            id: (radio.id),
            type: "radio",
            name: "flexRadioDefault-a",
            value: (radio.title),
        });
        (props.form.paymentMethod);
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label" },
            for: (radio.id),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        (radio.title);
        // @ts-ignore
        [cardInfo,];
    }
    if (!props.form.paymentMethod && props.formSubmitted) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback d-block" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "input-group mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['input-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Recipient username is required.'),
        modelValue: (props.form.recipientUsername),
        inputId: ('recipient-name'),
        placeholder: ('Recipient\'s username'),
    }));
    const __VLS_2 = __VLS_1({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Recipient username is required.'),
        modelValue: (props.form.recipientUsername),
        inputId: ('recipient-name'),
        placeholder: ('Recipient\'s username'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-outline-secondary" },
        id: "button-addon2",
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-outline-secondary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "input-group" },
    });
    /** @type {__VLS_StyleScopedClasses['input-group']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "input-group-text" },
        id: "basic-addon1",
    });
    /** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Username is required.'),
        modelValue: (props.form.username),
        inputId: ('username'),
        placeholder: ('Username'),
    }));
    const __VLS_7 = __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Username is required.'),
        modelValue: (props.form.username),
        inputId: ('username'),
        placeholder: ('Username'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-4 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        title: ('Card Number'),
    }));
    const __VLS_12 = __VLS_11({
        title: ('Card Number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    const { default: __VLS_15 } = __VLS_13.slots;
    let __VLS_16;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Card number is required.'),
        modelValue: (props.form.cardNumber),
        inputId: ('card-number'),
        placeholder: ('xxxx xxxx xxxx xxxx'),
    }));
    const __VLS_18 = __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Card number is required.'),
        modelValue: (props.form.cardNumber),
        inputId: ('card-number'),
        placeholder: ('xxxx xxxx xxxx xxxx'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    // @ts-ignore
    [];
    var __VLS_13;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-4 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_21;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
        title: ('Expiration(MM/YY)'),
    }));
    const __VLS_23 = __VLS_22({
        title: ('Expiration(MM/YY)'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    const { default: __VLS_26 } = __VLS_24.slots;
    let __VLS_27;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Expiration date is required.'),
        modelValue: (props.form.expiration),
        inputId: ('expiration-date'),
        inputType: ('number'),
        placeholder: ('xx/xx'),
    }));
    const __VLS_29 = __VLS_28({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Expiration date is required.'),
        modelValue: (props.form.expiration),
        inputId: ('expiration-date'),
        inputType: ('number'),
        placeholder: ('xx/xx'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    // @ts-ignore
    [];
    var __VLS_24;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-4 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_32;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
        title: ('CVV Number'),
    }));
    const __VLS_34 = __VLS_33({
        title: ('CVV Number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const { default: __VLS_37 } = __VLS_35.slots;
    let __VLS_38;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('CVV number date is required.'),
        modelValue: (props.form.cvv),
        inputId: ('cvv'),
        inputType: ('number'),
        placeholder: ('xxx'),
    }));
    const __VLS_40 = __VLS_39({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('CVV number date is required.'),
        modelValue: (props.form.cvv),
        inputId: ('cvv'),
        inputType: ('number'),
        placeholder: ('xxx'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    // @ts-ignore
    [];
    var __VLS_35;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-12 col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_43;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
        title: ('Upload Documentation'),
    }));
    const __VLS_45 = __VLS_44({
        title: ('Upload Documentation'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const { default: __VLS_48 } = __VLS_46.slots;
    let __VLS_49;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('file is required.'),
        modelValue: (props.form.document),
        inputId: ('file'),
        inputType: ('file'),
    }));
    const __VLS_51 = __VLS_50({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('file is required.'),
        modelValue: (props.form.document),
        inputId: ('file'),
        inputType: ('file'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    // @ts-ignore
    [];
    var __VLS_46;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    let __VLS_54;
    /** @ts-ignore @type { | typeof __VLS_components.Checkbox} */
    Checkbox;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
        ...{ class: ('form-check-input') },
        label: ('All the above information is correct'),
        inputId: ('card-info-agreement'),
        modelValue: (props.form.isCardInfoCorrect),
        formSubmitted: (props.formSubmitted),
    }));
    const __VLS_56 = __VLS_55({
        ...{ class: ('form-check-input') },
        label: ('All the above information is correct'),
        inputId: ('card-info-agreement'),
        modelValue: (props.form.isCardInfoCorrect),
        formSubmitted: (props.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
