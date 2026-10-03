import { useProduct } from '@/store/product';
import { storeToRefs } from 'pinia';
const store = useProduct();
const { sortProducts } = store;
const { filteredProducts } = storeToRefs(store);
function onChangeSort(event) {
    const target = event.target;
    sortProducts(target.value);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-6 text-sm-end" },
});
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-w-600 m-r-5" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
/** @type {__VLS_StyleScopedClasses['m-r-5']} */ ;
(__VLS_ctx.filteredProducts.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "select2-drpdwn-product select-options d-inline-block" },
});
/** @type {__VLS_StyleScopedClasses['select2-drpdwn-product']} */ ;
/** @type {__VLS_StyleScopedClasses['select-options']} */ ;
/** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    ...{ onChange: (...[$event]) => {
            return (__VLS_ctx.onChangeSort($event));
            // @ts-ignore
            [filteredProducts, onChangeSort,];
        } },
    ...{ class: "form-control btn-square" },
    name: "select",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-square']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "Featured",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "Lowest",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "Highest",
});
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
