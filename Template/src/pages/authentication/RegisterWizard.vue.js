import { ref, reactive, watch, defineAsyncComponent } from 'vue';
import { initInputField, initSelectField } from '@/core/data/common';
import { registerTab } from '@/core/data/registerWizard';
import { getImages, calculateAge } from '@/utils/index';
import { validateForm } from '@/utils/validators/formValidators';
import { toast } from 'vue3-toastify';
const RegisterPersonalInfo = defineAsyncComponent(() => import('@/module/auth/RegisterPersonalInfo.vue'));
const RegisterAccountInfo = defineAsyncComponent(() => import('@/module/auth/RegisterAccountInfo.vue'));
const RegisterIdentityInfo = defineAsyncComponent(() => import('@/module/auth/RegisterIdentityInfo.vue'));
const RegisterAddressInfo = defineAsyncComponent(() => import('@/module/auth/RegisterAddressInfo.vue'));
const activeTab = ref(1);
const formSubmitted = ref(false);
const formGroup = ['personalInfo', 'accountInfo', 'identityInfo', 'addressInfo'];
const form = reactive({
    personalInfo: {
        firstName: initInputField(),
        lastName: initInputField(),
        contact: initInputField(),
    },
    accountInfo: {
        email: initInputField(),
        password: initInputField(),
        confirmPassword: initInputField(),
    },
    identityInfo: {
        dob: initInputField(),
        age: initInputField(),
        havePassword: initSelectField(),
    },
    addressInfo: {
        country: initSelectField(),
        state: initSelectField(),
        city: initSelectField(),
    },
});
watch(() => form.identityInfo.dob.data, (newDob) => {
    if (newDob) {
        const age = calculateAge(newDob);
        if (age) {
            form.identityInfo.age.data = age;
            form.identityInfo.age.errorMessage = '';
        }
    }
});
function handleStep(value) {
    if (value == -1) {
        activeTab.value = activeTab.value - 1;
    }
    else if (value == 1 && activeTab.value < registerTab.length) {
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
function finish() {
    formSubmitted.value = true;
    const currentFormKey = formGroup[activeTab.value - 1];
    const currentForm = form[currentFormKey];
    if (currentForm) {
        const { isValid } = validateForm(currentForm);
        if (isValid) {
            toast.success('Congratulation ! All step Done.');
            formSubmitted.value = false;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 p-0" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "theme-form" },
});
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "wizard-4" },
    id: "wizard",
});
/** @type {__VLS_StyleScopedClasses['wizard-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "anchor" },
});
/** @type {__VLS_StyleScopedClasses['anchor']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "logo text-start ps-0" },
    to: ('/'),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "logo text-start ps-0" },
    to: ('/'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-light" },
    src: (__VLS_ctx.getImages('logo/logo_dark.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid for-dark" },
    src: (__VLS_ctx.getImages('logo/logo.png')),
    alt: "logo",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['for-dark']} */ ;
// @ts-ignore
[getImages, getImages,];
var __VLS_3;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.registerTab))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
        ...{ class: (tab.id == __VLS_ctx.activeTab
                ? 'selected'
                : tab.id < __VLS_ctx.activeTab
                    ? 'done'
                    : tab.id > __VLS_ctx.activeTab
                        ? 'disabled'
                        : '') },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (index + 1);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    (tab.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    (tab.description);
    // @ts-ignore
    [registerTab, activeTab, activeTab, activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.getImages('login/signup.png')),
    alt: "image",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "step-container login-card" },
});
/** @type {__VLS_StyleScopedClasses['step-container']} */ ;
/** @type {__VLS_StyleScopedClasses['login-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
if (__VLS_ctx.activeTab === 1) {
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.RegisterPersonalInfo} */
    RegisterPersonalInfo;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        form: (__VLS_ctx.form.personalInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_8 = __VLS_7({
        form: (__VLS_ctx.form.personalInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
if (__VLS_ctx.activeTab === 2) {
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.RegisterAccountInfo} */
    RegisterAccountInfo;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        form: (__VLS_ctx.form.accountInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_13 = __VLS_12({
        form: (__VLS_ctx.form.accountInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
}
if (__VLS_ctx.activeTab === 3) {
    let __VLS_16;
    /** @ts-ignore @type {typeof __VLS_components.RegisterIdentityInfo} */
    RegisterIdentityInfo;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
        form: (__VLS_ctx.form.identityInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_18 = __VLS_17({
        form: (__VLS_ctx.form.identityInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
}
if (__VLS_ctx.activeTab === 4) {
    let __VLS_21;
    /** @ts-ignore @type {typeof __VLS_components.RegisterAddressInfo} */
    RegisterAddressInfo;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
        form: (__VLS_ctx.form.addressInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }));
    const __VLS_23 = __VLS_22({
        form: (__VLS_ctx.form.addressInfo),
        formSubmitted: (__VLS_ctx.formSubmitted),
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "action-bar" },
});
/** @type {__VLS_StyleScopedClasses['action-bar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.activeTab == __VLS_ctx.registerTab.length ? __VLS_ctx.finish() : __VLS_ctx.handleStep(1);
            // @ts-ignore
            [getImages, registerTab, activeTab, activeTab, activeTab, activeTab, activeTab, form, form, form, form, formSubmitted, formSubmitted, formSubmitted, formSubmitted, finish, handleStep,];
        } },
    ...{ class: "btn btn-primary" },
    id: "nextbtn",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
(__VLS_ctx.activeTab == __VLS_ctx.registerTab.length ? 'Finish' : 'Next');
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleStep(-1);
            // @ts-ignore
            [registerTab, activeTab, handleStep,];
        } },
    ...{ class: "btn btn-primary" },
    id: "backbtn",
    disabled: (__VLS_ctx.activeTab == 1),
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[activeTab,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
