import { defineAsyncComponent } from 'vue';
import { useMenu } from '@/store/menu';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/store/layout';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
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
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: ([
            {
                'sidebar-main-title': __VLS_ctx.menuItem?.type == 'headtitle',
                'sidebar-list': __VLS_ctx.menuItem?.icon,
            },
            __VLS_ctx.menuItem?.title && __VLS_ctx.menuState.pinedArray.includes(__VLS_ctx.menuItem.title) ? 'pined' : '',
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
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.menuItem?.type != 'headtitle' && __VLS_ctx.menuItem?.icon))
                    return;
                __VLS_ctx.getPined(__VLS_ctx.menuItem);
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
if (__VLS_ctx.menuItem && __VLS_ctx.menuItem?.title) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onClick': {} },
        to: (__VLS_ctx.menuItem?.children ? '' : __VLS_ctx.menuItem?.path || ''),
        ...{ class: ([
                {
                    active: (__VLS_ctx.menuItem.path && __VLS_ctx.isActive(__VLS_ctx.menuItem.path)) || __VLS_ctx.menuItem.active,
                },
                __VLS_ctx.menuItem.icon ? 'sidebar-link sidebar-title ' : 'submenu-title',
            ]) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        to: (__VLS_ctx.menuItem?.children ? '' : __VLS_ctx.menuItem?.path || ''),
        ...{ class: ([
                {
                    active: (__VLS_ctx.menuItem.path && __VLS_ctx.isActive(__VLS_ctx.menuItem.path)) || __VLS_ctx.menuItem.active,
                },
                __VLS_ctx.menuItem.icon ? 'sidebar-link sidebar-title ' : 'submenu-title',
            ]) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!(__VLS_ctx.menuItem && __VLS_ctx.menuItem?.title))
                    return;
                __VLS_ctx.onMenuClick(__VLS_ctx.menuItem);
                // @ts-ignore
                [menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, menuItem, isActive, onMenuClick,];
            } });
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    const { default: __VLS_7 } = __VLS_3.slots;
    if (__VLS_ctx.menuItem.icon && __VLS_ctx.layoutState.svgIcon == 'stroke-svg') {
        let __VLS_8;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            icon: (__VLS_ctx.menuItem.icon),
            svgClass: "stroke-icon",
            type: "stroke",
        }));
        const __VLS_10 = __VLS_9({
            icon: (__VLS_ctx.menuItem.icon),
            svgClass: "stroke-icon",
            type: "stroke",
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    if (__VLS_ctx.menuItem.icon && __VLS_ctx.layoutState.svgIcon == 'fill-svg') {
        let __VLS_13;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
            icon: (__VLS_ctx.menuItem.icon),
            svgClass: "fill-icon",
            type: "fill",
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
if (__VLS_ctx.menuItem?.children) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "sidebar-submenu" },
        ...{ style: ({ display: __VLS_ctx.menuItem.active ? 'block' : 'none' }) },
    });
    /** @type {__VLS_StyleScopedClasses['sidebar-submenu']} */ ;
    for (const [childItem, index] of __VLS_vFor((__VLS_ctx.menuItem?.children))) {
        let __VLS_18;
        /** @ts-ignore @type {typeof __VLS_components.NavMenu} */
        NavMenu;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
            key: (index),
            menuItem: (childItem),
        }));
        const __VLS_20 = __VLS_19({
            key: (index),
            menuItem: (childItem),
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        // @ts-ignore
        [menuItem, menuItem, menuItem,];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
