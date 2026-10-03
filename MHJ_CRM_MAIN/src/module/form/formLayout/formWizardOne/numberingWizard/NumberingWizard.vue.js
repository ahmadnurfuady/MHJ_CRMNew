import { ref, reactive, defineAsyncComponent } from 'vue';
import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common';
import { numberingWizardTabs } from '@/core/data/forms/formLayout';
import { validateForm } from '@/utils/validators/formValidators';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const NumericWizardBasicInfo = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardBasicInfo.vue'));
const NumericWizardCardInfo = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardCardInfo.vue'));
const NumericWizardFeedback = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardFeedback.vue'));
const NumericWizardCompleted = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardCompleted.vue'));
const numberingTabs = ref(numberingWizardTabs);
const activeTab = ref(1);
const form = reactive({
    basicInfo: {
        email: initInputField(),
        firstName: initInputField(),
        password: initInputField(),
        confirmPassword: initInputField(),
        basicInfoAgreement: initCheckboxField(),
    },
    cardInfo: {
        placeholderName: initInputField(),
        cardNumber: initInputField(),
        expiration: initInputField(),
        cvv: initInputField(),
        uploadDocument: initInputField(),
        isInformationCorrect: initCheckboxField(),
    },
    feedback: {
        linkedIn: initInputField(),
        github: initInputField(),
        state: initSelectField(),
        feedback: initInputField(),
        feedbackAgreement: initCheckboxField(),
    },
});
const formSubmitted = ref(false);
const formGroup = ['basicInfo', 'cardInfo', 'feedback'];
const nonRequiredField = ref([]);
function handleStep(value) {
    if (value == -1) {
        activeTab.value = activeTab.value - 1;
    }
    else if (value == 1 && activeTab.value < numberingTabs.value.length) {
        formSubmitted.value = true;
        const currentFormKey = formGroup[activeTab.value - 1];
        const currentForm = form[currentFormKey];
        if (activeTab.value === 2) {
            nonRequiredField.value = ['uploadDocument'];
        }
        if (currentForm) {
            const { isValid, formData } = validateForm(currentForm, nonRequiredField.value);
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
const __VLS_ctx = {
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
    headerTitle: ('Numbering Wizard'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
    cardBodyClass: ('basic-wizard important-validation'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Numbering Wizard'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
    cardBodyClass: ('basic-wizard important-validation'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stepper-horizontal custom-scrollbar" },
    id: "stepper1",
});
/** @type {__VLS_StyleScopedClasses['stepper-horizontal']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.numberingTabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: ([
                `stepper-${tab.class}`,
                {
                    'active done': tab.id < __VLS_ctx.activeTab ||
                        (__VLS_ctx.activeTab === __VLS_ctx.numberingTabs.length && tab.id === __VLS_ctx.numberingTabs.length),
                },
            ]) },
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
    [numberingTabs, numberingTabs, numberingTabs, activeTab, activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "msform",
});
if (__VLS_ctx.activeTab === 1) {
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.NumericWizardBasicInfo} */
    NumericWizardBasicInfo;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        form: (__VLS_ctx.form.basicInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_10 = __VLS_9({
        form: (__VLS_ctx.form.basicInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
if (__VLS_ctx.activeTab === 2) {
    let __VLS_13;
    /** @ts-ignore @type { | typeof __VLS_components.NumericWizardCardInfo} */
    NumericWizardCardInfo;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        form: (__VLS_ctx.form.cardInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_15 = __VLS_14({
        form: (__VLS_ctx.form.cardInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
}
if (__VLS_ctx.activeTab === 3) {
    let __VLS_18;
    /** @ts-ignore @type { | typeof __VLS_components.NumericWizardFeedback} */
    NumericWizardFeedback;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
        form: (__VLS_ctx.form.feedback),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_20 = __VLS_19({
        form: (__VLS_ctx.form.feedback),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
}
if (__VLS_ctx.activeTab === 4) {
    let __VLS_23;
    /** @ts-ignore @type { | typeof __VLS_components.NumericWizardCompleted} */
    NumericWizardCompleted;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({}));
    const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
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
            return (__VLS_ctx.handleStep(-1));
            // @ts-ignore
            [activeTab, activeTab, activeTab, activeTab, form, form, form, formSubmitted, formSubmitted, formSubmitted, handleStep,];
        } },
    ...{ class: "btn button-light-primary" },
    id: "backbtn",
    disabled: (__VLS_ctx.activeTab == 1),
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleStep(1));
            // @ts-ignore
            [activeTab, handleStep,];
        } },
    ...{ class: "btn btn-primary" },
    id: "nextbtn",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
(__VLS_ctx.activeTab == __VLS_ctx.numberingTabs.length ? 'Finish' : 'Next');
// @ts-ignore
[numberingTabs, activeTab,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
