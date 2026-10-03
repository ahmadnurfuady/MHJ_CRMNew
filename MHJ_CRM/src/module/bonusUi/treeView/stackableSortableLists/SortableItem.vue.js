import { defineAsyncComponent, ref } from 'vue';
const SortableItem = defineAsyncComponent(() => import('@/module/bonusUi/treeView/stackableSortableLists/SortableItem.vue'));
const props = defineProps();
const list = ref(props.list);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.draggable | typeof __VLS_components.Draggable | typeof __VLS_components.draggable | typeof __VLS_components.Draggable} */
draggable;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.list),
    group: ({ name: `nested-${__VLS_ctx.depth}`, pull: false, put: false }),
    itemKey: "id",
    ...{ class: "kanban-drag" },
    animation: (150),
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.list),
    group: ({ name: `nested-${__VLS_ctx.depth}`, pull: false, put: false }),
    itemKey: "id",
    ...{ class: "kanban-drag" },
    animation: (150),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['kanban-drag']} */ ;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { item: __VLS_7 } = __VLS_3.slots;
    const [{ element }] = __VLS_vSlot(__VLS_7);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`list-group-item nested-${__VLS_ctx.depth}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-folder-open me-2" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-folder-open']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    (element.title);
    if (element.children && element.children.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "list-group nested-sortable ms-3" },
        });
        /** @type {__VLS_StyleScopedClasses['list-group']} */ ;
        /** @type {__VLS_StyleScopedClasses['nested-sortable']} */ ;
        /** @type {__VLS_StyleScopedClasses['ms-3']} */ ;
        let __VLS_8;
        /** @ts-ignore @type {typeof __VLS_components.SortableItem} */
        SortableItem;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            list: (element.children),
            depth: (__VLS_ctx.depth + 1),
        }));
        const __VLS_10 = __VLS_9({
            list: (element.children),
            depth: (__VLS_ctx.depth + 1),
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    // @ts-ignore
    [list, depth, depth, depth,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
