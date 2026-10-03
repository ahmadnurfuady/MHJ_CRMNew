import { defineAsyncComponent } from 'vue';
import { useProduct } from '@/store/product';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Editor = defineAsyncComponent(() => import('@/components/shared/Editor.vue'));
const props = defineProps();
const emits = defineEmits(['changeTab']);
const { changeTab } = useProduct();
function handleTab(value) {
    if (props.activeTabId) {
        const updatedId = changeTab(value, props.activeTabId);
        if (updatedId) {
            emits('changeTab', updatedId);
        }
    }
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
    ...{ class: "sidebar-body" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3 common-form" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Product SKU'),
}));
const __VLS_2 = __VLS_1({
    title: ('Product SKU'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('sku'),
    placeholder: ('Enter product sku'),
    required: (false),
}));
const __VLS_8 = __VLS_7({
    inputId: ('sku'),
    placeholder: ('Enter product sku'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Product Title'),
}));
const __VLS_13 = __VLS_12({
    title: ('Product Title'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    inputId: ('title'),
    placeholder: ('Enter product title'),
    required: (false),
}));
const __VLS_19 = __VLS_18({
    inputId: ('title'),
    placeholder: ('Enter product title'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toolbar-box" },
});
/** @type {__VLS_StyleScopedClasses['toolbar-box']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.Editor} */
Editor;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({}));
const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 product-buttons" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['product-buttons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleTab(1));
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn m-0" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
let __VLS_27;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    icon: ('front-arrow'),
}));
const __VLS_29 = __VLS_28({
    icon: ('front-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
