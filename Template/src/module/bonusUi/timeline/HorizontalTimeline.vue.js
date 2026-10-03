import { defineAsyncComponent } from 'vue';
import { horizontalTimeline } from '@/core/data/bonusUI/timeline';
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
    headerTitle: ('Horizontal Timeline'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Horizontal Timeline'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
for (const [content] of __VLS_vFor((__VLS_ctx.horizontalTimeline))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (content.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "list-inline events timeline-list row" },
        ...{ class: (content.ulClass) },
    });
    /** @type {__VLS_StyleScopedClasses['list-inline']} */ ;
    /** @type {__VLS_StyleScopedClasses['events']} */ ;
    /** @type {__VLS_StyleScopedClasses['timeline-list']} */ ;
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    for (const [timeline] of __VLS_vFor((content.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (timeline.divClass) },
            key: (timeline.id),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        if (content.verticalLine == 'top') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "vertical-line" },
            });
            /** @type {__VLS_StyleScopedClasses['vertical-line']} */ ;
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "list-inline-item event-list" },
        });
        /** @type {__VLS_StyleScopedClasses['list-inline-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['event-list']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "px-4" },
        });
        /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`event-date bg-light-${timeline.colorClass} txt-${timeline.colorClass}`) },
        });
        (timeline.date);
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
        (timeline.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "f-light text-truncate" },
        });
        /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-truncate']} */ ;
        (timeline.description);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (timeline.class) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "btn btn-primary px-3" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['px-3']} */ ;
        if (content.verticalLine == 'bottom') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "vertical-line" },
            });
            /** @type {__VLS_StyleScopedClasses['vertical-line']} */ ;
        }
        // @ts-ignore
        [horizontalTimeline,];
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
