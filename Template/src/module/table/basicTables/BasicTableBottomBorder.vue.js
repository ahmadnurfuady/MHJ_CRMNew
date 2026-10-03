import { ref, onMounted, defineAsyncComponent } from 'vue';
import { basicTable } from '@/core/data/tables/basicTable';
import { columnValue, getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Id', fieldValue: 'id' },
        { title: 'First Name', fieldValue: 'firstName' },
        { title: 'Last Name', fieldValue: 'lastName' },
        { title: 'Username', fieldValue: 'userName' },
        { title: 'Designation', fieldValue: 'designation' },
        { title: 'Company', fieldValue: 'company' },
        { title: 'Language', fieldValue: 'language' },
        { title: 'Country', fieldValue: 'country' },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = basicTable;
});
function isBorder(details) {
    if ('borderClass' in details) {
        return details.borderClass;
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
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Basic Table with Border Bottom Color'),
    border: (true),
    padding: (false),
    cardBodyClass: ('p-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Basic Table with Border Bottom Color'),
    border: (true),
    padding: (false),
    cardBodyClass: ('p-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table border-bottom-table" },
});
/** @type {__VLS_StyleScopedClasses['table']} */ ;
/** @type {__VLS_StyleScopedClasses['border-bottom-table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
    ...{ class: "border-bottom-primary" },
});
/** @type {__VLS_StyleScopedClasses['border-bottom-primary']} */ ;
for (const [column] of __VLS_vFor((__VLS_ctx.tableConfig.columns))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
        scope: "col",
        key: (column.fieldValue),
    });
    (column.title);
    // @ts-ignore
    [tableConfig,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [details, index] of __VLS_vFor((__VLS_ctx.tableConfig.data))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        ...{ class: (`border-bottom-${__VLS_ctx.isBorder(details)}`) },
        key: (index),
    });
    for (const [column] of __VLS_vFor((__VLS_ctx.tableConfig.columns))) {
        (column.fieldValue);
        if (column.fieldValue === 'id') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
            (__VLS_ctx.columnValue(details, column.fieldValue));
        }
        else if (column.fieldValue === 'firstName') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-30 me-2" },
                src: (__VLS_ctx.getImages(details.imageUrl)),
                alt: "profile",
            });
            /** @type {__VLS_StyleScopedClasses['img-30']} */ ;
            /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
            (details.firstName);
        }
        else if (column.fieldValue === 'language') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: (`badge badge-light-${details.class}`) },
            });
            (details.language);
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            (__VLS_ctx.columnValue(details, column.fieldValue));
        }
        // @ts-ignore
        [tableConfig, tableConfig, isBorder, columnValue, columnValue, getImages,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
