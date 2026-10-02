import { defineAsyncComponent, ref } from 'vue';
import { initSelectField } from '@/core/data/common';
import { productCategory } from '@/core/data/product';
import { useProduct } from '@/store/product';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const CreateCategoryModal = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/CreateCategoryModal.vue'));
const props = defineProps();
const emits = defineEmits(['changeTab']);
const { changeTab } = useProduct();
const form = ref({
    category: initSelectField(),
});
const items = ref(['watches', 'sports', 'clothes', 'bottles']);
const openCategoryModal = ref(false);
function createCategoryModal() {
    openCategoryModal.value = true;
}
function handleTab(value) {
    if (props.activeTabId) {
        const updatedId = changeTab(value, props.activeTabId);
        if (updatedId) {
            emits('changeTab', updatedId);
        }
    }
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content custom-input" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sidebar-body common-form e-category" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-body']} */ ;
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
/** @type {__VLS_StyleScopedClasses['e-category']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3 common-form" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md" },
});
/** @type {__VLS_StyleScopedClasses['col-md']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Add Category'),
}));
const __VLS_2 = __VLS_1({
    title: ('Add Category'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category'),
    modelValue: (__VLS_ctx.form.category),
    options: (__VLS_ctx.productCategory),
}));
const __VLS_8 = __VLS_7({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select category'),
    modelValue: (__VLS_ctx.form.category),
    options: (__VLS_ctx.productCategory),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[form, productCategory,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "category-btn" },
});
/** @type {__VLS_StyleScopedClasses['category-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.createCategoryModal();
            // @ts-ignore
            [createCategoryModal,];
        } },
    ...{ class: "btn button-primary" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "me-2 fa-solid fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 common-tagify" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['common-tagify']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.TagInput} */
TagInput;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    tags: (__VLS_ctx.items),
}));
const __VLS_13 = __VLS_12({
    tags: (__VLS_ctx.items),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-buttons" },
});
/** @type {__VLS_StyleScopedClasses['product-buttons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(-1);
            // @ts-ignore
            [items, handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_16;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    icon: ('back-arrow'),
}));
const __VLS_18 = __VLS_17({
    icon: ('back-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(1);
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_21;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    icon: ('front-arrow'),
}));
const __VLS_23 = __VLS_22({
    icon: ('front-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_26;
/** @ts-ignore @type {typeof __VLS_components.CreateCategoryModal} */
CreateCategoryModal;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.openCategoryModal),
}));
const __VLS_28 = __VLS_27({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.openCategoryModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
let __VLS_31;
const __VLS_32 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.openCategoryModal = false;
            // @ts-ignore
            [openCategoryModal, openCategoryModal,];
        } });
var __VLS_29;
var __VLS_30;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
