import { onMounted, ref } from 'vue';
import { tasks } from '@/core/data/tasks';
const tagsData = ref([]);
const tag = ref('');
const addTags = () => {
    const maxId = tagsData.value.length;
    const nextId = maxId;
    const newTasks = {
        id: nextId,
        title: tag.value,
        type: 'tag',
        data: [],
    };
    tagsData.value.push(newTasks);
    tag.value = '';
};
onMounted(() => {
    try {
        tagsData.value = tasks;
    }
    catch (error) {
        console.error('Error fetching user data:', error);
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal fade modal-bookmark" },
    id: "createtag",
    tabindex: "-1",
    role: "dialog",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-dialog modal-lg" },
    role: "document",
});
/** @type {__VLS_StyleScopedClasses['modal-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-lg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-content" },
});
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-header" },
});
/** @type {__VLS_StyleScopedClasses['modal-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "modal-title" },
});
/** @type {__VLS_StyleScopedClasses['modal-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn-close" },
    type: "button",
    'data-bs-dismiss': "modal",
    'aria-label': "Close",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "form-bookmark needs-validation" },
    novalidate: true,
});
/** @type {__VLS_StyleScopedClasses['form-bookmark']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 mt-0 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-control" },
    type: "text",
    value: (__VLS_ctx.tag),
    required: true,
    autocomplete: "off",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-0 col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-color d-block" },
    type: "color",
    value: "#006666",
});
/** @type {__VLS_StyleScopedClasses['form-color']} */ ;
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.addTags();
            // @ts-ignore
            [tag, addTags,];
        } },
    ...{ class: "btn btn-secondary me-1" },
    type: "button",
    'data-bs-dismiss': "modal",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['me-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary" },
    type: "button",
    'data-bs-dismiss': "modal",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
