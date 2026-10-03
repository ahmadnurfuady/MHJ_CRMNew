import { newUsers } from '@/core/data/dashboard/default';
import { routes } from '@/router/routes';
import { getImages } from '@/utils/index';
import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const users = ref(newUsers);
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
    cardClass: ('height-equal'),
    header: ('total-revenue '),
    padding: (false),
    headerTitle: ('New Users'),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    header: ('total-revenue '),
    padding: (false),
    headerTitle: ('New Users'),
    cardBodyClass: ('pt-0'),
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
    ...{ class: "new-user" },
});
/** @type {__VLS_StyleScopedClasses['new-user']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [user] of __VLS_vFor((__VLS_ctx.users))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (user.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-common d-flex user-name" },
    });
    /** @type {__VLS_StyleScopedClasses['space-common']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['user-name']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-40 rounded-circle img-fluid me-2" },
        src: (__VLS_ctx.getImages(user.image)),
        alt: (user.name),
    });
    /** @type {__VLS_StyleScopedClasses['img-40']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space w-100" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    let __VLS_14;
    /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
    routerLink;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        to: (__VLS_ctx.routes.User.UserProfile),
        ...{ class: "f-w-500 f-14" },
    }));
    const __VLS_16 = __VLS_15({
        to: (__VLS_ctx.routes.User.UserProfile),
        ...{ class: "f-w-500 f-14" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    (user.name);
    // @ts-ignore
    [routes, users, getImages,];
    var __VLS_17;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light f-w-500 f-12" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-12']} */ ;
    (user.country);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        id: ('dropdownMenuButtonicon' + user.id),
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
        role: "menu",
    });
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        icon: "more-vertical",
        svgClass: "invoice-icon",
    }));
    const __VLS_22 = __VLS_21({
        icon: "more-vertical",
        svgClass: "invoice-icon",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        'aria-labelledby': ('dropdownMenuButtonicon' + user.id),
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
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
