import { ref, onMounted, defineAsyncComponent } from 'vue';
import { supportDataTable } from '@/core/data/supportTicket';
import { getImages } from '@/utils/index';
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const TicketList = defineAsyncComponent(() => import('@/module/supportTicket/TicketList.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Name', fieldValue: 'name', sort: true },
        { title: 'Position', fieldValue: 'position', sort: true },
        { title: 'Salary', fieldValue: 'salary', sort: true, type: 'price' },
        { title: 'Office', fieldValue: 'office', sort: true },
        { title: 'Skill', fieldValue: 'progress', sort: true },
        { title: 'Extn', fieldValue: 'extNumber', sort: true },
        { title: 'E-mail', fieldValue: 'email', sort: true },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = supportDataTable;
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
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "f-m-light mt-1" },
});
/** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "gx-3" },
});
/** @type {__VLS_StyleScopedClasses['gx-3']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.TicketList} */
TicketList;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive support-ticket-table custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['support-ticket-table']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    showPaginate: (true),
    paginateDetails: (true),
}));
const __VLS_7 = __VLS_6({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    showPaginate: (true),
    paginateDetails: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_10 } = __VLS_8.slots;
{
    const { name: __VLS_11 } = __VLS_8.slots;
    const [{ row }] = __VLS_vSlot(__VLS_11);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "rounded-circle img-30 me-3" },
        src: (__VLS_ctx.getImages(row.image)),
        alt: "Generic placeholder image",
    });
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-30']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1 align-self-center" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-self-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    (row.name);
    // @ts-ignore
    [tableConfig, getImages,];
}
{
    const { progress: __VLS_12 } = __VLS_8.slots;
    const [{ row }] = __VLS_vSlot(__VLS_12);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress-showcase" },
    });
    /** @type {__VLS_StyleScopedClasses['progress-showcase']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress sm-progress-bar" },
    });
    /** @type {__VLS_StyleScopedClasses['progress']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm-progress-bar']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress-bar" },
        ...{ class: (`bg-${row.skill}`) },
        role: "progressbar",
        ...{ style: ({ width: row.progress }) },
    });
    /** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_8;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
