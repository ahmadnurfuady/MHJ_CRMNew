import { computed } from 'vue';
import { useLayout } from '@/store/layout';
import { storeToRefs } from 'pinia';
const store = useLayout();
const { layoutState } = storeToRefs(store);
const { setTheme } = store;
const mixLayout = computed(() => layoutState.value.theme);
function customizeMixLayout(val) {
    setTheme(val);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid customizer-mix" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['customizer-mix']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.customizeMixLayout('light');
            // @ts-ignore
            [customizeMixLayout,];
        } },
    ...{ class: "color-layout" },
    ...{ class: ({ active: __VLS_ctx.mixLayout === 'light' }) },
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header bg-light" },
});
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "body" },
});
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-light sidebar" },
});
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-light body" },
});
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.customizeMixLayout('dark-sidebar');
            // @ts-ignore
            [customizeMixLayout, mixLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "dark-sidebar",
    ...{ class: ({ active: __VLS_ctx.mixLayout === 'dark-sidebar' }) },
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header bg-light" },
});
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "body" },
});
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-dark sidebar" },
});
/** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-light body" },
});
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.customizeMixLayout('dark-only');
            // @ts-ignore
            [customizeMixLayout, mixLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "dark-only",
    ...{ class: ({ active: __VLS_ctx.mixLayout === 'dark-only' }) },
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header bg-dark" },
});
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "body" },
});
/** @type {__VLS_StyleScopedClasses['body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-dark sidebar" },
});
/** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "bg-dark body" },
});
/** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['body']} */ ;
// @ts-ignore
[mixLayout,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
