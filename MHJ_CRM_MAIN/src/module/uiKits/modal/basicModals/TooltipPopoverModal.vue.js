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
/** @ts-ignore @type { | typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Tooltip and Popover Modal'),
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Tooltip and Popover Modal'),
    modalOpen: (props.modalOpen),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.close());
        // @ts-ignore
        [close,];
    },
};
var __VLS_7;
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-2" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-info" },
    title: "Popover title",
    'data-bs-content': "Popover body content is set in this attribute.",
    'data-bs-trigger': "focus",
});
__VLS_asFunctionalDirective(__VLS_directives.vPopover, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-info']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-2" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "tooltip-test txt-primary" },
    href: "#",
    title: "Tooltip",
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['tooltip-test']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "tooltip-test txt-primary" },
    href: "#",
    title: "Tooltip",
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['tooltip-test']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-footer" },
});
/** @type {__VLS_StyleScopedClasses['modal-footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.close());
            // @ts-ignore
            [close, vPopover, vTooltip, vTooltip,];
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
