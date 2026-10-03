import { defineAsyncComponent } from 'vue';
import { activeLists } from '@/core/data/uiKits/lists';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
    headerTitle: ('Active Lists'),
    border: (true),
    padding: (false),
    cardClass: ('list-with-icon'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Active Lists'),
    border: (true),
    padding: (false),
    cardClass: ('list-with-icon'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "list-group" },
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
for (const [list, index] of __VLS_vFor((__VLS_ctx.activeLists))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "list-group-item" },
        ...{ class: ({ 'active bg-warning-light': list.active }) },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-warning-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icofont icofont-arrow-right" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-arrow-right']} */ ;
    (list.item);
    // @ts-ignore
    [activeLists,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
