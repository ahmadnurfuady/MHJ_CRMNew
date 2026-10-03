import { ref, defineAsyncComponent } from 'vue';
import { toast } from 'vue3-toastify';
import { initSelectField } from '@/core/data/common';
import { publishStatus } from '@/core/data/product';
import { useProduct } from '@/store/product';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const emits = defineEmits(['changeTab']);
const { changeTab } = useProduct();
const status = ref(initSelectField());
const date = ref(new Date());
const config = ref({
    enableTime: true,
    dateFormat: 'd-m-Y, H:i',
});
function handleTab(value) {
    if (props.additionalTabId) {
        const updatedId = changeTab(value, props.additionalTabId);
        if (updatedId) {
            emits('changeTab', updatedId);
        }
    }
}
function submit() {
    toast.success(`Submitted Successfully!!!`, {
        autoClose: 2000,
    });
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3 common-form" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6 col-xl-12 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Publish Status'),
}));
const __VLS_2 = __VLS_1({
    title: ('Publish Status'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select publish status'),
    required: (false),
    modelValue: (__VLS_ctx.status),
    options: (__VLS_ctx.publishStatus),
}));
const __VLS_8 = __VLS_7({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select publish status'),
    required: (false),
    modelValue: (__VLS_ctx.status),
    options: (__VLS_ctx.publishStatus),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[status, publishStatus,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6 col-xl-12 col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Publish Date & Time'),
}));
const __VLS_13 = __VLS_12({
    title: ('Publish Date & Time'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    ...{ class: "form-control" },
    modelValue: (__VLS_ctx.date),
    config: (__VLS_ctx.config),
}));
const __VLS_19 = __VLS_18({
    ...{ class: "form-control" },
    modelValue: (__VLS_ctx.date),
    config: (__VLS_ctx.config),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[date, config,];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12 product-buttons" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['product-buttons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleTab(-1));
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    icon: ('back-arrow'),
}));
const __VLS_24 = __VLS_23({
    icon: ('back-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.submit());
            // @ts-ignore
            [submit,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
