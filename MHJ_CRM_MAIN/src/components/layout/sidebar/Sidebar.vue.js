import { computed, defineAsyncComponent, onMounted, onUnmounted, reactive, ref } from 'vue';
import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
import { useMenu } from '@/store/menu';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/store/layout';
const Logo = defineAsyncComponent(() => import('@/components/layout/sidebar/Logo.vue'));
const NavMenu = defineAsyncComponent(() => import('@/components/layout/sidebar/NavMenu.vue'));
const store = useMenu();
const storeLayout = useLayout();
const { menuState, uiState } = storeToRefs(store);
const { layoutState } = storeToRefs(storeLayout);
const menu = menuState.value.menu;
const sidebarRef = ref(null);
let timeoutId;
const layoutObject = computed({
    get() {
        return layoutState.value.layouts.settings.sidebarSetting;
    },
    set() {
        return layoutState.value.layouts.settings.sidebarSetting;
    },
});
const sidebar = reactive({
    margin: uiState.value.margin,
    hideLeftArrow: uiState.value.hideLeftArrow,
    hideRightArrow: uiState.value.hideRightArrow,
    isActive: false,
});
function arrowRight() {
    if (sidebar.isActive == false) {
        sidebar.isActive = !sidebar.isActive;
    }
    if (sidebar.margin >= -3700) {
        sidebar.margin = sidebar.margin - 500;
        sidebar.hideLeftArrow = false;
        sidebar.hideRightArrow = false;
    }
    if (sidebar.margin == -3700) {
        sidebar.hideRightArrow = true;
    }
}
function arrowLeft() {
    if (sidebar.margin <= -500) {
        sidebar.margin = sidebar.margin + 500;
        sidebar.hideLeftArrow = false;
        sidebar.hideRightArrow = false;
    }
    if (sidebar.margin == 0) {
        sidebar.hideLeftArrow = true;
    }
}
onMounted(() => {
    timeoutId = window.setTimeout(() => {
        if (sidebarRef.value) {
            if (uiState.value.menuWidth > window.innerWidth) {
                sidebar.hideRightArrow = false;
                uiState.value.hideLeftArrowRTL = false;
            }
            else {
                sidebar.hideRightArrow = false;
                uiState.value.hideLeftArrowRTL = true;
            }
        }
    }, 500);
    if (sidebar.margin === 0) {
        sidebar.hideRightArrow = false;
    }
});
onUnmounted(() => {
    if (timeoutId)
        clearTimeout(timeoutId);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Logo} */
Logo;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "sidebar-main" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-main']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (__VLS_ctx.arrowLeft) },
    ...{ class: "left-arrow" },
    ...{ class: ({ disabled: __VLS_ctx.sidebar.hideLeftArrow }) },
});
/** @type {__VLS_StyleScopedClasses['left-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    type: "arrow-left",
}));
const __VLS_7 = __VLS_6({
    type: "arrow-left",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "sidebar-menu",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "sidebar-links custom-scrollbar d-flex flex-column" },
    id: "simple-bar",
    ...{ style: ([
            __VLS_ctx.layoutObject?.includes('horizontal-wrapper')
                ? { 'margin-left': __VLS_ctx.sidebar.margin + 'px' }
                : {},
        ]) },
});
/** @type {__VLS_StyleScopedClasses['sidebar-links']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "back-btn" },
});
/** @type {__VLS_StyleScopedClasses['back-btn']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    to: (__VLS_ctx.routes.Dashboards.Default),
}));
const __VLS_12 = __VLS_11({
    to: (__VLS_ctx.routes.Dashboards.Default),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_15 } = __VLS_13.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('logo/logo-icon.png')),
    alt: "images",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
// @ts-ignore
[arrowLeft, sidebar, sidebar, layoutObject, routes, getImages,];
var __VLS_13;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mobile-back text-end" },
});
/** @type {__VLS_StyleScopedClasses['mobile-back']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-angle-right ps-2" },
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-angle-right']} */ ;
/** @type {__VLS_StyleScopedClasses['ps-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "pin-title sidebar-main-title" },
    ...{ class: (__VLS_ctx.menuState.pinedArray.length ? 'show' : '') },
});
/** @type {__VLS_StyleScopedClasses['pin-title']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-main-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
for (const [menuItem, index] of __VLS_vFor((__VLS_ctx.menu))) {
    let __VLS_16;
    /** @ts-ignore @type { | typeof __VLS_components.NavMenu} */
    NavMenu;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
        key: (index),
        menuItem: (menuItem),
    }));
    const __VLS_18 = __VLS_17({
        key: (index),
        menuItem: (menuItem),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    // @ts-ignore
    [menuState, menu,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (__VLS_ctx.arrowRight) },
    ...{ class: "right-arrow" },
    ...{ class: ({ disabled: __VLS_ctx.sidebar.hideRightArrow }) },
});
/** @type {__VLS_StyleScopedClasses['right-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled']} */ ;
let __VLS_21;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    type: "arrow-right",
}));
const __VLS_23 = __VLS_22({
    type: "arrow-right",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
// @ts-ignore
[sidebar, arrowRight,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
