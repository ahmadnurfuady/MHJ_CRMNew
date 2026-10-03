import { defineAsyncComponent } from 'vue';
const TodoSidebar = defineAsyncComponent(() => import('@/module/todo/TodoSidebar.vue'));
const AddTask = defineAsyncComponent(() => import('@/module/todo/AddTask.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid email-wrap bookmark-wrap todo-wrap" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['email-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.TodoSidebar} */
TodoSidebar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.AddTask} */
AddTask;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
