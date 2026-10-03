import { defineAsyncComponent, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearch } from '@/store/searchBar';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const filtered = ref(false);
const terms = ref('');
const store = useSearch();
const { searchData: menuItems } = storeToRefs(store);
const { searchTerm, toggleSearch } = store;
const searchResult = ref(false);
const searchResultEmpty = ref(false);
watch(() => [menuItems.value, terms.value], () => {
    if (terms.value) {
        addFix();
    }
    else {
        removeFix();
    }
    searchResultEmpty.value = !menuItems.value.length;
});
function searchTerms() {
    searchTerm(terms.value);
}
function addFix() {
    searchResult.value = true;
}
function removeFix() {
    searchResult.value = false;
    terms.value = '';
}
function collapseFilter() {
    filtered.value = !filtered.value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
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
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    icon: "search-header",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    icon: "search-header",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.collapseFilter();
            // @ts-ignore
            [collapseFilter,];
        } });
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "searchInput",
    ...{ class: ({ show: __VLS_ctx.filtered }) },
});
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_ctx.searchTerms) },
    placeholder: "Search anything here",
    type: "text",
    name: "q",
    ...{ class: ({ open: __VLS_ctx.filtered }) },
    value: (__VLS_ctx.terms),
});
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group search-form" },
    ...{ class: ({ open: __VLS_ctx.filtered }) },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['search-form']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
if (__VLS_ctx.menuItems.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.searchResult ? 'Typeahead-menu is-open custom-scrollbar' : 'Typeahead-menu ') },
    });
    for (const [menuItem, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
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
        let __VLS_7;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
            icon: (menuItem.icon || menuItem.iconForDisplay),
            type: "fill",
        }));
        const __VLS_9 = __VLS_8({
            icon: (menuItem.icon || menuItem.iconForDisplay),
            type: "fill",
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-details" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-realName" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-realName']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.menuItems.length))
                        return;
                    __VLS_ctx.removeFix();
                    // @ts-ignore
                    [filtered, filtered, filtered, searchTerms, terms, menuItems, menuItems, searchResult, removeFix,];
                } },
        });
        let __VLS_12;
        /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
        routerLink;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
            to: ({ path: menuItem.path }),
            ...{ class: "realname" },
        }));
        const __VLS_14 = __VLS_13({
            to: ({ path: menuItem.path }),
            ...{ class: "realname" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        /** @type {__VLS_StyleScopedClasses['realname']} */ ;
        const { default: __VLS_17 } = __VLS_15.slots;
        (menuItem.title);
        // @ts-ignore
        [];
        var __VLS_15;
        // @ts-ignore
        [];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_ctx.searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu') },
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
