import { defineAsyncComponent } from 'vue';
import { secondaryStateCard } from '@/core/data/bonusUI/creativeCards';
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
    headerTitle: ('Border Secondary State'),
    border: (true),
    padding: (false),
    cardClass: ('common-hover'),
    header: ('border-l-secondary border-3'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Border Secondary State'),
    border: (true),
    padding: (false),
    cardClass: ('common-hover'),
    header: ('border-l-secondary border-3'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.ol, __VLS_intrinsics.ol)({
    ...{ class: "list-group list-group-numbered scroll-rtl" },
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group-numbered']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-rtl']} */ ;
for (const [details] of __VLS_vFor((__VLS_ctx.secondaryStateCard))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "list-group-item d-flex align-items-start flex-wrap" },
        key: (details.id),
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
    (details.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`badge bg-${details.badgeColor} rounded-pill p-2`) },
    });
    (details.badgeText);
    // @ts-ignore
    [secondaryStateCard,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
