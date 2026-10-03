import { ref, defineAsyncComponent } from 'vue';
import { addSellerTabs } from '@/core/data/seller';
import { getImages } from '@/utils/index';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const SellerPersonalInfo = defineAsyncComponent(() => import('@/module/ecommerce/seller/SellerPersonalInfo.vue'));
const CompanyContactDetails = defineAsyncComponent(() => import('@/module/ecommerce/seller/CompanyContactDetails.vue'));
const CompanyOverview = defineAsyncComponent(() => import('@/module/ecommerce/seller/CompanyOverview.vue'));
const FinancialInfo = defineAsyncComponent(() => import('@/module/ecommerce/seller/FinancialInfo.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
const activeTab = ref(1);
function closeModal() {
    emits('closeModal');
}
function handleStep(value) {
    if (value == -1) {
        activeTab.value = activeTab.value - 1;
    }
    else if (value == 1 && activeTab.value < addSellerTabs.length) {
        activeTab.value = activeTab.value + 1;
    }
    else if (activeTab.value == 5) {
        activeTab.value = 1;
        closeModal();
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Add Seller'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-xl'),
    contentClass: ('add-seller-modal'),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Add Seller'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-xl'),
    contentClass: ('add-seller-modal'),
    modalCentered: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [closeModal,];
        } });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body basic-wizard important-validation" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['basic-wizard']} */ ;
/** @type {__VLS_StyleScopedClasses['important-validation']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stepper-horizontal custom-scrollbar" },
    id: "stepper1",
});
/** @type {__VLS_StyleScopedClasses['stepper-horizontal']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.addSellerTabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: ([
                `stepper-${tab.class}`,
                {
                    'active done': tab.id < __VLS_ctx.activeTab ||
                        (__VLS_ctx.activeTab === __VLS_ctx.addSellerTabs.length && tab.id === __VLS_ctx.addSellerTabs.length),
                },
            ]) },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['done']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-circle" },
    });
    /** @type {__VLS_StyleScopedClasses['step-circle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (tab.id);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-title" },
    });
    /** @type {__VLS_StyleScopedClasses['step-title']} */ ;
    (tab.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-bar-left" },
    });
    /** @type {__VLS_StyleScopedClasses['step-bar-left']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "step-bar-right" },
    });
    /** @type {__VLS_StyleScopedClasses['step-bar-right']} */ ;
    // @ts-ignore
    [addSellerTabs, addSellerTabs, addSellerTabs, activeTab, activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "form",
});
if (__VLS_ctx.activeTab === 1) {
    let __VLS_9;
    /** @ts-ignore @type {typeof __VLS_components.SellerPersonalInfo} */
    SellerPersonalInfo;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
}
if (__VLS_ctx.activeTab === 2) {
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.CompanyContactDetails} */
    CompanyContactDetails;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
}
if (__VLS_ctx.activeTab === 3) {
    let __VLS_19;
    /** @ts-ignore @type {typeof __VLS_components.CompanyOverview} */
    CompanyOverview;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
}
if (__VLS_ctx.activeTab === 4) {
    let __VLS_24;
    /** @ts-ignore @type {typeof __VLS_components.FinancialInfo} */
    FinancialInfo;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
}
if (__VLS_ctx.activeTab === 5) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ class: "stepper-five row g-3 needs-validation" },
        novalidate: true,
    });
    /** @type {__VLS_StyleScopedClasses['stepper-five']} */ ;
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12 m-0" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "successful-form" },
    });
    /** @type {__VLS_StyleScopedClasses['successful-form']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (`${__VLS_ctx.getImages('gif/dashboard-8/successful.gif')}`),
        alt: "successful",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "wizard-footer d-flex gap-2 justify-content-end" },
});
/** @type {__VLS_StyleScopedClasses['wizard-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleStep(-1);
            // @ts-ignore
            [activeTab, activeTab, activeTab, activeTab, activeTab, getImages, handleStep,];
        } },
    ...{ class: "btn button-light-primary" },
    id: "back-btn",
    disabled: (__VLS_ctx.activeTab == 1),
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleStep(1);
            // @ts-ignore
            [activeTab, handleStep,];
        } },
    ...{ class: "btn btn-primary" },
    id: "next-btn",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
(__VLS_ctx.activeTab == __VLS_ctx.addSellerTabs.length ? 'Finish' : 'Next');
// @ts-ignore
[addSellerTabs, activeTab,];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
