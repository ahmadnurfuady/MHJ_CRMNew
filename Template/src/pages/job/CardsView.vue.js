import { defineAsyncComponent, ref } from 'vue';
import { jobCards } from '@/core/data/jobs/jobSearch';
const JobFilter = defineAsyncComponent(() => import('@/module/job/JobFilter.vue'));
const JobCard = defineAsyncComponent(() => import('@/module/job/JobCard.vue'));
const CommonPagination = defineAsyncComponent(() => import('@/module/bonusUi/pagination/CommonPagination.vue'));
const cards = ref(jobCards);
const filteredCards = ref([]);
function handlePagination(pagination) {
    if (pagination) {
        filteredCards.value = cards.value.slice(pagination.startIndex, pagination.endIndex + 1);
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
    ...{ class: "container-fluid card-view-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['card-view-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 xl-40 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-40']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.JobFilter} */
JobFilter;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-9 xl-60 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-60']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [details, index] of __VLS_vFor((__VLS_ctx.filteredCards))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-6 xl-100" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
    let __VLS_5;
    /** @ts-ignore @type {typeof __VLS_components.JobCard} */
    JobCard;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        details: (details),
    }));
    const __VLS_7 = __VLS_6({
        details: (details),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    // @ts-ignore
    [filteredCards,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "job-pagination" },
});
/** @type {__VLS_StyleScopedClasses['job-pagination']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.CommonPagination} */
CommonPagination;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    ...{ 'onPagination': {} },
    color: ('primary'),
    totalPages: (__VLS_ctx.jobCards.length),
    pageSize: (12),
}));
const __VLS_12 = __VLS_11({
    ...{ 'onPagination': {} },
    color: ('primary'),
    totalPages: (__VLS_ctx.jobCards.length),
    pageSize: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
const __VLS_16 = ({ pagination: {} },
    { onPagination: (...[$event]) => {
            __VLS_ctx.handlePagination($event);
            // @ts-ignore
            [jobCards, handlePagination,];
        } });
var __VLS_13;
var __VLS_14;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
