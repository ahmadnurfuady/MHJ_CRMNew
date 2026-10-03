import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { friends, socialAppLeftPanelAccordion } from '@/core/data/socialApp';
const MyProfile = defineAsyncComponent(() => import('@/module/socialApp/MyProfile.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "default-according style-1 faq-accordion" },
    id: "accordionLeftPanel",
});
/** @type {__VLS_StyleScopedClasses['default-according']} */ ;
/** @type {__VLS_StyleScopedClasses['style-1']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-accordion']} */ ;
for (const [accordionItem, index] of __VLS_vFor((__VLS_ctx.socialAppLeftPanelAccordion))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header" },
        id: (`left-panel-heading-${index + 1}`),
    });
    /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-link btn-block text-start" },
        type: "button",
        'data-bs-toggle': "collapse",
        'data-bs-target': (`#collapse-left-panel-${index + 1}`),
        'aria-expanded': "true",
        'aria-controls': (`collapse-left-panel-${index + 1}`),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-start']} */ ;
    (accordionItem.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "collapse show" },
        id: (`collapse-left-panel-${index + 1}`),
        'aria-labelledby': (`left-panel-heading-${index + 1}`),
        'data-bs-parent': "#accordionLeftPanel",
    });
    /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    if (accordionItem.value == 'my_profile') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body socialprofile filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['socialprofile']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.MyProfile} */
        MyProfile;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    if (accordionItem.value == 'mutual_friends') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body social-status filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['social-status']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        for (const [friend, index] of __VLS_vFor((__VLS_ctx.friends))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "d-flex" },
                key: (index),
            });
            /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-50 rounded-circle m-r-15" },
                src: (__VLS_ctx.getImages(friend.profile)),
                alt: (friend.name),
            });
            /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
            /** @type {__VLS_StyleScopedClasses['m-r-15']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: (`social-status social-${friend.status}`) },
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "flex-grow-1" },
            });
            /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "f-w-600 d-block" },
            });
            /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
            /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
            (friend.name);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "d-block fw-normal" },
            });
            /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
            /** @type {__VLS_StyleScopedClasses['fw-normal']} */ ;
            (friend.email);
            // @ts-ignore
            [socialAppLeftPanelAccordion, friends, getImages,];
        }
    }
    if (accordionItem.value == 'activity_feed') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body social-status filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['social-status']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        for (const [friend, index] of __VLS_vFor((__VLS_ctx.friends))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
                key: (index),
            });
            if (friend.lastActivityTime && friend.userProfile) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "d-flex" },
                });
                /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                    ...{ class: "img-50 rounded-circle m-r-15" },
                    src: (__VLS_ctx.getImages(friend.profile)),
                    alt: (friend.name),
                });
                /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
                /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
                /** @type {__VLS_StyleScopedClasses['m-r-15']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "flex-grow-1" },
                });
                /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "f-w-600 d-block" },
                });
                /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
                /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
                (friend.name);
                __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
                (friend.userProfile);
                __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                    href: "#",
                });
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "light-span" },
                });
                /** @type {__VLS_StyleScopedClasses['light-span']} */ ;
                (friend.lastActivityTime);
            }
            // @ts-ignore
            [friends, getImages,];
        }
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
