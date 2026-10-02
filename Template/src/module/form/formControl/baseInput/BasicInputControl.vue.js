import { ref, defineAsyncComponent } from 'vue';
import { states } from '@/core/data/country';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const colorPicker = ref({ data: '#006666', errorMessage: '' });
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
    headerTitle: ('Basic HTML Input Control'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
    cardBodyClass: ('custom-input theme-form'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Basic HTML Input Control'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
    cardBodyClass: ('custom-input theme-form'),
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
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    title: ('Placeholder'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_10 = __VLS_9({
    title: ('Placeholder'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    inputId: ('placeholder'),
    placeholder: ('Type your title in Placeholder'),
    required: (false),
}));
const __VLS_16 = __VLS_15({
    inputId: ('placeholder'),
    placeholder: ('Type your title in Placeholder'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Password'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_21 = __VLS_20({
    title: ('Password'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_24 } = __VLS_22.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    inputId: ('password'),
    inputType: ('password'),
    placeholder: ('Password input'),
    required: (false),
}));
const __VLS_27 = __VLS_26({
    inputId: ('password'),
    inputType: ('password'),
    placeholder: ('Password input'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    title: ('Number'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_32 = __VLS_31({
    title: ('Number'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_35 } = __VLS_33.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    inputId: ('number'),
    inputType: ('number'),
    placeholder: ('Number input'),
    required: (false),
}));
const __VLS_38 = __VLS_37({
    inputId: ('number'),
    inputType: ('number'),
    placeholder: ('Number input'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    title: ('Telephone'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_43 = __VLS_42({
    title: ('Telephone'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_46 } = __VLS_44.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    inputId: ('tel'),
    inputType: ('tel'),
    placeholder: ('91-(999)-999-999'),
    required: (false),
}));
const __VLS_49 = __VLS_48({
    inputId: ('tel'),
    inputType: ('tel'),
    placeholder: ('91-(999)-999-999'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_52;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    title: ('URL'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_54 = __VLS_53({
    title: ('URL'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_57 } = __VLS_55.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    inputId: ('url'),
    inputType: ('url'),
    placeholder: ('https://getbootstrap.com'),
    required: (false),
}));
const __VLS_60 = __VLS_59({
    inputId: ('url'),
    inputType: ('url'),
    placeholder: ('https://getbootstrap.com'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
var __VLS_55;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_63;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent1(__VLS_63, new __VLS_63({
    title: ('Date and Time'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_65 = __VLS_64({
    title: ('Date and Time'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_68 } = __VLS_66.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_69;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    inputId: ('date-time'),
    inputType: ('datetime-local'),
    placeholder: ('2018-01-19T18:45:00'),
    required: (false),
}));
const __VLS_71 = __VLS_70({
    inputId: ('date-time'),
    inputType: ('datetime-local'),
    placeholder: ('2018-01-19T18:45:00'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
var __VLS_66;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_74;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
    title: ('Date'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_76 = __VLS_75({
    title: ('Date'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_75));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_79 } = __VLS_77.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_80;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent1(__VLS_80, new __VLS_80({
    inputId: ('date'),
    inputType: ('date'),
    placeholder: ('2018-01-01'),
    required: (false),
}));
const __VLS_82 = __VLS_81({
    inputId: ('date'),
    inputType: ('date'),
    placeholder: ('2018-01-01'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
var __VLS_77;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_85;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
    title: ('Month'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_87 = __VLS_86({
    title: ('Month'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_90 } = __VLS_88.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_91;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({
    inputId: ('month'),
    inputType: ('month'),
    placeholder: ('2018-01'),
    required: (false),
}));
const __VLS_93 = __VLS_92({
    inputId: ('month'),
    inputType: ('month'),
    placeholder: ('2018-01'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_92));
var __VLS_88;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_96;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
    title: ('Week'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_98 = __VLS_97({
    title: ('Week'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_101 } = __VLS_99.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_102;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
    inputId: ('week'),
    inputType: ('week'),
    placeholder: ('2018-W09'),
    required: (false),
}));
const __VLS_104 = __VLS_103({
    inputId: ('week'),
    inputType: ('week'),
    placeholder: ('2018-W09'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_103));
var __VLS_99;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_107;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent1(__VLS_107, new __VLS_107({
    title: ('Datalist Example'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_109 = __VLS_108({
    title: ('Datalist Example'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_108));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_112 } = __VLS_110.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_113;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_114 = __VLS_asFunctionalComponent1(__VLS_113, new __VLS_113({
    inputId: ('datalist'),
    placeholder: ('Look up your nation...'),
    required: (false),
    datalist: (__VLS_ctx.states),
}));
const __VLS_115 = __VLS_114({
    inputId: ('datalist'),
    placeholder: ('Look up your nation...'),
    required: (false),
    datalist: (__VLS_ctx.states),
}, ...__VLS_functionalComponentArgsRest(__VLS_114));
// @ts-ignore
[states,];
var __VLS_110;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_118;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_119 = __VLS_asFunctionalComponent1(__VLS_118, new __VLS_118({
    title: ('Time'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_120 = __VLS_119({
    title: ('Time'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_119));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_123 } = __VLS_121.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_124;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_125 = __VLS_asFunctionalComponent1(__VLS_124, new __VLS_124({
    inputId: ('time'),
    inputType: ('time'),
    placeholder: ('21:45:00'),
    required: (false),
}));
const __VLS_126 = __VLS_125({
    inputId: ('time'),
    inputType: ('time'),
    placeholder: ('21:45:00'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_125));
// @ts-ignore
[];
var __VLS_121;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_129;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_130 = __VLS_asFunctionalComponent1(__VLS_129, new __VLS_129({
    title: ('Color Picker'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_131 = __VLS_130({
    title: ('Color Picker'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_130));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_134 } = __VLS_132.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_135;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_136 = __VLS_asFunctionalComponent1(__VLS_135, new __VLS_135({
    inputId: ('color'),
    inputType: ('color'),
    placeholder: ('#006666'),
    modelValue: (__VLS_ctx.colorPicker),
    required: (false),
    ...{ class: ('form-control-color') },
}));
const __VLS_137 = __VLS_136({
    inputId: ('color'),
    inputType: ('color'),
    placeholder: ('#006666'),
    modelValue: (__VLS_ctx.colorPicker),
    required: (false),
    ...{ class: ('form-control-color') },
}, ...__VLS_functionalComponentArgsRest(__VLS_136));
/** @type {__VLS_StyleScopedClasses['form-control-color']} */ ;
// @ts-ignore
[colorPicker,];
var __VLS_132;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_140;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_141 = __VLS_asFunctionalComponent1(__VLS_140, new __VLS_140({
    title: ('Maximum Length'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_142 = __VLS_141({
    title: ('Maximum Length'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_141));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_145 } = __VLS_143.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_146;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_147 = __VLS_asFunctionalComponent1(__VLS_146, new __VLS_146({
    inputId: ('max-length'),
    placeholder: ('Content must be in 6 characters'),
    required: (false),
    maxlength: (6),
}));
const __VLS_148 = __VLS_147({
    inputId: ('max-length'),
    placeholder: ('Content must be in 6 characters'),
    required: (false),
    maxlength: (6),
}, ...__VLS_functionalComponentArgsRest(__VLS_147));
// @ts-ignore
[];
var __VLS_143;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "col-sm-3" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-control-static" },
});
/** @type {__VLS_StyleScopedClasses['form-control-static']} */ ;
{
    const { details: __VLS_151 } = __VLS_3.slots;
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
        type: "submit",
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
