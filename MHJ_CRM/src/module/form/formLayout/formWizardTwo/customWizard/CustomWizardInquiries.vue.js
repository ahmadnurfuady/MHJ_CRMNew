import { defineAsyncComponent } from 'vue';
import { notificationPlatform } from '@/core/data/forms/formLayout';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
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
        ...{ class: "col-12 inquiries-form" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['inquiries-form']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "choose-option" },
    });
    /** @type {__VLS_StyleScopedClasses['choose-option']} */ ;
    for (const [platform, index] of __VLS_vFor((__VLS_ctx.notificationPlatform))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-check radio radio-primary" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
        /** @type {__VLS_StyleScopedClasses['radio']} */ ;
        /** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "orm-check-input me-2" },
            id: (platform.id),
            type: "radio",
            name: "inlineRadioOptions",
            value: (platform.title),
        });
        (props.form.selectNotificationPlatform);
        /** @type {__VLS_StyleScopedClasses['orm-check-input']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label" },
            for: (platform.id),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        (platform.title);
        // @ts-ignore
        [notificationPlatform,];
    }
    if (!props.form.selectNotificationPlatform && props.formSubmitted) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback d-block" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row g-3" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('Email'),
    }));
    const __VLS_2 = __VLS_1({
        title: ('Email'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (props.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('org@support.com'),
    }));
    const __VLS_8 = __VLS_7({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (props.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('org@support.com'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [];
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: ('Contact Number'),
    }));
    const __VLS_13 = __VLS_12({
        title: ('Contact Number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Contact number is required.'),
        modelValue: (props.form.contactNumber),
        inputId: ('contact-number'),
        placeholder: ('Enter number'),
    }));
    const __VLS_19 = __VLS_18({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Contact number is required.'),
        modelValue: (props.form.contactNumber),
        inputId: ('contact-number'),
        placeholder: ('Enter number'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    // @ts-ignore
    [];
    var __VLS_14;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        title: ('If no, could you please describe?'),
        ...{ class: ('f-w-500') },
    }));
    const __VLS_24 = __VLS_23({
        title: ('If no, could you please describe?'),
        ...{ class: ('f-w-500') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    const { default: __VLS_27 } = __VLS_25.slots;
    let __VLS_28;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
        formSubmitted: (props.formSubmitted),
        modelValue: (props.form.reason),
        inputId: ('textarea'),
        inputType: ('textarea'),
        placeholder: ('Enter reason'),
    }));
    const __VLS_30 = __VLS_29({
        formSubmitted: (props.formSubmitted),
        modelValue: (props.form.reason),
        inputId: ('textarea'),
        inputType: ('textarea'),
        placeholder: ('Enter reason'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    // @ts-ignore
    [];
    var __VLS_25;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
