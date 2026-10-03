import { defineAsyncComponent } from 'vue';
import { halfRoundedTimeline } from '@/core/data/bonusUI/timeline';
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
    headerTitle: ('Half Rounded Timeline'),
    border: (true),
    padding: (false),
    cardBodyClass: ('rounded-timeline'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Half Rounded Timeline'),
    border: (true),
    padding: (false),
    cardBodyClass: ('rounded-timeline'),
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
    ...{ class: "timeline" },
});
/** @type {__VLS_StyleScopedClasses['timeline']} */ ;
for (const [details, index] of __VLS_vFor((__VLS_ctx.halfRoundedTimeline))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (details.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "container" },
        ...{ class: (index % 2 === 0 ? 'left' : 'right') },
    });
    /** @type {__VLS_StyleScopedClasses['container']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "date" },
    });
    /** @type {__VLS_StyleScopedClasses['date']} */ ;
    (details.date);
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`icon fa-${details.icon}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "content" },
    });
    /** @type {__VLS_StyleScopedClasses['content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "timeline-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['timeline-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`badge bg-${details.badgeClass}`) },
    });
    (details.badge);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: "mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    (details.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0 f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    (details.description);
    if (details.audio) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.audio, __VLS_intrinsics.audio)({
            controls: true,
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.source)({
            src: "@/assets/audio/horse.ogg",
            type: "audio/ogg",
        });
    }
    // @ts-ignore
    [halfRoundedTimeline,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
