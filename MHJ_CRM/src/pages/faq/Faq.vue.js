import { defineAsyncComponent } from 'vue';
import { faqArticlesAndVideos, faqDetails, faqFeaturedTutorial } from '@/core/data/faq';
const FeatureCard = defineAsyncComponent(() => import('@/module/faq/FeatureCard.vue'));
const QuestionAnswer = defineAsyncComponent(() => import('@/module/faq/QuestionAnswer.vue'));
const SearchArticle = defineAsyncComponent(() => import('@/module/faq/SearchArticle.vue'));
const Navigation = defineAsyncComponent(() => import('@/module/faq/Navigation.vue'));
const LatestUpdates = defineAsyncComponent(() => import('@/module/faq/LatestUpdates.vue'));
const FeaturedTutorials = defineAsyncComponent(() => import('@/module/faq/FeaturedTutorials.vue'));
const LatestArticlesVideos = defineAsyncComponent(() => import('@/module/faq/LatestArticlesVideos.vue'));
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
    ...{ class: "faq-wrap" },
});
/** @type {__VLS_StyleScopedClasses['faq-wrap']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FeatureCard} */
FeatureCard;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    details: (__VLS_ctx.faqDetails),
}));
const __VLS_2 = __VLS_1({
    details: (__VLS_ctx.faqDetails),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-faq" },
});
/** @type {__VLS_StyleScopedClasses['header-faq']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row default-according style-1 faq-accordion" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['default-according']} */ ;
/** @type {__VLS_StyleScopedClasses['style-1']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-accordion']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-8 xl-60 col-lg-6 col-md-7" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-60']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-7']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.QuestionAnswer} */
QuestionAnswer;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 xl-40 col-lg-6 col-md-5" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-40']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.SearchArticle} */
SearchArticle;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.Navigation} */
Navigation;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.LatestUpdates} */
LatestUpdates;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.FeaturedTutorials} */
FeaturedTutorials;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    details: (__VLS_ctx.faqFeaturedTutorial),
    headerTitle: ('Featured Tutorials'),
}));
const __VLS_27 = __VLS_26({
    details: (__VLS_ctx.faqFeaturedTutorial),
    headerTitle: ('Featured Tutorials'),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.LatestArticlesVideos} */
LatestArticlesVideos;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    details: (__VLS_ctx.faqArticlesAndVideos),
    headerTitle: ('Latest Articles and Videos'),
    faqClass: ('faq-wrapper'),
}));
const __VLS_32 = __VLS_31({
    details: (__VLS_ctx.faqArticlesAndVideos),
    headerTitle: ('Latest Articles and Videos'),
    faqClass: ('faq-wrapper'),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
// @ts-ignore
[faqDetails, faqFeaturedTutorial, faqArticlesAndVideos,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
