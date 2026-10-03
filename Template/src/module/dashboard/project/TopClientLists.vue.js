import { clients } from '@/core/data/dashboard/project';
import { routes } from '@/router/routes';
import { getImages } from '@/utils';
import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
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
    cardClass: ('recent-order'),
    headerTitle: ('Top Client Lists'),
    padding: (false),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('recent-order'),
    headerTitle: ('Top Client Lists'),
    padding: (false),
    header: ('total-revenue'),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "header-top" },
    });
    /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Dashboards.Default),
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Dashboards.Default),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "client-list-table table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['client-list-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "order-table w-100" },
});
/** @type {__VLS_StyleScopedClasses['order-table']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [client] of __VLS_vFor((__VLS_ctx.clients))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (client.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "client-list" },
    });
    /** @type {__VLS_StyleScopedClasses['client-list']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-id d-flex align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['user-id']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "avatars me-2" },
    });
    /** @type {__VLS_StyleScopedClasses['avatars']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "avatar position-relative" },
    });
    /** @type {__VLS_StyleScopedClasses['avatar']} */ ;
    /** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-50 rounded-circle" },
        src: (__VLS_ctx.getImages(client.avatar)),
        alt: "image",
    });
    /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    if (client.statusColor) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "status status-dnd" },
            ...{ class: (client.statusColor) },
        });
        /** @type {__VLS_StyleScopedClasses['status']} */ ;
        /** @type {__VLS_StyleScopedClasses['status-dnd']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        ...{ class: "f-14 f-w-500" },
        to: (__VLS_ctx.routes.Dashboards.Default),
    }));
    const __VLS_16 = __VLS_15({
        ...{ class: "f-14 f-w-500" },
        to: (__VLS_ctx.routes.Dashboards.Default),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    (client.name);
    // @ts-ignore
    [routes, clients, getImages,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "d-block f-light f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (client.country);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-comment w-100 d-flex justify-content-between align-items-center mt-2" },
    });
    /** @type {__VLS_StyleScopedClasses['user-comment']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    let __VLS_20;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        ...{ class: "f-14 f-w-500" },
        to: (__VLS_ctx.routes.User.UserProfile),
    }));
    const __VLS_22 = __VLS_21({
        ...{ class: "f-14 f-w-500" },
        to: (__VLS_ctx.routes.User.UserProfile),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    const { default: __VLS_25 } = __VLS_23.slots;
    (client.email);
    // @ts-ignore
    [routes,];
    var __VLS_23;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "d-block f-light f-w-500" },
    });
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (client.phone);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    let __VLS_26;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
        icon: "messages-3",
    }));
    const __VLS_28 = __VLS_27({
        icon: "messages-3",
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
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
