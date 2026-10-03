import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { customContent } from '@/core/data/uiKits/lists';
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
    headerTitle: ('Custom Content Lists'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Custom Content Lists'),
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
    ...{ class: "list-group main-lists-content pt-0" },
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['main-lists-content']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
for (const [details] of __VLS_vFor((__VLS_ctx.customContent))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "list-group-item list-group-item-action" },
        ...{ class: (details.active ? 'active bg-primary' : 'list-hover-primary') },
        href: "#",
        key: (details.name),
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-group-item-action']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex w-100 justify-content-between align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "list-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['list-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "list-img me-0" },
        src: (__VLS_ctx.getImages(details.image)),
        alt: "profile",
    });
    /** @type {__VLS_StyleScopedClasses['list-img']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "list-content" },
    });
    /** @type {__VLS_StyleScopedClasses['list-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (details.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (details.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    (details.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-1" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    (details.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({
        ...{ class: (details.active ? '' : 'text-muted') },
    });
    (details.followers);
    // @ts-ignore
    [customContent, getImages,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
