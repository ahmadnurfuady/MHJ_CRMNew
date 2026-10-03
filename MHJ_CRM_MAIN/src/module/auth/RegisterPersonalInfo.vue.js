import { defineAsyncComponent } from 'vue';
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "wizard-title" },
});
/** @type {__VLS_StyleScopedClasses['wizard-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "c-o-light mb-4" },
});
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
if (props.form) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "login-main" },
    });
    /** @type {__VLS_StyleScopedClasses['login-main']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ class: "theme-form" },
    });
    /** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-group mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('First Name'),
        required: (true),
    }));
    const __VLS_2 = __VLS_1({
        title: ('First Name'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('First Name is required.'),
        modelValue: (props.form.firstName),
        inputId: ('first-name'),
        placeholder: ('Joan'),
    }));
    const __VLS_8 = __VLS_7({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('First Name is required.'),
        modelValue: (props.form.firstName),
        inputId: ('first-name'),
        placeholder: ('Joan'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-group mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: ('Last Name'),
        required: (true),
    }));
    const __VLS_13 = __VLS_12({
        title: ('Last Name'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Last Name is required.'),
        modelValue: (props.form.lastName),
        inputId: ('last-name'),
        placeholder: ('Deo'),
    }));
    const __VLS_19 = __VLS_18({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Last Name is required.'),
        modelValue: (props.form.lastName),
        inputId: ('last-name'),
        placeholder: ('Deo'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    var __VLS_14;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-group mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_22;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        title: ('Contact No.'),
        required: (true),
    }));
    const __VLS_24 = __VLS_23({
        title: ('Contact No.'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    const { default: __VLS_27 } = __VLS_25.slots;
    let __VLS_28;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Contact number is required.'),
        modelValue: (props.form.contact),
        inputId: ('contact-number'),
        inputType: ('number'),
        placeholder: ('9152422278'),
    }));
    const __VLS_30 = __VLS_29({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Contact number is required.'),
        modelValue: (props.form.contact),
        inputId: ('contact-number'),
        inputType: ('number'),
        placeholder: ('9152422278'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    var __VLS_25;
}
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
