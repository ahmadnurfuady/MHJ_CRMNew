import { ref, watch, defineAsyncComponent } from "vue";
import { useSearch } from "@/store/searchBar";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
const SearchResult = defineAsyncComponent(() => import("@/components/layout/header/serach/SearchResult.vue"));
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const store = useSearch();
const terms = ref("");
const { searchData: menuItems, show } = storeToRefs(store);
const { searchTerm, closeSearch } = store;
const searchResult = ref(false);
const searchResultEmpty = ref(false);
const route = useRoute();
const searchTerms = () => searchTerm(terms.value);
const removeFix = () => {
    searchResult.value = false;
    terms.value = "";
    closeSearch();
};
watch([menuItems, terms], () => {
    if (terms.value) {
        searchResult.value = true;
    }
    else {
        removeFix();
    }
    searchResultEmpty.value = menuItems.value.length === 0;
}, { deep: true });
watch(() => route.fullPath, () => {
    removeFix();
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
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
    ...{ class: "input-icon" },
});
/** @type {__VLS_StyleScopedClasses['input-icon']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    icon: "search-header",
}));
const __VLS_2 = __VLS_1({
    icon: "search-header",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_unwrap(searchTerms, {})) },
    ...{ class: "w-100" },
    type: "text",
    value: (__VLS_unwrap(terms, {})),
    placeholder: "Search anything here",
});
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "Typeahead Typeahead--twitterUsers" },
});
/** @type {__VLS_StyleScopedClasses['Typeahead']} */ ;
/** @type {__VLS_StyleScopedClasses['Typeahead--twitterUsers']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "u-posRelative" },
});
/** @type {__VLS_StyleScopedClasses['u-posRelative']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.SearchResult} */
SearchResult;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    // @ts-ignore
    ...{ 'onClearSearch': {} }, menuItems: (__VLS_unwrap(menuItems, {})), searchResult: (__VLS_unwrap(searchResult, {})), searchResultEmpty: (__VLS_unwrap(searchResultEmpty, {})),
}));
const __VLS_7 = __VLS_6({
    ...{ 'onClearSearch': {} },
    menuItems: (__VLS_unwrap(menuItems, {})),
    searchResult: (__VLS_unwrap(searchResult, {})),
    searchResultEmpty: (__VLS_unwrap(searchResultEmpty, {})),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
const __VLS_11 = {
    /** @type {typeof __VLS_10.clearSearch} */
    onClearSearch: (__VLS_unwrap(removeFix, {})),
};
void __VLS_11;
var __VLS_8;
var __VLS_9;
// @ts-ignore
[searchTerms, terms, menuItems, searchResult, searchResultEmpty, removeFix,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
