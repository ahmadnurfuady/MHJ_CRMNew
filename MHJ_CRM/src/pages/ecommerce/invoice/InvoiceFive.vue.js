import { defineAsyncComponent } from 'vue';
const InvoiceFiveHeader = defineAsyncComponent(() => import('@/module/ecommerce/invoice/InvoiceFive/Header.vue'));
const InvoiceFiveTable = defineAsyncComponent(() => import('@/module/ecommerce/invoice/InvoiceFive/Table.vue'));
const InvoiceFiveFooter = defineAsyncComponent(() => import('@/module/ecommerce/invoice/InvoiceFive/Footer.vue'));
const InvoiceDetails = defineAsyncComponent(() => import('@/module/ecommerce/invoice/InvoiceFive/InvoiceDetails.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "invoice-5" },
    id: "print-section",
});
/** @type {__VLS_StyleScopedClasses['invoice-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InvoiceFiveHeader} */
InvoiceFiveHeader;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.InvoiceDetails} */
InvoiceDetails;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.InvoiceFiveTable} */
InvoiceFiveTable;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.InvoiceFiveFooter} */
InvoiceFiveFooter;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
