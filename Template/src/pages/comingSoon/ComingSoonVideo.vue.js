import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
const Timer = defineAsyncComponent(() => import('@/components/shared/Timer.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid p-0" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "comingsoon auth-bg-video" },
});
/** @type {__VLS_StyleScopedClasses['comingsoon']} */ ;
/** @type {__VLS_StyleScopedClasses['auth-bg-video']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.video, __VLS_intrinsics.video)({
    ...{ class: "bgvideo-comingsoon" },
    id: "bgvid",
    poster: (__VLS_ctx.getImages('other-images/coming-soon-bg.jpg')),
    playsinline: true,
    autoplay: true,
    muted: true,
    loop: true,
});
/** @type {__VLS_StyleScopedClasses['bgvideo-comingsoon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.source)({
    src: "@/assets/video/auth-bg.mp4",
    type: "video/mp4",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "comingsoon-inner text-center" },
});
/** @type {__VLS_StyleScopedClasses['comingsoon-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "for-light" },
    src: (__VLS_ctx.getImages('other-images/logo-login.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['for-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "for-dark" },
    src: (__VLS_ctx.getImages('other-images/logo-light.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['for-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "countdown" },
});
/** @type {__VLS_StyleScopedClasses['countdown']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Timer} */
Timer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[getImages, getImages, getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
