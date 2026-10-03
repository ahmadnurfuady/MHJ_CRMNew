import { ref, onMounted, defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { category } from '@/core/data/category';
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const CreateCategoryModal = defineAsyncComponent(() => import('@/module/ecommerce/product/addProduct/CreateCategoryModal.vue'));
const CategoryFilter = defineAsyncComponent(() => import('@/module/ecommerce/category/CategoryFilter.vue'));
const openCategoryModal = ref(false);
const categories = ref([]);
const tableConfig = ref({
    columns: [
        { title: 'Category', fieldValue: 'categoryName', sort: true },
        { title: 'Description', fieldValue: 'description', sort: true },
        { title: 'Category Type', fieldValue: 'categoryType', sort: true },
    ],
    rowAction: [
        { label: 'Edit', actionToPerform: 'edit', icon: 'edit-content' },
        {
            label: 'Delete',
            actionToPerform: 'delete',
            icon: 'trash1',
            modal: true,
            modelText: 'Do you really want to delete the category?',
        },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = formatCategory(category);
    categories.value = category;
});
function handleAction(value) {
    if (value.actionToPerform === 'delete' && value.data) {
        categories.value = categories.value.filter((category) => category.id !== value.data.id);
        tableConfig.value = { ...tableConfig.value, data: formatCategory(categories.value) };
    }
}
function formatCategory(categories) {
    return categories.map((category) => {
        const formattedCategory = { ...category };
        formattedCategory.categoryName = `<div class="product-names">
                                <div class="light-product-box">
                                  <img class="img-fluid"  src="${getImages(category.image)}" alt="${category.categoryName}">
                                </div>
                                <p>${category.categoryName}</p>
                              </div>`;
        formattedCategory.description = `<p class="f-light">${category.description}</p>`;
        formattedCategory.categoryType = `<span class="badge badge-light-${category.color}">${category.categoryType}</span>`;
        return formattedCategory;
    });
}
function createCategoryModal() {
    openCategoryModal.value = true;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid e-category" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['e-category']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.CategoryFilter} */
CategoryFilter;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header card-no-border text-end" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header-right-icon" },
});
/** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.createCategoryModal());
            // @ts-ignore
            [createCategoryModal,];
        } },
    ...{ class: "btn btn-primary f-w-500" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus pe-2" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body px-0 pt-0" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-product list-category" },
});
/** @type {__VLS_StyleScopedClasses['list-product']} */ ;
/** @type {__VLS_StyleScopedClasses['list-category']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
}));
const __VLS_7 = __VLS_6({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
const __VLS_11 = {
    /** @type {typeof __VLS_10.action} */
    onAction: (...[$event]) => {
        return (__VLS_ctx.handleAction($event));
        // @ts-ignore
        [tableConfig, handleAction,];
    },
};
var __VLS_8;
var __VLS_9;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.CreateCategoryModal} */
CreateCategoryModal;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.openCategoryModal),
}));
const __VLS_14 = __VLS_13({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.openCategoryModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_17;
const __VLS_18 = {
    /** @type {typeof __VLS_17.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.openCategoryModal = false);
        // @ts-ignore
        [openCategoryModal, openCategoryModal,];
    },
};
var __VLS_15;
var __VLS_16;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
