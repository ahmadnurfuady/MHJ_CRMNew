import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { language } from '@/core/data/language';
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
const data = language;
const active = ref(false);
const dropdownRef = ref(null);
const selectedLanguage = ref({
    language: 'English',
    text: 'EN',
    icon: 'flag-icon-us',
});
function selectLanguage(language) {
    active.value = false;
    i18n.locale.value = language.language;
    selectedLanguage.value = language;
}
function openDropDown() {
    active.value = !active.value;
}
onClickOutside(dropdownRef, () => {
    active.value = false;
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "translate_wrapper" },
    ...{ class: ({ active: __VLS_ctx.active }) },
    ref: "dropdownRef",
});
/** @type {__VLS_StyleScopedClasses['translate_wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "current_lang" },
});
/** @type {__VLS_StyleScopedClasses['current_lang']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openDropDown();
            // @ts-ignore
            [active, openDropDown,];
        } },
    ...{ class: "lang" },
});
/** @type {__VLS_StyleScopedClasses['lang']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "lang-txt" },
});
/** @type {__VLS_StyleScopedClasses['lang-txt']} */ ;
(__VLS_ctx.selectedLanguage.text);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "more_lang" },
    ...{ class: ({ active: __VLS_ctx.active }) },
});
/** @type {__VLS_StyleScopedClasses['more_lang']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
for (const [language, index] of __VLS_vFor((__VLS_ctx.data))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectLanguage(language);
                // @ts-ignore
                [active, selectedLanguage, data, selectLanguage,];
            } },
        ...{ class: "lang selected" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['lang']} */ ;
    /** @type {__VLS_StyleScopedClasses['selected']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "flag-icon" },
        ...{ class: (language.icon) },
    });
    /** @type {__VLS_StyleScopedClasses['flag-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "lang-txt box-col-none" },
    });
    /** @type {__VLS_StyleScopedClasses['lang-txt']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-none']} */ ;
    (language.language);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
