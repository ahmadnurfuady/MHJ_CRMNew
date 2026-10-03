import { defineAsyncComponent } from 'vue';
import { topProjectWidgets } from '@/core/data/dashboard/project';
const TopProjectWidgets = defineAsyncComponent(() => import('@/module/dashboard/project/TopProjectWidgets.vue'));
const ProjectStatistics = defineAsyncComponent(() => import('@/module/dashboard/project/ProjectStatistics.vue'));
const TodaysWork = defineAsyncComponent(() => import('@/module/dashboard/project/TodaysWork.vue'));
const ProjectLists = defineAsyncComponent(() => import('@/module/dashboard/project/ProjectLists.vue'));
const AllProjectsTable = defineAsyncComponent(() => import('@/module/dashboard/project/AllProjectsTable.vue'));
const TopClientLists = defineAsyncComponent(() => import('@/module/dashboard/project/TopClientLists.vue'));
const TimeLine = defineAsyncComponent(() => import('@/module/dashboard/project/TimeLine.vue'));
const AddProject = defineAsyncComponent(() => import('@/module/dashboard/project/AddProject.vue'));
const ActivityLog = defineAsyncComponent(() => import('@/module/dashboard/project/ActivityLog.vue'));
const Messages = defineAsyncComponent(() => import('@/module/dashboard/project/Messages.vue'));
const ProjectIdeasCard = defineAsyncComponent(() => import('@/module/dashboard/project/ProjectIdeasCard.vue'));
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
    ...{ class: "row size-column" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['size-column']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [items, index] of __VLS_vFor((__VLS_ctx.topProjectWidgets))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-3 col-sm-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.TopProjectWidgets} */
    TopProjectWidgets;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        item: (items),
    }));
    const __VLS_2 = __VLS_1({
        item: (items),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [topProjectWidgets,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.ProjectStatistics} */
ProjectStatistics;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.TodaysWork} */
TodaysWork;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.ProjectLists} */
ProjectLists;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-12']} */ ;
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.AllProjectsTable} */
AllProjectsTable;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-5 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.TopClientLists} */
TopClientLists;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-7 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.TimeLine} */
TimeLine;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 d-xxl-block d-none activity-group box-col-none" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['d-xxl-block']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
/** @type {__VLS_StyleScopedClasses['activity-group']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-none']} */ ;
let __VLS_35;
/** @ts-ignore @type {typeof __VLS_components.AddProject} */
AddProject;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_40;
/** @ts-ignore @type {typeof __VLS_components.ActivityLog} */
ActivityLog;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({}));
const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_45;
/** @ts-ignore @type {typeof __VLS_components.Messages} */
Messages;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({}));
const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_50;
/** @ts-ignore @type {typeof __VLS_components.ProjectIdeasCard} */
ProjectIdeasCard;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({}));
const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
