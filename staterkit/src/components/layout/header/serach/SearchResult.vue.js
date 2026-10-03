import { defineAsyncComponent } from "vue";
const __VLS_props = defineProps();
const __VLS_emit = defineEmits(["clearSearch"]);
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
if (__VLS_ctx.menuItems.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.searchResult
                ? 'Typeahead-menu is-open custom-scrollbar'
                : 'Typeahead-menu') },
    });
    const __VLS_0 = __VLS_tryAsConstant((__VLS_ctx.menuItems.slice(0, 8)));
    for (const [item, index] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
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
            let __VLS_1;
            /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
            SvgIcon;
            // @ts-ignore
            const __VLS_2 = __VLS_asFunctionalComponent1(__VLS_1, new __VLS_1({
                // @ts-ignore
                icon: (item.iconForDisplay || item.icon), type: "stroke",
            }));
            const __VLS_3 = __VLS_2({
                icon: (item.iconForDisplay || item.icon),
                type: "stroke",
            }, ...__VLS_functionalComponentArgsRest(__VLS_2));
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
        let __VLS_6;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            // @ts-ignore
            to: ({ path: item.path }), ...{ class: "realname" },
        }));
        const __VLS_8 = __VLS_7({
            to: ({ path: item.path }),
            ...{ class: "realname" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        /** @type {__VLS_StyleScopedClasses['realname']} */ ;
        const { default: __VLS_11 } = __VLS_nonNull(__VLS_9.slots);
        (item.title);
        // @ts-ignore
        [menuItems, menuItems, searchResult,];
        var __VLS_9;
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
import { defineProps, defineEmits, } from 'vue';
