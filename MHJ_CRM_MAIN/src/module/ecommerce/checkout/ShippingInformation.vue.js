import { ref, defineAsyncComponent } from 'vue';
import { user } from '@/core/data/user';
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const AddressModal = defineAsyncComponent(() => import('@/module/ecommerce/checkout/AddressModal.vue'));
const userDetails = user;
const selectedShipping = ref('address-1');
const isModalOpen = ref(false);
function openModal() {
    isModalOpen.value = true;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "stepper-two row g-3 needs-validation shipping-wizard" },
    novalidate: true,
});
/** @type {__VLS_StyleScopedClasses['stepper-two']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
/** @type {__VLS_StyleScopedClasses['shipping-wizard']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-5 col-md-6 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "shipping-title" },
});
/** @type {__VLS_StyleScopedClasses['shipping-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openModal());
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-square-plus f-20" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-square-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['f-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3 mt-0 flex-column" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
for (const [address, index] of __VLS_vFor((__VLS_ctx.userDetails.addresses))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-wrapper border rounded-3 h-100 light-card" },
    });
    /** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['light-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "collect-address" },
    });
    /** @type {__VLS_StyleScopedClasses['collect-address']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex gap-2 align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check radio radio-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['radio']} */ ;
    /** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-check-input" },
        id: (address.radioId),
        type: "radio",
        name: "address",
        value: (address.radioId),
    });
    (__VLS_ctx.selectedShipping);
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-check-label mb-0" },
        for: (address.radioId),
    });
    /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    (__VLS_ctx.userDetails.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['card-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-pencil" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-pencil']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-trash-can" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-trash-can']} */ ;
    if (address.tag) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "badge badge-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['badge']} */ ;
        /** @type {__VLS_StyleScopedClasses['badge-primary']} */ ;
        (address.tag);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "shipping-address" },
    });
    /** @type {__VLS_StyleScopedClasses['shipping-address']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (address.address);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (address.pinCode);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (address.contact);
    // @ts-ignore
    [userDetails, userDetails, selectedShipping,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-7 col-md-6 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-7']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row shipping-method g-3 mt-0 flex-column" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['shipping-method']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 h-100 light-card" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['light-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check radio radio-primary" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['radio']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "shipping-choose3",
    type: "radio",
    name: "radio2",
    value: "option1",
    checked: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label mb-0" },
    for: "shipping-choose3",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 h-100 light-card" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['light-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check radio radio-primary" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['radio']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "shipping-choose4",
    type: "radio",
    name: "radio2",
    value: "option1",
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label mb-0" },
    for: "shipping-choose4",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.P | typeof __VLS_components.P} */
P;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 h-100 light-card" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['light-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check radio radio-primary" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['radio']} */ ;
/** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "shipping-choose6",
    type: "radio",
    name: "radio2",
    value: "option1",
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label mb-0" },
    for: "shipping-choose6",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('date'),
    inputType: ('date'),
    required: (false),
    ...{ class: ('future-date') },
}));
const __VLS_8 = __VLS_7({
    inputId: ('date'),
    inputType: ('date'),
    required: (false),
    ...{ class: ('future-date') },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['future-date']} */ ;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.AddressModal} */
AddressModal;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isModalOpen),
}));
const __VLS_13 = __VLS_12({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
let __VLS_16;
const __VLS_17 = {
    /** @type {typeof __VLS_16.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.isModalOpen = false);
        // @ts-ignore
        [isModalOpen, isModalOpen,];
    },
};
var __VLS_14;
var __VLS_15;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
