import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { country } from '@/core/data/country';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const countryValue = ref(initSelectField());
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
    headerTitle: ('Edit Profile'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Edit Profile'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row custom-input" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-5 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    title: ('Company'),
}));
const __VLS_9 = __VLS_8({
    title: ('Company'),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    inputId: ('company-name'),
    placeholder: ('Company'),
    required: (false),
}));
const __VLS_15 = __VLS_14({
    inputId: ('company-name'),
    placeholder: ('Company'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-xxl-3 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    title: ('Username'),
}));
const __VLS_20 = __VLS_19({
    title: ('Username'),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    inputId: ('user-name'),
    placeholder: ('Username'),
    required: (false),
}));
const __VLS_26 = __VLS_25({
    inputId: ('user-name'),
    placeholder: ('Username'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
var __VLS_21;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-xxl-4 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_29;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    title: ('Email Address'),
}));
const __VLS_31 = __VLS_30({
    title: ('Email Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const { default: __VLS_34 } = __VLS_32.slots;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    inputId: ('email'),
    placeholder: ('Email'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_37 = __VLS_36({
    inputId: ('email'),
    placeholder: ('Email'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
var __VLS_32;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_40;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
    title: ('First Name'),
}));
const __VLS_42 = __VLS_41({
    title: ('First Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const { default: __VLS_45 } = __VLS_43.slots;
let __VLS_46;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_47 = __VLS_asFunctionalComponent1(__VLS_46, new __VLS_46({
    inputId: ('first-name'),
    placeholder: ('First name'),
    required: (false),
}));
const __VLS_48 = __VLS_47({
    inputId: ('first-name'),
    placeholder: ('First name'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_47));
var __VLS_43;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_51;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
    title: ('Last Name'),
}));
const __VLS_53 = __VLS_52({
    title: ('Last Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
const { default: __VLS_56 } = __VLS_54.slots;
let __VLS_57;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent1(__VLS_57, new __VLS_57({
    inputId: ('last-name'),
    placeholder: ('Last name'),
    required: (false),
}));
const __VLS_59 = __VLS_58({
    inputId: ('last-name'),
    placeholder: ('Last name'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
var __VLS_54;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_62;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
    title: ('Address'),
}));
const __VLS_64 = __VLS_63({
    title: ('Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
const { default: __VLS_67 } = __VLS_65.slots;
let __VLS_68;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
    inputId: ('address'),
    placeholder: ('Home address'),
    inputType: ('textarea'),
    rows: (2.5),
    required: (false),
}));
const __VLS_70 = __VLS_69({
    inputId: ('address'),
    placeholder: ('Home address'),
    inputType: ('textarea'),
    rows: (2.5),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
var __VLS_65;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-5 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_73;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent1(__VLS_73, new __VLS_73({
    title: ('Country'),
}));
const __VLS_75 = __VLS_74({
    title: ('Country'),
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
const { default: __VLS_78 } = __VLS_76.slots;
let __VLS_79;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.countryValue),
    options: (__VLS_ctx.country),
    required: (false),
}));
const __VLS_81 = __VLS_80({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.countryValue),
    options: (__VLS_ctx.country),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
// @ts-ignore
[countryValue, country,];
var __VLS_76;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-xxl-4 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_84;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent1(__VLS_84, new __VLS_84({
    title: ('City'),
}));
const __VLS_86 = __VLS_85({
    title: ('City'),
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
const { default: __VLS_89 } = __VLS_87.slots;
let __VLS_90;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({
    inputId: ('city'),
    placeholder: ('City'),
    required: (false),
}));
const __VLS_92 = __VLS_91({
    inputId: ('city'),
    placeholder: ('City'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_91));
// @ts-ignore
[];
var __VLS_87;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-xxl-3 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_95;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent1(__VLS_95, new __VLS_95({
    title: ('Postal Code'),
}));
const __VLS_97 = __VLS_96({
    title: ('Postal Code'),
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
const { default: __VLS_100 } = __VLS_98.slots;
let __VLS_101;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_102 = __VLS_asFunctionalComponent1(__VLS_101, new __VLS_101({
    inputId: ('postal-code'),
    placeholder: ('Postal Code'),
    inputType: ('number'),
    required: (false),
}));
const __VLS_103 = __VLS_102({
    inputId: ('postal-code'),
    placeholder: ('Postal Code'),
    inputType: ('number'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
// @ts-ignore
[];
var __VLS_98;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_106;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_107 = __VLS_asFunctionalComponent1(__VLS_106, new __VLS_106({
    title: ('About Me'),
}));
const __VLS_108 = __VLS_107({
    title: ('About Me'),
}, ...__VLS_functionalComponentArgsRest(__VLS_107));
const { default: __VLS_111 } = __VLS_109.slots;
let __VLS_112;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_113 = __VLS_asFunctionalComponent1(__VLS_112, new __VLS_112({
    inputId: ('about'),
    placeholder: ('Enter about your description'),
    inputType: ('textarea'),
    rows: (4),
    required: (false),
}));
const __VLS_114 = __VLS_113({
    inputId: ('about'),
    placeholder: ('Enter about your description'),
    inputType: ('textarea'),
    rows: (4),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_113));
// @ts-ignore
[];
var __VLS_109;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-footer text-end" },
    details: true,
});
/** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
