import { defineAsyncComponent } from 'vue';
import { projectTeam } from '@/core/data/project';
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (`main-card-box bg-10-${__VLS_ctx.projectTeam.cardColor} h-100`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-20 common-space" },
});
/** @type {__VLS_StyleScopedClasses['p-20']} */ ;
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
(__VLS_ctx.projectTeam.totalMember);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
(__VLS_ctx.projectTeam.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (`project-right-icon bg-10-${__VLS_ctx.projectTeam.cardColor}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: (`fa-solid fa-${__VLS_ctx.projectTeam.icon} fa-fade txt-${__VLS_ctx.projectTeam.cardColor}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-20" },
});
/** @type {__VLS_StyleScopedClasses['p-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "mb-sm-3 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-sm-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
GroupItem;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    items: (__VLS_ctx.projectTeam.teamMembers),
    ...{ class: ('common-f-start') },
    imgClass: ('common-circle'),
}));
const __VLS_2 = __VLS_1({
    items: (__VLS_ctx.projectTeam.teamMembers),
    ...{ class: ('common-f-start') },
    imgClass: ('common-circle'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
// @ts-ignore
[projectTeam, projectTeam, projectTeam, projectTeam, projectTeam, projectTeam, projectTeam,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
