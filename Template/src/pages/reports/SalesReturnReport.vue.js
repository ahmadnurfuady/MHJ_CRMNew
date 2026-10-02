import { ref, defineAsyncComponent } from 'vue';
import { salesReturnReport } from '@/core/data/reports';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Month', fieldValue: 'month', sort: true },
        { title: 'Total Items', fieldValue: 'totalItem', sort: true },
        { title: 'Ordered', fieldValue: 'order', sort: true },
        { title: 'Returned', fieldValue: 'return', sort: true },
        { title: 'Reason of Return', fieldValue: 'reason', sort: true },
        { title: 'Total Replace', fieldValue: 'totalReplace', sort: true },
        { title: 'Total Return', fieldValue: 'totalReturn', sort: true, type: 'price' },
    ],
    data: salesReturnReport,
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid sale-return-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['sale-return-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardBodyClass: ('px-0 pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('px-0 pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sale-return-report table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['sale-return-report']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (12),
    paginateDetails: (true),
    selectedRows: (true),
    dateFilter: (true),
}));
const __VLS_8 = __VLS_7({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (12),
    paginateDetails: (true),
    selectedRows: (true),
    dateFilter: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[tableConfig,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
