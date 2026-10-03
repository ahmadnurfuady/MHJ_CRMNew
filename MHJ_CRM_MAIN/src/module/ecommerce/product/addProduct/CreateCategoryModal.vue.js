import { ref, onMounted, defineAsyncComponent } from 'vue';
import { category, categoryStatus } from '@/core/data/category';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const CategoryForm = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/CategoryForm.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
const categories = ref(category);
const parentCategory = ref([]);
const categoryType = ref([]);
const editor = ref();
onMounted(async () => {
    const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic');
    editor.value = ClassicEditor;
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
function close() {
    parentCategory.value = [];
    categoryType.value = [];
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sidebar-body common-form e-category" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-body']} */ ;
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
/** @type {__VLS_StyleScopedClasses['e-category']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-content category-popup" },
});
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
/** @type {__VLS_StyleScopedClasses['category-popup']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Add Categories'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-lg'),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Add Categories'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-lg'),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.closeModal} */
    onCloseModal: (__VLS_ctx.close),
};
const { default: __VLS_7 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body p-0 custom-input" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-start" },
});
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-20" },
});
/** @type {__VLS_StyleScopedClasses['p-20']} */ ;
if (props.modalOpen) {
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.CategoryForm} */
    CategoryForm;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        ...{ 'onCloseModal': {} },
        categories: (__VLS_ctx.categories),
        categoryStatus: (__VLS_ctx.categoryStatus),
    }));
    const __VLS_10 = __VLS_9({
        ...{ 'onCloseModal': {} },
        categories: (__VLS_ctx.categories),
        categoryStatus: (__VLS_ctx.categoryStatus),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_13;
    const __VLS_14 = {
        /** @type {typeof __VLS_13.closeModal} */
        onCloseModal: (__VLS_ctx.close),
    };
    var __VLS_11;
    var __VLS_12;
}
// @ts-ignore
[close, close, categories, categoryStatus,];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
