import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils';
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
    headerTitle: ('Small Size Scrollbar'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Small Size Scrollbar'),
    border: (true),
    padding: (false),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "scroll-bar-wrap" },
});
/** @type {__VLS_StyleScopedClasses['scroll-bar-wrap']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.OverlayScrollbars | typeof __VLS_components.OverlayScrollbars} */
OverlayScrollbars;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ class: "scrollbar-margins large-margin scroll-demo pe-0" },
    ...{ style: ({ height: '300px' }) },
    options: ({ scrollbars: { autoHide: 'leave' } }),
}));
const __VLS_10 = __VLS_9({
    ...{ class: "scrollbar-margins large-margin scroll-demo pe-0" },
    ...{ style: ({ height: '300px' }) },
    options: ({ scrollbars: { autoHide: 'leave' } }),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['scrollbar-margins']} */ ;
/** @type {__VLS_StyleScopedClasses['large-margin']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-0']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "margin-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['margin-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "pb-2" },
});
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid pt-3" },
    src: (__VLS_ctx.getImages('banner/3.jpg')),
    alt: "business",
    width: "800",
    height: "600",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
// @ts-ignore
[getImages,];
var __VLS_11;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
