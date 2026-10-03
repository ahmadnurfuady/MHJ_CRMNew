import { computed, ref } from 'vue';
import { emoji } from '@/core/data/emoji';
const show = ref(false);
const emit = defineEmits(['selectEmoji']);
const categories = computed(() => {
    return Object.keys(emoji);
});
const emojiByCategory = computed(() => {
    const result = {};
    categories.value.forEach((category) => {
        result[category] = Object.values(emoji[category]);
    });
    return result;
});
function handleEmojiClick(emoji) {
    show.value = false;
    emit('selectEmoji', emoji);
}
function toggleEmojiPicker() {
    show.value = !show.value;
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (__VLS_ctx.toggleEmojiPicker) },
    ...{ class: "open-emoji" },
});
/** @type {__VLS_StyleScopedClasses['open-emoji']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "second-btn uk-button" },
});
/** @type {__VLS_StyleScopedClasses['second-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['uk-button']} */ ;
if (__VLS_ctx.show) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "emoji_picker custom-scrollbar shadow" },
    });
    /** @type {__VLS_StyleScopedClasses['emoji_picker']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "picker_container" },
    });
    /** @type {__VLS_StyleScopedClasses['picker_container']} */ ;
    for (const [category] of __VLS_vFor((__VLS_ctx.categories))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "category p-0" },
            key: (`category_${category}`),
        });
        /** @type {__VLS_StyleScopedClasses['category']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (category);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "emojis_container" },
        });
        /** @type {__VLS_StyleScopedClasses['emojis_container']} */ ;
        for (const [emojiItem, index] of __VLS_vFor((__VLS_ctx.emojiByCategory[category]))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.show))
                            throw 0;
                        return (__VLS_ctx.handleEmojiClick(emojiItem));
                        // @ts-ignore
                        [toggleEmojiPicker, show, categories, emojiByCategory, handleEmojiClick,];
                    } },
                key: (`emoji_${index}`),
            });
            (emojiItem);
            // @ts-ignore
            [];
        }
        // @ts-ignore
        [];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
