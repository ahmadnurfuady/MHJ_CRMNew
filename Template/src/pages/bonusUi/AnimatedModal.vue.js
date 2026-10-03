import { defineAsyncComponent } from 'vue';
import { modalInValues, modalOutValues } from '@/core/data/bonusUI/animatedModal';
import { getImages } from '@/utils/index';
import { useAnimatedModal } from '@/composable/useAnimatedModal';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const AnimatedModals = defineAsyncComponent(() => import('@/module/bonusUi/animated/AnimatedModals.vue'));
const { modalValue, modalOpen, modalDialogClass, toastVisible, handlePosition, openModal, closeModal, } = useAnimatedModal();
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Modal with Animations'),
    border: (true),
    padding: (false),
    cardBodyClass: ('animated-modal-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Modal with Animations'),
    border: (true),
    padding: (false),
    cardBodyClass: ('animated-modal-wrapper'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { header5: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row common-align" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['common-align']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6 col-md-8" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "animate-img" },
    id: "animation-box",
});
/** @type {__VLS_StyleScopedClasses['animate-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card mb-0" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "animate-widget" },
});
/** @type {__VLS_StyleScopedClasses['animate-widget']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('slider/6.jpg')),
    alt: "Drawing-room",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center p-25" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-25']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-light" },
});
/** @type {__VLS_StyleScopedClasses['f-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "form-inline theme-form animated-modal" },
});
/** @type {__VLS_StyleScopedClasses['form-inline']} */ ;
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
/** @type {__VLS_StyleScopedClasses['animated-modal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "animated-modal-md-mb row" },
});
/** @type {__VLS_StyleScopedClasses['animated-modal-md-mb']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "col-md-2 mb-0 custom-col-2" },
});
/** @type {__VLS_StyleScopedClasses['col-md-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-col-2']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.modalValue.inValue),
    options: (__VLS_ctx.modalInValues),
    required: (false),
    showOptions: (true),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.modalValue.inValue),
    options: (__VLS_ctx.modalInValues),
    required: (false),
    showOptions: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
const __VLS_13 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.handlePosition($event, 'inValue');
            // @ts-ignore
            [getImages, modalValue, modalInValues, handlePosition,];
        } });
var __VLS_10;
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "animated-modal-md-mb row" },
});
/** @type {__VLS_StyleScopedClasses['animated-modal-md-mb']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "col-md-2 mb-0 custom-col-2" },
});
/** @type {__VLS_StyleScopedClasses['col-md-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-col-2']} */ ;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.modalValue.outValue),
    options: (__VLS_ctx.modalOutValues),
    required: (false),
    showOptions: (true),
}));
const __VLS_16 = __VLS_15({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.modalValue.outValue),
    options: (__VLS_ctx.modalOutValues),
    required: (false),
    showOptions: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
let __VLS_19;
const __VLS_20 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.handlePosition($event, 'outValue');
            // @ts-ignore
            [modalValue, handlePosition, modalOutValues,];
        } });
var __VLS_17;
var __VLS_18;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-2 text-center w-100" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openModal();
            // @ts-ignore
            [openModal,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
let __VLS_21;
/** @ts-ignore @type {typeof __VLS_components.AnimatedModals} */
AnimatedModals;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modalOpen),
    dialogClass: (__VLS_ctx.modalDialogClass),
}));
const __VLS_23 = __VLS_22({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.modalOpen),
    dialogClass: (__VLS_ctx.modalDialogClass),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_26;
const __VLS_27 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [modalOpen, modalDialogClass, closeModal,];
        } });
var __VLS_24;
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "animated-toast position-fixed bottom-0 end-0 p-3" },
});
/** @type {__VLS_StyleScopedClasses['animated-toast']} */ ;
/** @type {__VLS_StyleScopedClasses['position-fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast" },
    id: "liveToastFirst",
    role: "alert",
    ...{ class: ({ show: __VLS_ctx.toastVisible }) },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-header" },
});
/** @type {__VLS_StyleScopedClasses['toast-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "me-auto" },
});
/** @type {__VLS_StyleScopedClasses['me-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toastVisible = false;
            // @ts-ignore
            [toastVisible, toastVisible,];
        } },
    ...{ class: "btn-close" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body" },
    id: "toasts-body",
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.modalValue.inValue.data);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.modalValue.outValue.data);
// @ts-ignore
[modalValue, modalValue,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
