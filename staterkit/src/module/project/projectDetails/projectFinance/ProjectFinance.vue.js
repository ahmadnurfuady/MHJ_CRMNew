import { ref, defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
const ProjectExpenseChart = defineAsyncComponent(() => import('@/module/project/projectDetails/projectFinance/ProjectExpenseChart.vue'));
const BudgetDetails = defineAsyncComponent(() => import('@/module/project/projectDetails/projectFinance/BudgetDetails.vue'));
const BudgetDistribution = defineAsyncComponent(() => import('@/module/project/projectDetails/projectFinance/BudgetDistribution.vue'));
const ProjectBudget = defineAsyncComponent(() => import('@/module/project/projectDetails/projectFinance/ProjectBudget.vue'));
const expenseCharts = ref(projectDetails.finance.expenses);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [chart, index] of __VLS_vFor((__VLS_ctx.expenseCharts))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.expenseCharts.length % 2 !== 0 && index === __VLS_ctx.expenseCharts.length - 1
                ? 'col-md-4'
                : 'col-md-4 col-sm-6') },
        key: (index),
    });
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.ProjectExpenseChart} */
    ProjectExpenseChart;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        chart: (chart),
    }));
    const __VLS_2 = __VLS_1({
        chart: (chart),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [expenseCharts, expenseCharts, expenseCharts,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-8 col-xl-12 col-lg-8 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-8']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.BudgetDetails} */
BudgetDetails;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-xl-12 col-lg-4 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.BudgetDistribution} */
BudgetDistribution;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.ProjectBudget} */
ProjectBudget;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
