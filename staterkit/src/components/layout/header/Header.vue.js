import { defineAsyncComponent } from "vue";
import { getImages } from "@/utils/index";
const SearchBar = defineAsyncComponent(() => import("@/components/layout/header/serach/SearchBar.vue"));
const SearchInput = defineAsyncComponent(() => import("@/components/layout/header/SearchInput.vue"));
const Language = defineAsyncComponent(() => import("@/components/layout/header/Language.vue"));
const Logo = defineAsyncComponent(() => import("@/components/layout/header/Logo.vue"));
const FullScreen = defineAsyncComponent(() => import("@/components/layout/header/FullScreen.vue"));
const BookmarkSearch = defineAsyncComponent(() => import("@/components/layout/header/BookmarkSearch.vue"));
const Mode = defineAsyncComponent(() => import("@/components/layout/header/Mode.vue"));
const NotificationBox = defineAsyncComponent(() => import("@/components/layout/header/NotificationBox.vue"));
const Profile = defineAsyncComponent(() => import("@/components/layout/header/Profile.vue"));
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-wrapper row m-0" },
});
/** @type {__VLS_StyleScopedClasses['header-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Logo} */
Logo;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
// @ts-ignore
}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0" },
});
/** @type {__VLS_StyleScopedClasses['left-header']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "toggle-sidebar" },
    href: "javascript:void(0)",
});
/** @type {__VLS_StyleScopedClasses['toggle-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "iconly-Category icli" },
});
/** @type {__VLS_StyleScopedClasses['iconly-Category']} */ ;
/** @type {__VLS_StyleScopedClasses['icli']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center gap-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "mt-0" },
    src: (__VLS_unwrap(getImages, {})('hand.gif')),
    alt: "hand-gif",
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "welcome-content d-xl-block d-none" },
});
/** @type {__VLS_StyleScopedClasses['welcome-content']} */ ;
/** @type {__VLS_StyleScopedClasses['d-xl-block']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-truncate col-12" },
});
/** @type {__VLS_StyleScopedClasses['text-truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto" },
});
/** @type {__VLS_StyleScopedClasses['nav-right']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xxl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-8']} */ ;
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
/** @type {__VLS_StyleScopedClasses['right-header']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav-menus" },
});
/** @type {__VLS_StyleScopedClasses['nav-menus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "d-md-block d-none" },
});
/** @type {__VLS_StyleScopedClasses['d-md-block']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.SearchBar} */
SearchBar;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
// @ts-ignore
}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "d-md-none d-block" },
});
/** @type {__VLS_StyleScopedClasses['d-md-none']} */ ;
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.SearchInput} */
SearchInput;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
// @ts-ignore
}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "language-nav" },
});
/** @type {__VLS_StyleScopedClasses['language-nav']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.Language} */
Language;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
// @ts-ignore
}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "fullscreen-body" },
});
/** @type {__VLS_StyleScopedClasses['fullscreen-body']} */ ;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.FullScreen} */
FullScreen;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
// @ts-ignore
}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "onhover-dropdown bookmark-star" },
});
/** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-star']} */ ;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.BookmarkSearch} */
BookmarkSearch;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
// @ts-ignore
}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
let __VLS_30;
/** @ts-ignore @type { | typeof __VLS_components.Mode} */
Mode;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
// @ts-ignore
}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "onhover-dropdown notification-down" },
});
/** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-down']} */ ;
let __VLS_35;
/** @ts-ignore @type { | typeof __VLS_components.NotificationBox} */
NotificationBox;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
// @ts-ignore
}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "profile-nav onhover-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['profile-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
let __VLS_40;
/** @ts-ignore @type { | typeof __VLS_components.Profile} */
Profile;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
// @ts-ignore
}));
const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
// @ts-ignore
[getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
