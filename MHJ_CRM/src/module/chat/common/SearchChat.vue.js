import { ref, defineAsyncComponent } from 'vue';
import { useChat } from '@/store/chat';
const ChatContacts = defineAsyncComponent(() => import('@/module/chat/common/ChatContacts.vue'));
const RecentChats = defineAsyncComponent(() => import('@/module/chat/common/RecentChats.vue'));
const store = useChat();
const { setSearchUsers } = store;
const search = ref('');
function setSearchUser() {
    if (search.value !== '')
        setSearchUsers(search.value);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-xl-4 col-md-5 box-col-5" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-5']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "left-sidebar-wrapper card" },
});
/** @type {__VLS_StyleScopedClasses['left-sidebar-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "left-sidebar-chat" },
});
/** @type {__VLS_StyleScopedClasses['left-sidebar-chat']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "search-icon text-gray" },
    type: "search",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "search-icon text-gray" },
    type: "search",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['search-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_ctx.setSearchUser) },
    ...{ class: "form-control" },
    type: "text",
    placeholder: "Search here..",
    value: (__VLS_ctx.search),
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "advance-options" },
});
/** @type {__VLS_StyleScopedClasses['advance-options']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav border-tab" },
    id: "chat-options-tab",
    role: "tablist",
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "nav-link active" },
    id: "chats-tab",
    'data-bs-toggle': "tab",
    href: "#chats",
    role: "tab",
    'aria-controls': "chats",
    'aria-selected': "true",
});
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "nav-link" },
    id: "contacts-tab",
    'data-bs-toggle': "tab",
    href: "#contacts",
    role: "tab",
    'aria-controls': "contacts",
    'aria-selected': "false",
});
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "chat-options-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.RecentChats} */
RecentChats;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    search: (__VLS_ctx.search),
}));
const __VLS_7 = __VLS_6({
    search: (__VLS_ctx.search),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.ChatContacts} */
ChatContacts;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[setSearchUser, search, search,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
