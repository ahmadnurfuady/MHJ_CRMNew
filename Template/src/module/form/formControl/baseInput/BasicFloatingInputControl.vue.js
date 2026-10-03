import { ref, reactive, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { selectMenu, selectNumber } from '@/core/data/forms/formControl';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const formSubmitted = ref(true);
const form = reactive({
    validInput: { data: 'test@example.com', errorMessage: '' },
    invalidInput: initInputField(),
    selectMenu: initSelectField(),
    invalidInputGroup: initInputField(),
    validEmail: { data: 'test@example.com', errorMessage: '' },
    layout: initSelectField(),
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('height-equal'),
    headerTitle: ('Basic Floating Input Control'),
    cardBodyClass: ('custom-input theme-form'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    headerTitle: ('Basic Floating Input Control'),
    cardBodyClass: ('custom-input theme-form'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
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
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    title: ('Valid Input'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_10 = __VLS_9({
    title: ('Valid Input'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    title: ('Input with value'),
    labelPositionBottom: (true),
}));
const __VLS_16 = __VLS_15({
    title: ('Input with value'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_19 } = __VLS_17.slots;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    inputId: ('email'),
    modelValue: (__VLS_ctx.form.validInput),
    inputType: ('email'),
    required: (false),
    isPlaceholder: (false),
}));
const __VLS_22 = __VLS_21({
    inputId: ('email'),
    modelValue: (__VLS_ctx.form.validInput),
    inputType: ('email'),
    required: (false),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
// @ts-ignore
[form,];
var __VLS_17;
// @ts-ignore
[];
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    title: ('Invalid Input'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_27 = __VLS_26({
    title: ('Invalid Input'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_30 } = __VLS_28.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
let __VLS_31;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    title: ('Invalid input'),
    labelPositionBottom: (true),
}));
const __VLS_33 = __VLS_32({
    title: ('Invalid input'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
let __VLS_37;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    inputId: ('email'),
    modelValue: (__VLS_ctx.form.invalidInput),
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputType: ('email'),
    isPlaceholder: (false),
}));
const __VLS_39 = __VLS_38({
    inputId: ('email'),
    modelValue: (__VLS_ctx.form.invalidInput),
    formSubmitted: (__VLS_ctx.formSubmitted),
    inputType: ('email'),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
// @ts-ignore
[form, formSubmitted,];
var __VLS_34;
// @ts-ignore
[];
var __VLS_28;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_42;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
    title: ('Comments'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_44 = __VLS_43({
    title: ('Comments'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_47 } = __VLS_45.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
let __VLS_48;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({
    title: ('Comments'),
    labelPositionBottom: (true),
}));
const __VLS_50 = __VLS_49({
    title: ('Comments'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
let __VLS_54;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    inputId: ('comments'),
    inputType: ('textarea'),
    required: (false),
    isPlaceholder: (false),
}));
const __VLS_56 = __VLS_55({
    inputId: ('comments'),
    inputType: ('textarea'),
    required: (false),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
// @ts-ignore
[];
var __VLS_51;
// @ts-ignore
[];
var __VLS_45;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_59;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    title: ('Email'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_61 = __VLS_60({
    title: ('Email'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_64 } = __VLS_62.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating mb-3" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_65;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent1(__VLS_65, new __VLS_65({
    title: ('Email address'),
    labelPositionBottom: (true),
}));
const __VLS_67 = __VLS_66({
    title: ('Email address'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
const { default: __VLS_70 } = __VLS_68.slots;
let __VLS_71;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent1(__VLS_71, new __VLS_71({
    inputId: ('email'),
    inputType: ('email'),
    required: (false),
    isPlaceholder: (false),
}));
const __VLS_73 = __VLS_72({
    inputId: ('email'),
    inputType: ('email'),
    required: (false),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
// @ts-ignore
[];
var __VLS_68;
// @ts-ignore
[];
var __VLS_62;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_76;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({
    title: ('Password'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_78 = __VLS_77({
    title: ('Password'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_81 } = __VLS_79.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating mb-3" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_82;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_83 = __VLS_asFunctionalComponent1(__VLS_82, new __VLS_82({
    title: ('Password'),
    labelPositionBottom: (true),
}));
const __VLS_84 = __VLS_83({
    title: ('Password'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_83));
const { default: __VLS_87 } = __VLS_85.slots;
let __VLS_88;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent1(__VLS_88, new __VLS_88({
    inputId: ('password'),
    inputType: ('password'),
    required: (false),
    isPlaceholder: (false),
}));
const __VLS_90 = __VLS_89({
    inputId: ('password'),
    inputType: ('password'),
    required: (false),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
// @ts-ignore
[];
var __VLS_85;
// @ts-ignore
[];
var __VLS_79;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_93;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_94 = __VLS_asFunctionalComponent1(__VLS_93, new __VLS_93({
    title: ('Comments'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_95 = __VLS_94({
    title: ('Comments'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_94));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_98 } = __VLS_96.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating mb-3" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_99;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_100 = __VLS_asFunctionalComponent1(__VLS_99, new __VLS_99({
    title: ('Comments'),
    labelPositionBottom: (true),
}));
const __VLS_101 = __VLS_100({
    title: ('Comments'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_100));
const { default: __VLS_104 } = __VLS_102.slots;
let __VLS_105;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_106 = __VLS_asFunctionalComponent1(__VLS_105, new __VLS_105({
    inputId: ('comments'),
    inputType: ('textarea'),
    ...{ class: ('h-100') },
    required: (false),
    isPlaceholder: (false),
}));
const __VLS_107 = __VLS_106({
    inputId: ('comments'),
    inputType: ('textarea'),
    ...{ class: ('h-100') },
    required: (false),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_106));
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
// @ts-ignore
[];
var __VLS_102;
// @ts-ignore
[];
var __VLS_96;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_110;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_111 = __VLS_asFunctionalComponent1(__VLS_110, new __VLS_110({
    title: ('Open This Select Menu'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_112 = __VLS_111({
    title: ('Open This Select Menu'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_111));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_115 } = __VLS_113.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating mb-3" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_116;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_117 = __VLS_asFunctionalComponent1(__VLS_116, new __VLS_116({
    getValueKey: "label",
    displayKey: "label",
    modelValue: (__VLS_ctx.form.selectMenu),
    options: (__VLS_ctx.selectNumber),
    required: (false),
    isPlaceholder: (true),
    placeholder: ('Open this select menu'),
}));
const __VLS_118 = __VLS_117({
    getValueKey: "label",
    displayKey: "label",
    modelValue: (__VLS_ctx.form.selectMenu),
    options: (__VLS_ctx.selectNumber),
    required: (false),
    isPlaceholder: (true),
    placeholder: ('Open this select menu'),
}, ...__VLS_functionalComponentArgsRest(__VLS_117));
// @ts-ignore
[form, selectNumber,];
var __VLS_113;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_121;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_122 = __VLS_asFunctionalComponent1(__VLS_121, new __VLS_121({
    title: ('Input Group'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_123 = __VLS_122({
    title: ('Input Group'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_122));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_126 } = __VLS_124.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group mb-3" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
let __VLS_127;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_128 = __VLS_asFunctionalComponent1(__VLS_127, new __VLS_127({
    title: ('Username'),
    labelPositionBottom: (true),
}));
const __VLS_129 = __VLS_128({
    title: ('Username'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_128));
const { default: __VLS_132 } = __VLS_130.slots;
let __VLS_133;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_134 = __VLS_asFunctionalComponent1(__VLS_133, new __VLS_133({
    inputId: ('username'),
    required: (false),
    isPlaceholder: (false),
}));
const __VLS_135 = __VLS_134({
    inputId: ('username'),
    required: (false),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_134));
// @ts-ignore
[];
var __VLS_130;
// @ts-ignore
[];
var __VLS_124;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_138;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_139 = __VLS_asFunctionalComponent1(__VLS_138, new __VLS_138({
    title: ('Invalid Input Group'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_140 = __VLS_139({
    title: ('Invalid Input Group'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_139));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_143 } = __VLS_141.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group mb-3" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
let __VLS_144;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_145 = __VLS_asFunctionalComponent1(__VLS_144, new __VLS_144({
    title: ('Username'),
    labelPositionBottom: (true),
}));
const __VLS_146 = __VLS_145({
    title: ('Username'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_145));
const { default: __VLS_149 } = __VLS_147.slots;
let __VLS_150;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_151 = __VLS_asFunctionalComponent1(__VLS_150, new __VLS_150({
    inputId: ('username'),
    modelValue: (__VLS_ctx.form.invalidInputGroup),
    errorMessage: ('Please choose a username.'),
    formSubmitted: (__VLS_ctx.formSubmitted),
    isPlaceholder: (false),
}));
const __VLS_152 = __VLS_151({
    inputId: ('username'),
    modelValue: (__VLS_ctx.form.invalidInputGroup),
    errorMessage: ('Please choose a username.'),
    formSubmitted: (__VLS_ctx.formSubmitted),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_151));
// @ts-ignore
[form, formSubmitted,];
var __VLS_147;
// @ts-ignore
[];
var __VLS_141;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-0 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_155;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_156 = __VLS_asFunctionalComponent1(__VLS_155, new __VLS_155({
    title: ('Layout'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_157 = __VLS_156({
    title: ('Layout'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_156));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_160 } = __VLS_158.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-floating" },
});
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
let __VLS_161;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_162 = __VLS_asFunctionalComponent1(__VLS_161, new __VLS_161({
    title: ('Email address'),
    labelPositionBottom: (true),
}));
const __VLS_163 = __VLS_162({
    title: ('Email address'),
    labelPositionBottom: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_162));
const { default: __VLS_166 } = __VLS_164.slots;
let __VLS_167;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_168 = __VLS_asFunctionalComponent1(__VLS_167, new __VLS_167({
    inputId: ('email'),
    modelValue: (__VLS_ctx.form.validEmail),
    inputType: ('email'),
    required: (false),
    isPlaceholder: (false),
}));
const __VLS_169 = __VLS_168({
    inputId: ('email'),
    modelValue: (__VLS_ctx.form.validEmail),
    inputType: ('email'),
    required: (false),
    isPlaceholder: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_168));
// @ts-ignore
[form,];
var __VLS_164;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_172;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_173 = __VLS_asFunctionalComponent1(__VLS_172, new __VLS_172({
    getValueKey: "label",
    displayKey: "label",
    modelValue: (__VLS_ctx.form.layout),
    options: (__VLS_ctx.selectMenu),
    required: (false),
    isPlaceholder: (true),
    placeholder: ('Open this select menu'),
}));
const __VLS_174 = __VLS_173({
    getValueKey: "label",
    displayKey: "label",
    modelValue: (__VLS_ctx.form.layout),
    options: (__VLS_ctx.selectMenu),
    required: (false),
    isPlaceholder: (true),
    placeholder: ('Open this select menu'),
}, ...__VLS_functionalComponentArgsRest(__VLS_173));
// @ts-ignore
[form, selectMenu,];
var __VLS_158;
{
    const { details: __VLS_177 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-footer text-end" },
    });
    /** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-9 offset-sm-3" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
    /** @type {__VLS_StyleScopedClasses['offset-sm-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-primary me-3" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "btn btn-light" },
        type: "reset",
        value: "Cancel",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
