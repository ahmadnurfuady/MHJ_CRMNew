import { ref, defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Type', fieldValue: 'type', sort: true },
        {
            title: 'Total Budget',
            fieldValue: 'totalBudget',
            sort: true,
            type: 'price',
            decimalNumber: true,
        },
        {
            title: 'Expenses (USD)',
            fieldValue: 'expenses',
            sort: true,
            type: 'price',
            decimalNumber: true,
        },
        {
            title: 'Remaining (USD)',
            fieldValue: 'remaining',
            sort: true,
            type: 'price',
            decimalNumber: true,
        },
    ],
    data: projectDetails.finance.budgetDetails,
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
    headerTitle: ('Budget Details'),
    cardType: ('classic'),
    cardBodyClass: ('px-0 pt-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Budget Details'),
    cardType: ('classic'),
    cardBodyClass: ('px-0 pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scrollbar overall-budget" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['overall-budget']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
}));
const __VLS_9 = __VLS_8({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[tableConfig,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
