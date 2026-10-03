import { ref, onMounted, defineAsyncComponent } from 'vue';
import { initInputField } from '@/core/data/common';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const deliveryForm = ref({
    title: initInputField(),
    description: initInputField(),
    sameDayTitle: initInputField(),
    sameDayDescription: initInputField(),
    slots: [],
});
onMounted(async () => {
    deliveryForm.value.title.data = 'Standard Delivery';
    deliveryForm.value.description.data = 'Approx 2 to 5 Days';
    deliveryForm.value.sameDayTitle.data = 'Express Delivery';
    deliveryForm.value.sameDayDescription.data = 'Schedule';
    deliveryForm.value.slots.push({
        title: { data: 'Morning', errorMessage: '' },
        time: { data: '8:00 AM – 12:00 PM', errorMessage: '' },
    });
});
function addSlot() {
    deliveryForm.value.slots.push({
        title: initInputField(),
        time: initInputField(),
    });
}
function removeSlot(index) {
    deliveryForm.value.slots.splice(index, 1);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Title'),
    ...{ class: ('col-md-3') },
}));
const __VLS_2 = __VLS_1({
    title: ('Title'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('title'),
    placeholder: ('Enter title'),
    modelValue: (__VLS_ctx.deliveryForm.title),
    required: (false),
}));
const __VLS_8 = __VLS_7({
    inputId: ('title'),
    placeholder: ('Enter title'),
    modelValue: (__VLS_ctx.deliveryForm.title),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[deliveryForm,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Description'),
    ...{ class: ('col-md-3') },
}));
const __VLS_13 = __VLS_12({
    title: ('Description'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_16 } = __VLS_14.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    inputId: ('description'),
    placeholder: ('Enter description'),
    modelValue: (__VLS_ctx.deliveryForm.description),
    required: (false),
}));
const __VLS_19 = __VLS_18({
    inputId: ('description'),
    placeholder: ('Enter description'),
    modelValue: (__VLS_ctx.deliveryForm.description),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
// @ts-ignore
[deliveryForm,];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Same Day Delivery'),
    ...{ class: ('col-md-3 col-sm-4 col-auto') },
}));
const __VLS_24 = __VLS_23({
    title: ('Same Day Delivery'),
    ...{ class: ('col-md-3 col-sm-4 col-auto') },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
const { default: __VLS_27 } = __VLS_25.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9 col-sm-8 col-auto" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check form-switch form-check-inline" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check form-switch form-check-inline" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input switch-primary check-size" },
    type: "checkbox",
    role: "switch",
    checked: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
/** @type {__VLS_StyleScopedClasses['switch-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['check-size']} */ ;
// @ts-ignore
[];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    title: ('Title'),
    ...{ class: ('col-md-3') },
}));
const __VLS_30 = __VLS_29({
    title: ('Title'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_33 } = __VLS_31.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_34;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent1(__VLS_34, new __VLS_34({
    inputId: ('title'),
    placeholder: ('Enter title'),
    modelValue: (__VLS_ctx.deliveryForm.sameDayTitle),
    required: (false),
}));
const __VLS_36 = __VLS_35({
    inputId: ('title'),
    placeholder: ('Enter title'),
    modelValue: (__VLS_ctx.deliveryForm.sameDayTitle),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
// @ts-ignore
[deliveryForm,];
var __VLS_31;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    title: ('Description'),
    ...{ class: ('col-md-3') },
}));
const __VLS_41 = __VLS_40({
    title: ('Description'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_44 } = __VLS_42.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_45;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
    inputId: ('description'),
    placeholder: ('Enter description'),
    modelValue: (__VLS_ctx.deliveryForm.sameDayDescription),
    required: (false),
}));
const __VLS_47 = __VLS_46({
    inputId: ('description'),
    placeholder: ('Enter description'),
    modelValue: (__VLS_ctx.deliveryForm.sameDayDescription),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
// @ts-ignore
[deliveryForm,];
var __VLS_42;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "col-md-3 form-label" },
});
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "panel panel-default" },
});
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-default']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "panel-body" },
});
/** @type {__VLS_StyleScopedClasses['panel-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "delivery_fields",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group-btn" },
});
/** @type {__VLS_StyleScopedClasses['input-group-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.addSlot) },
    ...{ class: "btn btn-success mb-4" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "fa-solid fa-plus me-1" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['me-1']} */ ;
for (const [items, index] of __VLS_vFor((__VLS_ctx.deliveryForm.slots))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row g-2" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_50;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
        inputId: ('slot-title-' + index),
        placeholder: ('Enter title'),
        modelValue: (items.title),
        required: (false),
    }));
    const __VLS_52 = __VLS_51({
        inputId: ('slot-title-' + index),
        placeholder: ('Enter title'),
        modelValue: (items.title),
        required: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    let __VLS_55;
    /** @ts-ignore @type {typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
        inputId: ('slot-time-' + index),
        placeholder: ('Enter time'),
        modelValue: (items.time),
        required: (false),
    }));
    const __VLS_57 = __VLS_56({
        inputId: ('slot-time-' + index),
        placeholder: ('Enter time'),
        modelValue: (items.time),
        required: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    if (__VLS_ctx.deliveryForm.slots.length > 1 && index != 0) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "clear" },
        });
        /** @type {__VLS_StyleScopedClasses['clear']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.deliveryForm.slots.length > 1 && index != 0))
                        return;
                    __VLS_ctx.removeSlot(index);
                    // @ts-ignore
                    [deliveryForm, deliveryForm, addSlot, removeSlot,];
                } },
            ...{ class: "btn btn-danger" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
