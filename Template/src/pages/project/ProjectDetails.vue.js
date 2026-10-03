import { ref, defineAsyncComponent } from 'vue';
const ProjectDetailsTab = defineAsyncComponent(() => import('@/module/project/projectDetails/ProjectDetailsTab.vue'));
const ProjectDetailsHeader = defineAsyncComponent(() => import('@/module/project/projectDetails/ProjectDetailsHeader.vue'));
const ProjectSummary = defineAsyncComponent(() => import('@/module/project/projectDetails/projectSummary/ProjectSummary.vue'));
const ProjectStatus = defineAsyncComponent(() => import('@/module/project/projectDetails/projectStatus/ProjectStatus.vue'));
const ProjectFinance = defineAsyncComponent(() => import('@/module/project/projectDetails/projectFinance/ProjectFinance.vue'));
const ProjectTeam = defineAsyncComponent(() => import('@/module/project/projectDetails/ProjectTeam.vue'));
const Attachments = defineAsyncComponent(() => import('@/module/project/projectDetails/Attachments.vue'));
const Activity = defineAsyncComponent(() => import('@/module/project/projectDetails/Activity.vue'));
const activeTab = ref('');
function handleActiveTab(value) {
    if (value) {
        activeTab.value = value;
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid main-scope-project" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['main-scope-project']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row scope-bottom-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['scope-bottom-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-2 recent-xl-23 col-xl-3 box-col-3" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-2']} */ ;
/** @type {__VLS_StyleScopedClasses['recent-xl-23']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-3']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.ProjectDetailsTab} */
ProjectDetailsTab;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onActiveTab': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onActiveTab': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.activeTab} */
    onActiveTab: (...[$event]) => {
        return (__VLS_ctx.handleActiveTab($event));
        // @ts-ignore
        [handleActiveTab,];
    },
};
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-10 recent-xl-77 col-xl-9 box-col-9" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['recent-xl-77']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.ProjectDetailsHeader} */
ProjectDetailsHeader;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.activeTab === 'summary') {
    let __VLS_12;
    /** @ts-ignore @type { | typeof __VLS_components.ProjectSummary} */
    ProjectSummary;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
if (__VLS_ctx.activeTab === 'status') {
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.ProjectStatus} */
    ProjectStatus;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
}
if (__VLS_ctx.activeTab === 'finance') {
    let __VLS_22;
    /** @ts-ignore @type { | typeof __VLS_components.ProjectFinance} */
    ProjectFinance;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
}
if (__VLS_ctx.activeTab === 'team') {
    let __VLS_27;
    /** @ts-ignore @type { | typeof __VLS_components.ProjectTeam} */
    ProjectTeam;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
}
if (__VLS_ctx.activeTab === 'attachment') {
    let __VLS_32;
    /** @ts-ignore @type { | typeof __VLS_components.Attachments} */
    Attachments;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
}
if (__VLS_ctx.activeTab === 'activity') {
    let __VLS_37;
    /** @ts-ignore @type { | typeof __VLS_components.Activity} */
    Activity;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
}
// @ts-ignore
[activeTab, activeTab, activeTab, activeTab, activeTab, activeTab,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
