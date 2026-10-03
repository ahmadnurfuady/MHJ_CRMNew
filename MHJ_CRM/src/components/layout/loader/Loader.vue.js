import { ref, onMounted, onBeforeUnmount } from 'vue';
const loaderHide = ref(false);
let timeoutId = null;
onMounted(() => {
    if (timeoutId)
        clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        loaderHide.value = true;
        timeoutId = null;
    }, 1000);
});
onBeforeUnmount(() => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "loader-wrapper" },
    ...{ class: ({ 'd-none': __VLS_ctx.loaderHide }) },
});
/** @type {__VLS_StyleScopedClasses['loader-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "loader" },
});
/** @type {__VLS_StyleScopedClasses['loader']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "loader4" },
});
/** @type {__VLS_StyleScopedClasses['loader4']} */ ;
// @ts-ignore
[loaderHide,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
