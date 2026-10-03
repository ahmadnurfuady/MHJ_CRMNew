import { ref, defineAsyncComponent } from 'vue';
import { useChat } from '@/store/chat';
const EmojiChat = defineAsyncComponent(() => import('@/module/chat/common/EmojiChat.vue'));
const store = useChat();
const { addChat } = store;
const text = ref('');
function appendEmoji(emoji) {
    text.value += emoji;
}
function addChats() {
    if (!text.value)
        return;
    addChat(text.value);
    text.value = '';
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (__VLS_ctx.addChats) },
    ...{ class: "msger-inputarea clearfix" },
});
/** @type {__VLS_StyleScopedClasses['msger-inputarea']} */ ;
/** @type {__VLS_StyleScopedClasses['clearfix']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropdown-form dropdown-toggle" },
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['dropdown-form']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-plus" },
});
/** @type {__VLS_StyleScopedClasses['icon-plus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "chat-icon dropdown-menu dropdown-menu-start" },
});
/** @type {__VLS_StyleScopedClasses['chat-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropdown-item mb-2" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "feather" },
    type: "camera",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "feather" },
    type: "camera",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['feather']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropdown-item" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ class: "feather" },
    type: "paperclip",
}));
const __VLS_7 = __VLS_6({
    ...{ class: "feather" },
    type: "paperclip",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['feather']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_ctx.addChats) },
    ...{ class: "msger-input two uk-textarea" },
    placeholder: "Type Message here..",
});
(__VLS_ctx.text);
/** @type {__VLS_StyleScopedClasses['msger-input']} */ ;
/** @type {__VLS_StyleScopedClasses['two']} */ ;
/** @type {__VLS_StyleScopedClasses['uk-textarea']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.EmojiChat} */
EmojiChat;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    ...{ 'onSelectEmoji': {} },
}));
const __VLS_12 = __VLS_11({
    ...{ 'onSelectEmoji': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
const __VLS_16 = ({ selectEmoji: {} },
    { onSelectEmoji: (__VLS_ctx.appendEmoji) });
var __VLS_13;
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    type: "submit",
    ...{ class: "msger-send-btn" },
});
/** @type {__VLS_StyleScopedClasses['msger-send-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-location-arrow" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-location-arrow']} */ ;
// @ts-ignore
[addChats, addChats, text, appendEmoji,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
