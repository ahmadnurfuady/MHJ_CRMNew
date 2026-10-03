import { ref, onMounted, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { orderDetails, orderDetailsTab } from '@/core/data/order';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const BillingDetails = defineAsyncComponent(() => import('@/module/ecommerce/order/BillingDetails.vue'));
const CustomerDetails = defineAsyncComponent(() => import('@/module/ecommerce/order/CustomerDetails.vue'));
const router = useRouter();
const detailsTab = orderDetailsTab;
const orderDetailsList = ref(orderDetails);
const currentTab = ref(3);
const orderNumber = router.currentRoute.value.params.orderNumber;
const tableConfig = ref({
    columns: [
        { title: 'Image', fieldValue: 'productImage', sort: true },
        { title: 'Product', fieldValue: 'productName', sort: true },
        {
            title: 'Price',
            fieldValue: 'discountPrice',
            sort: true,
            type: 'price',
            decimalNumber: true,
        },
        { title: 'Qty', fieldValue: 'quantity', sort: true },
        {
            title: 'Subtotal',
            fieldValue: 'subTotal',
            sort: true,
            type: 'price',
            decimalNumber: true,
        },
    ],
    data: [],
});
onMounted(() => {
    const products = orderDetailsList.value.products.map((product) => {
        const formattedProduct = { ...product };
        const subTotal = product.quantity * (product.discountPrice ?? product.price);
        formattedProduct.subTotal = subTotal;
        return formattedProduct;
    });
    tableConfig.value.data = products ? products : [];
});
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
    ...{ class: "col-xxl-9 col-xl-8 box-col-8e" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-8e']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Order Status'),
    border: (true),
    padding: (false),
    cardBodyClass: ('track-order-details'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Order Status'),
    border: (true),
    padding: (false),
    cardBodyClass: ('track-order-details'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    id: "order-status-timeline",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (`status-bar progress step-${__VLS_ctx.currentTab}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "main-status-line" },
});
/** @type {__VLS_StyleScopedClasses['main-status-line']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [tab, index] of __VLS_vFor((__VLS_ctx.detailsTab))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "order-process" },
        ...{ class: ({ active: tab.id <= __VLS_ctx.currentTab }) },
    });
    /** @type {__VLS_StyleScopedClasses['order-process']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (tab.id);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (tab.title);
    // @ts-ignore
    [currentTab, currentTab, detailsTab,];
}
// @ts-ignore
[];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    headerTitle: (`Order Number: #${__VLS_ctx.orderNumber}`),
    padding: (false),
    cardBodyClass: ('order-details-product pt-0'),
}));
const __VLS_8 = __VLS_7({
    headerTitle: (`Order Number: #${__VLS_ctx.orderNumber}`),
    padding: (false),
    cardBodyClass: ('order-details-product pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
    search: (false),
    pagination: (false),
}));
const __VLS_14 = __VLS_13({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
    search: (false),
    pagination: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
{
    const { productImage: __VLS_18 } = __VLS_15.slots;
    const [{ row }] = __VLS_vSlot(__VLS_18);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-product-box" },
    });
    /** @type {__VLS_StyleScopedClasses['light-product-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(row.productImage)),
        alt: (row.productName),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    // @ts-ignore
    [orderNumber, tableConfig, getImages,];
}
{
    const { productName: __VLS_19 } = __VLS_15.slots;
    const [{ row }] = __VLS_vSlot(__VLS_19);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    (row.productName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (row.brand);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "common-dot" },
    });
    /** @type {__VLS_StyleScopedClasses['common-dot']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (row.color);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_15;
// @ts-ignore
[];
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-xl-4 box-col-4" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.BillingDetails} */
BillingDetails;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    billingDetails: (__VLS_ctx.orderDetails.billingDetails),
}));
const __VLS_22 = __VLS_21({
    billingDetails: (__VLS_ctx.orderDetails.billingDetails),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.CustomerDetails} */
CustomerDetails;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    customerDetails: (__VLS_ctx.orderDetails.customerDetails),
}));
const __VLS_27 = __VLS_26({
    customerDetails: (__VLS_ctx.orderDetails.customerDetails),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[orderDetails, orderDetails,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
