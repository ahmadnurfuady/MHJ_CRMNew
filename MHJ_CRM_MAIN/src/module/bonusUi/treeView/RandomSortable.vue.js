import { defineAsyncComponent, ref } from 'vue';
import { getImages } from '@/utils/index';
import { randomSortable } from '@/core/data/bonusUI/treeView';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const list = ref(randomSortable);
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
    headerTitle: ('Random Sortable'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Random Sortable'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.draggable | typeof __VLS_components.Draggable | typeof __VLS_components.draggable | typeof __VLS_components.Draggable} */
draggable;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    modelValue: (__VLS_ctx.list),
    group: ({ name: 'nested', pull: false, put: false }),
    itemKey: "id",
    ...{ class: "grid-box-wrapper" },
}));
const __VLS_10 = __VLS_9({
    modelValue: (__VLS_ctx.list),
    group: ({ name: 'nested', pull: false, put: false }),
    itemKey: "id",
    ...{ class: "grid-box-wrapper" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['grid-box-wrapper']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
{
    const { item: __VLS_14 } = __VLS_11.slots;
    const [{ element }] = __VLS_vSlot(__VLS_14);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid-box" },
    });
    /** @type {__VLS_StyleScopedClasses['grid-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(element.image)),
        alt: "",
    });
    // @ts-ignore
    [list, getImages,];
}
// @ts-ignore
[];
var __VLS_11;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
