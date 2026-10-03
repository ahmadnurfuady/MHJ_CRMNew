import { defineAsyncComponent, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useSearch } from "@/store/searchBar";
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const filtered = ref(false);
const terms = ref("");
const store = useSearch();
const { searchData: menuItems } = storeToRefs(store);
const { searchTerm, toggleSearch } = store;
const searchResult = ref(false);
const searchResultEmpty = ref(false);
watch(() => [menuItems, terms], () => {
    if (terms.value) {
        addFix();
    }
    else {
        removeFix();
    }
    searchResultEmpty.value = !menuItems.value.length;
}, { deep: true });
function searchTerms() {
    searchTerm(terms.value);
}
function addFix() {
    searchResult.value = true;
}
function removeFix() {
    searchResult.value = false;
    terms.value = "";
}
function collapseFilter() {
    filtered.value = !filtered.value;
}
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(menuItems, {});
// @ts-ignore
__VLS_withDotValue(searchResult, {});
// @ts-ignore
__VLS_withDotValue(searchResultEmpty, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form search-form mb-0" },
});
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['search-form']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-show" },
});
/** @type {__VLS_StyleScopedClasses['input-show']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...{ 'onClick': {} }, icon: "search-header",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    icon: "search-header",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.click} */
    onClick: // @ts-ignore
    (...[$event]) => {
        void $event;
        return (collapseFilter());
    },
};
void __VLS_6;
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "searchInput",
    ...{ class: ({ show: __VLS_unwrap(filtered, {}) }) },
});
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (searchTerms) },
    placeholder: "Search anything here",
    type: "text",
    name: "q",
    ...{ class: ({ open: __VLS_unwrap(filtered, {}) }) },
    value: (__VLS_unwrap(terms, {})),
});
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group search-form" },
    ...{ class: ({ open: __VLS_unwrap(filtered, {}) }) },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['search-form']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
if (menuItems.value.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (searchResult.value
                ? 'Typeahead-menu is-open custom-scrollbar'
                : 'Typeahead-menu ') },
    });
    const __VLS_7 = __VLS_tryAsConstant((menuItems.value));
    for (const [menuItem, index] of __VLS_vFor(__VLS_nonNull(__VLS_7))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard u-cf" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard']} */ ;
        /** @type {__VLS_StyleScopedClasses['u-cf']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-avatar header-search" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-avatar']} */ ;
        /** @type {__VLS_StyleScopedClasses['header-search']} */ ;
        let __VLS_8;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            // @ts-ignore
            icon: (menuItem.icon || menuItem.iconForDisplay), type: "fill",
        }));
        const __VLS_10 = __VLS_9({
            icon: (menuItem.icon || menuItem.iconForDisplay),
            type: "fill",
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-details" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-realName" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-realName']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!(menuItems.value.length))
                        throw 0;
                    return (removeFix());
                    // @ts-ignore
                    [filtered, filtered, filtered, terms, menuItems, menuItems, searchResult,];
                } },
        });
        let __VLS_13;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
            // @ts-ignore
            to: ({ path: menuItem.path }), ...{ class: "realname" },
        }));
        const __VLS_15 = __VLS_14({
            to: ({ path: menuItem.path }),
            ...{ class: "realname" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        /** @type {__VLS_StyleScopedClasses['realname']} */ ;
        const { default: __VLS_18 } = __VLS_nonNull(__VLS_16.slots);
        (menuItem.title);
        // @ts-ignore
        [];
        var __VLS_16;
        // @ts-ignore
        [];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (searchResultEmpty.value ? 'Typeahead-menu is-open' : 'Typeahead-menu') },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tt-dataset tt-dataset-0" },
});
/** @type {__VLS_StyleScopedClasses['tt-dataset']} */ ;
/** @type {__VLS_StyleScopedClasses['tt-dataset-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "EmptyMessage" },
});
/** @type {__VLS_StyleScopedClasses['EmptyMessage']} */ ;
// @ts-ignore
[searchResultEmpty,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
