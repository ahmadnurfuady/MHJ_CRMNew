import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { primaryStateCard } from '@/core/data/bonusUI/creativeCards';
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
    headerTitle: ('Border Primary State'),
    border: (true),
    padding: (false),
    header: ('border-l-primary border-3'),
    cardClass: ('common-hover'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Border Primary State'),
    border: (true),
    padding: (false),
    header: ('border-l-primary border-3'),
    cardClass: ('common-hover'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1 f-m-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-group" },
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
for (const [details] of __VLS_vFor((__VLS_ctx.primaryStateCard))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "list-group-item list-group-item-action" },
        ...{ class: ({ active: details.active }) },
        href: "#",
        key: (details.id),
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-group-item-action']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "rounded-circle" },
        src: (__VLS_ctx.getImages(details.image)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    (details.name);
    // @ts-ignore
    [primaryStateCard, getImages,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
