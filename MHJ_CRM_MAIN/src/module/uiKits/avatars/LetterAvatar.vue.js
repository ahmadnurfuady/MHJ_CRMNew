import { defineAsyncComponent } from 'vue';
import { letterAvatar } from '@/core/data/uiKits/avatars';
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
    cardClass: ('height-equal'),
    headerTitle: ('Initial Letter Avatar'),
    border: (true),
    padding: (false),
    cardBodyClass: ('letter-avatar-wrapper'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    headerTitle: ('Initial Letter Avatar'),
    border: (true),
    padding: (false),
    cardBodyClass: ('letter-avatar-wrapper'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "letter-avatar" },
});
/** @type {__VLS_StyleScopedClasses['letter-avatar']} */ ;
for (const [avatar, index] of __VLS_vFor((__VLS_ctx.letterAvatar))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: (`txt-${avatar.color} bg-light-${avatar.color}`) },
    });
    (avatar.profileText);
    // @ts-ignore
    [letterAvatar,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
