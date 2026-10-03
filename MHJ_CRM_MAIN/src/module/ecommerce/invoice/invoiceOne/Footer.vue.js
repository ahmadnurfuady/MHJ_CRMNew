import { getImages } from '@/utils/index';
function handlePrint() {
    window.print();
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
    ...{ class: "footer-row" },
});
/** @type {__VLS_StyleScopedClasses['footer-row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.getImages('email-template/invoice-1/sign.png')),
    alt: "sign",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (__VLS_ctx.handlePrint) },
    href: "#",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-arrow-right" },
});
/** @type {__VLS_StyleScopedClasses['icon-arrow-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
    download: true,
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-arrow-right" },
});
/** @type {__VLS_StyleScopedClasses['icon-arrow-right']} */ ;
// @ts-ignore
[getImages, handlePrint,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
