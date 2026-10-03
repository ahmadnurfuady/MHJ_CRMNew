import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { scrollableList } from '@/core/data/uiKits/lists';
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
    headerTitle: ('Scrollable Lists'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Scrollable Lists'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-group main-lists-content scrollbar-wrapper custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['main-lists-content']} */ ;
/** @type {__VLS_StyleScopedClasses['scrollbar-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [details] of __VLS_vFor((__VLS_ctx.scrollableList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (details.name),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "list-group-item list-group-item-action list-hover-primary" },
        ...{ class: ({ active: details.active }) },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-group-item-action']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-hover-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "list-wrapper gap-0" },
    });
    /** @type {__VLS_StyleScopedClasses['list-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "list-img" },
        src: (__VLS_ctx.getImages(details.image)),
        alt: "profile",
    });
    /** @type {__VLS_StyleScopedClasses['list-img']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "list-content" },
    });
    /** @type {__VLS_StyleScopedClasses['list-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (details.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    (details.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    (details.time);
    // @ts-ignore
    [scrollableList, getImages,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
