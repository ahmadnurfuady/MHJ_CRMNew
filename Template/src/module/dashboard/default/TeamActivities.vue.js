import { activityLogs } from '@/core/data/dashboard/default';
import { routes } from '@/router/routes';
import { getImages } from '@/utils/index';
import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const activities = ref(activityLogs);
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
    cardClass: ('height-equal'),
    header: ('total-revenue pb-0'),
    padding: (false),
    headerTitle: ('Team Activities'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    header: ('total-revenue pb-0'),
    padding: (false),
    headerTitle: ('Team Activities'),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Ecommerce.Products.ProductGrid),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "activity-table table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['activity-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "order-table overflow-hidden project-table w-100 activity-log" },
});
/** @type {__VLS_StyleScopedClasses['order-table']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['project-table']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['activity-log']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [item] of __VLS_vFor((__VLS_ctx.activities))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (item.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "team-activity" },
    });
    /** @type {__VLS_StyleScopedClasses['team-activity']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "activity-data d-flex align-items-center gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['activity-data']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-activity me-3" },
    });
    /** @type {__VLS_StyleScopedClasses['user-activity']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "rounded-circle p-1 img-fluid me-3 img-50" },
        src: (__VLS_ctx.getImages(item.image)),
        alt: (item.name),
    });
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        to: (__VLS_ctx.routes.User.UserProfile),
        ...{ class: "f-10 f-w-500 username" },
    }));
    const __VLS_16 = __VLS_15({
        to: (__VLS_ctx.routes.User.UserProfile),
        ...{ class: "f-10 f-w-500 username" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['username']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    (item.name);
    // @ts-ignore
    [routes, activities, getImages,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "activity-time" },
    });
    /** @type {__VLS_StyleScopedClasses['activity-time']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-w-500 f-10" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    (item.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "subtitle" },
    });
    /** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-w-400 f-10" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-400']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-10']} */ ;
    (item.message);
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
