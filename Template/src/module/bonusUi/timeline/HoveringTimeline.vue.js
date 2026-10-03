import { defineAsyncComponent } from 'vue';
import { hoveringTimeline } from '@/core/data/bonusUI/timeline';
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
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Hovering Timeline '),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Hovering Timeline '),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "square-timeline" },
});
/** @type {__VLS_StyleScopedClasses['square-timeline']} */ ;
for (const [details] of __VLS_vFor((__VLS_ctx.hoveringTimeline))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "timeline-event" },
        key: (details.id),
    });
    /** @type {__VLS_StyleScopedClasses['timeline-event']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "timeline-event-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['timeline-event-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "timeline-event-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['timeline-event-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "timeline-thumbnail" },
    });
    /** @type {__VLS_StyleScopedClasses['timeline-thumbnail']} */ ;
    (details.event);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    (details.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    (details.text);
    if (details.list) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "list-group main-lists-content" },
        });
        /** @type {__VLS_StyleScopedClasses['list-group']} */ ;
        /** @type {__VLS_StyleScopedClasses['main-lists-content']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "list-group-item list-group-item-action border-0 p-0 mb-4" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['list-group-item-action']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
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
            src: (__VLS_ctx.getImages('user/1.jpg')),
            alt: "profile",
        });
        /** @type {__VLS_StyleScopedClasses['list-img']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "list-content" },
        });
        /** @type {__VLS_StyleScopedClasses['list-content']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "timeline-icon" },
        });
        /** @type {__VLS_StyleScopedClasses['timeline-icon']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icon-facebook" },
        });
        /** @type {__VLS_StyleScopedClasses['icon-facebook']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icon-google" },
        });
        /** @type {__VLS_StyleScopedClasses['icon-google']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "icon-twitter-alt" },
        });
        /** @type {__VLS_StyleScopedClasses['icon-twitter-alt']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "mb-1" },
        });
        /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    }
    if (details.profile) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "designer-details" },
        });
        /** @type {__VLS_StyleScopedClasses['designer-details']} */ ;
        for (const [profile] of __VLS_vFor((details.profile))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "designer-profile" },
                key: (profile.id),
            });
            /** @type {__VLS_StyleScopedClasses['designer-profile']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "designer-wrap" },
            });
            /** @type {__VLS_StyleScopedClasses['designer-wrap']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "designer-img" },
                src: (__VLS_ctx.getImages(profile.image)),
                alt: "profile",
            });
            /** @type {__VLS_StyleScopedClasses['designer-img']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "designer-content" },
            });
            /** @type {__VLS_StyleScopedClasses['designer-content']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
            (profile.name);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
            (profile.contactNumber);
            // @ts-ignore
            [hoveringTimeline, getImages, getImages,];
        }
    }
    if (details.description) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "pt-3 mb-4" },
        });
        /** @type {__VLS_StyleScopedClasses['pt-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        (details.description);
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
