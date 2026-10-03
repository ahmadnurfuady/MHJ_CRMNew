import { ref, defineAsyncComponent } from 'vue';
import { sharedList, sharedList2 } from '@/core/data/bonusUI/treeView';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const list1 = ref(sharedList);
const list2 = ref(sharedList2);
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
    headerTitle: ('Shared Lists'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Shared Lists'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
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
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "list-group" },
    id: "mix-left",
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.draggable | typeof __VLS_components.Draggable | typeof __VLS_components.draggable | typeof __VLS_components.Draggable} */
draggable;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    modelValue: (__VLS_ctx.list1),
    group: ({ name: 'nested', pull: true, put: true }),
    itemKey: "id",
}));
const __VLS_10 = __VLS_9({
    modelValue: (__VLS_ctx.list1),
    group: ({ name: 'nested', pull: true, put: true }),
    itemKey: "id",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_11.slots;
{
    const { item: __VLS_14 } = __VLS_11.slots;
    const [{ element }] = __VLS_vSlot(__VLS_14);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "list-group-item" },
        ...{ class: ({ 'light-background': __VLS_ctx.sharedList2.includes(element) }) },
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['light-background']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa sitemap me-2" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['sitemap']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (element);
    // @ts-ignore
    [list1, sharedList2,];
}
// @ts-ignore
[];
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "list-group" },
    id: "mix-right",
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.draggable | typeof __VLS_components.Draggable | typeof __VLS_components.draggable | typeof __VLS_components.Draggable} */
draggable;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.list2),
    group: ({ name: 'nested', pull: true, put: true }),
    itemKey: "id",
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.list2),
    group: ({ name: 'nested', pull: true, put: true }),
    itemKey: "id",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const { default: __VLS_20 } = __VLS_18.slots;
{
    const { item: __VLS_21 } = __VLS_18.slots;
    const [{ element }] = __VLS_vSlot(__VLS_21);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "list-group-item" },
        ...{ class: ({ 'light-background': __VLS_ctx.sharedList2.includes(element) }) },
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['light-background']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa sitemap me-2" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['sitemap']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (element);
    // @ts-ignore
    [sharedList2, list2,];
}
// @ts-ignore
[];
var __VLS_18;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
