import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { country } from '@/core/data/country';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
const infoForm = ref({
    country: initSelectField(),
    state: initSelectField(),
});
const states = ref([]);
function countryChange(value) {
    if (value && value.selected && value.selected.data) {
        states.value = value.selected.data;
    }
}
function closeModal() {
    emits('closeModal');
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
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Add Address'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-lg'),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Add Address'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-lg'),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.closeModal());
        // @ts-ignore
        [closeModal,];
    },
};
var __VLS_7;
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3 needs-validation" },
    novalidate: true,
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_9;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
    title: ('Name'),
}));
const __VLS_11 = __VLS_10({
    title: ('Name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
const { default: __VLS_14 } = __VLS_12.slots;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    inputId: ('name'),
    placeholder: ('Enter name'),
    required: (false),
}));
const __VLS_17 = __VLS_16({
    inputId: ('name'),
    placeholder: ('Enter name'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[];
var __VLS_12;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    title: ('Current Address'),
}));
const __VLS_22 = __VLS_21({
    title: ('Current Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_25 } = __VLS_23.slots;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    inputId: ('current-address'),
    placeholder: ('Enter your current address'),
    inputType: ('textarea'),
    required: (false),
}));
const __VLS_28 = __VLS_27({
    inputId: ('current-address'),
    placeholder: ('Enter your current address'),
    inputType: ('textarea'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
// @ts-ignore
[];
var __VLS_23;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_31;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    title: ('Country'),
}));
const __VLS_33 = __VLS_32({
    title: ('Country'),
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
let __VLS_37;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.infoForm.country),
    options: (__VLS_ctx.country),
    required: (false),
}));
const __VLS_39 = __VLS_38({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select country'),
    modelValue: (__VLS_ctx.infoForm.country),
    options: (__VLS_ctx.country),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_42;
const __VLS_43 = {
    /** @type {typeof __VLS_42.'update:modelValue'} */
    'onUpdate:modelValue': (...[$event]) => {
        return (__VLS_ctx.countryChange($event));
        // @ts-ignore
        [infoForm, country, countryChange,];
    },
};
var __VLS_40;
var __VLS_41;
// @ts-ignore
[];
var __VLS_34;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    title: ('State'),
}));
const __VLS_46 = __VLS_45({
    title: ('State'),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
let __VLS_50;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.infoForm.state),
    options: (__VLS_ctx.states),
    required: (false),
}));
const __VLS_52 = __VLS_51({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select state'),
    modelValue: (__VLS_ctx.infoForm.state),
    options: (__VLS_ctx.states),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
// @ts-ignore
[infoForm, states,];
var __VLS_47;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_55;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    title: ('City'),
}));
const __VLS_57 = __VLS_56({
    title: ('City'),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
const { default: __VLS_60 } = __VLS_58.slots;
let __VLS_61;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    inputId: ('city'),
    placeholder: ('Enter city'),
    required: (false),
}));
const __VLS_63 = __VLS_62({
    inputId: ('city'),
    placeholder: ('Enter city'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
// @ts-ignore
[];
var __VLS_58;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_66;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
    title: ('Postal Code'),
}));
const __VLS_68 = __VLS_67({
    title: ('Postal Code'),
}, ...__VLS_functionalComponentArgsRest(__VLS_67));
const { default: __VLS_71 } = __VLS_69.slots;
let __VLS_72;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
    inputId: ('postal-code'),
    placeholder: ('Enter postal code'),
    required: (false),
}));
const __VLS_74 = __VLS_73({
    inputId: ('postal-code'),
    placeholder: ('Enter postal code'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
// @ts-ignore
[];
var __VLS_69;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_77;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77({
    title: ('Contact Number'),
}));
const __VLS_79 = __VLS_78({
    title: ('Contact Number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
const { default: __VLS_82 } = __VLS_80.slots;
let __VLS_83;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    inputId: ('contact-number'),
    placeholder: ('Enter contact number'),
    inputType: ('number'),
    required: (false),
}));
const __VLS_85 = __VLS_84({
    inputId: ('contact-number'),
    placeholder: ('Enter contact number'),
    inputType: ('number'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
// @ts-ignore
[];
var __VLS_80;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-footer gap-2 pb-0" },
});
/** @type {__VLS_StyleScopedClasses['modal-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeModal());
            // @ts-ignore
            [closeModal,];
        } },
    ...{ class: "btn button-light-primary m-0" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary m-0" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
