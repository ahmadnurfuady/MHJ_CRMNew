import { ref, defineAsyncComponent } from 'vue';
import { colorsTwo } from '@/core/data/uiKits/helperClasses';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const colors = ref(colorsTwo);
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
    headerTitle: ('Link Utilities'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Link Utilities'),
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
}
for (const [link, index] of __VLS_vFor((__VLS_ctx.colors))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: (`link-${link.color} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover`) },
        href: "#",
    });
    (link.color);
    // @ts-ignore
    [colors,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" },
    href: "#!",
});
/** @type {__VLS_StyleScopedClasses['link-body-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['link-offset-2']} */ ;
/** @type {__VLS_StyleScopedClasses['link-underline-opacity-25']} */ ;
/** @type {__VLS_StyleScopedClasses['link-underline-opacity-75-hover']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
