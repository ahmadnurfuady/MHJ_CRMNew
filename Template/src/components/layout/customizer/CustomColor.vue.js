import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { defaultAppearance, fontOptions } from '@/config/appearance';
import { useLayout } from '@/store/layout';
const store = useLayout();
const { layoutState } = storeToRefs(store);
const primary = ref(layoutState.value.primaryColor);
const secondary = ref(layoutState.value.secondaryColor);
const fontFamily = ref(layoutState.value.fontFamily);
function reloadWithUpdatedCharts() {
    window.location.reload();
}
function applyAppearance() {
    store.setAppearance({
        primary: primary.value,
        secondary: secondary.value,
        fontFamily: fontFamily.value,
    });
    reloadWithUpdatedCharts();
}
function restoreDefaults() {
    primary.value = defaultAppearance.primaryColor;
    secondary.value = defaultAppearance.secondaryColor;
    fontFamily.value = defaultAppearance.fontFamily;
    store.resetAppearance();
    reloadWithUpdatedCharts();
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "appearance-settings" },
});
/** @type {__VLS_StyleScopedClasses['appearance-settings']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "appearance-field" },
});
/** @type {__VLS_StyleScopedClasses['appearance-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "primaryColor",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "color-control" },
});
/** @type {__VLS_StyleScopedClasses['color-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "primaryColor",
    type: "color",
    'aria-label': "Primary color",
});
(__VLS_ctx.primary);
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
(__VLS_ctx.primary.toUpperCase());
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "appearance-field" },
});
/** @type {__VLS_StyleScopedClasses['appearance-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "secondaryColor",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "color-control" },
});
/** @type {__VLS_StyleScopedClasses['color-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "secondaryColor",
    type: "color",
    'aria-label': "Secondary color",
});
(__VLS_ctx.secondary);
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
(__VLS_ctx.secondary.toUpperCase());
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "appearance-field" },
});
/** @type {__VLS_StyleScopedClasses['appearance-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "fontFamily",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    id: "fontFamily",
    value: (__VLS_ctx.fontFamily),
    ...{ class: "form-select" },
});
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
for (const [font] of __VLS_vFor((__VLS_ctx.fontOptions))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        key: (font.value),
        value: (font.value),
    });
    (font.label);
    // @ts-ignore
    [primary, primary, secondary, secondary, fontFamily, fontOptions,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({
    ...{ class: "text-muted" },
});
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "appearance-actions" },
});
/** @type {__VLS_StyleScopedClasses['appearance-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.applyAppearance) },
    type: "button",
    ...{ class: "btn btn-primary" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.restoreDefaults) },
    type: "button",
    ...{ class: "btn btn-outline-primary" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
// @ts-ignore
[applyAppearance, restoreDefaults,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
