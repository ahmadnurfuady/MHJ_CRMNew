import { ref, defineAsyncComponent, onMounted } from 'vue';
import { customTable } from '@/core/data/tables/basicTable';
import { columnValue } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Id', fieldValue: 'id' },
        { title: 'Film Title', fieldValue: 'filmTitle' },
        { title: 'Released', fieldValue: 'released' },
        { title: 'Studio', fieldValue: 'studio' },
        { title: 'Budget', fieldValue: 'budget' },
        { title: 'Domestic Gross', fieldValue: 'domesticGross' },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = customTable;
});
function getCellData(details, fieldValue) {
    return {
        value: fieldValue && fieldValue in details
            ? (() => {
                const values = details[fieldValue];
                return values && typeof values === 'object' && 'value' in values
                    ? values.value
                    : values;
            })()
            : undefined,
        class: 'class' in details ? details.class : '',
    };
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
    headerTitle: ('Custom Table Color with Hover and Stripped'),
    border: (true),
    padding: (false),
    cardClass: ('common-striped'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Custom Table Color with Hover and Stripped'),
    border: (true),
    padding: (false),
    cardClass: ('common-striped'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table table-striped bg-primary hover" },
});
/** @type {__VLS_StyleScopedClasses['table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-striped']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['hover']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({
    ...{ class: "tbl-strip-thad-bdr" },
});
/** @type {__VLS_StyleScopedClasses['tbl-strip-thad-bdr']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
for (const [column] of __VLS_vFor((__VLS_ctx.tableConfig.columns))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (column.fieldValue),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
        scope: "col",
    });
    (column.title);
    // @ts-ignore
    [tableConfig,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [details, index] of __VLS_vFor((__VLS_ctx.tableConfig.data))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        ...{ class: (__VLS_ctx.getCellData(details).class) },
        key: (index),
    });
    for (const [column] of __VLS_vFor((__VLS_ctx.tableConfig.columns))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (column.fieldValue),
        });
        if (['budget', 'domesticGross'].includes(String(column.fieldValue))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            (__VLS_ctx.columnValue(details, column.fieldValue));
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            (__VLS_ctx.columnValue(details, column.fieldValue));
        }
        // @ts-ignore
        [tableConfig, tableConfig, getCellData, columnValue, columnValue,];
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
