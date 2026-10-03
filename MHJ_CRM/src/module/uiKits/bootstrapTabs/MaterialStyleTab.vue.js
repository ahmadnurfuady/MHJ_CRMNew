import { defineAsyncComponent, ref, onMounted } from 'vue';
import { materialTab } from '@/core/data/uiKits/tabs';
import { columnValue } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'));
const activeTab = ref(0);
const tabs = ref(materialTab);
const displayedColumns = ref([]);
const dataSource = ref([]);
onMounted(() => {
    getColumns();
});
function handleTab(index) {
    activeTab.value = index;
    getColumns();
}
function getColumns() {
    const columns = tabs.value.find((details) => details.value == tabs.value[activeTab.value].value);
    if (columns && columns.displayedColumns) {
        displayedColumns.value = columns.displayedColumns.map((column) => column.fieldValue);
        dataSource.value = columns.details;
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
    headerTitle: ('Material Style Tabs'),
    border: (true),
    padding: (false),
    cardBodyClass: ('bottom-border-tab'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Material Style Tabs'),
    border: (true),
    padding: (false),
    cardBodyClass: ('bottom-border-tab'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1 f-m-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-tabs border-tab border-0 mb-0 nav-secondary" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['border-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-secondary']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.materialTab))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
        key: (tab.id),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTab(index);
                // @ts-ignore
                [materialTab, handleTab,];
            } },
        ...{ class: "nav-link nav-border txt-secondary nav-secondary" },
        ...{ class: ({ active: __VLS_ctx.activeTab === index }) },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['nav-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['nav-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`icofont icofont-${tab.icon}`) },
    });
    (tab.title);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body px-0 pb-0" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "user-header pb-2" },
});
/** @type {__VLS_StyleScopedClasses['user-header']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "fw-bold" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
(__VLS_ctx.materialTab[__VLS_ctx.activeTab].title);
if (__VLS_ctx.dataSource && __VLS_ctx.dataSource.length && __VLS_ctx.displayedColumns && __VLS_ctx.displayedColumns.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-content" },
    });
    /** @type {__VLS_StyleScopedClasses['user-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "table-responsive custom-scrollbar" },
    });
    /** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
        ...{ class: "table mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['table']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
    for (const [column] of __VLS_vFor((__VLS_ctx.materialTab[__VLS_ctx.activeTab].displayedColumns))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            scope: "col",
            key: (column.fieldValue),
        });
        (column.title);
        // @ts-ignore
        [materialTab, materialTab, activeTab, activeTab, dataSource, dataSource, displayedColumns, displayedColumns,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
    for (const [details, index] of __VLS_vFor((__VLS_ctx.materialTab[__VLS_ctx.activeTab].details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
            key: (index),
        });
        for (const [column] of __VLS_vFor((__VLS_ctx.materialTab[__VLS_ctx.activeTab].displayedColumns))) {
            (column.fieldValue);
            if (column.fieldValue === 'rating') {
                let __VLS_8;
                /** @ts-ignore @type {typeof __VLS_components.Rate} */
                Rate;
                // @ts-ignore
                const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
                    rating: (Number(__VLS_ctx.columnValue(details, column.fieldValue))),
                }));
                const __VLS_10 = __VLS_9({
                    rating: (Number(__VLS_ctx.columnValue(details, column.fieldValue))),
                }, ...__VLS_functionalComponentArgsRest(__VLS_9));
            }
            else {
                __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                (__VLS_ctx.columnValue(details, column.fieldValue));
            }
            // @ts-ignore
            [materialTab, materialTab, activeTab, activeTab, columnValue, columnValue,];
        }
        // @ts-ignore
        [];
    }
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
