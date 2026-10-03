import { ref } from 'vue';
const emit = defineEmits(['update-search']);
const inputValue = ref('');
const onInput = () => {
    emit('update-search', inputValue.value);
};
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group m-0" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (__VLS_ctx.onInput) },
    ...{ class: "form-control" },
    type: "search",
    placeholder: "Search..",
});
(__VLS_ctx.inputValue);
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-search" },
    ...{ class: (__VLS_ctx.inputValue ? 'd-none' : '') },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-search']} */ ;
// @ts-ignore
[onInput, inputValue, inputValue,];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
