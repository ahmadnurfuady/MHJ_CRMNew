import { ref, watch } from "vue";
import { useWindowScroll } from "@vueuse/core";
const show = ref(false);
const { y } = useWindowScroll();
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
watch(y, (pos) => {
    show.value = pos > 300;
}, { immediate: true });
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(show, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tap-top" },
    ...{ style: ({ display: show.value ? 'block' : 'none' }) },
});
/** @type {__VLS_StyleScopedClasses['tap-top']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...{ 'onClick': {} }, type: "chevrons-up",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    type: "chevrons-up",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.click} */
    onClick: (scrollToTop),
};
void __VLS_6;
var __VLS_3;
var __VLS_4;
// @ts-ignore
[show,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
