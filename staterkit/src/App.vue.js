import { defineAsyncComponent, onMounted, onBeforeUnmount, ref } from "vue";
import { RouterView } from "vue-router";
const Loader = defineAsyncComponent(() => import("@/components/layout/loader/Loader.vue"));
const loaderHide = ref(false);
let loaderTimer = null;
onMounted(() => {
    loaderTimer = window.setTimeout(() => {
        loaderHide.value = true;
        loaderTimer = null;
    }, 2500);
});
onBeforeUnmount(() => {
    if (loaderTimer) {
        clearTimeout(loaderTimer);
    }
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(loaderHide, {});
if (!loaderHide.value) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Loader} */
    Loader;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    }));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.RouterView} */
RouterView;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
// @ts-ignore
}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[loaderHide,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
