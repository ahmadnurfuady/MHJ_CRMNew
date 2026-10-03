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
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.getImages('email-template/invoice-3/sign.png')),
    alt: "sign",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "signature-name" },
});
/** @type {__VLS_StyleScopedClasses['signature-name']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "signature-role" },
});
/** @type {__VLS_StyleScopedClasses['signature-role']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "action-buttons" },
});
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (__VLS_ctx.handlePrint) },
    ...{ class: "btn-print" },
});
/** @type {__VLS_StyleScopedClasses['btn-print']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-arrow-right" },
});
/** @type {__VLS_StyleScopedClasses['icon-arrow-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn-download" },
    href: "#",
    download: true,
});
/** @type {__VLS_StyleScopedClasses['btn-download']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-arrow-right" },
});
/** @type {__VLS_StyleScopedClasses['icon-arrow-right']} */ ;
// @ts-ignore
[getImages, handlePrint,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
