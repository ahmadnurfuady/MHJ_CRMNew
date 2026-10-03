import { defineAsyncComponent } from 'vue';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
function close() {
    emits('closeModal');
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Grid Modal'),
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Grid Modal'),
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.close();
            // @ts-ignore
            [close,];
        } });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row common-align" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['common-align']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 ms-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-3 ms-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-2 ms-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-md-2']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6 ms-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row common-align" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['common-align']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-8 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary mb-0" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "grid-space bg-light-secondary txt-secondary mb-0" },
});
/** @type {__VLS_StyleScopedClasses['grid-space']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-footer" },
});
/** @type {__VLS_StyleScopedClasses['modal-footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.close();
            // @ts-ignore
            [close,];
        } },
    ...{ class: "btn btn-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
