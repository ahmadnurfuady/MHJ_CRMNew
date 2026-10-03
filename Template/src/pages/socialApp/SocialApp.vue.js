import { ref, defineAsyncComponent } from 'vue';
const SocialAppProfile = defineAsyncComponent(() => import('@/module/socialApp/SocialAppProfile.vue'));
const SocialAppTimeline = defineAsyncComponent(() => import('@/module/socialApp/SocialAppTimeline.vue'));
const SocialAppAbout = defineAsyncComponent(() => import('@/module/socialApp/SocialAppAbout.vue'));
const SocialAppFriends = defineAsyncComponent(() => import('@/module/socialApp/SocialAppFriends.vue'));
const SocialAppPhotos = defineAsyncComponent(() => import('@/module/socialApp/SocialAppPhotos.vue'));
const activeTab = ref('');
function handleCurrentTab(value) {
    activeTab.value = value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid social-app-profile1" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['social-app-profile1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "user-profile social-app-profile" },
});
/** @type {__VLS_StyleScopedClasses['user-profile']} */ ;
/** @type {__VLS_StyleScopedClasses['social-app-profile']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SocialAppProfile} */
SocialAppProfile;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCurrentTab': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCurrentTab': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ currentTab: {} },
    { onCurrentTab: (...[$event]) => {
            __VLS_ctx.handleCurrentTab($event);
            // @ts-ignore
            [handleCurrentTab,];
        } });
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.activeTab == 'timeline') {
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.SocialAppTimeline} */
    SocialAppTimeline;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
}
if (__VLS_ctx.activeTab == 'about') {
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.SocialAppAbout} */
    SocialAppAbout;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
if (__VLS_ctx.activeTab == 'friends') {
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.SocialAppFriends} */
    SocialAppFriends;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
}
if (__VLS_ctx.activeTab == 'photos') {
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.SocialAppPhotos} */
    SocialAppPhotos;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
}
// @ts-ignore
[activeTab, activeTab, activeTab, activeTab,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
