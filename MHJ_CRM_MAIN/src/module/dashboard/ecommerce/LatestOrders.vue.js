import { orders } from '@/core/data/dashboard/ecommerce';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { useProductDetailsNavigation } from '@/composables/useProductNavigation';
import { getImages } from '@/utils';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const { navigateToProduct } = useProductDetailsNavigation();
const baseUrl = import.meta.env.BASE_URL;
const tableConfig = ref({
    columns: [
        { title: 'Order ID', fieldValue: 'productId', sort: false },
        { title: 'Billing Name', fieldValue: 'customerName', sort: false },
        { title: 'Amount', fieldValue: 'amount', sort: false, type: 'price' },
        { title: 'Status', fieldValue: 'status', sort: false },
        { title: 'Invoice', fieldValue: 'invoiceIcon', sort: false },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = orders;
});
function navigate() {
    navigateToProduct('1');
}
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
    headerTitle: ('Latest Orders  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Latest Orders  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-items-center gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "update-data d-none d-md-block f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['update-data']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-md-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "sales-chart-dropdown-select" },
    });
    /** @type {__VLS_StyleScopedClasses['sales-chart-dropdown-select']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header-right-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn dropdown-toggle" },
        id: "dropdownMenuButtondownMenu",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        'aria-labelledby': "dropdownMenuButtondownMenu",
        role: "menu",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-order table-responsive custom-scrollbar custom-latest-table" },
});
/** @type {__VLS_StyleScopedClasses['table-order']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-latest-table']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (5),
    pagination: (false),
}));
const __VLS_10 = __VLS_9({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (5),
    pagination: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_11.slots;
{
    const { productId: __VLS_14 } = __VLS_11.slots;
    const [{ row }] = __VLS_vSlot(__VLS_14);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-name" },
    });
    /** @type {__VLS_StyleScopedClasses['product-name']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "order-table-images img-fluid" },
        src: (__VLS_ctx.getImages(row.productImage)),
        alt: "product",
    });
    /** @type {__VLS_StyleScopedClasses['order-table-images']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.navigate());
                // @ts-ignore
                [tableConfig, getImages, navigate,];
            } },
        ...{ class: "f-14 f-w-500" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (row.productName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-14 f-w-500 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    (row.productId);
    // @ts-ignore
    [];
}
{
    const { customerName: __VLS_15 } = __VLS_11.slots;
    const [{ row }] = __VLS_vSlot(__VLS_15);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.navigate());
                // @ts-ignore
                [navigate,];
            } },
        ...{ class: "f-14 f-w-500" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (row.customerName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-14 f-w-500 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    (row.customerEmail);
    // @ts-ignore
    [];
}
{
    const { status: __VLS_16 } = __VLS_11.slots;
    const [{ row }] = __VLS_vSlot(__VLS_16);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`${row.statusClass} product-sub badge rounded-pill text-center`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (row.status);
    // @ts-ignore
    [];
}
{
    const { invoiceIcon: __VLS_17 } = __VLS_11.slots;
    const [{ row }] = __VLS_vSlot(__VLS_17);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
        ...{ class: "invoice-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['invoice-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
        href: (`${__VLS_ctx.baseUrl}svg/icon-sprite.svg#${row.invoiceIcon}`),
    });
    // @ts-ignore
    [baseUrl,];
}
// @ts-ignore
[];
var __VLS_11;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
