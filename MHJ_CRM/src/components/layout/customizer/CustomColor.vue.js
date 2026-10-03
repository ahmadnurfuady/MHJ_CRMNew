import { useLayout } from '@/store/layout';
import { onMounted, ref } from 'vue';
const store = useLayout();
const { setColorScheme } = store;
const primary = ref('#006666');
const secondary = ref('#FE6A49');
function customizeColor() {
    const primaryColor = localStorage.getItem('primary_color') || '#006666';
    const secondaryColor = localStorage.getItem('secondary_color') || '#FE6A49';
    setColorScheme({ primary: primary.value, secondary: secondary.value });
    primary.value = primaryColor;
    secondary.value = secondaryColor;
}
function resetColor() {
    primary.value = '#006666';
    secondary.value = '#FE6A49';
    setColorScheme({ primary: primary.value, secondary: secondary.value });
    localStorage.getItem(primary.value);
    localStorage.getItem(secondary.value);
}
onMounted(() => {
    const primaryColor = localStorage.getItem('primary_color');
    const secondaryColor = localStorage.getItem('secondary_color');
    primary.value = primaryColor ? primaryColor : '#006666';
    secondary.value = secondaryColor ? secondaryColor : '#FE6A49';
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid unlimited-color-layout" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['unlimited-color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "ColorPicker1",
    type: "color",
    name: "Background",
});
(__VLS_ctx.primary);
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "ColorPicker2",
    type: "color",
    name: "Background",
});
(__VLS_ctx.secondary);
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.customizeColor) },
    type: "button",
    ...{ class: "color-apply-btn btn btn-primary color-apply-btn me-2" },
});
/** @type {__VLS_StyleScopedClasses['color-apply-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['color-apply-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.resetColor();
            // @ts-ignore
            [primary, secondary, customizeColor, resetColor,];
        } },
    type: "button",
    ...{ class: "color-apply-btn btn btn-primary color-apply-btn" },
});
/** @type {__VLS_StyleScopedClasses['color-apply-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['color-apply-btn']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
