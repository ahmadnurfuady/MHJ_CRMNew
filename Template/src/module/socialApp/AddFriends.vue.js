import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { friends } from '@/core/data/socialApp';
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
    headerTitle: ('People You May Know'),
    border: (true),
    padding: (false),
    cardBodyClass: ('avatar-showcase'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('People You May Know'),
    border: (true),
    padding: (false),
    cardBodyClass: ('avatar-showcase'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "pepole-knows" },
});
/** @type {__VLS_StyleScopedClasses['pepole-knows']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [friend, index] of __VLS_vFor((__VLS_ctx.friends.slice(0, 6)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "add-friend text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['add-friend']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-60 img-fluid rounded-circle" },
        alt: (friend.name),
        src: (__VLS_ctx.getImages(friend.profile)),
    });
    /** @type {__VLS_StyleScopedClasses['img-60']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    (friend.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-primary btn-xs" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-xs']} */ ;
    // @ts-ignore
    [friends, getImages,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
