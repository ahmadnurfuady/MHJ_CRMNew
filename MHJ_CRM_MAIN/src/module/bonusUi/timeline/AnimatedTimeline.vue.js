import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { defineAsyncComponent } from 'vue';
import { animatedTimeline } from '@/core/data/bonusUI/timeline';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const visibleEvents = ref([]);
function globalIndex(eventIndex, yearIndex) {
    let count = 0;
    for (let i = 0; i < yearIndex; i++) {
        count += animatedTimeline[i].events.length;
    }
    return count + eventIndex;
}
function eventRefHandler(index) {
    return (ref) => {
        if (ref instanceof Element) {
            observeEvent(ref, index);
        }
    };
}
function observeEvent(el, index) {
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
            visibleEvents.value[index] = true;
        }
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
    });
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['timeline-event']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Animated Timeline'),
    border: (true),
    padding: (false),
    cardBodyClass: ('overflow-hidden'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Animated Timeline'),
    border: (true),
    padding: (false),
    cardBodyClass: ('overflow-hidden'),
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
    ...{ class: "animated-timeline" },
});
/** @type {__VLS_StyleScopedClasses['animated-timeline']} */ ;
for (const [details, yearIndex] of __VLS_vFor((__VLS_ctx.animatedTimeline))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "timeline-block" },
        key: (details.year),
    });
    /** @type {__VLS_StyleScopedClasses['timeline-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "each-year" },
    });
    /** @type {__VLS_StyleScopedClasses['each-year']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "title" },
    });
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (details.year);
    for (const [timeline, eventIndex] of __VLS_vFor((details.events))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "timeline-event" },
            key: (timeline.id),
            ref: (__VLS_ctx.eventRefHandler(__VLS_ctx.globalIndex(eventIndex, yearIndex))),
            ...{ class: ({ show: __VLS_ctx.visibleEvents[__VLS_ctx.globalIndex(eventIndex, yearIndex)] }) },
        });
        /** @type {__VLS_StyleScopedClasses['timeline-event']} */ ;
        /** @type {__VLS_StyleScopedClasses['show']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "timeline-desc" },
        });
        /** @type {__VLS_StyleScopedClasses['timeline-desc']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "pb-1" },
        });
        /** @type {__VLS_StyleScopedClasses['pb-1']} */ ;
        (timeline.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (timeline.description);
        // @ts-ignore
        [animatedTimeline, eventRefHandler, globalIndex, globalIndex, visibleEvents,];
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
