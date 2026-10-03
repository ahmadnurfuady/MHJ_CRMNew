import { ref, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { projectCategory, projectPriority, projectSize, projectType, teamMember, } from '@/core/data/project';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const projectForm = ref({
    projectName: initInputField(),
    clientName: initInputField(),
    cost: initInputField(),
    projectCost: initSelectField(),
    projectCategory: initSelectField(),
    projectPriority: initSelectField(),
    teamLeader: initSelectField(),
    teamMember: initSelectField(),
    projectSize: initSelectField(),
    startDate: initInputField(),
    endDate: initInputField(),
    details: initInputField(),
    document: initInputField(),
});
const formSubmitted = ref(false);
function handleSubmit() {
    formSubmitted.value = true;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card create-project-form custom-input" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['create-project-form']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (__VLS_ctx.handleSubmit) },
    ...{ class: "row g-3 needs-validation" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Project Name'),
}));
const __VLS_2 = __VLS_1({
    title: ('Project Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Project Name is required.'),
    modelValue: (__VLS_ctx.projectForm.projectName),
    inputId: ('project-title'),
    placeholder: ('Enter Project Name'),
}));
const __VLS_8 = __VLS_7({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Project Name is required.'),
    modelValue: (__VLS_ctx.projectForm.projectName),
    inputId: ('project-title'),
    placeholder: ('Enter Project Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[handleSubmit, formSubmitted, projectForm,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Client Name'),
}));
const __VLS_13 = __VLS_12({
    title: ('Client Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Client Name is required.'),
    modelValue: (__VLS_ctx.projectForm.clientName),
    inputId: ('client-name'),
    placeholder: ('Enter Client Name'),
}));
const __VLS_19 = __VLS_18({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Client Name is required.'),
    modelValue: (__VLS_ctx.projectForm.clientName),
    inputId: ('client-name'),
    placeholder: ('Enter Client Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
// @ts-ignore
[formSubmitted, projectForm,];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Cost'),
}));
const __VLS_24 = __VLS_23({
    title: ('Cost'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Cost is required.'),
    modelValue: (__VLS_ctx.projectForm.cost),
    inputId: ('project-title'),
    placeholder: ('Enter Cost'),
}));
const __VLS_30 = __VLS_29({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Cost is required.'),
    modelValue: (__VLS_ctx.projectForm.cost),
    inputId: ('project-title'),
    placeholder: ('Enter Cost'),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
// @ts-ignore
[formSubmitted, projectForm,];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    title: ('Project Type'),
}));
const __VLS_35 = __VLS_34({
    title: ('Project Type'),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_38 } = __VLS_36.slots;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Project Type'),
    modelValue: (__VLS_ctx.projectForm.projectCost),
    options: (__VLS_ctx.projectType),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_41 = __VLS_40({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Project Type'),
    modelValue: (__VLS_ctx.projectForm.projectCost),
    options: (__VLS_ctx.projectType),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
// @ts-ignore
[formSubmitted, projectForm, projectType,];
var __VLS_36;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_44;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    title: ('Category'),
}));
const __VLS_46 = __VLS_45({
    title: ('Category'),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
let __VLS_50;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Category'),
    modelValue: (__VLS_ctx.projectForm.projectCategory),
    options: (__VLS_ctx.projectCategory),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_52 = __VLS_51({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Category'),
    modelValue: (__VLS_ctx.projectForm.projectCategory),
    options: (__VLS_ctx.projectCategory),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
// @ts-ignore
[formSubmitted, projectForm, projectCategory,];
var __VLS_47;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    title: ('Priority'),
}));
const __VLS_57 = __VLS_56({
    title: ('Priority'),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
const { default: __VLS_60 } = __VLS_58.slots;
let __VLS_61;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Priority'),
    modelValue: (__VLS_ctx.projectForm.projectPriority),
    options: (__VLS_ctx.projectPriority),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_63 = __VLS_62({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Priority'),
    modelValue: (__VLS_ctx.projectForm.projectPriority),
    options: (__VLS_ctx.projectPriority),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
// @ts-ignore
[formSubmitted, projectForm, projectPriority,];
var __VLS_58;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_66;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
    title: ('Select Team Leader'),
}));
const __VLS_68 = __VLS_67({
    title: ('Select Team Leader'),
}, ...__VLS_functionalComponentArgsRest(__VLS_67));
const { default: __VLS_71 } = __VLS_69.slots;
let __VLS_72;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Select Team Leader'),
    modelValue: (__VLS_ctx.projectForm.teamLeader),
    options: (__VLS_ctx.teamMember),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_74 = __VLS_73({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Select Team Leader'),
    modelValue: (__VLS_ctx.projectForm.teamLeader),
    options: (__VLS_ctx.teamMember),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
// @ts-ignore
[formSubmitted, projectForm, teamMember,];
var __VLS_69;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_77;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77({
    title: ('Select Members'),
}));
const __VLS_79 = __VLS_78({
    title: ('Select Members'),
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
const { default: __VLS_82 } = __VLS_80.slots;
let __VLS_83;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Select Members'),
    modelValue: (__VLS_ctx.projectForm.teamMember),
    options: (__VLS_ctx.teamMember),
    formSubmitted: (__VLS_ctx.formSubmitted),
    multiSelect: (true),
}));
const __VLS_85 = __VLS_84({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Select Members'),
    modelValue: (__VLS_ctx.projectForm.teamMember),
    options: (__VLS_ctx.teamMember),
    formSubmitted: (__VLS_ctx.formSubmitted),
    multiSelect: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
// @ts-ignore
[formSubmitted, projectForm, teamMember,];
var __VLS_80;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_88;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent1(__VLS_88, new __VLS_88({
    title: ('Size'),
}));
const __VLS_90 = __VLS_89({
    title: ('Size'),
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
const { default: __VLS_93 } = __VLS_91.slots;
let __VLS_94;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_95 = __VLS_asFunctionalComponent1(__VLS_94, new __VLS_94({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Size'),
    modelValue: (__VLS_ctx.projectForm.projectSize),
    options: (__VLS_ctx.projectSize),
    formSubmitted: (__VLS_ctx.formSubmitted),
}));
const __VLS_96 = __VLS_95({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Size'),
    modelValue: (__VLS_ctx.projectForm.projectSize),
    options: (__VLS_ctx.projectSize),
    formSubmitted: (__VLS_ctx.formSubmitted),
}, ...__VLS_functionalComponentArgsRest(__VLS_95));
// @ts-ignore
[formSubmitted, projectForm, projectSize,];
var __VLS_91;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_99;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_100 = __VLS_asFunctionalComponent1(__VLS_99, new __VLS_99({
    title: ('Start Date'),
}));
const __VLS_101 = __VLS_100({
    title: ('Start Date'),
}, ...__VLS_functionalComponentArgsRest(__VLS_100));
const { default: __VLS_104 } = __VLS_102.slots;
let __VLS_105;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_106 = __VLS_asFunctionalComponent1(__VLS_105, new __VLS_105({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Start date is required.'),
    modelValue: (__VLS_ctx.projectForm.startDate),
    inputId: ('start-date'),
    placeholder: ('Enter Start Date'),
    inputType: ('date'),
}));
const __VLS_107 = __VLS_106({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Start date is required.'),
    modelValue: (__VLS_ctx.projectForm.startDate),
    inputId: ('start-date'),
    placeholder: ('Enter Start Date'),
    inputType: ('date'),
}, ...__VLS_functionalComponentArgsRest(__VLS_106));
// @ts-ignore
[formSubmitted, projectForm,];
var __VLS_102;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_110;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_111 = __VLS_asFunctionalComponent1(__VLS_110, new __VLS_110({
    title: ('End Date'),
}));
const __VLS_112 = __VLS_111({
    title: ('End Date'),
}, ...__VLS_functionalComponentArgsRest(__VLS_111));
const { default: __VLS_115 } = __VLS_113.slots;
let __VLS_116;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_117 = __VLS_asFunctionalComponent1(__VLS_116, new __VLS_116({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('End date is required.'),
    modelValue: (__VLS_ctx.projectForm.endDate),
    inputId: ('end-date'),
    placeholder: ('Enter End Date'),
    inputType: ('date'),
}));
const __VLS_118 = __VLS_117({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('End date is required.'),
    modelValue: (__VLS_ctx.projectForm.endDate),
    inputId: ('end-date'),
    placeholder: ('Enter End Date'),
    inputType: ('date'),
}, ...__VLS_functionalComponentArgsRest(__VLS_117));
// @ts-ignore
[formSubmitted, projectForm,];
var __VLS_113;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_121;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_122 = __VLS_asFunctionalComponent1(__VLS_121, new __VLS_121({
    title: ('Details'),
}));
const __VLS_123 = __VLS_122({
    title: ('Details'),
}, ...__VLS_functionalComponentArgsRest(__VLS_122));
const { default: __VLS_126 } = __VLS_124.slots;
let __VLS_127;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_128 = __VLS_asFunctionalComponent1(__VLS_127, new __VLS_127({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Details is required.'),
    modelValue: (__VLS_ctx.projectForm.details),
    inputId: ('end-date'),
    placeholder: ('Enter Details'),
    inputType: ('textarea'),
    rows: (4),
}));
const __VLS_129 = __VLS_128({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Details is required.'),
    modelValue: (__VLS_ctx.projectForm.details),
    inputId: ('end-date'),
    placeholder: ('Enter Details'),
    inputType: ('textarea'),
    rows: (4),
}, ...__VLS_functionalComponentArgsRest(__VLS_128));
// @ts-ignore
[formSubmitted, projectForm,];
var __VLS_124;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_132;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_133 = __VLS_asFunctionalComponent1(__VLS_132, new __VLS_132({
    title: ('Upload Documents'),
}));
const __VLS_134 = __VLS_133({
    title: ('Upload Documents'),
}, ...__VLS_functionalComponentArgsRest(__VLS_133));
const { default: __VLS_137 } = __VLS_135.slots;
let __VLS_138;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_139 = __VLS_asFunctionalComponent1(__VLS_138, new __VLS_138({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Please select your file.'),
    modelValue: (__VLS_ctx.projectForm.document),
    inputId: ('document'),
    placeholder: ('Upload Documents'),
    inputType: ('file'),
    multiple: (true),
}));
const __VLS_140 = __VLS_139({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Please select your file.'),
    modelValue: (__VLS_ctx.projectForm.document),
    inputId: ('document'),
    placeholder: ('Upload Documents'),
    inputType: ('file'),
    multiple: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_139));
// @ts-ignore
[formSubmitted, projectForm,];
var __VLS_135;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex justify-content-end" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-secondary" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
