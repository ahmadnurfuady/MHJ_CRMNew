import { defineAsyncComponent } from 'vue';
import { horizontalDottedDivider } from '@/core/data/uiKits/divider';
import { titleCase } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
    headerTitle: ('Horizontal Dotted Divider'),
    border: (true),
    padding: (false),
    cardBodyClass: ('main-divider'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Horizontal Dotted Divider'),
    border: (true),
    padding: (false),
    cardBodyClass: ('main-divider'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0 mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
for (const [divider, index] of __VLS_vFor((__VLS_ctx.horizontalDottedDivider))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`divider-body divider-body-3 divider-${divider.color}`) },
        key: (index),
    });
    (__VLS_ctx.titleCase(divider.color));
    // @ts-ignore
    [horizontalDottedDivider, titleCase,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
