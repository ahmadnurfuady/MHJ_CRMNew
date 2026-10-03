import { ref, onMounted, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { validateForm } from '@/utils/validators/formValidators';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const Editor = defineAsyncComponent(() => import('@/components/shared/Editor.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
const formSubmitted = ref(false);
const categoryForm = ref({
    categoryName: initInputField(),
    slug: initInputField(),
    parentCategory: initSelectField(),
    categoryType: initSelectField(),
    categoryStatus: initSelectField(),
    description: initInputField(),
    metaTitle: initInputField(),
    metaKeyword: initInputField(),
});
const parentCategory = ref([]);
const categoryType = ref([]);
onMounted(async () => {
    parentCategory.value = [];
    categoryType.value = [];
    props.categories.forEach((category) => {
        parentCategory.value.push({
            value: category.categoryName,
            label: category.categoryName,
        });
        categoryType.value.push({
            value: category.categoryType,
            label: category.categoryType,
        });
    });
});
function handleSubmit() {
    formSubmitted.value = true;
    const nonRequiredField = ['parentCategory', 'categoryType', 'categoryStatus'];
    const { isValid } = validateForm(categoryForm.value, nonRequiredField);
    if (isValid) {
        emitClose();
    }
}
function emitClose() {
    emits('closeModal');
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
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
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Category Name'),
}));
const __VLS_2 = __VLS_1({
    title: ('Category Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Category name is required.'),
    modelValue: (__VLS_ctx.categoryForm.categoryName),
    inputId: ('category-title'),
    placeholder: ('Enter category name'),
}));
const __VLS_8 = __VLS_7({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Category name is required.'),
    modelValue: (__VLS_ctx.categoryForm.categoryName),
    inputId: ('category-title'),
    placeholder: ('Enter category name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[handleSubmit, formSubmitted, categoryForm,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Slug Name'),
}));
const __VLS_13 = __VLS_12({
    title: ('Slug Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Slug name is required.'),
    modelValue: (__VLS_ctx.categoryForm.slug),
    inputId: ('slug'),
    placeholder: ('Enter slug'),
}));
const __VLS_19 = __VLS_18({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Slug name is required.'),
    modelValue: (__VLS_ctx.categoryForm.slug),
    inputId: ('slug'),
    placeholder: ('Enter slug'),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
// @ts-ignore
[formSubmitted, categoryForm,];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Parent Category'),
}));
const __VLS_24 = __VLS_23({
    title: ('Parent Category'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select parent category'),
    modelValue: (__VLS_ctx.categoryForm.parentCategory),
    options: (__VLS_ctx.parentCategory),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select parent category'),
    modelValue: (__VLS_ctx.categoryForm.parentCategory),
    options: (__VLS_ctx.parentCategory),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
// @ts-ignore
[categoryForm, parentCategory,];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_33;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    title: ('Category Type'),
}));
const __VLS_35 = __VLS_34({
    title: ('Category Type'),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_38 } = __VLS_36.slots;
let __VLS_39;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category type'),
    modelValue: (__VLS_ctx.categoryForm.categoryType),
    options: (__VLS_ctx.categoryType),
    required: (false),
}));
const __VLS_41 = __VLS_40({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category type'),
    modelValue: (__VLS_ctx.categoryForm.categoryType),
    options: (__VLS_ctx.categoryType),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
// @ts-ignore
[categoryForm, categoryType,];
var __VLS_36;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    title: ('Category Status'),
}));
const __VLS_46 = __VLS_45({
    title: ('Category Status'),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
let __VLS_50;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category status'),
    modelValue: (__VLS_ctx.categoryForm.categoryStatus),
    options: (__VLS_ctx.categoryStatus),
    required: (false),
}));
const __VLS_52 = __VLS_51({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category status'),
    modelValue: (__VLS_ctx.categoryForm.categoryStatus),
    options: (__VLS_ctx.categoryStatus),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
// @ts-ignore
[categoryForm, categoryStatus,];
var __VLS_47;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_55;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    title: ('Category Description'),
}));
const __VLS_57 = __VLS_56({
    title: ('Category Description'),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
const { default: __VLS_60 } = __VLS_58.slots;
let __VLS_61;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Category description is required.'),
    modelValue: (__VLS_ctx.categoryForm.description),
    inputId: ('end-date'),
    placeholder: ('Enter category description'),
    inputType: ('textarea'),
}));
const __VLS_63 = __VLS_62({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Category description is required.'),
    modelValue: (__VLS_ctx.categoryForm.description),
    inputId: ('end-date'),
    placeholder: ('Enter category description'),
    inputType: ('textarea'),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
// @ts-ignore
[formSubmitted, categoryForm,];
var __VLS_58;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "main-divider" },
});
/** @type {__VLS_StyleScopedClasses['main-divider']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "divider-body" },
});
/** @type {__VLS_StyleScopedClasses['divider-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_66;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
    title: ('Meta Title'),
}));
const __VLS_68 = __VLS_67({
    title: ('Meta Title'),
}, ...__VLS_functionalComponentArgsRest(__VLS_67));
const { default: __VLS_71 } = __VLS_69.slots;
let __VLS_72;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Meta title is required.'),
    modelValue: (__VLS_ctx.categoryForm.metaTitle),
    inputId: ('meta-title'),
    placeholder: ('Enter meta title'),
}));
const __VLS_74 = __VLS_73({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Meta title is required.'),
    modelValue: (__VLS_ctx.categoryForm.metaTitle),
    inputId: ('meta-title'),
    placeholder: ('Enter meta title'),
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
// @ts-ignore
[formSubmitted, categoryForm,];
var __VLS_69;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_77;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77({
    title: ('Meta Keywords'),
}));
const __VLS_79 = __VLS_78({
    title: ('Meta Keywords'),
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
const { default: __VLS_82 } = __VLS_80.slots;
let __VLS_83;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Meta keywords is required.'),
    modelValue: (__VLS_ctx.categoryForm.metaKeyword),
    inputId: ('meta-keyword'),
    placeholder: ('Enter meta keyword'),
}));
const __VLS_85 = __VLS_84({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Meta keywords is required.'),
    modelValue: (__VLS_ctx.categoryForm.metaKeyword),
    inputId: ('meta-keyword'),
    placeholder: ('Enter meta keyword'),
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
// @ts-ignore
[formSubmitted, categoryForm,];
var __VLS_80;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_88;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent1(__VLS_88, new __VLS_88({
    title: ('Meta Description'),
}));
const __VLS_90 = __VLS_89({
    title: ('Meta Description'),
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
const { default: __VLS_93 } = __VLS_91.slots;
let __VLS_94;
/** @ts-ignore @type { | typeof __VLS_components.Editor} */
Editor;
// @ts-ignore
const __VLS_95 = __VLS_asFunctionalComponent1(__VLS_94, new __VLS_94({}));
const __VLS_96 = __VLS_95({}, ...__VLS_functionalComponentArgsRest(__VLS_95));
// @ts-ignore
[];
var __VLS_91;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12 d-flex justify-content-end" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.emitClose) },
    ...{ class: "btn button-light-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary ms-2" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
// @ts-ignore
[emitClose,];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
