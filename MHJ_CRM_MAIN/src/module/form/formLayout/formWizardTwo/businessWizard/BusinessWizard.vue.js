import { ref, reactive, defineAsyncComponent } from 'vue';
import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common';
import { businessWizard } from '@/core/data/forms/formLayout';
import { validateForm } from '@/utils/validators/formValidators';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const BusinessWizardChooseAccount = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardChooseAccount.vue'));
const BusinessWizardBusinessSetting = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardBusinessSetting.vue'));
const BusinessWizardContactDetails = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardContactDetails.vue'));
const BusinessWizardPayDetails = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardPayDetails.vue'));
const BusinessWizardComplete = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardComplete.vue'));
const props = withDefaults(defineProps(), {
    title: 'Business Vertical Wizard',
});
const activeTab = ref(1);
const form = reactive({
    account: {
        accountType: '',
    },
    businessSetting: {
        accountName: initInputField(),
        email: initInputField(),
        projectDescription: initInputField(),
        project: [],
    },
    contactDetails: {
        organizationName: initInputField(),
        email: initInputField(),
        organizationType: initSelectField(),
        organizationDescription: initInputField(),
    },
    payDetails: {
        cardHolder: initInputField(),
        cardNumber: initInputField(),
        expiration: initInputField(),
        cvv: initInputField(),
        isInformationCorrect: initCheckboxField(),
    },
});
const formSubmitted = ref(false);
const formGroup = ['account', 'businessSetting', 'contactDetails', 'payDetails'];
function handleTab(value) {
    if (value) {
        activeTab.value = value;
    }
}
function handleStep(value) {
    if (value == -1) {
        activeTab.value = activeTab.value - 1;
    }
    else if (value == 1 && activeTab.value < businessWizard.length) {
        formSubmitted.value = true;
        const currentFormKey = formGroup[activeTab.value - 1];
        const currentForm = form[currentFormKey];
        if (currentForm) {
            const { isValid, formData } = validateForm(currentForm);
            if (isValid) {
                activeTab.value = activeTab.value + 1;
                formSubmitted.value = false;
            }
        }
        else {
            activeTab.value = activeTab.value + 1;
        }
    }
}
const __VLS_defaults = {
    title: 'Business Vertical Wizard',
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: (props.title),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: (props.title),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "horizontal-wizard-wrapper vertical-variations" },
    ...{ class: ({ 'vertical-options': __VLS_ctx.type === 'vertical' }) },
});
/** @type {__VLS_StyleScopedClasses['horizontal-wizard-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['vertical-variations']} */ ;
/** @type {__VLS_StyleScopedClasses['vertical-options']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 main-horizontal-header" },
    ...{ class: ({ 'col-xl-3': __VLS_ctx.type === 'vertical' }) },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['main-horizontal-header']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "nav nav-pills horizontal-options" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-pills']} */ ;
/** @type {__VLS_StyleScopedClasses['horizontal-options']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.businessWizard))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.handleTab(index + 1));
                // @ts-ignore
                [type, type, businessWizard, handleTab,];
            } },
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.activeTab === index + 1 }) },
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "horizontal-wizard" },
    });
    /** @type {__VLS_StyleScopedClasses['horizontal-wizard']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "stroke-icon-wizard" },
    });
    /** @type {__VLS_StyleScopedClasses['stroke-icon-wizard']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (tab.id);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "horizontal-wizard-content" },
    });
    /** @type {__VLS_StyleScopedClasses['horizontal-wizard-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (tab.title);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
    ...{ class: ({ 'col-xl-9': __VLS_ctx.type === 'vertical' }) },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content dark-field" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-field']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.activeTab === 1) {
    let __VLS_7;
    /** @ts-ignore @type { | typeof __VLS_components.BusinessWizardChooseAccount} */
    BusinessWizardChooseAccount;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        form: (__VLS_ctx.form.account),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_9 = __VLS_8({
        form: (__VLS_ctx.form.account),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
}
if (__VLS_ctx.activeTab === 2) {
    let __VLS_12;
    /** @ts-ignore @type { | typeof __VLS_components.BusinessWizardBusinessSetting} */
    BusinessWizardBusinessSetting;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        form: (__VLS_ctx.form.businessSetting),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_14 = __VLS_13({
        form: (__VLS_ctx.form.businessSetting),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
if (__VLS_ctx.activeTab === 3) {
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.BusinessWizardContactDetails} */
    BusinessWizardContactDetails;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        form: (__VLS_ctx.form.contactDetails),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_19 = __VLS_18({
        form: (__VLS_ctx.form.contactDetails),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
}
if (__VLS_ctx.activeTab === 4) {
    let __VLS_22;
    /** @ts-ignore @type { | typeof __VLS_components.BusinessWizardPayDetails} */
    BusinessWizardPayDetails;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        form: (__VLS_ctx.form.payDetails),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_24 = __VLS_23({
        form: (__VLS_ctx.form.payDetails),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
}
if (__VLS_ctx.activeTab === 5) {
    let __VLS_27;
    /** @ts-ignore @type { | typeof __VLS_components.BusinessWizardComplete} */
    BusinessWizardComplete;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex justify-content-end mt-4" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
if (__VLS_ctx.activeTab !== 1 && __VLS_ctx.activeTab !== __VLS_ctx.businessWizard.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.activeTab !== 1 && __VLS_ctx.activeTab !== __VLS_ctx.businessWizard.length))
                    throw 0;
                return (__VLS_ctx.handleStep(-1));
                // @ts-ignore
                [type, businessWizard, activeTab, activeTab, activeTab, activeTab, activeTab, activeTab, activeTab, form, form, form, form, formSubmitted, formSubmitted, formSubmitted, formSubmitted, handleStep,];
            } },
        ...{ class: "btn btn-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
}
if (__VLS_ctx.activeTab >= 1 && __VLS_ctx.activeTab < __VLS_ctx.businessWizard.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.activeTab >= 1 && __VLS_ctx.activeTab < __VLS_ctx.businessWizard.length))
                    throw 0;
                return (__VLS_ctx.handleStep(1));
                // @ts-ignore
                [businessWizard, activeTab, activeTab, handleStep,];
            } },
        type: "submit",
        ...{ class: "btn btn-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
