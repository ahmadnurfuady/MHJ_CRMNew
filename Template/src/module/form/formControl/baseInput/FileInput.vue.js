import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('File Input'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('File Input'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    title: ('Default File Input Example'),
}));
const __VLS_10 = __VLS_9({
    title: ('Default File Input Example'),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_11.slots;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    inputId: ('default-file'),
    inputType: ('file'),
    required: (false),
}));
const __VLS_16 = __VLS_15({
    inputId: ('default-file'),
    inputType: ('file'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Multiple Files Input Example'),
}));
const __VLS_21 = __VLS_20({
    title: ('Multiple Files Input Example'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    inputId: ('multiple-file'),
    inputType: ('file'),
    multiple: (true),
    required: (false),
}));
const __VLS_27 = __VLS_26({
    inputId: ('multiple-file'),
    inputType: ('file'),
    multiple: (true),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    title: ('Disabled File Input Example'),
}));
const __VLS_32 = __VLS_31({
    title: ('Disabled File Input Example'),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_35 } = __VLS_33.slots;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    inputId: ('disable-file'),
    inputType: ('file'),
    disabled: (true),
    required: (false),
}));
const __VLS_38 = __VLS_37({
    inputId: ('disable-file'),
    inputType: ('file'),
    disabled: (true),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    title: ('Small File Input Example'),
}));
const __VLS_43 = __VLS_42({
    title: ('Small File Input Example'),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
const { default: __VLS_46 } = __VLS_44.slots;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    inputId: ('small-file-input'),
    inputType: ('file'),
    ...{ class: ('form-control-sm') },
    required: (false),
}));
const __VLS_49 = __VLS_48({
    inputId: ('small-file-input'),
    inputType: ('file'),
    ...{ class: ('form-control-sm') },
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
/** @type {__VLS_StyleScopedClasses['form-control-sm']} */ ;
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_52;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    title: ('Large File Input Example'),
}));
const __VLS_54 = __VLS_53({
    title: ('Large File Input Example'),
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const { default: __VLS_57 } = __VLS_55.slots;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    inputId: ('large-file-input'),
    inputType: ('file'),
    ...{ class: ('form-control-lg') },
    required: (false),
}));
const __VLS_60 = __VLS_59({
    inputId: ('large-file-input'),
    inputType: ('file'),
    ...{ class: ('form-control-lg') },
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
/** @type {__VLS_StyleScopedClasses['form-control-lg']} */ ;
var __VLS_55;
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
