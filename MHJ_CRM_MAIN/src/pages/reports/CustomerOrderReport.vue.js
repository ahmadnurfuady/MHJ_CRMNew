import { ref, onMounted, defineAsyncComponent } from 'vue';
import { customerOrderReport } from '@/core/data/reports';
import { getTextColor, getUserText, getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Customer Name', fieldValue: 'customerName', sort: true },
        { title: 'Customer Group', fieldValue: 'customerGroup', sort: true },
        { title: 'No. Of Orders', fieldValue: 'orders', sort: true },
        { title: 'No. Of Products', fieldValue: 'items', sort: true },
        { title: 'Total', fieldValue: 'total', sort: true, type: 'price' },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = customerOrderReport;
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid customer-order-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['customer-order-wrapper']} */ ;
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
    cardBodyClass: ('px-0 pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('px-0 pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customer-order-report table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['customer-order-report']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    selectedRows: (true),
    dateFilter: (true),
}));
const __VLS_8 = __VLS_7({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    selectedRows: (true),
    dateFilter: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
{
    const { customerName: __VLS_12 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_12);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "customer-details" },
    });
    /** @type {__VLS_StyleScopedClasses['customer-details']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(row.customerProfile)),
        alt: (row.customerName),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    (row.customerName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (row.customerEmail);
    // @ts-ignore
    [tableConfig, getImages,];
}
{
    const { customerGroup: __VLS_13 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_13);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "common-f-start customer-group" },
    });
    /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['customer-group']} */ ;
    if (Array.isArray(row.customerGroup)) {
        for (const [groupMember, index] of __VLS_vFor((row.customerGroup))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                key: (index),
            });
            if (groupMember.profile) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                    ...{ class: "common-circle" },
                    src: (__VLS_ctx.getImages(groupMember.profile)),
                    alt: "user",
                });
                /** @type {__VLS_StyleScopedClasses['common-circle']} */ ;
            }
            else {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "common-circle" },
                    ...{ class: (`bg-lighter-${__VLS_ctx.getTextColor(__VLS_ctx.getUserText(groupMember.name ?? ''))}`) },
                });
                /** @type {__VLS_StyleScopedClasses['common-circle']} */ ;
                (__VLS_ctx.getUserText(groupMember.name ?? '', 'singleText'));
            }
            // @ts-ignore
            [getImages, getTextColor, getUserText, getUserText,];
        }
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        (row.customerGroup);
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_9;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
