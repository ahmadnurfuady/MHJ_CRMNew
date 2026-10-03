import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { language } from "@/core/data/language";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const data = language;
const active = ref(false);
const dropdownRef = ref(null);
const selectedLanguage = ref({
    language: "English",
    text: "EN",
    icon: "flag-icon-us",
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
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(selectedLanguage, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "translate_wrapper" },
    ...{ class: ({ active: __VLS_unwrap(active, {}) }) },
    ref: "dropdownRef",
});
/** @type {__VLS_StyleScopedClasses['translate_wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "current_lang" },
});
/** @type {__VLS_StyleScopedClasses['current_lang']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: // @ts-ignore
        (...[$event]) => {
            void $event;
            return (openDropDown());
            // @ts-ignore
            [active,];
        } },
    ...{ class: "lang" },
});
/** @type {__VLS_StyleScopedClasses['lang']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "lang-txt" },
});
/** @type {__VLS_StyleScopedClasses['lang-txt']} */ ;
(selectedLanguage.value.text);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "more_lang" },
    ...{ class: ({ active: __VLS_unwrap(active, {}) }) },
});
/** @type {__VLS_StyleScopedClasses['more_lang']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(data, {})));
for (const [language, index] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: // @ts-ignore
            (...[$event]) => {
                void $event;
                return (selectLanguage(language));
                // @ts-ignore
                [active, selectedLanguage, data,];
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
