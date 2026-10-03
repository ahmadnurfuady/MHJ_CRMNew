import { reactive, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { getImages } from '@/utils/index';
import { user } from '@/core/data/user';
import { useBookmark } from '@/store/bookmark';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const BookmarkTagModal = defineAsyncComponent(() => import('@/module/bookmark/BookmarkTagModal.vue'));
const bookmarkStore = useBookmark();
const { bookmarkState } = storeToRefs(bookmarkStore);
const { handleTab } = bookmarkStore;
const userDetails = user;
const state = reactive({
    filterOpen: false,
    isTagModalOpen: false,
});
function toggleFilter() {
    state.filterOpen = !state.filterOpen;
}
function openModal() {
    bookmarkState.value.isBookmarkModalOpen = true;
}
function openTagModal() {
    state.isTagModalOpen = !state.isTagModalOpen;
}
function closeModal() {
    state.isTagModalOpen = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleFilter();
            // @ts-ignore
            [toggleFilter,];
        } },
    ...{ class: "btn btn-primary md-sidebar-toggle" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar-aside job-left-aside" },
    ...{ class: ({ open: __VLS_ctx.state.filterOpen }) },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['job-left-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-left-aside" },
});
/** @type {__VLS_StyleScopedClasses['email-left-aside']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardBodyClass: ('custom-scrollbar'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('custom-scrollbar'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-app-sidebar left-bookmark" },
});
/** @type {__VLS_StyleScopedClasses['email-app-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['left-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "media-size-email" },
});
/** @type {__VLS_StyleScopedClasses['media-size-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "rounded-circle" },
    src: (__VLS_ctx.getImages(__VLS_ctx.userDetails.userProfile)),
    alt: (__VLS_ctx.userDetails.name),
});
/** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
(__VLS_ctx.userDetails.name);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.userDetails.userEmail);
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav main-menu custom-scrollbar" },
    role: "tablist",
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['main-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openModal();
            // @ts-ignore
            [state, getImages, userDetails, userDetails, userDetails, userDetails, openModal,];
        } },
    ...{ class: "button-primary btn-block btn-mail w-100" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['button-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-mail']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    type: ('bookmark'),
    ...{ class: ('me-2') },
}));
const __VLS_8 = __VLS_7({
    type: ('bookmark'),
    ...{ class: ('me-2') },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "main-title" },
});
/** @type {__VLS_StyleScopedClasses['main-title']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.bookmarkState.bookmarkTabsList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (item.id),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTab(item);
                // @ts-ignore
                [bookmarkState, handleTab,];
            } },
        href: "#",
        ...{ class: ({ active: item.value == __VLS_ctx.bookmarkState.activeTab.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "title" },
    });
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (item.title);
    // @ts-ignore
    [bookmarkState,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "main-title" },
});
/** @type {__VLS_StyleScopedClasses['main-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "pull-right" },
});
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openTagModal();
            // @ts-ignore
            [openTagModal,];
        } },
    href: "#",
});
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    type: ('plus-circle'),
}));
const __VLS_13 = __VLS_12({
    type: ('plus-circle'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
for (const [tag] of __VLS_vFor((__VLS_ctx.bookmarkState.bookmarkTagsList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (tag.value),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTab(tag);
                // @ts-ignore
                [bookmarkState, handleTab,];
            } },
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "title" },
    });
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (tag.label);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_16;
/** @ts-ignore @type {typeof __VLS_components.BookmarkTagModal} */
BookmarkTagModal;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.state.isTagModalOpen),
}));
const __VLS_18 = __VLS_17({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.state.isTagModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_21;
const __VLS_22 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [state, closeModal,];
        } });
var __VLS_19;
var __VLS_20;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
