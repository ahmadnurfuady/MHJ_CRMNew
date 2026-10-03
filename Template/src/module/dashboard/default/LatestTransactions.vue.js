import { latestTransactionItem } from '@/core/data/dashboard/default';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { useProductDetailsNavigation } from '@/composables/useProductNavigation';
import { routes } from '@/router/routes';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const { navigateToProduct } = useProductDetailsNavigation();
const tableConfig = ref({
    columns: [
        { title: 'Name', fieldValue: 'name', sort: false },
        { title: 'Date', fieldValue: 'date', sort: false },
        { title: 'Amount', fieldValue: 'amount', sort: false, type: 'price' },
        { title: 'Status', fieldValue: 'status', sort: false },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = latestTransactionItem;
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
    headerTitle: ('Latest Transactions  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Latest Transactions  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-order table-responsive custom-scrollbar custom-transaction" },
});
/** @type {__VLS_StyleScopedClasses['table-order']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-transaction']} */ ;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (6),
    pagination: (false),
}));
const __VLS_16 = __VLS_15({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (6),
    pagination: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_19 } = __VLS_17.slots;
{
    const { name: __VLS_20 } = __VLS_17.slots;
    const [{ row }] = __VLS_vSlot(__VLS_20);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-name" },
    });
    /** @type {__VLS_StyleScopedClasses['product-name']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.navigate());
                // @ts-ignore
                [tableConfig, navigate,];
            } },
        href: "#",
        ...{ class: "f-14 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (row.name);
    // @ts-ignore
    [];
}
{
    const { status: __VLS_21 } = __VLS_17.slots;
    const [{ row }] = __VLS_vSlot(__VLS_21);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`txt-${row.class}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-w-500 f-13" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-13']} */ ;
    (row.status);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_17;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
