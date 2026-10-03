import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { shippingClass } from '@/core/data/product';
import { useProduct } from '@/store/product';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const emits = defineEmits(['changeTab']);
const { changeTab } = useProduct();
const shippingClasses = ref(initSelectField());
function handleTab(value) {
    if (props.additionalTabId) {
        const updatedId = changeTab(value, props.additionalTabId);
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "common-form" },
});
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Weight (kg)'),
}));
const __VLS_2 = __VLS_1({
    title: ('Weight (kg)'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-help-alt ms-1" },
    title: "set proper weight for product items.",
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['icon-help-alt']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('meta-title'),
    placeholder: ('Enter your meta title'),
    inputType: ('number'),
}));
const __VLS_8 = __VLS_7({
    inputId: ('meta-title'),
    placeholder: ('Enter your meta title'),
    inputType: ('number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[vTooltip,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "f-light" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row gx-xl-3 gx-md-2 gy-md-0 g-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['gx-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gx-md-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gy-md-0']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Dimensions'),
}));
const __VLS_13 = __VLS_12({
    title: ('Dimensions'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icon-help-alt ms-1" },
    title: "set proper length/width and height for product items.",
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['icon-help-alt']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-1']} */ ;
// @ts-ignore
[vTooltip,];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    inputId: ('length'),
    placeholder: ('Length[l]'),
    inputType: ('number'),
}));
const __VLS_19 = __VLS_18({
    inputId: ('length'),
    placeholder: ('Length[l]'),
    inputType: ('number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    inputId: ('width'),
    placeholder: ('Width[w]'),
    inputType: ('number'),
}));
const __VLS_24 = __VLS_23({
    inputId: ('width'),
    placeholder: ('Width[w]'),
    inputType: ('number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-4" },
});
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
let __VLS_27;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    inputId: ('height'),
    placeholder: ('Height[h]'),
    inputType: ('number'),
}));
const __VLS_29 = __VLS_28({
    inputId: ('height'),
    placeholder: ('Height[h]'),
    inputType: ('number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_32;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    title: ('Shipping Class'),
}));
const __VLS_34 = __VLS_33({
    title: ('Shipping Class'),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_35.slots;
let __VLS_38;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select shipping class type'),
    modelValue: (__VLS_ctx.shippingClasses),
    options: (__VLS_ctx.shippingClass),
}));
const __VLS_40 = __VLS_39({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select shipping class type'),
    modelValue: (__VLS_ctx.shippingClasses),
    options: (__VLS_ctx.shippingClass),
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
// @ts-ignore
[shippingClasses, shippingClass,];
var __VLS_35;
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
let __VLS_43;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    icon: ('back-arrow'),
}));
const __VLS_45 = __VLS_44({
    icon: ('back-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleTab(1));
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_48;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({
    icon: ('front-arrow'),
}));
const __VLS_50 = __VLS_49({
    icon: ('front-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
