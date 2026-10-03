import { defineAsyncComponent, ref } from 'vue';
import { productOptions, priceDiscount } from '@/core/data/product';
import { initSelectField } from '@/core/data/common';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const localForm = ref({
    productOptions: initSelectField(),
    discountType: initSelectField(),
});
const props = defineProps();
const emit = defineEmits(['update:form']);
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
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "meta-body" },
});
/** @type {__VLS_StyleScopedClasses['meta-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
if (__VLS_ctx.activeTab === 'fixed_price_discount') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: "Discount Price",
    }));
    const __VLS_2 = __VLS_1({
        title: "Discount Price",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        inputId: "discount-price",
        placeholder: "Discount",
        inputType: "number",
    }));
    const __VLS_8 = __VLS_7({
        inputId: "discount-price",
        placeholder: "Discount",
        inputType: "number",
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [activeTab,];
    var __VLS_3;
}
if (__VLS_ctx.activeTab === 'bogo_product') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        title: "Product Name",
    }));
    const __VLS_13 = __VLS_12({
        title: "Product Name",
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_16 } = __VLS_14.slots;
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.Select} */
    Select;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        getValueKey: "label",
        displayKey: "label",
        placeholder: "Select product",
        options: (__VLS_ctx.productOptions),
        modelValue: (__VLS_ctx.localForm.productOptions),
    }));
    const __VLS_19 = __VLS_18({
        getValueKey: "label",
        displayKey: "label",
        placeholder: "Select product",
        options: (__VLS_ctx.productOptions),
        modelValue: (__VLS_ctx.localForm.productOptions),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    // @ts-ignore
    [activeTab, productOptions, localForm,];
    var __VLS_14;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        title: "Minimum Quantity",
    }));
    const __VLS_24 = __VLS_23({
        title: "Minimum Quantity",
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    const { default: __VLS_27 } = __VLS_25.slots;
    let __VLS_28;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
        inputId: "minimum-quantity",
        placeholder: "Minimum quantity",
        inputType: "number",
    }));
    const __VLS_30 = __VLS_29({
        inputId: "minimum-quantity",
        placeholder: "Minimum quantity",
        inputType: "number",
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    // @ts-ignore
    [];
    var __VLS_25;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_33;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
        title: "Maximum Quantity",
    }));
    const __VLS_35 = __VLS_34({
        title: "Maximum Quantity",
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    const { default: __VLS_38 } = __VLS_36.slots;
    let __VLS_39;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
        inputId: "maximum-quantity",
        placeholder: "Maximum quantity",
        inputType: "number",
    }));
    const __VLS_41 = __VLS_40({
        inputId: "maximum-quantity",
        placeholder: "Maximum quantity",
        inputType: "number",
    }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    // @ts-ignore
    [];
    var __VLS_36;
}
if (__VLS_ctx.activeTab === 'percentage_based_discount') {
    let __VLS_44;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
        title: "Discount Price",
    }));
    const __VLS_46 = __VLS_45({
        title: "Discount Price",
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const { default: __VLS_49 } = __VLS_47.slots;
    let __VLS_50;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
        inputId: "discount-price",
        placeholder: "Discount",
        inputType: "number",
    }));
    const __VLS_52 = __VLS_51({
        inputId: "discount-price",
        placeholder: "Discount",
        inputType: "number",
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    // @ts-ignore
    [activeTab,];
    var __VLS_47;
}
if (__VLS_ctx.activeTab === 'bulk_product') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row g-3" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    let __VLS_55;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
        title: "Quantity",
    }));
    const __VLS_57 = __VLS_56({
        title: "Quantity",
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const { default: __VLS_60 } = __VLS_58.slots;
    let __VLS_61;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
        inputId: "quantity",
        placeholder: "Quantity",
        inputType: "number",
    }));
    const __VLS_63 = __VLS_62({
        inputId: "quantity",
        placeholder: "Quantity",
        inputType: "number",
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    // @ts-ignore
    [activeTab,];
    var __VLS_58;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_66;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
        title: "Discount Type",
    }));
    const __VLS_68 = __VLS_67({
        title: "Discount Type",
    }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    const { default: __VLS_71 } = __VLS_69.slots;
    let __VLS_72;
    /** @ts-ignore @type {typeof __VLS_components.Select} */
    Select;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
        getValueKey: "label",
        displayKey: "label",
        placeholder: "Select discount type",
        options: (__VLS_ctx.priceDiscount),
        modelValue: (__VLS_ctx.localForm.discountType),
    }));
    const __VLS_74 = __VLS_73({
        getValueKey: "label",
        displayKey: "label",
        placeholder: "Select discount type",
        options: (__VLS_ctx.priceDiscount),
        modelValue: (__VLS_ctx.localForm.discountType),
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    // @ts-ignore
    [localForm, priceDiscount,];
    var __VLS_69;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_77;
    /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77({
        title: "Value",
    }));
    const __VLS_79 = __VLS_78({
        title: "Value",
    }, ...__VLS_functionalComponentArgsRest(__VLS_78));
    const { default: __VLS_82 } = __VLS_80.slots;
    let __VLS_83;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
        inputId: "value",
        placeholder: "Value",
        inputType: "number",
    }));
    const __VLS_85 = __VLS_84({
        inputId: "value",
        placeholder: "Value",
        inputType: "number",
    }, ...__VLS_functionalComponentArgsRest(__VLS_84));
    // @ts-ignore
    [];
    var __VLS_80;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
