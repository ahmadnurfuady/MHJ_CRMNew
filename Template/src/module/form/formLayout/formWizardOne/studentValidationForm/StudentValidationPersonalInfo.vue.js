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
if (props.form) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row g-3" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('Name'),
    }));
    const __VLS_2 = __VLS_1({
        title: ('Name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Name is required.'),
        modelValue: (props.form.name),
        inputId: ('name'),
        placeholder: ('Enter your name'),
    }));
    const __VLS_8 = __VLS_7({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Name is required.'),
        modelValue: (props.form.name),
        inputId: ('name'),
        placeholder: ('Enter your name'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: ('Email'),
    }));
    const __VLS_13 = __VLS_12({
        title: ('Email'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (props.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('pixelstrap@gmail.com'),
    }));
    const __VLS_19 = __VLS_18({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Email is required.'),
        modelValue: (props.form.email),
        inputId: ('email'),
        inputType: ('email'),
        placeholder: ('pixelstrap@gmail.com'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
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
        title: ('Password'),
        ...{ class: ('col-sm-12') },
    }));
    const __VLS_24 = __VLS_23({
        title: ('Password'),
        ...{ class: ('col-sm-12') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    /** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
    const { default: __VLS_27 } = __VLS_25.slots;
    let __VLS_28;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Password is required.'),
        modelValue: (props.form.password),
        inputId: ('password'),
        inputType: ('password'),
        placeholder: ('Enter password'),
    }));
    const __VLS_30 = __VLS_29({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Password is required.'),
        modelValue: (props.form.password),
        inputId: ('password'),
        inputType: ('password'),
        placeholder: ('Enter password'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    var __VLS_25;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_33;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
        title: ('Confirm Password'),
        ...{ class: ('col-sm-12') },
    }));
    const __VLS_35 = __VLS_34({
        title: ('Confirm Password'),
        ...{ class: ('col-sm-12') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    /** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
    const { default: __VLS_38 } = __VLS_36.slots;
    let __VLS_39;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Confirm password is required.'),
        modelValue: (props.form.confirmPassword),
        inputId: ('confirm-password'),
        inputType: ('password'),
        placeholder: ('Enter confirm password'),
    }));
    const __VLS_41 = __VLS_40({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Confirm password is required.'),
        modelValue: (props.form.confirmPassword),
        inputId: ('confirm-password'),
        inputType: ('password'),
        placeholder: ('Enter confirm password'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    var __VLS_36;
}
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
