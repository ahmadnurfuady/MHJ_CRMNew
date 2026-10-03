import { useLayout } from '@/store/layout';
import { getImages } from '@/utils/index';
import { storeToRefs } from 'pinia';
const store = useLayout();
const { layoutState } = storeToRefs(store);
function openCustomizerSetting(val) {
    layoutState.value.customizer = val;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openCustomizerSetting('settings'));
            // @ts-ignore
            [openCustomizerSetting,];
        } },
    ...{ class: "nav-link" },
    ...{ class: ({ 'active show': __VLS_ctx.layoutState.customizer == 'settings' }) },
    id: "c-pills-home-tab",
    'data-bs-toggle': "pill",
    href: "#c-pills-home",
    role: "tab",
    'aria-controls': "c-pills-home",
    'aria-selected': "false",
});
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "settings" },
});
/** @type {__VLS_StyleScopedClasses['settings']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('customizer/1.png')),
    alt: "nft",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
// @ts-ignore
[layoutState, getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
