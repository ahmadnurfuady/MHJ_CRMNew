import { ref, defineAsyncComponent, onMounted } from 'vue';
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding';
import { getImages } from '@/utils/index';
import { socialLinks } from '@/core/data/user';
const ProfilePost = defineAsyncComponent(() => import('@/module/user/profile/UserProfile1.vue'));
const ProfilePost2 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile2.vue'));
const ProfilePost3 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile3.vue'));
const ProfilePost4 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile4.vue'));
const wrapper = ref();
const { start } = useVOnboarding(wrapper);
const steps = [
    {
        attachTo: { element: '#profiletour' },
        content: { title: 'This is Riho profile' },
    },
    {
        attachTo: { element: '#update-profile-tour' },
        content: { title: 'Change Riho profile image here' },
    },
    {
        attachTo: { element: '#info-bar-tour' },
        content: { title: 'This is your profile details' },
    },
    {
        attachTo: { element: '#social-bar-tour' },
        content: { title: 'This is your social details' },
    },
    {
        attachTo: { element: '#first-post-tour' },
        content: { title: 'This is the your first Post' },
    },
    {
        attachTo: { element: '#social-bar-tour2' },
        content: { title: 'This is your social details' },
    },
    {
        attachTo: { element: '#social-bar-tour3' },
        content: { title: 'This is your social details' },
    },
    {
        attachTo: { element: '#social-bar-tour4' },
        content: { title: 'This is your social details' },
    },
    {
        attachTo: { element: '#social-bar-tour5' },
        content: { title: 'This is your social details' },
    },
];
onMounted(() => {
    start();
});
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
    ...{ class: "user-profile" },
});
/** @type {__VLS_StyleScopedClasses['user-profile']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card hovercard text-center" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['hovercard']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cardheader" },
});
/** @type {__VLS_StyleScopedClasses['cardheader']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "user-image" },
});
/** @type {__VLS_StyleScopedClasses['user-image']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "avatar" },
});
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-thumbnail rounded-circle me-3" },
    src: (__VLS_ctx.getImages('user/7.jpg')),
    id: "profiletour",
    'data-intro': "This is Riho profile",
});
/** @type {__VLS_StyleScopedClasses['img-thumbnail']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['me-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "icon-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-pencil-alt-5" },
    id: "update-profile-tour",
    'data-intro': "Change Riho profile image here",
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-pencil-alt-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "info" },
});
/** @type {__VLS_StyleScopedClasses['info']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
    'data-intro': "This is your profile details",
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-xl-4 order-sm-1 order-xl-0" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['order-sm-1']} */ ;
/** @type {__VLS_StyleScopedClasses['order-xl-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-start tour-email" },
});
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['tour-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "tour-mb-space" },
});
/** @type {__VLS_StyleScopedClasses['tour-mb-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-envelope" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-envelope']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-start ttl-sm-mb-0 tour-email" },
});
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['ttl-sm-mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['tour-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "tour-mb-space" },
});
/** @type {__VLS_StyleScopedClasses['tour-mb-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-calendar" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-calendar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-4 order-sm-0 order-xl-1" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['order-sm-0']} */ ;
/** @type {__VLS_StyleScopedClasses['order-xl-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "user-designation tour-email" },
});
/** @type {__VLS_StyleScopedClasses['user-designation']} */ ;
/** @type {__VLS_StyleScopedClasses['tour-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "title" },
});
/** @type {__VLS_StyleScopedClasses['title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    target: "_blank",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "desc mt-2" },
});
/** @type {__VLS_StyleScopedClasses['desc']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6 col-xl-4 order-sm-2 order-xl-2" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['order-sm-2']} */ ;
/** @type {__VLS_StyleScopedClasses['order-xl-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6 mt-0 mt-sm-3" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-sm-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-start ttl-xs-mt tour-email" },
});
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['ttl-xs-mt']} */ ;
/** @type {__VLS_StyleScopedClasses['tour-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "tour-mb-space" },
});
/** @type {__VLS_StyleScopedClasses['tour-mb-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-phone" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-phone']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-start ttl-sm-mb-0 tour-email" },
});
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['ttl-sm-mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['tour-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "tour-mb-space" },
});
/** @type {__VLS_StyleScopedClasses['tour-mb-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-location-arrow" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-location-arrow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "social-media" },
    id: "social-bar-tour",
    'data-intro': "This is your social details",
});
/** @type {__VLS_StyleScopedClasses['social-media']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "list-inline" },
});
/** @type {__VLS_StyleScopedClasses['list-inline']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.socialLinks))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
        ...{ class: "list-inline-item" },
    });
    /** @type {__VLS_StyleScopedClasses['list-inline-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: (item.url),
        target: "_blank",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (item.icon) },
    });
    // @ts-ignore
    [getImages, socialLinks,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "follow" },
});
/** @type {__VLS_StyleScopedClasses['follow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "follow-num counter" },
});
/** @type {__VLS_StyleScopedClasses['follow-num']} */ ;
/** @type {__VLS_StyleScopedClasses['counter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "follow-num counter" },
});
/** @type {__VLS_StyleScopedClasses['follow-num']} */ ;
/** @type {__VLS_StyleScopedClasses['counter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.ProfilePost} */
ProfilePost;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    tour: (true),
}));
const __VLS_2 = __VLS_1({
    tour: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.ProfilePost2} */
ProfilePost2;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    tour: (true),
}));
const __VLS_7 = __VLS_6({
    tour: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.ProfilePost3} */
ProfilePost3;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    tour: (true),
}));
const __VLS_12 = __VLS_11({
    tour: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.ProfilePost4} */
ProfilePost4;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    tour: (true),
}));
const __VLS_17 = __VLS_16({
    tour: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.VOnboardingWrapper} */
VOnboardingWrapper;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    ref: "wrapper",
    steps: (__VLS_ctx.steps),
    ...{ class: "tour-visit" },
}));
const __VLS_22 = __VLS_21({
    ref: "wrapper",
    steps: (__VLS_ctx.steps),
    ...{ class: "tour-visit" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_25 = {};
/** @type {__VLS_StyleScopedClasses['tour-visit']} */ ;
var __VLS_23;
// @ts-ignore
var __VLS_26 = __VLS_25;
// @ts-ignore
[steps,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
