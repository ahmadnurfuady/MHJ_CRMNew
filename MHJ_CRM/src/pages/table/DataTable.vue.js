import { ref, onMounted, defineAsyncComponent } from 'vue';
import { employees } from '@/core/data/tables/dataTable';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const employeeList = ref(employees);
const tableConfig = ref({
    columns: [
        { title: 'Name', fieldValue: 'name', sort: true },
        { title: 'Position', fieldValue: 'position', sort: true },
        { title: 'Office', fieldValue: 'office', sort: true },
        { title: 'Age', fieldValue: 'age', sort: true },
        { title: 'Start date', fieldValue: 'startDate', sort: true },
        { title: 'Salary', fieldValue: 'salary', sort: true },
    ],
    rowAction: [
        {
            label: 'Delete',
            actionToPerform: 'delete',
            icon: 'trash1',
            modal: true,
        },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = employeeList.value;
});
function handleAction(value) {
    if (value.actionToPerform === 'delete' && value.data) {
        employeeList.value = employeeList.value.filter((employee) => employee.id !== value.data.id);
        tableConfig.value = {
            ...tableConfig.value,
            data: employeeList.value,
        };
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid datatable-init default-datatable" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['datatable-init']} */ ;
/** @type {__VLS_StyleScopedClasses['default-datatable']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scroll" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scroll']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
    tableClass: ('display table-striped border'),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onAction': {} },
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
    tableClass: ('display table-striped border'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = ({ action: {} },
    { onAction: (...[$event]) => {
            __VLS_ctx.handleAction($event);
            // @ts-ignore
            [tableConfig, handleAction,];
        } });
var __VLS_9;
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
