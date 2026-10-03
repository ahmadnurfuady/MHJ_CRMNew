import { ref } from "vue";
import { defineAsyncComponent } from "vue";
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const fullScreen = ref(false);
function toggleFullscreen() {
    if (fullScreen.value) {
        fullScreen.value = false;
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen();
        fullScreen.value = true;
    }
}
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...{ 'onClick': {} }, icon: "full-screen",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    icon: "full-screen",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.click} */
    onClick: (toggleFullscreen),
};
void __VLS_6;
var __VLS_3;
var __VLS_4;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
