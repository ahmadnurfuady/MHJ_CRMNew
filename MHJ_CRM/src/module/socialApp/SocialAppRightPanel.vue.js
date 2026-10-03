import { friends, myProfile, socialAppRightPanelAccordion } from '@/core/data/socialApp';
import { getImages } from '@/utils/index';
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "default-according style-1 faq-accordion job-accordion" },
    id: "accordionRightPanel",
});
/** @type {__VLS_StyleScopedClasses['default-according']} */ ;
/** @type {__VLS_StyleScopedClasses['style-1']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['job-accordion']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [accordionItem, index] of __VLS_vFor((__VLS_ctx.socialAppRightPanelAccordion))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (accordionItem.class) },
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header" },
        id: (`right-panel-heading-${index + 1}`),
    });
    /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-link" },
        type: "button",
        'data-bs-toggle': "collapse",
        'data-bs-target': (`#collapse-right-panel-${index + 1}`),
        'aria-expanded': "true",
        'aria-controls': (`collapse-right-panel-${index + 1}`),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-link']} */ ;
    (accordionItem.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "collapse show" },
        id: (`collapse-right-panel-${index + 1}`),
        'aria-labelledby': (`right-panel-heading-${index + 1}`),
        'data-bs-parent': "#accordionRightPanel",
    });
    /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    if (accordionItem.value == 'profile_intro') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.myProfile.introduction) }, null, null);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "social-network theme-form" },
        });
        /** @type {__VLS_StyleScopedClasses['social-network']} */ ;
        /** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "f-w-600" },
        });
        /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        for (const [platform, index] of __VLS_vFor((__VLS_ctx.myProfile.socialNetworks))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ class: (`btn social-btn btn-${platform.platformClass} text-center`) },
                title: (platform.platformName),
                key: (index),
            });
            __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: (platform.icon + ' ' + 'm-r-5') },
            });
            // @ts-ignore
            [socialAppRightPanelAccordion, myProfile, myProfile, vTooltip,];
        }
    }
    if (accordionItem.value == 'followers') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body social-list filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['social-list']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        for (const [friend, index] of __VLS_vFor((__VLS_ctx.friends))) {
            (index);
            if (!friend.isFollower) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "d-flex" },
                });
                /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                    ...{ class: "img-50 img-fluid m-r-20 rounded-circle" },
                    alt: (friend.name),
                    src: (__VLS_ctx.getImages(friend.profile)),
                });
                /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
                /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
                /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
                /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "flex-grow-1" },
                });
                /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "d-block" },
                });
                /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
                (friend.name);
                __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                    href: "#",
                });
            }
            // @ts-ignore
            [friends, getImages,];
        }
    }
    if (accordionItem.value == 'followings') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body social-list filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['social-list']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        for (const [friend, index] of __VLS_vFor((__VLS_ctx.friends))) {
            (index);
            if (!friend.isFollowing) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "d-flex" },
                });
                /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                    ...{ class: "img-50 img-fluid m-r-20 rounded-circle" },
                    alt: (friend.name),
                    src: (__VLS_ctx.getImages(friend.profile)),
                });
                /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
                /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
                /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
                /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "flex-grow-1" },
                });
                /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "d-block" },
                });
                /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
                (friend.name);
                __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                    href: "#",
                });
            }
            // @ts-ignore
            [friends, getImages,];
        }
    }
    if (accordionItem.value == 'latest_photos') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body photos filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['photos']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
        for (const [photos, index] of __VLS_vFor((__VLS_ctx.myProfile.latestPhotos))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                key: (index),
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-fluid" },
                alt: "post",
                src: (__VLS_ctx.getImages(photos.image)),
            });
            /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
            // @ts-ignore
            [myProfile, getImages,];
        }
    }
    if (accordionItem.value == 'friends') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body avatar-showcase filter-cards-view" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['avatar-showcase']} */ ;
        /** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
        for (const [friend, index] of __VLS_vFor((__VLS_ctx.friends))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "d-inline-block friend-pic" },
                key: (index),
            });
            /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
            /** @type {__VLS_StyleScopedClasses['friend-pic']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-50 rounded-circle" },
                src: (__VLS_ctx.getImages(friend.profile)),
                alt: (friend.name),
            });
            /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
            // @ts-ignore
            [friends, getImages,];
        }
    }
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12 xl-50 box-col-6 order-xxl-ii col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
/** @type {__VLS_StyleScopedClasses['order-xxl-ii']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (`${__VLS_ctx.getImages('social-app/timeline-4.png')}`),
    alt: "post",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
