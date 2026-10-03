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
    ...{ class: "footer-section" },
});
/** @type {__VLS_StyleScopedClasses['footer-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.getImages('email-template/invoice-3/sign.png')),
    alt: "sign",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "signer-name" },
});
/** @type {__VLS_StyleScopedClasses['signer-name']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "signer-designation" },
});
/** @type {__VLS_StyleScopedClasses['signer-designation']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "button-group" },
});
/** @type {__VLS_StyleScopedClasses['button-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (__VLS_ctx.handlePrint) },
    ...{ class: "btn-primary" },
});
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-arrow-right btn-icon" },
});
/** @type {__VLS_StyleScopedClasses['icon-arrow-right']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn-secondary" },
    href: "#",
    download: true,
});
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-arrow-right btn-icon" },
});
/** @type {__VLS_StyleScopedClasses['icon-arrow-right']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-icon']} */ ;
// @ts-ignore
[getImages, handlePrint,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
