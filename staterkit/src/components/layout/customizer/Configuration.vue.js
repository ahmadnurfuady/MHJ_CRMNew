import { useLayout } from '@/store/layout';
import { storeToRefs } from 'pinia';
import { toast } from 'vue3-toastify';
const store = useLayout();
const { layoutState } = storeToRefs(store);
const layout = layoutState.value.layouts;
function copy() {
    navigator.clipboard.writeText(JSON.stringify(layoutState.value.layouts));
    toast.success('Code Copied to clipboard ', {
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
        position: 'top-right',
    });
}
function closecustomizer() {
    layoutState.value.customizer = '';
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customizer-header" },
});
/** @type {__VLS_StyleScopedClasses['customizer-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closecustomizer();
            // @ts-ignore
            [closecustomizer,];
        } },
    ...{ class: "icofont-close icon-close" },
});
/** @type {__VLS_StyleScopedClasses['icofont-close']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "f-w-700" },
});
/** @type {__VLS_StyleScopedClasses['f-w-700']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-thumbs-o-up txt-primary" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-thumbs-o-up']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    type: "button",
    ...{ class: "btn btn-primary plus-popup mt-2" },
    'data-bs-toggle': "modal",
    'data-bs-target': "#configModal",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['plus-popup']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.teleport | typeof __VLS_components.Teleport | typeof __VLS_components.teleport | typeof __VLS_components.Teleport} */
teleport;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: "body",
}));
const __VLS_2 = __VLS_1({
    to: "body",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal fade" },
    id: "configModal",
    tabindex: "-1",
    'aria-labelledby': "configModalLabel",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-dialog modal-dialog-centered" },
});
/** @type {__VLS_StyleScopedClasses['modal-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-dialog-centered']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-content" },
});
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-header" },
});
/** @type {__VLS_StyleScopedClasses['modal-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    type: "button",
    ...{ class: "btn-close" },
    'data-bs-dismiss': "modal",
    'aria-label': "Close",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-header modal-copy-header" },
});
/** @type {__VLS_StyleScopedClasses['modal-header']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-copy-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "headerTitle mb-0" },
});
/** @type {__VLS_StyleScopedClasses['headerTitle']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "config-popup" },
});
/** @type {__VLS_StyleScopedClasses['config-popup']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.pre, __VLS_intrinsics.pre)({
    ...{ class: "overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
(__VLS_ctx.layout.settings.layoutType);
(__VLS_ctx.layout.settings.layout);
(__VLS_ctx.layout.settings.sidebarSetting);
(__VLS_ctx.layout.color.layoutVersion);
(__VLS_ctx.layout.color.primaryColor);
(__VLS_ctx.layout.color.secondaryColor);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-footer" },
});
/** @type {__VLS_StyleScopedClasses['modal-footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.copy();
            // @ts-ignore
            [layout, layout, layout, layout, layout, layout, copy,];
        } },
    ...{ class: "btn btn-primary" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    type: "button",
    ...{ class: "btn btn-secondary" },
    'data-bs-dismiss': "modal",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
