import { products } from '@/core/data/product';
import { defineAsyncComponent, onMounted, ref, watch } from 'vue';
import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'));
const props = withDefaults(defineProps(), {
    pageSize: 14,
    hideColumns: () => [],
});
const productList = ref([]);
const tableConfig = ref({
    columns: [
        { title: 'Product Name', fieldValue: 'name', sort: true },
        { title: 'SKU', fieldValue: 'id', sort: true },
        { title: 'Category', fieldValue: 'category', sort: true },
        { title: 'Price', fieldValue: 'price', sort: true },
        { title: 'Qty', fieldValue: 'quantity', sort: true },
        { title: 'Status', fieldValue: 'stockStatus', sort: true },
        { title: 'Rating', fieldValue: 'star', sort: true },
    ],
    rowAction: [
        {
            label: 'Edit',
            actionToPerform: 'edit',
            icon: 'edit-content',
            path: routes.Ecommerce.Products.AddProduct,
        },
        { label: 'Delete', actionToPerform: 'delete', icon: 'trash1', modal: true },
    ],
    data: [],
});
watch(() => [...props.hideColumns], (newValue) => {
    if (newValue) {
        tableConfig.value.columns.forEach((column) => {
            column.hideColumn = newValue.includes(column.fieldValue);
        });
    }
}, { immediate: true });
onMounted(() => {
    tableConfig.value.data = products;
    productList.value = products;
});
function handleAction(value) {
    if (value.actionToPerform === 'delete' && value.data) {
        const id = value.data.id;
        productList.value = productList.value.filter((product) => product.id !== id);
        tableConfig.value.data = productList.value;
    }
}
const __VLS_defaults = {
    pageSize: 14,
    hideColumns: () => [],
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (__VLS_ctx.pageSize),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (__VLS_ctx.pageSize),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.action} */
    onAction: (...[$event]) => {
        return (__VLS_ctx.handleAction($event));
        // @ts-ignore
        [tableConfig, pageSize, handleAction,];
    },
};
var __VLS_7;
const { default: __VLS_8 } = __VLS_3.slots;
{
    const { name: __VLS_9 } = __VLS_3.slots;
    const [{ row }] = __VLS_vSlot(__VLS_9);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-names" },
    });
    /** @type {__VLS_StyleScopedClasses['product-names']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-product-box" },
    });
    /** @type {__VLS_StyleScopedClasses['light-product-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(row.images[0])),
        alt: (row.name),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (row.name);
    // @ts-ignore
    [getImages,];
}
{
    const { stockStatus: __VLS_10 } = __VLS_3.slots;
    const [{ row }] = __VLS_vSlot(__VLS_10);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge" },
        ...{ class: (row.stockStatus === 'in Stock' ? 'badge-light-primary' : 'badge-light-secondary') },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    (row.stockStatus);
    // @ts-ignore
    [];
}
{
    const { star: __VLS_11 } = __VLS_3.slots;
    const [{ row }] = __VLS_vSlot(__VLS_11);
    let __VLS_12;
    /** @ts-ignore @type { | typeof __VLS_components.RatingStars} */
    RatingStars;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        rating: (row.star),
    }));
    const __VLS_14 = __VLS_13({
        rating: (row.star),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
