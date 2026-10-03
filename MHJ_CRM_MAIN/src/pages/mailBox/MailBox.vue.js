import { onMounted, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useMailBox } from '@/store/mailBox';
const MailBoxHeader = defineAsyncComponent(() => import('@/module/mailBox/MailBoxHeader.vue'));
const MailBoxSidebar = defineAsyncComponent(() => import('@/module/mailBox/MailBoxSidebar.vue'));
const MailDetails = defineAsyncComponent(() => import('@/module/mailBox/MailDetails.vue'));
const HeaderTabs = defineAsyncComponent(() => import('@/module/mailBox/HeaderTabs.vue'));
const emailStore = useMailBox();
const { mailState } = storeToRefs(emailStore);
const { getTotalEmails } = emailStore;
onMounted(() => {
    getTotalEmails();
});
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
    ...{ class: "email-wrap email-main-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['email-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['email-main-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-xl-4 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.MailBoxSidebar} */
MailBoxSidebar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 col-xl-8 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-right-aside" },
});
/** @type {__VLS_StyleScopedClasses['email-right-aside']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card email-body email-list" },
    ...{ class: ({ hide: __VLS_ctx.mailState.isOpenMail }) },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['email-body']} */ ;
/** @type {__VLS_StyleScopedClasses['email-list']} */ ;
/** @type {__VLS_StyleScopedClasses['hide']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.MailBoxHeader} */
MailBoxHeader;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content block-wrapper position-relative" },
    id: "email-pills-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
/** @type {__VLS_StyleScopedClasses['block-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mail-body-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['mail-body-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "mail-header-tabs" },
});
/** @type {__VLS_StyleScopedClasses['mail-header-tabs']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.HeaderTabs} */
HeaderTabs;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
if (__VLS_ctx.mailState.isOpenMail) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card email-body email-read" },
        ...{ class: ({ show: __VLS_ctx.mailState.isOpenMail }) },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    /** @type {__VLS_StyleScopedClasses['email-body']} */ ;
    /** @type {__VLS_StyleScopedClasses['email-read']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    let __VLS_15;
    /** @ts-ignore @type { | typeof __VLS_components.MailDetails} */
    MailDetails;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
}
// @ts-ignore
[mailState, mailState, mailState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
