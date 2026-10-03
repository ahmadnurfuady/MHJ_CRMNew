import { defineAsyncComponent } from 'vue';
import { routes } from '@/router/routes';
import { projectDetailsHeader } from '@/core/data/project';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-project-header common-space m-b-20" },
});
/** @type {__VLS_StyleScopedClasses['common-project-header']} */ ;
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
/** @type {__VLS_StyleScopedClasses['m-b-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "pe-sm-3" },
});
/** @type {__VLS_StyleScopedClasses['pe-sm-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
(__VLS_ctx.projectDetailsHeader.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "badge badge-light-warning ms-2" },
});
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
/** @type {__VLS_StyleScopedClasses['badge-light-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
(__VLS_ctx.projectDetailsHeader.projectStatus);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
(__VLS_ctx.projectDetailsHeader.description);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-align" },
});
/** @type {__VLS_StyleScopedClasses['common-align']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customers" },
});
/** @type {__VLS_StyleScopedClasses['customers']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
GroupItem;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    items: (__VLS_ctx.projectDetailsHeader.customers),
    imgClass: ('img-40'),
}));
const __VLS_2 = __VLS_1({
    items: (__VLS_ctx.projectDetailsHeader.customers),
    imgClass: ('img-40'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
(__VLS_ctx.projectDetailsHeader.allTask);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-align" },
});
/** @type {__VLS_StyleScopedClasses['common-align']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "common-align" },
});
/** @type {__VLS_StyleScopedClasses['common-align']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "pe-1" },
});
/** @type {__VLS_StyleScopedClasses['pe-1']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    icon: ('vector-calendar'),
    type: "default",
}));
const __VLS_7 = __VLS_6({
    icon: ('vector-calendar'),
    type: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.projectDetailsHeader.createdDate);
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    icon: ('vector-calendar'),
    type: "default",
}));
const __VLS_12 = __VLS_11({
    icon: ('vector-calendar'),
    type: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.projectDetailsHeader.dueDate);
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    ...{ class: "btn btn-primary" },
    href: "#",
    to: (__VLS_ctx.routes.Project.ProjectCreate),
}));
const __VLS_17 = __VLS_16({
    ...{ class: "btn btn-primary" },
    href: "#",
    to: (__VLS_ctx.routes.Project.ProjectCreate),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
const { default: __VLS_20 } = __VLS_18.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
// @ts-ignore
[projectDetailsHeader, projectDetailsHeader, projectDetailsHeader, projectDetailsHeader, projectDetailsHeader, projectDetailsHeader, projectDetailsHeader, routes,];
var __VLS_18;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
