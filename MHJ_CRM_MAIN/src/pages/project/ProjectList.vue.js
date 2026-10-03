import { ref, defineAsyncComponent } from 'vue';
import { projects } from '@/core/data/project';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const ProjectCostPerformance = defineAsyncComponent(() => import('@/module/project/projectList/ProjectCostPerformance.vue'));
const ProjectRating = defineAsyncComponent(() => import('@/module/project/projectList/ProjectRating.vue'));
const ProjectProfessionalTeam = defineAsyncComponent(() => import('@/module/project/projectList/ProjectProfessionalTeam.vue'));
const TotalProjects = defineAsyncComponent(() => import('@/module/project/projectList/TotalProjects.vue'));
const ProjectStatusTab = defineAsyncComponent(() => import('@/module/project/projectList/ProjectStatusTab.vue'));
const ProjectDetails = defineAsyncComponent(() => import('@/module/project/projectList/ProjectDetails.vue'));
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
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row project-cards" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['project-cards']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12 project-list" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['project-list']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Projects Overview'),
    headerClass: ('m-0'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Projects Overview'),
    headerClass: ('m-0'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.ProjectCostPerformance} */
ProjectCostPerformance;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.ProjectRating} */
ProjectRating;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.ProjectProfessionalTeam} */
ProjectProfessionalTeam;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_21;
/** @ts-ignore @type { | typeof __VLS_components.TotalProjects} */
TotalProjects;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.ProjectStatusTab} */
ProjectStatusTab;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    ...{ 'onActiveTabValue': {} },
}));
const __VLS_28 = __VLS_27({
    ...{ 'onActiveTabValue': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
let __VLS_31;
const __VLS_32 = {
    /** @type {typeof __VLS_31.activeTabValue} */
    onActiveTabValue: (...[$event]) => {
        return (__VLS_ctx.handleActiveTab($event));
        // @ts-ignore
        [handleActiveTab,];
    },
};
var __VLS_29;
var __VLS_30;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_33;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    cardBodyClass: ('projects-wrapper'),
}));
const __VLS_35 = __VLS_34({
    cardBodyClass: ('projects-wrapper'),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_38 } = __VLS_36.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "top-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-4" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-4']} */ ;
for (const [project, index] of __VLS_vFor((__VLS_ctx.projects))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    if (__VLS_ctx.activeTab == 'all' || project.status == __VLS_ctx.activeTab) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-xxl-3 col-md-6 col-ed-4 box-col-6" },
        });
        /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-ed-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
        let __VLS_39;
        /** @ts-ignore @type { | typeof __VLS_components.ProjectDetails} */
        ProjectDetails;
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
            project: (project),
        }));
        const __VLS_41 = __VLS_40({
            project: (project),
        }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    }
    // @ts-ignore
    [projects, activeTab, activeTab,];
}
// @ts-ignore
[];
var __VLS_36;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
