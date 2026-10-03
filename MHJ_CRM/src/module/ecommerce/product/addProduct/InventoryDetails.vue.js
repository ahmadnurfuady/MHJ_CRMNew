import { defineAsyncComponent, ref } from 'vue';
import { initSelectField } from '@/core/data/common';
import { stockAvailability, stockLevel } from '@/core/data/product';
import { useProduct } from '@/store/product';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const emits = defineEmits(['previousPage', 'nextPage']);
const { changeTab } = useProduct();
const form = ref({
    stockAvailability: initSelectField(),
    stockLevel: initSelectField(),
});
function handleTab(value) {
    if (props.activeTabId && props.additionalTabId) {
        if (value == -1) {
            const updatedId = changeTab(value, props.activeTabId);
            if (updatedId) {
                emits('previousPage', updatedId);
            }
        }
        else if (value == 1) {
            const updatedId = changeTab(value, props.additionalTabId);
            if (updatedId) {
                emits('nextPage', updatedId);
            }
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
    ...{ class: "common-form row g-3" },
    id: "advance-tab",
});
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Stock Availability'),
}));
const __VLS_2 = __VLS_1({
    title: ('Stock Availability'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select stock availability'),
    modelValue: (__VLS_ctx.form.stockAvailability),
    options: (__VLS_ctx.stockAvailability),
}));
const __VLS_8 = __VLS_7({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select stock availability'),
    modelValue: (__VLS_ctx.form.stockAvailability),
    options: (__VLS_ctx.stockAvailability),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[form, stockAvailability,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Low Stock Level'),
}));
const __VLS_13 = __VLS_12({
    title: ('Low Stock Level'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select stock level'),
    modelValue: (__VLS_ctx.form.stockLevel),
    options: (__VLS_ctx.stockLevel),
}));
const __VLS_19 = __VLS_18({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select stock level'),
    modelValue: (__VLS_ctx.form.stockLevel),
    options: (__VLS_ctx.stockLevel),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
// @ts-ignore
[form, stockLevel,];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Stock Quantity'),
}));
const __VLS_24 = __VLS_23({
    title: ('Stock Quantity'),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    inputId: ('stock-quantity'),
    placeholder: ('Stock quantity'),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    inputId: ('stock-quantity'),
    placeholder: ('Stock quantity'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
// @ts-ignore
[];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    title: ('Restock Date'),
}));
const __VLS_35 = __VLS_34({
    title: ('Restock Date'),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_38 } = __VLS_36.slots;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    inputId: ('restock-date'),
    placeholder: ('Date'),
    required: (false),
    inputType: ('date'),
}));
const __VLS_41 = __VLS_40({
    inputId: ('restock-date'),
    placeholder: ('Date'),
    required: (false),
    inputType: ('date'),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
// @ts-ignore
[];
var __VLS_36;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_44;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    title: ('Pre-Order'),
}));
const __VLS_46 = __VLS_45({
    title: ('Pre-Order'),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
let __VLS_50;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    inputId: ('pre-order'),
    placeholder: ('Quantity'),
    required: (false),
}));
const __VLS_52 = __VLS_51({
    inputId: ('pre-order'),
    placeholder: ('Quantity'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
// @ts-ignore
[];
var __VLS_47;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "gridCheck",
    type: "checkbox",
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label m-0" },
    for: "gridCheck",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-buttons" },
});
/** @type {__VLS_StyleScopedClasses['product-buttons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(-1);
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    icon: ('back-arrow'),
}));
const __VLS_57 = __VLS_56({
    icon: ('back-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(1);
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({
    icon: ('front-arrow'),
}));
const __VLS_62 = __VLS_61({
    icon: ('front-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
