import { computed } from "vue";
import { storeToRefs } from "pinia";
import { getImages } from "@/utils/index";
import { useChat } from "@/store/chat";
const props = defineProps();
const { currentChat } = storeToRefs(useChat());
const store = useChat();
const { chatState } = storeToRefs(store);
const { setActiveUser } = store;
const activeUsers = computed(() => chatState.value.users.filter((user) => user.active === "active" && user.id !== 0));
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
    id: "chats",
    role: "tabpanel",
    'aria-labelledby': "chats-tab",
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-top" },
});
/** @type {__VLS_StyleScopedClasses['header-top']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn badge-light-primary f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['badge-light-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
if (__VLS_ctx.search == '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "chats-user custom-scrollbar" },
    });
    /** @type {__VLS_StyleScopedClasses['chats-user']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    for (const [item, index] of __VLS_vFor((__VLS_ctx.activeUsers))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.search == ''))
                        return;
                    __VLS_ctx.setActiveUser(item);
                    // @ts-ignore
                    [search, activeUsers, setActiveUser,];
                } },
            ...{ class: "common-space" },
            ...{ class: ({ active: item.name == __VLS_ctx.currentChat.name }) },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
        /** @type {__VLS_StyleScopedClasses['active']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "chat-time" },
        });
        /** @type {__VLS_StyleScopedClasses['chat-time']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "active-profile" },
        });
        /** @type {__VLS_StyleScopedClasses['active-profile']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid rounded-circle" },
            src: (__VLS_ctx.getImages(item.image)),
            alt: "user",
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "status" },
            ...{ class: (item.statusClass) },
        });
        /** @type {__VLS_StyleScopedClasses['status']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (item.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (item.status);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (item.time);
        if (item.badge) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "badge badge-success" },
            });
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-success']} */ ;
            (item.badge);
        }
        // @ts-ignore
        [currentChat, getImages,];
    }
}
if (__VLS_ctx.search != '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "chats-user custom-scrollbar" },
    });
    /** @type {__VLS_StyleScopedClasses['chats-user']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    for (const [item, index] of __VLS_vFor((__VLS_ctx.chatState.searchUser))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "common-space custom-scrollbar" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
        /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "chat-time" },
        });
        /** @type {__VLS_StyleScopedClasses['chat-time']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "active-profile" },
        });
        /** @type {__VLS_StyleScopedClasses['active-profile']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid rounded-circle" },
            src: (__VLS_ctx.getImages(item.image)),
            alt: "user",
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "status" },
            ...{ class: (item.statusClass) },
        });
        /** @type {__VLS_StyleScopedClasses['status']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (item.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (item.status);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (item.time);
        if (item.badge) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "badge badge-light-success" },
            });
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-light-success']} */ ;
            (item.badge);
        }
        // @ts-ignore
        [search, getImages, chatState,];
    }
    if (!__VLS_ctx.chatState.searchUser.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "search-not-found chat-search text-center" },
        });
        /** @type {__VLS_StyleScopedClasses['search-not-found']} */ ;
        /** @type {__VLS_StyleScopedClasses['chat-search']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-100 img-fluid m-r-20 rounded-circle update_img_0" },
            src: (__VLS_ctx.getImages('/mood-sad.png')),
            alt: "emoji",
        });
        /** @type {__VLS_StyleScopedClasses['img-100']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['update_img_0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    }
}
// @ts-ignore
[getImages, chatState,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
