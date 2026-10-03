import { getImages } from "@/utils/index";
import { useMenu } from "@/store/menu";
const store = useMenu();
const { toggleSidebar } = store;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['logo-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "javascript:void(0)",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_unwrap(getImages, {})('logo/logo.png')),
    alt: "",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: // @ts-ignore
        (...[$event]) => {
            void $event;
            return (__VLS_unwrap(toggleSidebar, {})());
            // @ts-ignore
            [getImages, toggleSidebar,];
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
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    type: ('grid'), ...{ class: "status_toggle middle sidebar-toggle" },
}));
const __VLS_2 = __VLS_1({
    type: ('grid'),
    ...{ class: "status_toggle middle sidebar-toggle" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['status_toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['middle']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-icon-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['logo-icon-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "javascript:void(0)",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_unwrap(getImages, {})('logo/logo-icon.png')),
    alt: "img",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
