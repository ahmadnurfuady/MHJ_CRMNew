import { ref, reactive, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { validateForm } from '@/utils/validators/formValidators';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const StudentValidationPersonalInfo = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/studentValidationForm/StudentValidationPersonalInfo.vue'));
const StudentValidationProfile = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/studentValidationForm/StudentValidationProfile.vue'));
const StudentValidationSocialLinks = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardOne/studentValidationForm/StudentValidationSocialLinks.vue'));
const activeTab = ref(1);
const form = reactive({
    personalInfo: {
        name: initInputField(),
        email: initInputField(),
        password: initInputField(),
        confirmPassword: initInputField(),
    },
    profile: {
        profileImage: initInputField(),
        profileUrl: initInputField(),
        profileDescription: initInputField(),
    },
    socialLinks: {
        twitter: initInputField(),
        github: initInputField(),
        document: initInputField(),
        position: initSelectField(),
        whyThisPosition: initInputField(),
    },
});
const formSubmitted = ref(false);
const formGroup = ['personalInfo', 'profile', 'socialLinks'];
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
            nonRequiredField.value = ['profile_image'];
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
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Student Validation Form'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
    cardBodyClass: ('custom-input'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Student Validation Form'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
    cardBodyClass: ('custom-input'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "form-wizard" },
    id: "regForm",
});
/** @type {__VLS_StyleScopedClasses['form-wizard']} */ ;
if (__VLS_ctx.activeTab === 1) {
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.StudentValidationPersonalInfo} */
    StudentValidationPersonalInfo;
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
    /** @ts-ignore @type { | typeof __VLS_components.StudentValidationProfile} */
    StudentValidationProfile;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        form: (__VLS_ctx.form.profile),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_15 = __VLS_14({
        form: (__VLS_ctx.form.profile),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
}
if (__VLS_ctx.activeTab === 3) {
    let __VLS_18;
    /** @ts-ignore @type { | typeof __VLS_components.StudentValidationSocialLinks} */
    StudentValidationSocialLinks;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
        form: (__VLS_ctx.form.socialLinks),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_20 = __VLS_19({
        form: (__VLS_ctx.form.socialLinks),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-end pt-3" },
});
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleStep(-1));
            // @ts-ignore
            [activeTab, activeTab, activeTab, form, form, form, formSubmitted, formSubmitted, formSubmitted, handleStep,];
        } },
    ...{ class: "btn btn-secondary" },
    id: "prevBtn",
    type: "button",
    disabled: (__VLS_ctx.activeTab == 1),
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.handleStep(1));
            // @ts-ignore
            [activeTab, handleStep,];
        } },
    ...{ class: "btn btn-primary ms-2" },
    id: "nextBtn",
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
(__VLS_ctx.activeTab == 3 ? 'Submit' : 'Next');
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "step" },
});
/** @type {__VLS_StyleScopedClasses['step']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "step" },
});
/** @type {__VLS_StyleScopedClasses['step']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "step" },
});
/** @type {__VLS_StyleScopedClasses['step']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "step" },
});
/** @type {__VLS_StyleScopedClasses['step']} */ ;
// @ts-ignore
[activeTab,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
