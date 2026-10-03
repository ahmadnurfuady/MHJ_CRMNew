import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/router/routes";
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const route = useRoute();
const breadcrumbs = computed(() => route.meta.breadcrumb || []);
const pageTitle = computed(() => route.meta.mainTitle || "");
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(routes, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-title" },
});
/** @type {__VLS_StyleScopedClasses['page-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
(__VLS_unwrap(pageTitle, {}));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6 p-0" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ol, __VLS_intrinsics.ol)({
    ...{ class: "breadcrumb" },
});
/** @type {__VLS_StyleScopedClasses['breadcrumb']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "breadcrumb-item" },
});
/** @type {__VLS_StyleScopedClasses['breadcrumb-item']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    to: (routes.value.Pages.SamplePages1),
}));
const __VLS_2 = __VLS_1({
    to: (routes.value.Pages.SamplePages1),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    // @ts-ignore
    icon: "home", svgClass: "stroke-icon", type: "stroke",
}));
const __VLS_8 = __VLS_7({
    icon: "home",
    svgClass: "stroke-icon",
    type: "stroke",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[pageTitle, routes,];
var __VLS_3;
const __VLS_11 = __VLS_tryAsConstant((__VLS_unwrap(breadcrumbs, {})));
for (const [crumb, index] of __VLS_vFor(__VLS_nonNull(__VLS_11))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "breadcrumb-item" },
    });
    /** @type {__VLS_StyleScopedClasses['breadcrumb-item']} */ ;
    (crumb.text);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "breadcrumb-item active" },
    });
    /** @type {__VLS_StyleScopedClasses['breadcrumb-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (crumb.subText);
    // @ts-ignore
    [breadcrumbs,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
