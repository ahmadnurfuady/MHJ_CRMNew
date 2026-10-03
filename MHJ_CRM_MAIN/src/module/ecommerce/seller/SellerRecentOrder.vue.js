import { ref, onMounted, defineAsyncComponent } from 'vue';
import { recentOrders } from '@/core/data/seller';
import { getImages } from '@/utils/index';
import { useRouter } from 'vue-router';
import { useProductDetailsNavigation } from '@/composables/useProductNavigation';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const router = useRouter();
const { navigateToProduct } = useProductDetailsNavigation();
const tableConfig = ref({
    columns: [
        { title: 'Order Number', fieldValue: 'orderNumber', sort: true },
        { title: 'Date', fieldValue: 'date', sort: true },
        { title: 'Customers', fieldValue: 'customerName', sort: true },
        { title: 'Amount', fieldValue: 'amount', sort: true },
        { title: 'Payment', fieldValue: 'payment', sort: true },
    ],
    rowAction: [
        {
            label: 'View',
            actionToPerform: 'view',
            icon: 'eye',
            path: '/order/details/:orderNumber',
        },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = recentOrders;
});
function navigate() {
    navigateToProduct('1');
}
function handleAction(value) {
    if (value.actionToPerform === 'view' && value.data) {
        const orderData = value.data;
        const order = recentOrders.find((o) => o.id === orderData.id);
        if (order) {
            router.push(`/order/details/${order.orderNumber}`);
        }
    }
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
    cardClass: ('heading-space seller-order-table'),
    cardType: ('dataTable'),
    headerTitle: ('Recent Orders'),
    padding: (false),
    cardBodyClass: ('px-0 pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('heading-space seller-order-table'),
    cardType: ('dataTable'),
    headerTitle: ('Recent Orders'),
    padding: (false),
    cardBodyClass: ('px-0 pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-product" },
});
/** @type {__VLS_StyleScopedClasses['list-product']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (6),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    hasCheckbox: (true),
    pageSize: (6),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
const __VLS_13 = {
    /** @type {typeof __VLS_12.action} */
    onAction: (...[$event]) => {
        return (__VLS_ctx.handleAction($event));
        // @ts-ignore
        [tableConfig, handleAction,];
    },
};
const { default: __VLS_14 } = __VLS_10.slots;
{
    const { orderNumber: __VLS_15 } = __VLS_10.slots;
    const [{ row }] = __VLS_vSlot(__VLS_15);
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({});
    (row.orderNumber);
    // @ts-ignore
    [];
}
{
    const { date: __VLS_16 } = __VLS_10.slots;
    const [{ row }] = __VLS_vSlot(__VLS_16);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (row.date);
    // @ts-ignore
    [];
}
{
    const { customerName: __VLS_17 } = __VLS_10.slots;
    const [{ row }] = __VLS_vSlot(__VLS_17);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-flex align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid rounded-circle" },
        src: (__VLS_ctx.getImages(row.customerProfile)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.navigate());
                // @ts-ignore
                [getImages, navigate,];
            } },
        href: "#",
    });
    (row.customerName);
    // @ts-ignore
    [];
}
{
    const { amount: __VLS_18 } = __VLS_10.slots;
    const [{ row }] = __VLS_vSlot(__VLS_18);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (row.amount);
    // @ts-ignore
    [];
}
{
    const { payment: __VLS_19 } = __VLS_10.slots;
    const [{ row }] = __VLS_vSlot(__VLS_19);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`badge badge-light-${row.payment == 'Completed'
                ? 'success'
                : row.payment == 'Shipped'
                    ? 'secondary'
                    : row.payment == 'Pending'
                        ? 'warning'
                        : ''}`) },
    });
    (row.payment);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_10;
var __VLS_11;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
