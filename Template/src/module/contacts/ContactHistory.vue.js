import { storeToRefs } from 'pinia';
import { useContact } from '@/store/contact';
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
function closeHistory() {
    contactState.value.historyVisible = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-header p-20" },
});
/** @type {__VLS_StyleScopedClasses['modal-header']} */ ;
/** @type {__VLS_StyleScopedClasses['p-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "modal-title w-100 common-space" },
});
/** @type {__VLS_StyleScopedClasses['modal-title']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "pull-right" },
});
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeHistory();
            // @ts-ignore
            [closeHistory,];
        } },
    ...{ class: "close-history" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['close-history']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-close" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "history-details" },
});
/** @type {__VLS_StyleScopedClasses['history-details']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-ui-edit" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-ui-edit']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-star" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-star']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1 mt-0" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "mt-0" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-12 c-light" },
});
/** @type {__VLS_StyleScopedClasses['f-12']} */ ;
/** @type {__VLS_StyleScopedClasses['c-light']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
