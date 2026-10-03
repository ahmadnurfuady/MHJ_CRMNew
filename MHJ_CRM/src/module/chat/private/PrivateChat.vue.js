import { defineAsyncComponent, ref, watch, nextTick, onMounted, onBeforeUnmount, } from "vue";
import { storeToRefs } from "pinia";
import { getImages } from "@/utils/index";
import { contactEdit } from "@/core/data/chat";
import { useChat } from "@/store/chat";
const AddChat = defineAsyncComponent(() => import("@/module/chat/common/AddChat.vue"));
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const { currentChat } = storeToRefs(useChat());
const chatContainer = ref(null);
let scrollTimer = null;
function scrollToBottom() {
    const el = chatContainer.value;
    if (el) {
        el.scrollTop = el.scrollHeight;
    }
}
onMounted(() => {
    scrollToBottom();
});
watch(() => currentChat.value?.chat?.messages?.length ?? 0, async () => {
    await nextTick();
    if (scrollTimer) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = window.setTimeout(() => {
        scrollToBottom();
        scrollTimer = null;
    }, 50);
});
onBeforeUnmount(() => {
    if (scrollTimer) {
        clearTimeout(scrollTimer);
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 col-xl-8 col-md-7 box-col-7" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-7']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-7']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card right-sidebar-chat" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['right-sidebar-chat']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "right-sidebar-title" },
});
/** @type {__VLS_StyleScopedClasses['right-sidebar-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chat-time-chat" },
});
/** @type {__VLS_StyleScopedClasses['chat-time-chat']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "active-profile" },
});
/** @type {__VLS_StyleScopedClasses['active-profile']} */ ;
if (__VLS_ctx.currentChat.image) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid rounded-circle" },
        src: (__VLS_ctx.getImages(__VLS_ctx.currentChat.image)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "status" },
    ...{ class: (__VLS_ctx.currentChat.statusClass) },
});
/** @type {__VLS_StyleScopedClasses['status']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.currentChat.name);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex gap-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "contact-edit chat-alert" },
});
/** @type {__VLS_StyleScopedClasses['contact-edit']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-alert']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: "spam",
}));
const __VLS_2 = __VLS_1({
    icon: "spam",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "contact-edit chat-alert" },
});
/** @type {__VLS_StyleScopedClasses['contact-edit']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-alert']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    icon: "menubar",
    role: "menu",
    dataBsToggle: "dropdown",
    'aria-expanded': "false",
}));
const __VLS_7 = __VLS_6({
    icon: "menubar",
    role: "menu",
    dataBsToggle: "dropdown",
    'aria-expanded': "false",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropdown-menu dropdown-menu-end" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
for (const [data, index] of __VLS_vFor((__VLS_ctx.contactEdit))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (data.title);
    // @ts-ignore
    [currentChat, currentChat, currentChat, currentChat, getImages, contactEdit,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "right-sidebar-Chats" },
});
/** @type {__VLS_StyleScopedClasses['right-sidebar-Chats']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "msger" },
});
/** @type {__VLS_StyleScopedClasses['msger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "msger-chat" },
    ref: "chatContainer",
});
/** @type {__VLS_StyleScopedClasses['msger-chat']} */ ;
for (const [chat, index] of __VLS_vFor((__VLS_ctx.currentChat.chat?.messages))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "msg" },
        key: (index),
        ...{ class: ([
                { clearfix: chat.sender == 0 },
                { 'right-msg': chat.sender != 0, 'left-msg': chat.sender == 0 },
            ]) },
    });
    /** @type {__VLS_StyleScopedClasses['msg']} */ ;
    /** @type {__VLS_StyleScopedClasses['clearfix']} */ ;
    /** @type {__VLS_StyleScopedClasses['right-msg']} */ ;
    /** @type {__VLS_StyleScopedClasses['left-msg']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "msg-img" },
    });
    /** @type {__VLS_StyleScopedClasses['msg-img']} */ ;
    if (chat.sender == 0) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "rounded-circle float-start chat-user-img img-30" },
            src: (__VLS_ctx.getImages(__VLS_ctx.currentChat.image || '')),
            alt: "images",
        });
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['float-start']} */ ;
        /** @type {__VLS_StyleScopedClasses['chat-user-img']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-30']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "msg-bubble" },
    });
    /** @type {__VLS_StyleScopedClasses['msg-bubble']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "msg-info" },
        ...{ class: ({ 'text-start': chat.sender == 0 }) },
    });
    /** @type {__VLS_StyleScopedClasses['msg-info']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-start']} */ ;
    if (chat.sender == 0) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "msg-info-name" },
        });
        /** @type {__VLS_StyleScopedClasses['msg-info-name']} */ ;
        (__VLS_ctx.currentChat.name);
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "msg-info-name" },
        });
        /** @type {__VLS_StyleScopedClasses['msg-info-name']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "msg-info-time" },
    });
    /** @type {__VLS_StyleScopedClasses['msg-info-time']} */ ;
    (chat.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "msg-text" },
    });
    /** @type {__VLS_StyleScopedClasses['msg-text']} */ ;
    (chat.text);
    // @ts-ignore
    [currentChat, currentChat, currentChat, getImages,];
}
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.AddChat} */
AddChat;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
