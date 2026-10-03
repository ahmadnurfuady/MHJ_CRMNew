import { ref, onMounted, defineAsyncComponent } from 'vue';
import { users } from '@/core/data/user';
import { routes } from '@/router/routes';
const STATUS_CLASSES = {
    active: 'success',
    pending: 'warning',
};
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const userList = ref([]);
const tableConfig = ref({
    columns: [
        { title: 'Name', fieldValue: 'name', sort: true },
        { title: 'Email', fieldValue: 'email', sort: true },
        { title: 'Role', fieldValue: 'role', sort: true },
        { title: 'Creation Date', fieldValue: 'creationDate', sort: true },
        { title: 'Status', fieldValue: 'status', sort: true },
    ],
    rowAction: [
        {
            label: 'Edit',
            actionToPerform: 'edit',
            icon: 'edit-content',
            path: routes.User.AddUser,
        },
        {
            label: 'Delete',
            actionToPerform: 'delete',
            icon: 'trash1',
            modal: true,
            modelText: 'Do you really want to delete the user?',
        },
    ],
    data: [],
});
onMounted(() => {
    userList.value = users;
    tableConfig.value.data = users;
});
function handleAction(value) {
    if (value.actionToPerform === 'delete' && value.data) {
        userList.value = userList.value.filter((user) => user.id !== value.data.id);
        tableConfig.value = { ...tableConfig.value, data: userList.value };
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
    ...{ class: "container-fluid user-list-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['user-list-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header card-no-border text-end" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header-right-icon" },
});
/** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "btn btn-primary f-w-500" },
    to: (__VLS_ctx.routes.User.AddUser),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "btn btn-primary f-w-500" },
    to: (__VLS_ctx.routes.User.AddUser),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus pe-2" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-2']} */ ;
// @ts-ignore
[routes,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body pt-0 px-0" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['px-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-product user-list-table" },
});
/** @type {__VLS_StyleScopedClasses['list-product']} */ ;
/** @type {__VLS_StyleScopedClasses['user-list-table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
    searchPlaceholder: ('Search here... '),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
    searchPlaceholder: ('Search here... '),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = ({ action: {} },
    { onAction: (...[$event]) => {
            __VLS_ctx.handleAction($event);
            // @ts-ignore
            [tableConfig, handleAction,];
        } });
const { default: __VLS_13 } = __VLS_9.slots;
{
    const { name: __VLS_14 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_14);
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    (row.name);
    // @ts-ignore
    [];
}
{
    const { email: __VLS_15 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_15);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (row.email);
    // @ts-ignore
    [];
}
{
    const { role: __VLS_16 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_16);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (row.role);
    // @ts-ignore
    [];
}
{
    const { creationDate: __VLS_17 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_17);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (row.creationDate);
    // @ts-ignore
    [];
}
{
    const { status: __VLS_18 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_18);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge" },
        ...{ class: (`badge-light-${__VLS_ctx.STATUS_CLASSES[row.status] || ''}`) },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    (row.status.charAt(0).toUpperCase() + row.status.slice(1));
    // @ts-ignore
    [STATUS_CLASSES, STATUS_CLASSES,];
}
// @ts-ignore
[];
var __VLS_9;
var __VLS_10;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
