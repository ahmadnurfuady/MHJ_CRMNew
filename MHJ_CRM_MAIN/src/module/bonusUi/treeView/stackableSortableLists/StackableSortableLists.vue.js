import { defineAsyncComponent } from 'vue';
import { stackableSortableList } from '@/core/data/bonusUI/treeView';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SortableItem = defineAsyncComponent(() => import('@/module/bonusUi/treeView/stackableSortableLists/SortableItem.vue'));
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
    headerTitle: ('Stackable Sortable Lists'),
    border: (true),
    padding: (false),
    cardBodyClass: ('stackable-list'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Stackable Sortable Lists'),
    border: (true),
    padding: (false),
    cardBodyClass: ('stackable-list'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-group col nested-sortable" },
    id: "nested-demo",
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['col']} */ ;
/** @type {__VLS_StyleScopedClasses['nested-sortable']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.SortableItem} */
SortableItem;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    list: (__VLS_ctx.stackableSortableList),
    depth: (1),
}));
const __VLS_10 = __VLS_9({
    list: (__VLS_ctx.stackableSortableList),
    depth: (1),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
// @ts-ignore
[stackableSortableList,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
