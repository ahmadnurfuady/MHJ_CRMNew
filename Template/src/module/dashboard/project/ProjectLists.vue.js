import { projectCards } from '@/core/data/dashboard/project';
import { routes } from '@/router/routes';
import { getImages } from '@/utils';
import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
function formatTooltip(value) {
    return `${value}%`;
}
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
    headerTitle: ('Important Project Lists'),
    padding: (true),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0 row important-project'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Important Project Lists'),
    padding: (true),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0 row important-project'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Dashboards.Default),
        ...{ class: "d-none d-sm-block" },
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Dashboards.Default),
        ...{ class: "d-none d-sm-block" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    /** @type {__VLS_StyleScopedClasses['d-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-sm-block']} */ ;
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
for (const [card] of __VLS_vFor((__VLS_ctx.projectCards))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (card.colClass) },
        key: (card.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "projectlist-card" },
    });
    /** @type {__VLS_StyleScopedClasses['projectlist-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "projectlist" },
    });
    /** @type {__VLS_StyleScopedClasses['projectlist']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-data" },
    });
    /** @type {__VLS_StyleScopedClasses['project-data']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(card.image)),
        ...{ class: "nft-img img-fluid" },
    });
    /** @type {__VLS_StyleScopedClasses['nft-img']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "f-14 f-w-500 d-block" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    (card.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-12 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (card.client);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge rounded-pill badge-primary bg-light-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
    /** @type {__VLS_StyleScopedClasses['badge-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
    (card.daysLeft);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-date" },
    });
    /** @type {__VLS_StyleScopedClasses['project-date']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-12 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (card.startDate);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-12 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (card.endDate);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "range_4" },
    });
    /** @type {__VLS_StyleScopedClasses['range_4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "slider-container" },
    });
    /** @type {__VLS_StyleScopedClasses['slider-container']} */ ;
    let __VLS_14;
    /** @ts-ignore @type { | typeof __VLS_components.VueSlider} */
    VueSlider;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        ...{ class: "mb-3" },
        modelValue: (card.progress),
        tooltip: "always",
        tooltipFormatter: ((value) => `${value}%`),
    }));
    const __VLS_16 = __VLS_15({
        ...{ class: "mb-3" },
        modelValue: (card.progress),
        tooltip: "always",
        tooltipFormatter: ((value) => `${value}%`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-comment" },
    });
    /** @type {__VLS_StyleScopedClasses['project-comment']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "avatar-showcase" },
    });
    /** @type {__VLS_StyleScopedClasses['avatar-showcase']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "avatars" },
    });
    /** @type {__VLS_StyleScopedClasses['avatars']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "customers d-inline-block avatar-group" },
    });
    /** @type {__VLS_StyleScopedClasses['customers']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['avatar-group']} */ ;
    for (const [user, i] of __VLS_vFor((card.users))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (i),
            ...{ class: "d-inline-block" },
        });
        /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-25 rounded-circle" },
            src: (__VLS_ctx.getImages(user)),
        });
        /** @type {__VLS_StyleScopedClasses['img-25']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        // @ts-ignore
        [projectCards, getImages, getImages,];
    }
    if (card.extraUsers) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "d-inline-block" },
        });
        /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "rounded-circle bg-light" },
        });
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
        (card.extraUsers);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-comment-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['project-comment-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-link" },
    });
    /** @type {__VLS_StyleScopedClasses['project-link']} */ ;
    let __VLS_19;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
        icon: "messages-2",
    }));
    const __VLS_21 = __VLS_20({
        icon: "messages-2",
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (card.comments);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-link" },
    });
    /** @type {__VLS_StyleScopedClasses['project-link']} */ ;
    let __VLS_24;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
        icon: "paperclip",
    }));
    const __VLS_26 = __VLS_25({
        icon: "paperclip",
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (card.attachments);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-meeting-details" },
    });
    /** @type {__VLS_StyleScopedClasses['project-meeting-details']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-meeting" },
    });
    /** @type {__VLS_StyleScopedClasses['project-meeting']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-12 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-12 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-meeting-time" },
    });
    /** @type {__VLS_StyleScopedClasses['project-meeting-time']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "f-14 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (card.lastMeeting);
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "f-14 f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (card.nextMeeting);
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
