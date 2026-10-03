import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useContact } from '@/store/contact';
const ContactSidebar = defineAsyncComponent(() => import('@/module/contacts/ContactSidebar.vue'));
const ContactDetails = defineAsyncComponent(() => import('@/module/contacts/ContactDetails.vue'));
const ContactHistory = defineAsyncComponent(() => import('@/module/contacts/ContactHistory.vue'));
const PrintContactModal = defineAsyncComponent(() => import('@/module/contacts/PrintContactModal.vue'));
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
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
    ...{ class: "email-wrap bookmark-wrap" },
});
/** @type {__VLS_StyleScopedClasses['email-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row main-bookmark" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['main-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.ContactSidebar} */
ContactSidebar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 col-md-12 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-right-aside bookmark-tabcontent contacts-tabs" },
});
/** @type {__VLS_StyleScopedClasses['email-right-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-tabcontent']} */ ;
/** @type {__VLS_StyleScopedClasses['contacts-tabs']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card email-body radius-left dark-contact" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['email-body']} */ ;
/** @type {__VLS_StyleScopedClasses['radius-left']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-contact']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "ps-0" },
});
/** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade active show" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.ContactDetails} */
ContactDetails;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "right-history",
    ...{ class: ({ show: __VLS_ctx.contactState.historyVisible }) },
});
/** @type {__VLS_StyleScopedClasses['show']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.ContactHistory} */
ContactHistory;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.PrintContactModal} */
PrintContactModal;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[contactState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
