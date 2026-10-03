import { defineAsyncComponent } from 'vue';
import { badgeScrollbar } from '@/core/data/bonusUI/scrollbar';
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
    headerTitle: ('Badges Scrollbar'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Badges Scrollbar'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
        header5: true,
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.OverlayScrollbars | typeof __VLS_components.OverlayScrollbars} */
OverlayScrollbars;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ class: "vertical-scroll scroll-demo scroll-b-none" },
    ...{ style: ({ height: '300px' }) },
    options: ({ scrollbars: { autoHide: 'leave' } }),
}));
const __VLS_10 = __VLS_9({
    ...{ class: "vertical-scroll scroll-demo scroll-b-none" },
    ...{ style: ({ height: '300px' }) },
    options: ({ scrollbars: { autoHide: 'leave' } }),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['vertical-scroll']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-b-none']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ol, __VLS_intrinsics.ol)({
    ...{ class: "list-group list-group-numbered scroll-rtl" },
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group-numbered']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-rtl']} */ ;
for (const [badges, index] of __VLS_vFor((__VLS_ctx.badgeScrollbar))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "list-group-item d-flex align-items-start flex-wrap" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "ms-2 me-auto" },
    });
    /** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-auto']} */ ;
    (badges.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`badge bg-${badges.badgeColor} rounded-pill p-2`) },
    });
    (badges.badge);
    // @ts-ignore
    [badgeScrollbar,];
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
