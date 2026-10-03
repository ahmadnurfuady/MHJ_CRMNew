import { useLayout } from '@/store/layout';
const layoutStore = useLayout();
function handleColorLayout(layoutType, primary, secondary) {
    layoutStore.addStyle(primary, secondary);
    layoutStore.setLayout({ class: layoutType });
    // Removed window.location.reload()
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
    ...{ class: "layout-grid customizer-color" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['customizer-color']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('light', '#006666', '#FF6150'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-1",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('light', '#1D5B79', '#A16B56'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-2",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('light', '#4A55A2', '#F0A360'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-3",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('light', '#167A93', '#eeb82f'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-4",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('light', '#423964', '#FFA47A'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-5",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('light', '#4b2a4b', '#FE7088'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-6",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "layout-grid customizer-color dark" },
});
/** @type {__VLS_StyleScopedClasses['layout-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['customizer-color']} */ ;
/** @type {__VLS_StyleScopedClasses['dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('dark-only', '#006666', '#6b7024'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-1",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('dark-only', '#1D5B79', '#583729'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-2",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('dark-only', '#4A55A2', '#FFA47A'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-3",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('dark-only', '#167A93', '#F0A360'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-4",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('dark-only', '#423964', '#468B97'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-5",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleColorLayout('dark-only', '#4b2a4b', '#4b2a4b'));
            // @ts-ignore
            [handleColorLayout,];
        } },
    ...{ class: "color-layout" },
    'data-attr': "color-6",
});
/** @type {__VLS_StyleScopedClasses['color-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
