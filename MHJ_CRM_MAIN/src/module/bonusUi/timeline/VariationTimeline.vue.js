import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils';
import { variationTimeline } from '@/core/data/bonusUI/timeline';
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
    headerTitle: ('Variation Timeline'),
    border: (true),
    padding: (false),
    cardBodyClass: ('dark-timeline'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Variation Timeline'),
    border: (true),
    padding: (false),
    cardBodyClass: ('dark-timeline'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [timeline] of __VLS_vFor((__VLS_ctx.variationTimeline))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "d-flex" },
        key: (timeline.id),
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`activity-dot-${timeline.class}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "w-100 ms-3" },
    });
    /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "d-flex justify-content-between mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "date-content light-background txt-dark" },
    });
    /** @type {__VLS_StyleScopedClasses['date-content']} */ ;
    /** @type {__VLS_StyleScopedClasses['light-background']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-dark']} */ ;
    (timeline.date);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (timeline.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (timeline.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot-notification" },
    });
    /** @type {__VLS_StyleScopedClasses['dot-notification']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    (timeline.description);
    if (timeline.details) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "recent-images" },
        });
        /** @type {__VLS_StyleScopedClasses['recent-images']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
        for (const [item] of __VLS_vFor((timeline.details))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                key: (item.id),
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "recent-img-wrap" },
            });
            /** @type {__VLS_StyleScopedClasses['recent-img-wrap']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                src: (__VLS_ctx.getImages(item.image)),
                alt: (item.alt),
            });
            // @ts-ignore
            [variationTimeline, getImages,];
        }
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
