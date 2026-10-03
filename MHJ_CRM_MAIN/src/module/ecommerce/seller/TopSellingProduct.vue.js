import { ref, onMounted, defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { topSellingProducts } from '@/core/data/seller';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Product', fieldValue: 'productName', sort: true },
        { title: 'Category', fieldValue: 'category', sort: true },
        { title: 'Price', fieldValue: 'price', sort: true },
        { title: 'Orders', fieldValue: 'orders', sort: true },
        { title: 'Stock', fieldValue: 'stock', sort: true },
        { title: 'Total Amount', fieldValue: 'totalAmount', sort: true },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = topSellingProducts.map((product) => {
        const formattedProduct = { ...product };
        formattedProduct.productName = `<div class="product-names">
                                <div class="light-product-box">
                                  <img class="img-fluid" src="${getImages(product.productImage)}" alt="${product.productName}"></div>
                                <p>${product.productName}</p>
                              </div>`;
        product.category = `<p class="c-o-light">${product.category}</p>`;
        formattedProduct.price = `<p class="c-o-light">${'$' + product.price}</p>`;
        formattedProduct.orders = `<p class="c-o-light">${product.orders}</p>`;
        formattedProduct.stock = `<p class="c-o-light">${product.stock}</p>`;
        formattedProduct.totalAmount = `<p class="c-o-light">${'$' + product.totalAmount}</p>`;
        return formattedProduct;
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
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('heading-space vendor-selling-table'),
    cardType: ('dataTable'),
    headerTitle: ('Top Selling Products'),
    dropdownType: ('simple'),
    padding: (false),
    cardBodyClass: ('px-0 pt-0 common-option'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('heading-space vendor-selling-table'),
    cardType: ('dataTable'),
    headerTitle: ('Top Selling Products'),
    dropdownType: ('simple'),
    padding: (false),
    cardBodyClass: ('px-0 pt-0 common-option'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive currency-table recent-order-table custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['currency-table']} */ ;
/** @type {__VLS_StyleScopedClasses['recent-order-table']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (6),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}));
const __VLS_9 = __VLS_8({
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (6),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[tableConfig,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
