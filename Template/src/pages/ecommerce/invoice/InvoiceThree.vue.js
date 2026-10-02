import { defineAsyncComponent } from 'vue';
const InvoiceThreeFooter = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceThree/Footer.vue'));
const InvoiceThreeTable = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceThree/Table.vue'));
const InvoiceThreeHeader = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceThree/Header.vue'));
const ClientDetails = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceThree/ClientDetails.vue'));
const BankTransfer = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceThree/BankTransfer.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "invoice-3" },
    id: "print-section",
});
/** @type {__VLS_StyleScopedClasses['invoice-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InvoiceThreeHeader} */
InvoiceThreeHeader;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.ClientDetails} */
ClientDetails;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "divider-line" },
});
/** @type {__VLS_StyleScopedClasses['divider-line']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.InvoiceThreeTable} */
InvoiceThreeTable;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.BankTransfer} */
BankTransfer;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.InvoiceThreeFooter} */
InvoiceThreeFooter;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
