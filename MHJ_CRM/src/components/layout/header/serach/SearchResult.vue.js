import { defineAsyncComponent } from 'vue';
const __VLS_props = defineProps();
const __VLS_emit = defineEmits(['clearSearch']);
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.menuItems.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.searchResult ? 'Typeahead-menu is-open custom-scrollbar' : 'Typeahead-menu') },
    });
    for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems.slice(0, 8)))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (index),
            ...{ class: "ProfileCard u-cf" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard']} */ ;
        /** @type {__VLS_StyleScopedClasses['u-cf']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-avatar header-search" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-avatar']} */ ;
        /** @type {__VLS_StyleScopedClasses['header-search']} */ ;
        if (item.iconForDisplay || item.icon) {
            let __VLS_0;
            /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
            SvgIcon;
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
                icon: (item.iconForDisplay || item.icon),
                type: "stroke",
            }));
            const __VLS_2 = __VLS_1({
                icon: (item.iconForDisplay || item.icon),
                type: "stroke",
            }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-details" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-realName" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-realName']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        let __VLS_5;
        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
        routerLink;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            to: ({ path: item.path }),
            ...{ class: "realname" },
        }));
        const __VLS_7 = __VLS_6({
            to: ({ path: item.path }),
            ...{ class: "realname" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        /** @type {__VLS_StyleScopedClasses['realname']} */ ;
        const { default: __VLS_10 } = __VLS_8.slots;
        (item.title);
        // @ts-ignore
        [menuItems, menuItems, searchResult,];
        var __VLS_8;
        // @ts-ignore
        [];
    }
}
if (__VLS_ctx.searchResultEmpty) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "Typeahead-menu is-open" },
    });
    /** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-open']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "tt-dataset tt-dataset-0" },
    });
    /** @type {__VLS_StyleScopedClasses['tt-dataset']} */ ;
    /** @type {__VLS_StyleScopedClasses['tt-dataset-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "EmptyMessage" },
    });
    /** @type {__VLS_StyleScopedClasses['EmptyMessage']} */ ;
}
// @ts-ignore
[searchResultEmpty,];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
