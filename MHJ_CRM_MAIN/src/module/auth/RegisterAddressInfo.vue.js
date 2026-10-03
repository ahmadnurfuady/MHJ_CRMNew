import { ref, defineAsyncComponent } from 'vue';
import { country } from '@/core/data/country';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const states = ref([]);
const cities = ref([]);
function countryChange(value) {
    if (value && value.selected && value.selected.data) {
        states.value = value.selected.data;
    }
}
function stateChange(value) {
    if (value && value.selected && value.selected.data) {
        cities.value = value.selected.data;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "wizard-title" },
});
/** @type {__VLS_StyleScopedClasses['wizard-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "text-muted mb-4" },
});
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
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
        title: ('Country'),
        required: (true),
    }));
    const __VLS_2 = __VLS_1({
        title: ('Country'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.Select} */
    Select;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ 'onUpdate:modelValue': {} },
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select country'),
        modelValue: (props.form.country),
        formSubmitted: (__VLS_ctx.formSubmitted),
        options: (__VLS_ctx.country),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onUpdate:modelValue': {} },
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select country'),
        modelValue: (props.form.country),
        formSubmitted: (__VLS_ctx.formSubmitted),
        options: (__VLS_ctx.country),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_11;
    const __VLS_12 = {
        /** @type {typeof __VLS_11.'update:modelValue'} */
        'onUpdate:modelValue': (...[$event]) => {
            if (!(props.form))
                throw 0;
            return (__VLS_ctx.countryChange($event));
            // @ts-ignore
            [formSubmitted, country, countryChange,];
        },
    };
    var __VLS_9;
    var __VLS_10;
    // @ts-ignore
    [];
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-group mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_13;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        title: ('State'),
        required: (true),
    }));
    const __VLS_15 = __VLS_14({
        title: ('State'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const { default: __VLS_18 } = __VLS_16.slots;
    let __VLS_19;
    /** @ts-ignore @type { | typeof __VLS_components.Select} */
    Select;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
        ...{ 'onUpdate:modelValue': {} },
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select state'),
        modelValue: (props.form.state),
        formSubmitted: (__VLS_ctx.formSubmitted),
        options: (__VLS_ctx.states),
    }));
    const __VLS_21 = __VLS_20({
        ...{ 'onUpdate:modelValue': {} },
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select state'),
        modelValue: (props.form.state),
        formSubmitted: (__VLS_ctx.formSubmitted),
        options: (__VLS_ctx.states),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    let __VLS_24;
    const __VLS_25 = {
        /** @type {typeof __VLS_24.'update:modelValue'} */
        'onUpdate:modelValue': (...[$event]) => {
            if (!(props.form))
                throw 0;
            return (__VLS_ctx.stateChange($event));
            // @ts-ignore
            [formSubmitted, states, stateChange,];
        },
    };
    var __VLS_22;
    var __VLS_23;
    // @ts-ignore
    [];
    var __VLS_16;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-group mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_26;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
        title: ('City'),
        required: (true),
    }));
    const __VLS_28 = __VLS_27({
        title: ('City'),
        required: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const { default: __VLS_31 } = __VLS_29.slots;
    let __VLS_32;
    /** @ts-ignore @type { | typeof __VLS_components.Select} */
    Select;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select city'),
        modelValue: (props.form.city),
        formSubmitted: (__VLS_ctx.formSubmitted),
        options: (__VLS_ctx.cities),
    }));
    const __VLS_34 = __VLS_33({
        getValueKey: "label",
        displayKey: "label",
        placeholder: ('Select city'),
        modelValue: (props.form.city),
        formSubmitted: (__VLS_ctx.formSubmitted),
        options: (__VLS_ctx.cities),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    // @ts-ignore
    [formSubmitted, cities,];
    var __VLS_29;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
