import { defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
import { getImages } from '@/utils';
import { routes } from '@/router/routes';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const projectSummary = projectDetails.projectSummary.summary;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('main-summary'),
    cardType: ('classic'),
    headerTitle: (__VLS_ctx.projectSummary.title),
    sortDescription: (__VLS_ctx.projectSummary.sortDescription),
    cardBodyClass: ('pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Project.ProjectList),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('main-summary'),
    cardType: ('classic'),
    headerTitle: (__VLS_ctx.projectSummary.title),
    sortDescription: (__VLS_ctx.projectSummary.sortDescription),
    cardBodyClass: ('pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Project.ProjectList),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-8 xl-50 order-md-0 order-1" },
});
/** @type {__VLS_StyleScopedClasses['col-md-8']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
/** @type {__VLS_StyleScopedClasses['order-md-0']} */ ;
/** @type {__VLS_StyleScopedClasses['order-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "summary-section" },
});
/** @type {__VLS_StyleScopedClasses['summary-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "p-b-20" },
});
/** @type {__VLS_StyleScopedClasses['p-b-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.projectSummary.description);
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "common-space p-t-10" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
/** @type {__VLS_StyleScopedClasses['p-t-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-1" },
});
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.projectSummary.creationDate);
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-1" },
});
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.projectSummary.dueDate);
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-1" },
});
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "badge badge-light-primary" },
});
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
/** @type {__VLS_StyleScopedClasses['badge-light-primary']} */ ;
(__VLS_ctx.projectSummary.priority);
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-1" },
});
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "badge badge-light-success" },
});
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
/** @type {__VLS_StyleScopedClasses['badge-light-success']} */ ;
(__VLS_ctx.projectSummary.status);
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "p-t-10 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['p-t-10']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "attachment-file common-flex" },
});
/** @type {__VLS_StyleScopedClasses['attachment-file']} */ ;
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
if (__VLS_ctx.projectSummary.resource.fileType == 'PDF') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (`${__VLS_ctx.getImages('project/files/pdf.png')}`),
        alt: "pdf",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-block" },
});
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
(__VLS_ctx.projectSummary.resource.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
(__VLS_ctx.projectSummary.resource.fileSize);
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    to: (__VLS_ctx.projectSummary.resource.file),
    download: true,
}));
const __VLS_9 = __VLS_8({
    to: (__VLS_ctx.projectSummary.resource.file),
    download: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-download f-light" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-download']} */ ;
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
// @ts-ignore
[projectSummary, projectSummary, projectSummary, projectSummary, projectSummary, projectSummary, projectSummary, projectSummary, projectSummary, projectSummary, projectSummary, routes, getImages,];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 xl-50" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "summary-chart-box" },
});
/** @type {__VLS_StyleScopedClasses['summary-chart-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "summary-chart",
});
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
apexchart;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    height: "220",
    series: (__VLS_ctx.projectSummary.chartSeries),
    options: (__VLS_ctx.projectSummary.chartDetails),
}));
const __VLS_15 = __VLS_14({
    height: "220",
    series: (__VLS_ctx.projectSummary.chartSeries),
    options: (__VLS_ctx.projectSummary.chartDetails),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
// @ts-ignore
[projectSummary, projectSummary,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
