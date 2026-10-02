import { invoiceItems } from "@/core/data/ecommerce";
const taxRate = 15;
const discount = 30;
const subtotal = invoiceItems.reduce((sum, item) => sum + item.price * item.qty, 0);
const tax = (subtotal * taxRate) / 100;
const total = subtotal + tax - discount;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "items-table" },
});
/** @type {__VLS_StyleScopedClasses['items-table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
    ...{ class: "table-header" },
});
/** @type {__VLS_StyleScopedClasses['table-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "header-text" },
});
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "text-left" },
});
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "header-text" },
});
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "header-text" },
});
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "header-text" },
});
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "header-text" },
});
/** @type {__VLS_StyleScopedClasses['header-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-row-number" },
});
/** @type {__VLS_StyleScopedClasses['item-row-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-number" },
});
/** @type {__VLS_StyleScopedClasses['item-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-description" },
});
/** @type {__VLS_StyleScopedClasses['item-description']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "item-title" },
});
/** @type {__VLS_StyleScopedClasses['item-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-license" },
});
/** @type {__VLS_StyleScopedClasses['item-license']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-price" },
});
/** @type {__VLS_StyleScopedClasses['item-price']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "price-text" },
});
/** @type {__VLS_StyleScopedClasses['price-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-quantity" },
});
/** @type {__VLS_StyleScopedClasses['item-quantity']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "quantity-text" },
});
/** @type {__VLS_StyleScopedClasses['quantity-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-subtotal" },
});
/** @type {__VLS_StyleScopedClasses['item-subtotal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "subtotal-text" },
});
/** @type {__VLS_StyleScopedClasses['subtotal-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-row-number" },
});
/** @type {__VLS_StyleScopedClasses['item-row-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-number" },
});
/** @type {__VLS_StyleScopedClasses['item-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-description" },
});
/** @type {__VLS_StyleScopedClasses['item-description']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "item-title" },
});
/** @type {__VLS_StyleScopedClasses['item-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-license" },
});
/** @type {__VLS_StyleScopedClasses['item-license']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-price" },
});
/** @type {__VLS_StyleScopedClasses['item-price']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "price-text" },
});
/** @type {__VLS_StyleScopedClasses['price-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-quantity" },
});
/** @type {__VLS_StyleScopedClasses['item-quantity']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "quantity-text" },
});
/** @type {__VLS_StyleScopedClasses['quantity-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-subtotal" },
});
/** @type {__VLS_StyleScopedClasses['item-subtotal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "subtotal-text" },
});
/** @type {__VLS_StyleScopedClasses['subtotal-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-row-number" },
});
/** @type {__VLS_StyleScopedClasses['item-row-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-number" },
});
/** @type {__VLS_StyleScopedClasses['item-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-description" },
});
/** @type {__VLS_StyleScopedClasses['item-description']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "item-title" },
});
/** @type {__VLS_StyleScopedClasses['item-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-license" },
});
/** @type {__VLS_StyleScopedClasses['item-license']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-price" },
});
/** @type {__VLS_StyleScopedClasses['item-price']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "price-text" },
});
/** @type {__VLS_StyleScopedClasses['price-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-quantity" },
});
/** @type {__VLS_StyleScopedClasses['item-quantity']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "quantity-text" },
});
/** @type {__VLS_StyleScopedClasses['quantity-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-subtotal" },
});
/** @type {__VLS_StyleScopedClasses['item-subtotal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "subtotal-text" },
});
/** @type {__VLS_StyleScopedClasses['subtotal-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-row-number" },
});
/** @type {__VLS_StyleScopedClasses['item-row-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-number" },
});
/** @type {__VLS_StyleScopedClasses['item-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-description" },
});
/** @type {__VLS_StyleScopedClasses['item-description']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "item-title" },
});
/** @type {__VLS_StyleScopedClasses['item-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "item-license" },
});
/** @type {__VLS_StyleScopedClasses['item-license']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-price" },
});
/** @type {__VLS_StyleScopedClasses['item-price']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "price-text" },
});
/** @type {__VLS_StyleScopedClasses['price-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-quantity" },
});
/** @type {__VLS_StyleScopedClasses['item-quantity']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "quantity-text" },
});
/** @type {__VLS_StyleScopedClasses['quantity-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "item-subtotal" },
});
/** @type {__VLS_StyleScopedClasses['item-subtotal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "subtotal-text" },
});
/** @type {__VLS_StyleScopedClasses['subtotal-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-label" },
});
/** @type {__VLS_StyleScopedClasses['calc-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "calc-text" },
});
/** @type {__VLS_StyleScopedClasses['calc-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-value" },
});
/** @type {__VLS_StyleScopedClasses['calc-value']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "calc-amount" },
});
/** @type {__VLS_StyleScopedClasses['calc-amount']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-label no-top-padding" },
});
/** @type {__VLS_StyleScopedClasses['calc-label']} */ ;
/** @type {__VLS_StyleScopedClasses['no-top-padding']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "calc-text" },
});
/** @type {__VLS_StyleScopedClasses['calc-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-value no-top-padding" },
});
/** @type {__VLS_StyleScopedClasses['calc-value']} */ ;
/** @type {__VLS_StyleScopedClasses['no-top-padding']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "calc-amount" },
});
/** @type {__VLS_StyleScopedClasses['calc-amount']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-label no-top-padding" },
});
/** @type {__VLS_StyleScopedClasses['calc-label']} */ ;
/** @type {__VLS_StyleScopedClasses['no-top-padding']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "calc-text" },
});
/** @type {__VLS_StyleScopedClasses['calc-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-value no-top-padding" },
});
/** @type {__VLS_StyleScopedClasses['calc-value']} */ ;
/** @type {__VLS_StyleScopedClasses['no-top-padding']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "calc-amount" },
});
/** @type {__VLS_StyleScopedClasses['calc-amount']} */ ;
(__VLS_ctx.total);
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-label no-top-padding" },
});
/** @type {__VLS_StyleScopedClasses['calc-label']} */ ;
/** @type {__VLS_StyleScopedClasses['no-top-padding']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "calc-text" },
});
/** @type {__VLS_StyleScopedClasses['calc-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "calc-value total" },
});
/** @type {__VLS_StyleScopedClasses['calc-value']} */ ;
/** @type {__VLS_StyleScopedClasses['total']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "total-amount" },
});
/** @type {__VLS_StyleScopedClasses['total-amount']} */ ;
// @ts-ignore
[total,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
