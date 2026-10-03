import { ref, defineAsyncComponent, onMounted } from 'vue';
import { category, categoryStatus } from '@/core/data/category';
import { initSelectField } from '@/core/data/common';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const categories = ref(category);
const parentCategory = ref([]);
const categoryType = ref([]);
const categoryForm = ref({
    parent_category: initSelectField(),
    category_type: initSelectField(),
    category_status: initSelectField(),
});
onMounted(() => {
    categories.value.filter((category) => {
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
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md" },
});
/** @type {__VLS_StyleScopedClasses['col-md']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    title: ('Parent Category'),
}));
const __VLS_9 = __VLS_8({
    title: ('Parent Category'),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select parent category'),
    modelValue: (__VLS_ctx.categoryForm.parent_category),
    options: (__VLS_ctx.parentCategory),
    required: (false),
}));
const __VLS_15 = __VLS_14({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select parent category'),
    modelValue: (__VLS_ctx.categoryForm.parent_category),
    options: (__VLS_ctx.parentCategory),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
// @ts-ignore
[categoryForm, parentCategory,];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md" },
});
/** @type {__VLS_StyleScopedClasses['col-md']} */ ;
let __VLS_18;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    title: ('Category Type'),
}));
const __VLS_20 = __VLS_19({
    title: ('Category Type'),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category type'),
    modelValue: (__VLS_ctx.categoryForm.category_type),
    options: (__VLS_ctx.categoryType),
    required: (false),
}));
const __VLS_26 = __VLS_25({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category type'),
    modelValue: (__VLS_ctx.categoryForm.category_type),
    options: (__VLS_ctx.categoryType),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
// @ts-ignore
[categoryForm, categoryType,];
var __VLS_21;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md" },
});
/** @type {__VLS_StyleScopedClasses['col-md']} */ ;
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    title: ('Category Status'),
}));
const __VLS_31 = __VLS_30({
    title: ('Category Status'),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const { default: __VLS_34 } = __VLS_32.slots;
let __VLS_35;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category status'),
    modelValue: (__VLS_ctx.categoryForm.category_status),
    options: (__VLS_ctx.categoryStatus),
    required: (false),
}));
const __VLS_37 = __VLS_36({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category status'),
    modelValue: (__VLS_ctx.categoryForm.category_status),
    options: (__VLS_ctx.categoryStatus),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
// @ts-ignore
[categoryForm, categoryStatus,];
var __VLS_32;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col d-flex justify-content-start align-items-center m-t-40" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-start']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['m-t-40']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-primary f-w-500" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
