import { ref, defineAsyncComponent } from 'vue';
import { stripedRow } from '@/core/data/tables/basicTable';
import { columnValue } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Id', fieldValue: 'id' },
        { title: 'Dessert', fieldValue: 'dessert' },
        { title: 'Calories', fieldValue: 'calories' },
        { title: 'Fat', fieldValue: 'fat' },
        { title: 'Price', fieldValue: 'price' },
    ],
    data: stripedRow,
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
    headerTitle: ('Striped Row with Inverse Table'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Striped Row with Inverse Table'),
    border: (true),
    padding: (false),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-block row" },
});
/** @type {__VLS_StyleScopedClasses['card-block']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-lg-12 col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table table-inverse table-striped" },
});
/** @type {__VLS_StyleScopedClasses['table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-inverse']} */ ;
/** @type {__VLS_StyleScopedClasses['table-striped']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
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
        key: (index),
    });
    for (const [column] of __VLS_vFor((__VLS_ctx.tableConfig.columns))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (column.fieldValue),
        });
        if (column.fieldValue === 'id') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
            (__VLS_ctx.columnValue(details, column.fieldValue));
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.columnValue(details, column.fieldValue)), }, null, null);
        }
        // @ts-ignore
        [tableConfig, tableConfig, columnValue, columnValue,];
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
