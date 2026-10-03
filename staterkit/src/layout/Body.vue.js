import { useLayout } from "@/store/layout";
import { useMenu } from "@/store/menu";
import { storeToRefs } from "pinia";
import { defineAsyncComponent, onMounted, onUnmounted, ref, watch } from "vue";
const Header = defineAsyncComponent(() => import("@/components/layout/header/Header.vue"));
const Sidebar = defineAsyncComponent(() => import("@/components/layout/sidebar/Sidebar.vue"));
const BreadCrumbs = defineAsyncComponent(() => import("@/components/layout/breadCrumb/BreadCrumbs.vue"));
const TapTop = defineAsyncComponent(() => import("@/components/layout/tapToTop/TapTop.vue"));
const Footer = defineAsyncComponent(() => import("@/components/layout/footer/Footer.vue"));
const display = ref(false);
const layout = ref({});
const storeLayout = useLayout();
const { layoutState } = storeToRefs(storeLayout);
const store = useMenu();
const { uiState } = storeToRefs(store);
watch(() => layoutState.value.layouts, () => {
    layout.value = layoutState.value.layouts.settings.sidebarSetting;
}, { deep: true });
watch(() => "router", () => {
    if (window.innerWidth < 991 &&
        layoutState.value.layouts.settings.layout === "Horizontal") {
    }
});
function handleScroll() {
    if (window.innerWidth <= 1199) {
        display.value = true;
        uiState.value.show = false;
    }
    else {
        uiState.value.show = true;
        display.value = false;
    }
}
onMounted(() => {
    const savedLayout = localStorage.getItem("layout");
    if (savedLayout) {
        layoutState.value.layouts.settings.layout = savedLayout;
    }
    layout.value = layoutState.value.layouts.settings.sidebarSetting;
    handleScroll();
    window.addEventListener("resize", handleScroll);
});
onUnmounted(() => {
    window.removeEventListener("resize", handleScroll);
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(display, {});
// @ts-ignore
__VLS_withDotValue(uiState, {});
// @ts-ignore
__VLS_withDotValue(layoutState, {});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.TapTop} */
TapTop;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
// @ts-ignore
}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-wrapper" },
    id: "pageWrapper",
    ...{ class: (display.value ? 'compact-wrapper ' : __VLS_unwrap(layout, {})) },
});
/** @type {__VLS_StyleScopedClasses['page-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-header" },
    ...{ class: ({ close_icon: !uiState.value.show }) },
});
/** @type {__VLS_StyleScopedClasses['page-header']} */ ;
/** @type {__VLS_StyleScopedClasses['close_icon']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Header} */
Header;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
// @ts-ignore
}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-body-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['page-body-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sidebar-wrapper" },
    'data-layout': (layoutState.value.svgIcon == 'stroke-svg' ? 'stroke-svg' : 'fill-svg'),
    ...{ class: ([{ close_icon: !uiState.value.show }]) },
});
/** @type {__VLS_StyleScopedClasses['sidebar-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['close_icon']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.Sidebar} */
Sidebar;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
// @ts-ignore
}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-body" },
});
/** @type {__VLS_StyleScopedClasses['page-body']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.BreadCrumbs} */
BreadCrumbs;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
// @ts-ignore
}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.routerView | typeof __VLS_components.RouterView | typeof __VLS_components['router-view'] | typeof __VLS_components.routerView | typeof __VLS_components.RouterView | typeof __VLS_components['router-view']} */
routerView;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
// @ts-ignore
}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.Footer} */
Footer;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
// @ts-ignore
}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[display, layout, uiState, uiState, layoutState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
