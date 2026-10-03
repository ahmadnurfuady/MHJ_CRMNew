import { defineAsyncComponent } from 'vue';
import { banks } from '@/core/data/forms/formLayout';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const props = defineProps();
const defaultChecked = banks.find((type) => type.checked);
if (defaultChecked && props.form) {
    props.form.bank.push(defaultChecked.title);
}
function handleChange(event, value) {
    const isChecked = event.target.checked;
    if (props.form && Array.isArray(props.form.bank)) {
        const index = props.form.bank.indexOf(value);
        if (isChecked && index === -1) {
            props.form.bank.push(value); // Add if not already present
        }
        else if (!isChecked && index !== -1) {
            props.form.bank.splice(index, 1); // Remove if present
        }
    }
}
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
        ...{ class: "col-sm-6 bank-search" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['bank-search']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('Aadhaar Number'),
    }));
    const __VLS_2 = __VLS_1({
        title: ('Aadhaar Number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Aadhar number is required.'),
        modelValue: (props.form.aadharNumber),
        inputId: ('aadhar-number'),
        placeholder: ('xxxx xxxx xxxx'),
    }));
    const __VLS_8 = __VLS_7({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Aadhar number is required.'),
        modelValue: (props.form.aadharNumber),
        inputId: ('aadhar-number'),
        placeholder: ('xxxx xxxx xxxx'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6 bank-search" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['bank-search']} */ ;
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: ('PAN'),
    }));
    const __VLS_13 = __VLS_12({
        title: ('PAN'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('PAN number is required.'),
        modelValue: (props.form.panNumber),
        inputId: ('pan-number'),
        placeholder: ('xxxxxxxxxx'),
    }));
    const __VLS_19 = __VLS_18({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('PAN number is required.'),
        modelValue: (props.form.panNumber),
        inputId: ('pan-number'),
        placeholder: ('xxxxxxxxxx'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    var __VLS_14;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bank-selection" },
    });
    /** @type {__VLS_StyleScopedClasses['bank-selection']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check radio radio-primary ps-0" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['radio']} */ ;
    /** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "radio-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['radio-wrapper']} */ ;
    for (const [details] of __VLS_vFor((__VLS_ctx.banks))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (details.id),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ onChange: (...[$event]) => {
                    if (!(props.form))
                        throw 0;
                    return (__VLS_ctx.handleChange($event, details.title));
                    // @ts-ignore
                    [banks, handleChange,];
                } },
            ...{ class: "form-check-input" },
            type: "checkbox",
            id: (details.id),
            value: (details.title),
        });
        (props.form.bank);
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label" },
            for: (details.id),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            src: (details.image),
            alt: (details.alt),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (details.title);
        // @ts-ignore
        [];
    }
    if (props.form.bank && !props.form.bank.length && props.formSubmitted) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback d-block" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
