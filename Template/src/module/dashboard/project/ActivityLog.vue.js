import { activityLogs } from '@/core/data/dashboard/project';
import { routes } from '@/router/routes';
import { getImages } from '@/utils';
import { defineAsyncComponent } from 'vue';
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
    headerTitle: ('Activity Log  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Activity Log  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "sales-chart-dropdown-select" },
    });
    /** @type {__VLS_StyleScopedClasses['sales-chart-dropdown-select']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header-right-icon online-store" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
    /** @type {__VLS_StyleScopedClasses['online-store']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn dropdown-toggle dropdown-toggle-store" },
        id: "dropdownMenuButtondown",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle-store']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        'aria-labelledby': "dropdownMenuButtondown",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "activity-log-card" },
});
/** @type {__VLS_StyleScopedClasses['activity-log-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [log] of __VLS_vFor((__VLS_ctx.activityLogs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (log.id),
        ...{ class: "activity-log" },
    });
    /** @type {__VLS_StyleScopedClasses['activity-log']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-items-start gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "activity-log-img rounded-circle img-fluid me-2" },
        src: (__VLS_ctx.getImages(log.image)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['activity-log-img']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space user-id" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['user-id']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "f-w-500 f-12" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    (log.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-w-500 f-12" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    (log.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-w-500 f-12" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    (log.actionLabel);
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Blog.Blog),
        ...{ class: "f-w-500 f-12" },
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Blog.Blog),
        ...{ class: "f-w-500 f-12" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    const { default: __VLS_13 } = __VLS_11.slots;
    (log.actionTo);
    // @ts-ignore
    [activityLogs, getImages, routes,];
    var __VLS_11;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-w-500 f-12 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    (log.message);
    if (log.username) {
        let __VLS_14;
        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
        routerLink;
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
            to: (__VLS_ctx.routes.User.UserProfile),
            ...{ class: "f-12 f-w-500 username" },
        }));
        const __VLS_16 = __VLS_15({
            to: (__VLS_ctx.routes.User.UserProfile),
            ...{ class: "f-12 f-w-500 username" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
        /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
        /** @type {__VLS_StyleScopedClasses['username']} */ ;
        const { default: __VLS_19 } = __VLS_17.slots;
        (log.username);
        // @ts-ignore
        [routes,];
        var __VLS_17;
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
