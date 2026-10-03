import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
const LoginForm = defineAsyncComponent(() => import('@/module/auth/LoginForm.vue'));
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-5 b-center bg-size" },
    ...{ style: ({ backgroundImage: `url(${__VLS_ctx.getImages('login/3.jpg')})` }) },
});
/** @type {__VLS_StyleScopedClasses['col-xl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['b-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-size']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "bg-img-cover bg-center d-none" },
    src: (__VLS_ctx.getImages('login/3.jpg')),
    alt: "image",
});
/** @type {__VLS_StyleScopedClasses['bg-img-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-center']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-7 p-0" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "login-card login-dark" },
});
/** @type {__VLS_StyleScopedClasses['login-card']} */ ;
/** @type {__VLS_StyleScopedClasses['login-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "logo text-start" },
    to: ('/'),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "logo text-start" },
    to: ('/'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-light" },
    src: (__VLS_ctx.getImages('logo/logo_dark.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-dark" },
    src: (__VLS_ctx.getImages('logo/logo.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-dark']} */ ;
// @ts-ignore
[getImages, getImages, getImages, getImages,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "login-main" },
});
/** @type {__VLS_StyleScopedClasses['login-main']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.LoginForm} */
LoginForm;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    path: (__VLS_ctx.routes.Auth.RegisterBgImage),
}));
const __VLS_8 = __VLS_7({
    path: (__VLS_ctx.routes.Auth.RegisterBgImage),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[routes,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
