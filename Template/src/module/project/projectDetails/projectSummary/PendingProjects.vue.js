import { projectDetails } from '@/core/data/project';
import { ref, onMounted, defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Project Name', fieldValue: 'projectName', sort: true },
        { title: 'Project Head', fieldValue: 'projectHeadName', sort: true },
        { title: 'Priority', fieldValue: 'priority', sort: true },
        { title: 'Due Date', fieldValue: 'dueDate', sort: true },
        { title: 'Status', fieldValue: 'status', sort: true },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = projectDetails.projectSummary.pendingProject.map((project) => {
        const formattedProjects = { ...project };
        formattedProjects.projectHeadName = `<div class="common-flex align-items-center">
                            <img class="img-fluid lead-img"  src="${getImages(project.projectHeadProfile)}"   alt="user">
                            <div><a class="c-light" href="#">${project.projectHeadName}</a>
                              <p class="mb-0 c-o-light">${project.projectHeadEmail}</p>
                            </div>
                          </div>`;
        const statusHTML = `<button class="btn button-light-${project.color} txt-${project.color}"> 
                                ${project.status}
                              </button>`;
        formattedProjects.status = statusHTML;
        return formattedProjects;
    });
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    sortDescription: ('Total 28 projects pending'),
    cardType: ('classic'),
    headerTitle: ('Projects Pending'),
    cardBodyClass: ('px-0 pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Project.ProjectList),
}));
const __VLS_2 = __VLS_1({
    sortDescription: ('Total 28 projects pending'),
    cardType: ('classic'),
    headerTitle: ('Projects Pending'),
    cardBodyClass: ('px-0 pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Project.ProjectList),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scrollbar project-pending-table" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['project-pending-table']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
}));
const __VLS_9 = __VLS_8({
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[routes, tableConfig,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
