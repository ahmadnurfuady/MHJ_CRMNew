import { ref, onMounted, defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
import { routes } from '@/router/routes';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const recentActivity = ref(projectDetails.projectSummary.recentActivity);
const activeTab = ref(recentActivity.value.activities[0].date);
const filteredActivity = ref([]);
onMounted(() => {
    filterActivity(activeTab.value);
});
function handleTab(activity) {
    activeTab.value = activity.date;
    filterActivity(activity.date);
}
function filterActivity(date) {
    const currentDate = recentActivity.value.activities.find((activity) => activity.date === date);
    if (currentDate) {
        filteredActivity.value = currentDate.activity;
    }
}
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
    cardType: ('classic'),
    headerTitle: (__VLS_ctx.recentActivity.title),
    sortDescription: (__VLS_ctx.recentActivity.date),
    cardBodyClass: ('activity-wrapper pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.App.Task),
}));
const __VLS_2 = __VLS_1({
    cardType: ('classic'),
    headerTitle: (__VLS_ctx.recentActivity.title),
    sortDescription: (__VLS_ctx.recentActivity.date),
    cardBodyClass: ('activity-wrapper pt-0'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.App.Task),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "schedule-wrapper nav nav-tabs" },
});
/** @type {__VLS_StyleScopedClasses['schedule-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
for (const [activities, index] of __VLS_vFor((__VLS_ctx.recentActivity.activities))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.handleTab(activities));
                // @ts-ignore
                [recentActivity, recentActivity, recentActivity, routes, handleTab,];
            } },
        ...{ class: "nav-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.activeTab == activities.date }) },
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (activities.day);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (activities.date);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "myTabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade active show" },
    id: "sun",
    role: "tabpanel",
    'aria-labelledby': "sun-tab",
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "activity-update" },
});
/** @type {__VLS_StyleScopedClasses['activity-update']} */ ;
for (const [activity, index] of __VLS_vFor((__VLS_ctx.filteredActivity))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "d-flex align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (activity.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    (activity.customerName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    (activity.createdTime);
    let __VLS_7;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: ('clock'),
    }));
    const __VLS_9 = __VLS_8({
        icon: ('clock'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (activity.time);
    // @ts-ignore
    [filteredActivity,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
