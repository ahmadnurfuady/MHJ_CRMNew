import { defineAsyncComponent } from "vue";
import { useMenu } from "@/store/menu";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useLayout } from "@/store/layout";
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const router = useRouter();
const route = useRoute();
const store = useMenu();
const storeLayout = useLayout();
const { menuState } = storeToRefs(store);
const { layoutState } = storeToRefs(storeLayout);
const { getPined, toggleMenu } = store;
const props = defineProps();
function isActive(path) {
    return path === route.path;
}
function isExternal(path) {
    return !!path && (path.startsWith("http://") || path.startsWith("https://"));
}
const onMenuClick = (menuItem) => {
    if (menuItem.children && menuItem.children.length) {
        toggleMenu(menuItem);
    }
    else if (menuItem.path) {
        router.push(menuItem.path);
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(menuState, {});
// @ts-ignore
__VLS_withDotValue(layoutState, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: ([
            {
                'sidebar-main-title': __VLS_ctx.menuItem?.type == 'headtitle',
                'sidebar-list': __VLS_ctx.menuItem?.icon,
            },
            __VLS_ctx.menuItem?.title && menuState.value.pinedArray.includes(__VLS_ctx.menuItem.title)
                ? 'pined'
                : '',
        ]) },
});
/** @type {__VLS_StyleScopedClasses['sidebar-main-title']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-list']} */ ;
if (__VLS_ctx.menuItem?.type == 'headtitle') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "lan-1" },
    });
    /** @type {__VLS_StyleScopedClasses['lan-1']} */ ;
    (__VLS_ctx.menuItem?.headTitle);
}
if (__VLS_ctx.menuItem?.type != 'headtitle' && __VLS_ctx.menuItem?.icon) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ onClick: // @ts-ignore
            (...[$event]) => {
                void $event;
                if (!(__VLS_ctx.menuItem?.type != 'headtitle' && __VLS_ctx.menuItem?.icon))
                    throw 0;
                return (__VLS_unwrap(getPined, {})(__VLS_ctx.menuItem));
                // @ts-ignore
                [menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuState, getPined,];
            } },
        ...{ class: "fa fa-thumb-tack" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-thumb-tack']} */ ;
}
if (__VLS_ctx.menuItem?.badgeType) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "badge badge-new" },
        ...{ class: ('badge-light-' + __VLS_ctx.menuItem.badgeType) },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    /** @type {__VLS_StyleScopedClasses['badge-new']} */ ;
    (__VLS_ctx.menuItem.badge);
}
if (__VLS_ctx.menuItem && __VLS_ctx.menuItem?.title && !isExternal(__VLS_ctx.menuItem.path)) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
    routerLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        // @ts-ignore
        ...{ 'onClick': {} }, to: (__VLS_ctx.menuItem?.children ? '' : __VLS_ctx.menuItem?.path || ''), ...{ class: ([
                {
                    active: (__VLS_ctx.menuItem.path && isActive(__VLS_ctx.menuItem.path)) || __VLS_ctx.menuItem.active,
                },
                __VLS_ctx.menuItem.icon ? 'sidebar-link sidebar-title ' : 'submenu-title',
            ]) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        to: (__VLS_ctx.menuItem?.children ? '' : __VLS_ctx.menuItem?.path || ''),
        ...{ class: ([
                {
                    active: (__VLS_ctx.menuItem.path && isActive(__VLS_ctx.menuItem.path)) || __VLS_ctx.menuItem.active,
                },
                __VLS_ctx.menuItem.icon ? 'sidebar-link sidebar-title ' : 'submenu-title',
            ]) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = {
        /** @type {typeof __VLS_5.click} */
        onClick: // @ts-ignore
        (...[$event]) => {
            void $event;
            if (!(__VLS_ctx.menuItem && __VLS_ctx.menuItem?.title && !isExternal(__VLS_ctx.menuItem.path)))
                throw 0;
            return (__VLS_unwrap(onMenuClick, {})(__VLS_ctx.menuItem));
            // @ts-ignore
            [menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, onMenuClick,];
        },
    };
    void __VLS_6;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    const { default: __VLS_7 } = __VLS_nonNull(__VLS_3.slots);
    if (__VLS_ctx.menuItem.icon && layoutState.value.svgIcon == 'stroke-svg') {
        let __VLS_8;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            // @ts-ignore
            icon: (__VLS_ctx.menuItem.icon), svgClass: "stroke-icon", type: "stroke",
        }));
        const __VLS_10 = __VLS_9({
            icon: (__VLS_ctx.menuItem.icon),
            svgClass: "stroke-icon",
            type: "stroke",
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    if (__VLS_ctx.menuItem.icon && layoutState.value.svgIcon == 'fill-svg') {
        let __VLS_13;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
            // @ts-ignore
            icon: (__VLS_ctx.menuItem.icon), svgClass: "fill-icon", type: "fill",
        }));
        const __VLS_15 = __VLS_14({
            icon: (__VLS_ctx.menuItem.icon),
            svgClass: "fill-icon",
            type: "fill",
        }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    }
    if (__VLS_ctx.menuItem.icon) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "lan-3" },
        });
        /** @type {__VLS_StyleScopedClasses['lan-3']} */ ;
        (__VLS_ctx.$t(__VLS_ctx.menuItem.title));
    }
    else {
        (__VLS_ctx.$t(__VLS_ctx.menuItem.title));
    }
    if (__VLS_ctx.menuItem.children) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "according-menu" },
        });
        /** @type {__VLS_StyleScopedClasses['according-menu']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "pull-right" },
            ...{ class: ([__VLS_ctx.menuItem.active ? 'fa fa-angle-down' : 'fa fa-angle-right']) },
        });
        /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
    }
    // @ts-ignore
    [menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, layoutState, layoutState, $t, $t,];
    var __VLS_3;
    var __VLS_4;
}
else if (__VLS_ctx.menuItem && __VLS_ctx.menuItem.title && isExternal(__VLS_ctx.menuItem.path)) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: (__VLS_ctx.menuItem.path),
        target: "_blank",
        rel: "noopener noreferrer",
        ...{ class: "sidebar-link sidebar-title" },
    });
    /** @type {__VLS_StyleScopedClasses['sidebar-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['sidebar-title']} */ ;
    if (__VLS_ctx.menuItem.icon && layoutState.value.svgIcon == 'stroke-svg') {
        let __VLS_18;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
            // @ts-ignore
            icon: (__VLS_ctx.menuItem.icon), svgClass: "stroke-icon", type: "stroke",
        }));
        const __VLS_20 = __VLS_19({
            icon: (__VLS_ctx.menuItem.icon),
            svgClass: "stroke-icon",
            type: "stroke",
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    }
    if (__VLS_ctx.menuItem.icon && layoutState.value.svgIcon == 'fill-svg') {
        let __VLS_23;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
            // @ts-ignore
            icon: (__VLS_ctx.menuItem.icon), svgClass: "fill-icon", type: "fill",
        }));
        const __VLS_25 = __VLS_24({
            icon: (__VLS_ctx.menuItem.icon),
            svgClass: "fill-icon",
            type: "fill",
        }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "lan-3" },
    });
    /** @type {__VLS_StyleScopedClasses['lan-3']} */ ;
    (__VLS_ctx.$t(__VLS_ctx.menuItem.title));
}
if (__VLS_ctx.menuItem?.children) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "sidebar-submenu" },
        ...{ style: ({ display: __VLS_ctx.menuItem.active ? 'block' : 'none' }) },
    });
    /** @type {__VLS_StyleScopedClasses['sidebar-submenu']} */ ;
    const __VLS_28 = __VLS_tryAsConstant((__VLS_ctx.menuItem?.children));
    for (const [childItem, index] of __VLS_vFor(__VLS_nonNull(__VLS_28))) {
        let __VLS_29;
        /** @ts-ignore @type { | typeof __VLS_components.NavMenu} */
        NavMenu;
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
            // @ts-ignore
            key: (index), menuItem: (childItem),
        }));
        const __VLS_31 = __VLS_30({
            key: (index),
            menuItem: (childItem),
        }, ...__VLS_functionalComponentArgsRest(__VLS_30));
        // @ts-ignore
        [menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, layoutState, layoutState, $t,];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
import { defineProps, } from 'vue';
