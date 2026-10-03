import { defineAsyncComponent } from 'vue';
const FileManagerSidebar = defineAsyncComponent(() => import('@/module/fileManager/FileManagerSidebar.vue'));
const Files = defineAsyncComponent(() => import('@/module/fileManager/Files.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row main-file-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['main-file-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 box-col-6 pe-0 xl-4" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-0']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-4']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FileManagerSidebar} */
FileManagerSidebar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-9 col-md-12 box-col-12 xl-66" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-66']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.Files} */
Files;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
