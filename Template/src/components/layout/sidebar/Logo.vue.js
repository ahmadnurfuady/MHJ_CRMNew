import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
import { useMenu } from '@/store/menu';
const store = useMenu();
const { toggleSidebar } = store;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['logo-wrapper']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: (__VLS_ctx.routes.Dashboards.Default),
}));
const __VLS_2 = __VLS_1({
    to: (__VLS_ctx.routes.Dashboards.Default),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('logo/logo.png')),
    alt: "",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
// @ts-ignore
[routes, getImages,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.toggleSidebar());
            // @ts-ignore
            [toggleSidebar,];
        } },
    ...{ class: "back-btn" },
});
/** @type {__VLS_StyleScopedClasses['back-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-angle-left" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-angle-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.toggleSidebar());
            // @ts-ignore
            [toggleSidebar,];
        } },
    ...{ class: "toggle-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['toggle-sidebar']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    type: ('grid'),
    ...{ class: "status_toggle middle sidebar-toggle" },
}));
const __VLS_8 = __VLS_7({
    type: ('grid'),
    ...{ class: "status_toggle middle sidebar-toggle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['status_toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['middle']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-icon-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['logo-icon-wrapper']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    to: (__VLS_ctx.routes.Dashboards.Default),
}));
const __VLS_13 = __VLS_12({
    to: (__VLS_ctx.routes.Dashboards.Default),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('logo/logo-icon.png')),
    alt: "img",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
// @ts-ignore
[routes, getImages,];
var __VLS_14;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
