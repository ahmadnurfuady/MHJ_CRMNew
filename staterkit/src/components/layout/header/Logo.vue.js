import { getImages } from "@/utils/index";
import { routes } from "@/router/routes";
import { useMenu } from "@/store/menu";
const store = useMenu();
const { toggleSidebar } = store;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(routes, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-logo-wrapper col-auto p-0" },
});
/** @type {__VLS_StyleScopedClasses['header-logo-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['logo-wrapper']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    to: (routes.value.Pages.SamplePage),
}));
const __VLS_2 = __VLS_1({
    to: (routes.value.Pages.SamplePage),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-light" },
    src: (__VLS_unwrap(getImages, {})('logo/logo_dark.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-dark" },
    src: (__VLS_unwrap(getImages, {})('logo/logo.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-dark']} */ ;
// @ts-ignore
[routes, getImages, getImages,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: // @ts-ignore
        (...[$event]) => {
            void $event;
            return (__VLS_unwrap(toggleSidebar, {})());
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
    // @ts-ignore
    type: ('align-center'), ...{ class: "status_toggle middle sidebar-toggle" },
}));
const __VLS_8 = __VLS_7({
    type: ('align-center'),
    ...{ class: "status_toggle middle sidebar-toggle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['status_toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['middle']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-toggle']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
