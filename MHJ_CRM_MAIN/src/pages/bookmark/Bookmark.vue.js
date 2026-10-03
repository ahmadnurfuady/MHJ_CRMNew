import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useBookmark } from '@/store/bookmark';
const BookmarkSidebar = defineAsyncComponent(() => import('@/module/bookmark/BookmarkSidebar.vue'));
const BookmarkModal = defineAsyncComponent(() => import('@/module/bookmark/BookmarkModal.vue'));
const BookmarkDetails = defineAsyncComponent(() => import('@/module/bookmark/BookmarkDetails.vue'));
const bookmarkStore = useBookmark();
const { bookmarkState } = storeToRefs(bookmarkStore);
const { toggleListView } = bookmarkStore;
function closeModal() {
    bookmarkState.value.isBookmarkModalOpen = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-wrap bookmark-wrap" },
});
/** @type {__VLS_StyleScopedClasses['email-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row main-bookmark" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['main-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.BookmarkSidebar} */
BookmarkSidebar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 col-md-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-right-aside bookmark-tabcontent" },
});
/** @type {__VLS_StyleScopedClasses['email-right-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-tabcontent']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card email-body radius-left" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['email-body']} */ ;
/** @type {__VLS_StyleScopedClasses['radius-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "ps-0" },
});
/** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade active show" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card mb-0" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header d-flex" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "mb-0 f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
(__VLS_ctx.bookmarkState.activeTab ? __VLS_ctx.bookmarkState.activeTab.title : '');
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.toggleListView(false));
            // @ts-ignore
            [bookmarkState, bookmarkState, toggleListView,];
        } },
    ...{ class: "grid-bookmark-view" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['grid-bookmark-view']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    type: ('grid'),
}));
const __VLS_7 = __VLS_6({
    type: ('grid'),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.toggleListView(true));
            // @ts-ignore
            [toggleListView,];
        } },
    ...{ class: "list-layout-view" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['list-layout-view']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    type: ('list'),
}));
const __VLS_12 = __VLS_11({
    type: ('list'),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body pb-0" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.BookmarkDetails} */
BookmarkDetails;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
if (__VLS_ctx.bookmarkState.isBookmarkModalOpen) {
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.BookmarkModal} */
    BookmarkModal;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        ...{ 'onCloseModal': {} },
        modalOpen: (__VLS_ctx.bookmarkState.isBookmarkModalOpen),
        modalTitle: ('Edit Bookmark'),
    }));
    const __VLS_22 = __VLS_21({
        ...{ 'onCloseModal': {} },
        modalOpen: (__VLS_ctx.bookmarkState.isBookmarkModalOpen),
        modalTitle: ('Edit Bookmark'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_25;
    const __VLS_26 = {
        /** @type {typeof __VLS_25.closeModal} */
        onCloseModal: (...[$event]) => {
            if (!(__VLS_ctx.bookmarkState.isBookmarkModalOpen))
                throw 0;
            return (__VLS_ctx.closeModal());
            // @ts-ignore
            [bookmarkState, bookmarkState, closeModal,];
        },
    };
    var __VLS_23;
    var __VLS_24;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
