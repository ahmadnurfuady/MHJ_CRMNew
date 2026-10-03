import { ref, onMounted, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { orders } from '@/core/data/order';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const OrderFilter = defineAsyncComponent(() => import('@/module/ecommerce/order/OrderFilter.vue'));
const router = useRouter();
const orderHistory = ref(orders);
const tableConfig = ref({
    columns: [
        { title: 'Order Number', fieldValue: 'orderNumber', sort: true },
        { title: 'Order Date', fieldValue: 'orderDate', sort: true },
        { title: 'Customer Name', fieldValue: 'customerName', sort: true },
        { title: 'Total Amount', fieldValue: 'totalAmount', sort: true },
        { title: 'Payment Status', fieldValue: 'paymentStatus', sort: true },
        { title: 'Payment Method', fieldValue: 'paymentMethod', sort: true },
    ],
    rowAction: [
        { label: 'View', actionToPerform: 'view', icon: 'eye' },
        {
            label: 'Delete',
            actionToPerform: 'delete',
            icon: 'trash1',
            modal: true,
            modelText: 'Do you really want to delete the order History?',
        },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = orderHistory.value;
});
function handleAction(value) {
    if (value.actionToPerform === 'view' && value.data) {
        const orderData = value.data;
        const order = orderHistory.value.find((o) => o.id === orderData.id);
        if (order) {
            router.push(`/order/details/${order.orderNumber}`);
        }
    }
    if (value.actionToPerform === 'delete' && value.data) {
        const orderData = value.data;
        orderHistory.value = orderHistory.value.filter((order) => order.id !== orderData.id);
        tableConfig.value = { ...tableConfig.value, data: orderHistory.value };
    }
}
function openOrderDetails(orderNumber) {
    router.push(`/order/details/${orderNumber}`);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid common-order-history" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['common-order-history']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.OrderFilter} */
OrderFilter;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    cardClass: ('heading-space'),
    cardType: ('dataTable'),
    headerTitle: ('New Orders'),
    padding: (false),
    cardBodyClass: ('pt-0 px-0'),
}));
const __VLS_7 = __VLS_6({
    cardClass: ('heading-space'),
    cardType: ('dataTable'),
    headerTitle: ('New Orders'),
    padding: (false),
    cardBodyClass: ('pt-0 px-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_10 } = __VLS_8.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "order-history-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['order-history-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
}));
const __VLS_13 = __VLS_12({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
let __VLS_16;
const __VLS_17 = {
    /** @type {typeof __VLS_16.action} */
    onAction: (...[$event]) => {
        return (__VLS_ctx.handleAction($event));
        // @ts-ignore
        [tableConfig, handleAction,];
    },
};
const { default: __VLS_18 } = __VLS_14.slots;
{
    const { orderNumber: __VLS_19 } = __VLS_14.slots;
    const [{ row }] = __VLS_vSlot(__VLS_19);
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.openOrderDetails(row.orderNumber));
                // @ts-ignore
                [openOrderDetails,];
            } },
        href: "#",
    });
    (row.orderNumber);
    // @ts-ignore
    [];
}
{
    const { orderDate: __VLS_20 } = __VLS_14.slots;
    const [{ row }] = __VLS_vSlot(__VLS_20);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (row.orderDate);
    // @ts-ignore
    [];
}
{
    const { customerName: __VLS_21 } = __VLS_14.slots;
    const [{ row }] = __VLS_vSlot(__VLS_21);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (row.customerName);
    // @ts-ignore
    [];
}
{
    const { totalAmount: __VLS_22 } = __VLS_14.slots;
    const [{ row }] = __VLS_vSlot(__VLS_22);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (row.totalAmount);
    // @ts-ignore
    [];
}
{
    const { paymentStatus: __VLS_23 } = __VLS_14.slots;
    const [{ row }] = __VLS_vSlot(__VLS_23);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`badge badge-light-${row.paymentStatus == 'Pending'
                ? 'warning'
                : row.paymentStatus == 'Failed'
                    ? 'danger'
                    : row.paymentStatus == 'Completed'
                        ? 'success'
                        : ''}`) },
    });
    (row.paymentStatus);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_14;
var __VLS_15;
// @ts-ignore
[];
var __VLS_8;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
