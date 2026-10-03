import { ref, defineAsyncComponent, onMounted } from "vue";
import { dayFilterOptions } from "@/core/data/common";
import { salesOverviewCharts } from "@/core/data/seller";
const Card = defineAsyncComponent(() => import("@/components/shared/card/Card.vue"));
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const cardToggleOption = ref(dayFilterOptions);
const activeTab = ref("earning");
const overviewDetails = ref(salesOverviewCharts);
const chart = ref();
onMounted(() => {
    handleTab(activeTab.value);
});
function handleTab(value) {
    activeTab.value = value;
    const details = overviewDetails.value.find((details) => details.value === value);
    if (details) {
        chart.value = {
            series: details.chartSeries,
            options: details.chartDetails,
        };
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
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('sales-report'),
    headerTitle: ('Sales Overview'),
    padding: (false),
    dropdownType: ('simple'),
    options: (__VLS_ctx.cardToggleOption),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('sales-report'),
    headerTitle: ('Sales Overview'),
    padding: (false),
    dropdownType: ('simple'),
    options: (__VLS_ctx.cardToggleOption),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "social-tabs" },
});
/** @type {__VLS_StyleScopedClasses['social-tabs']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "nav nav-pills custom-scrollbar" },
    id: "social-pills-tab",
    role: "tablist",
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-pills']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [details, index] of __VLS_vFor((__VLS_ctx.overviewDetails))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTab(details.value);
                // @ts-ignore
                [cardToggleOption, overviewDetails, handleTab,];
            } },
        ...{ class: ([
                `social-box bg-7-${details.color}`,
                { active: __VLS_ctx.activeTab === details.value },
            ]) },
        href: "#",
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "frame-image" },
    });
    /** @type {__VLS_StyleScopedClasses['frame-image']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`outline-20-${details.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`bg-20-${details.color}`) },
    });
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: (details.icon),
    }));
    const __VLS_9 = __VLS_8({
        icon: (details.icon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (details.title);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "social-pills-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.chart) {
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart | typeof __VLS_components.apexchart | typeof __VLS_components.Apexchart} */
    apexchart;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        height: (__VLS_ctx.chart.options.chart?.height),
        series: (__VLS_ctx.chart.series),
        options: (__VLS_ctx.chart.options),
    }));
    const __VLS_14 = __VLS_13({
        height: (__VLS_ctx.chart.options.chart?.height),
        series: (__VLS_ctx.chart.series),
        options: (__VLS_ctx.chart.options),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
// @ts-ignore
[chart, chart, chart, chart,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
