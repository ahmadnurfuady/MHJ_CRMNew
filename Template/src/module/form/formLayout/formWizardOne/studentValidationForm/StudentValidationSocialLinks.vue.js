import { defineAsyncComponent } from 'vue';
import { positions } from '@/core/data/forms/formLayout';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
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
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
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
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('Twitter'),
    }));
    const __VLS_2 = __VLS_1({
        title: ('Twitter'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Twitter URL is required.'),
        modelValue: (props.form.twitter),
        inputId: ('twitter-url'),
        inputType: ('url'),
        placeholder: ('https://twitter.com'),
    }));
    const __VLS_8 = __VLS_7({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Twitter URL is required.'),
        modelValue: (props.form.twitter),
        inputId: ('twitter-url'),
        inputType: ('url'),
        placeholder: ('https://twitter.com'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: ('Github'),
    }));
    const __VLS_13 = __VLS_12({
        title: ('Github'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Github URL is required.'),
        modelValue: (props.form.github),
        inputId: ('github-url'),
        inputType: ('url'),
        placeholder: ('https://github.com'),
    }));
    const __VLS_19 = __VLS_18({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Github URL is required.'),
        modelValue: (props.form.github),
        inputId: ('github-url'),
        inputType: ('url'),
        placeholder: ('https://github.com'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    var __VLS_14;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "input-group" },
    });
    /** @type {__VLS_StyleScopedClasses['input-group']} */ ;
    let __VLS_22;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        formSubmitted: (props.formSubmitted),
        modelValue: (props.form.document),
        inputId: ('github-url'),
        inputType: ('file'),
    }));
    const __VLS_24 = __VLS_23({
        formSubmitted: (props.formSubmitted),
        modelValue: (props.form.document),
        inputId: ('github-url'),
        inputType: ('file'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-outline-secondary" },
        id: "inputGroupFileAddon04",
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-outline-secondary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_27;
    /** @ts-ignore @type { | typeof __VLS_components.Select} */
    Select;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select position'),
        modelValue: (props.form.position),
        options: (__VLS_ctx.positions),
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Please select a valid position.'),
    }));
    const __VLS_29 = __VLS_28({
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select position'),
        modelValue: (props.form.position),
        options: (__VLS_ctx.positions),
        formSubmitted: (__VLS_ctx.formSubmitted),
        errorMessage: ('Please select a valid position.'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_32;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
        title: ('Why do you want to take this position?'),
    }));
    const __VLS_34 = __VLS_33({
        title: ('Why do you want to take this position?'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const { default: __VLS_37 } = __VLS_35.slots;
    let __VLS_38;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Description is required.'),
        modelValue: (props.form.whyThisPosition),
        inputId: ('description'),
        inputType: ('textarea'),
        placeholder: ('Enter description'),
        rows: (2),
    }));
    const __VLS_40 = __VLS_39({
        formSubmitted: (props.formSubmitted),
        errorMessage: ('Description is required.'),
        modelValue: (props.form.whyThisPosition),
        inputId: ('description'),
        inputType: ('textarea'),
        placeholder: ('Enter description'),
        rows: (2),
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    // @ts-ignore
    [positions, formSubmitted,];
    var __VLS_35;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
