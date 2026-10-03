import { defineAsyncComponent } from 'vue';
import { articlesAndVideosDetails, featuredTutorialDetails } from '@/core/data/knowledgeBase';
const FeaturedTutorials = defineAsyncComponent(() => import('@/module/faq/FeaturedTutorials.vue'));
const LatestArticlesVideos = defineAsyncComponent(() => import('@/module/faq/LatestArticlesVideos.vue'));
const KnowledgebaseHome = defineAsyncComponent(() => import('@/module/knowledgebase/KnowledgebaseHome.vue'));
const Article = defineAsyncComponent(() => import('@/module/knowledgebase/Article.vue'));
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
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.KnowledgebaseHome} */
KnowledgebaseHome;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Article} */
Article;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.FeaturedTutorials} */
FeaturedTutorials;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    details: (__VLS_ctx.featuredTutorialDetails),
    headerTitle: ('Featured Tutorials'),
}));
const __VLS_12 = __VLS_11({
    details: (__VLS_ctx.featuredTutorialDetails),
    headerTitle: ('Featured Tutorials'),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.LatestArticlesVideos} */
LatestArticlesVideos;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    details: (__VLS_ctx.articlesAndVideosDetails),
    headerTitle: ('Latest Articles and Videos'),
}));
const __VLS_17 = __VLS_16({
    details: (__VLS_ctx.articlesAndVideosDetails),
    headerTitle: ('Latest Articles and Videos'),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[featuredTutorialDetails, articlesAndVideosDetails,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
