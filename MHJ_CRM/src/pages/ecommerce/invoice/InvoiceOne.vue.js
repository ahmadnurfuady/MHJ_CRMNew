import { defineAsyncComponent } from 'vue';
const InvoiceOneHeader = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceOne/Header.vue'));
const InvoiceOneTable = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceOne/Table.vue'));
const InvoiceOneFooter = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceOne/Footer.vue'));
const BillingDetails = defineAsyncComponent(() => import('@/module/ecommerce/invoice/invoiceOne/BillingDetails.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table-wrapper invoice-1" },
});
/** @type {__VLS_StyleScopedClasses['table-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['invoice-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InvoiceOneHeader} */
InvoiceOneHeader;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.BillingDetails} */
BillingDetails;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.InvoiceOneTable} */
InvoiceOneTable;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.InvoiceOneFooter} */
InvoiceOneFooter;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
