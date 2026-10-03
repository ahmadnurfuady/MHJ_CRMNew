import { ref, onMounted, defineAsyncComponent } from 'vue';
import { roles } from '@/core/data/user';
import { titleCase } from '@/utils/index';
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const RolesPermissionModal = defineAsyncComponent(() => import('@/module/user/RolesPermissionModal.vue'));
const isModalOpen = ref(false);
const roleList = ref([]);
const tableConfig = ref({
    columns: [
        { title: 'Role Name', fieldValue: 'role', sort: true },
        { title: 'Creation Date', fieldValue: 'creationDate', sort: true },
        { title: 'Last Updated Date', fieldValue: 'lastUpdateDate', sort: true },
        { title: 'Status', fieldValue: 'status', sort: true },
    ],
    rowAction: [
        { label: 'Edit', actionToPerform: 'edit', icon: 'edit-content' },
        {
            label: 'Delete',
            actionToPerform: 'delete',
            icon: 'trash1',
            modal: true,
            modelText: 'Do you really want to delete the role?',
        },
    ],
    data: [],
});
onMounted(() => {
    roleList.value = roles;
    tableConfig.value.data = formatRoleDetails(roles);
});
function handleAction(value) {
    if (value.actionToPerform === 'delete' && value.data) {
        roleList.value = roleList.value.filter((role) => role.id !== value.data.id);
        tableConfig.value = { ...tableConfig.value, data: formatRoleDetails(roleList.value) };
    }
}
function formatRoleDetails(roles) {
    return roles.map((role) => {
        const formattedRole = { ...role };
        formattedRole.role = `<p">${role.role}</p>`;
        formattedRole.creationDate = `<p>${role.creationDate}</p>`;
        formattedRole.lastUpdateDate = `<p>${role.lastUpdateDate}</p>`;
        formattedRole.status = `<span class="badge badge-light-${role.status == 'active' ? 'success' : role.status == 'pending' ? 'warning' : ''}">${titleCase(role.status)}</span>`;
        return formattedRole;
    });
}
function openPermissionModal() {
    isModalOpen.value = true;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid role-permission-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['role-permission-wrapper']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openPermissionModal());
            // @ts-ignore
            [openPermissionModal,];
        } },
    ...{ class: "btn btn-primary f-w-500" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus pe-2" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body pt-0 px-0" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['px-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-product permission-table" },
});
/** @type {__VLS_StyleScopedClasses['list-product']} */ ;
/** @type {__VLS_StyleScopedClasses['permission-table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    searchPlaceholder: ('Search here... '),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    searchPlaceholder: ('Search here... '),
    pageSize: (10),
    paginateDetails: (true),
    showPaginate: (true),
    selectedRows: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.action} */
    onAction: (...[$event]) => {
        return (__VLS_ctx.handleAction($event));
        // @ts-ignore
        [tableConfig, handleAction,];
    },
};
var __VLS_3;
var __VLS_4;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.RolesPermissionModal} */
RolesPermissionModal;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isModalOpen),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
const __VLS_13 = {
    /** @type {typeof __VLS_12.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.isModalOpen = false);
        // @ts-ignore
        [isModalOpen, isModalOpen,];
    },
};
var __VLS_10;
var __VLS_11;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
