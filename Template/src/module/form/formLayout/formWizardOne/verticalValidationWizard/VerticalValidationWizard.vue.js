import { ref, reactive, defineAsyncComponent } from 'vue';
import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common';
import { verticalValidation } from '@/core/data/forms/formLayout';
import { validateForm } from '@/utils/validators/formValidators';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const VerticalValidationPersonalInfo = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/verticalValidationWizard/VerticalValidationPersonalInfo.vue'));
const VerticalValidationCardInfo = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/verticalValidationWizard/VerticalValidationCardInfo.vue'));
const VerticalValidationNetBanking = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/verticalValidationWizard/VerticalValidationNetBanking.vue'));
const activeTab = ref(1);
const form = reactive({
    personalInfo: {
        firstName: initInputField(),
        lastName: initInputField(),
        email: initInputField(),
        state: initSelectField(),
        zip: initInputField(),
        contactNumber: initInputField(),
        infoCondition: initCheckboxField(),
    },
    cardInfo: {
        paymentMethod: '',
        recipientUsername: initInputField(),
        username: initInputField(),
        cardNumber: initInputField(),
        expiration: initInputField(),
        cvv: initInputField(),
        document: initInputField(),
        isCardInfoCorrect: initCheckboxField(),
    },
    netBanking: {
        bank: '',
        feedback: initInputField(),
        isBankingCorrect: initCheckboxField(),
    },
});
function handleTab(value) {
    if (value) {
        activeTab.value = value;
    }
}
const formSubmitted = ref(false);
const formGroup = ['personalInfo', 'cardInfo', 'netBanking'];
const nonRequiredField = ref([]);
function handleStep(value) {
    if (value == -1) {
        activeTab.value = activeTab.value - 1;
    }
    else if (value == 1 && activeTab.value <= 3) {
        formSubmitted.value = true;
        const currentFormKey = formGroup[activeTab.value - 1];
        const currentForm = form[currentFormKey];
        if (activeTab.value === 2) {
            nonRequiredField.value = ['document'];
        }
        if (currentForm) {
            const { isValid, formData } = validateForm(currentForm, nonRequiredField.value);
            if (isValid) {
                if (activeTab.value < 3) {
                    activeTab.value = activeTab.value + 1;
                }
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
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Vertical Validation Wizard'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Vertical Validation Wizard'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
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
    ...{ class: "vertical-main-wizard" },
});
/** @type {__VLS_StyleScopedClasses['vertical-main-wizard']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-xl-4 col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "nav flex-column header-vertical-wizard" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['header-vertical-wizard']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.verticalValidation))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTab(index + 1);
                // @ts-ignore
                [verticalValidation, handleTab,];
            } },
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.activeTab === index + 1 }) },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "vertical-wizard" },
    });
    /** @type {__VLS_StyleScopedClasses['vertical-wizard']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "stroke-icon-wizard" },
    });
    /** @type {__VLS_StyleScopedClasses['stroke-icon-wizard']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`fa-solid fa-${tab.icon}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "vertical-wizard-content" },
    });
    /** @type {__VLS_StyleScopedClasses['vertical-wizard-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (tab.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (tab.description);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 col-xl-8 col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.activeTab === 1) {
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.VerticalValidationPersonalInfo} */
    VerticalValidationPersonalInfo;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        form: (__VLS_ctx.form.personalInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_10 = __VLS_9({
        form: (__VLS_ctx.form.personalInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
if (__VLS_ctx.activeTab === 2) {
    let __VLS_13;
    /** @ts-ignore @type {typeof __VLS_components.VerticalValidationCardInfo} */
    VerticalValidationCardInfo;
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
    /** @ts-ignore @type {typeof __VLS_components.VerticalValidationNetBanking} */
    VerticalValidationNetBanking;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
        form: (__VLS_ctx.form.netBanking),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_20 = __VLS_19({
        form: (__VLS_ctx.form.netBanking),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 d-flex justify-content-end gap-2" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
if (__VLS_ctx.activeTab !== 1 && __VLS_ctx.activeTab !== __VLS_ctx.verticalValidation.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.activeTab !== 1 && __VLS_ctx.activeTab !== __VLS_ctx.verticalValidation.length))
                    return;
                __VLS_ctx.handleStep(-1);
                // @ts-ignore
                [verticalValidation, activeTab, activeTab, activeTab, activeTab, activeTab, form, form, form, formSubmitted, formSubmitted, formSubmitted, handleStep,];
            } },
        ...{ class: "btn btn-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
}
if (__VLS_ctx.activeTab >= 1 && __VLS_ctx.activeTab < __VLS_ctx.verticalValidation.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.activeTab >= 1 && __VLS_ctx.activeTab < __VLS_ctx.verticalValidation.length))
                    return;
                __VLS_ctx.handleStep(1);
                // @ts-ignore
                [verticalValidation, activeTab, activeTab, handleStep,];
            } },
        type: "submit",
        ...{ class: "btn btn-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
}
if (__VLS_ctx.activeTab === __VLS_ctx.verticalValidation.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.activeTab === __VLS_ctx.verticalValidation.length))
                    return;
                __VLS_ctx.handleStep(1);
                // @ts-ignore
                [verticalValidation, activeTab, handleStep,];
            } },
        type: "submit",
        ...{ class: "btn btn-success" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
