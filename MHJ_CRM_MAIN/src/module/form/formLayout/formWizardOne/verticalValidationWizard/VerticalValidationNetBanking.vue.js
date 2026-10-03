import { defineAsyncComponent } from 'vue';
import { netBanking } from '@/core/data/forms/formLayout';
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
        ...{ class: "col-md-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion dark-accordion" },
        id: "accordionExample-a",
    });
    /** @type {__VLS_StyleScopedClasses['accordion']} */ ;
    /** @type {__VLS_StyleScopedClasses['dark-accordion']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-item" },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "accordion-header" },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "accordion-button accordion-light-primary txt-primary" },
        type: "button",
        'data-bs-toggle': "collapse",
        'data-bs-target': "#collapseOne-a",
        'aria-expanded': "true",
        'aria-controls': "collapseOne-a",
    });
    /** @type {__VLS_StyleScopedClasses['accordion-button']} */ ;
    /** @type {__VLS_StyleScopedClasses['accordion-light-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
    vueFeather;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        type: ('chevron-down'),
        ...{ class: ('svg-color') },
    }));
    const __VLS_2 = __VLS_1({
        type: ('chevron-down'),
        ...{ class: ('svg-color') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['svg-color']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-collapse collapse show" },
        id: "collapseOne-a",
    });
    /** @type {__VLS_StyleScopedClasses['accordion-collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-body weight-title card-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-body']} */ ;
    /** @type {__VLS_StyleScopedClasses['weight-title']} */ ;
    /** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "sub-title f-14" },
    });
    /** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row choose-bank" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['choose-bank']} */ ;
    for (const [banks, index] of __VLS_vFor((__VLS_ctx.netBanking))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-sm-6" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
        for (const [bank, index] of __VLS_vFor((banks.details))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "form-check radio radio-primary" },
                key: (index),
            });
            /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
            /** @type {__VLS_StyleScopedClasses['radio']} */ ;
            /** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
                ...{ class: "form-check-input" },
                id: (bank.id),
                type: "radio",
                name: "flexRadioDefault-v",
                value: (bank.title),
            });
            (props.form.bank);
            /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
                ...{ class: "form-check-label" },
                for: (bank.id),
            });
            /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
            (bank.title);
            // @ts-ignore
            [netBanking,];
        }
        // @ts-ignore
        [];
    }
    if (!props.form.bank && props.formSubmitted) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback d-block" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Please enter a message in the textarea.'),
        modelValue: (props.form.feedback),
        inputId: ('feedback'),
        inputType: ('textarea'),
        placeholder: ('Your Feedback'),
    }));
    const __VLS_7 = __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Please enter a message in the textarea.'),
        modelValue: (props.form.feedback),
        inputId: ('feedback'),
        inputType: ('textarea'),
        placeholder: ('Your Feedback'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.Checkbox} */
    Checkbox;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        ...{ class: ('form-check-input') },
        label: ('Agree to terms and conditions'),
        inputId: ('agreement'),
        modelValue: (props.form.isBankingCorrect),
        formSubmitted: (props.formSubmitted),
        errorMessage: ('You must agree before submitting'),
    }));
    const __VLS_12 = __VLS_11({
        ...{ class: ('form-check-input') },
        label: ('Agree to terms and conditions'),
        inputId: ('agreement'),
        modelValue: (props.form.isBankingCorrect),
        formSubmitted: (props.formSubmitted),
        errorMessage: ('You must agree before submitting'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
