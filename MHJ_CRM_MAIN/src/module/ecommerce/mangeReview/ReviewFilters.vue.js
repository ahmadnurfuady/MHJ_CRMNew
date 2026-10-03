import { defineAsyncComponent } from 'vue';
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const emit = defineEmits();
function onChange(event, field) {
    emit('update', { event, field });
}
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "top-body" },
});
/** @type {__VLS_StyleScopedClasses['top-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropdown bootstrap-select search-picker" },
});
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['bootstrap-select']} */ ;
/** @type {__VLS_StyleScopedClasses['search-picker']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select rating'),
    rating: (true),
    modelValue: (__VLS_ctx.form.rating),
    options: (__VLS_ctx.rating),
    required: (false),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select rating'),
    rating: (true),
    modelValue: (__VLS_ctx.form.rating),
    options: (__VLS_ctx.rating),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.'update:modelValue'} */
    'onUpdate:modelValue': (...[$event]) => {
        return (__VLS_ctx.onChange($event, 'rating'));
        // @ts-ignore
        [form, rating, onChange,];
    },
};
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropdown bootstrap-select search-picker" },
});
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['bootstrap-select']} */ ;
/** @type {__VLS_StyleScopedClasses['search-picker']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select status'),
    modelValue: (__VLS_ctx.form.status),
    options: (__VLS_ctx.reviewStatus),
    required: (false),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select status'),
    modelValue: (__VLS_ctx.form.status),
    options: (__VLS_ctx.reviewStatus),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
const __VLS_13 = {
    /** @type {typeof __VLS_12.'update:modelValue'} */
    'onUpdate:modelValue': (...[$event]) => {
        return (__VLS_ctx.onChange($event, 'status'));
        // @ts-ignore
        [form, onChange, reviewStatus,];
    },
};
var __VLS_10;
var __VLS_11;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
