import { ref, reactive, defineAsyncComponent, onBeforeUnmount } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import { initInputField } from "@/core/data/common";
import { resetForm } from "@/utils/index";
import { validateForm } from "@/utils/validators/formValidators";
const InputWrapper = defineAsyncComponent(() => import("@/components/shared/formElements/InputWrapper.vue"));
const InputField = defineAsyncComponent(() => import("@/components/shared/formElements/InputField.vue"));
const props = withDefaults(defineProps(), {
    browserValidation: false,
});
const router = useRouter();
const formSubmitted = ref(false);
let form = reactive({
    firstName: initInputField(),
    lastName: initInputField(),
    email: initInputField(),
    password: initInputField(),
});
const showPassword = ref(false);
let timeoutRef = null;
function togglePassword() {
    showPassword.value = !showPassword.value;
}
function submit() {
    formSubmitted.value = true;
    const { isValid, formData } = validateForm(form);
    if (isValid) {
        toast.success(`First Name: ${formData.firstName}\n Last Name: ${formData.lastName}\n Email: ${formData.email}\n Password: ${formData.password}`);
        form = resetForm(form);
        formSubmitted.value = false;
        timeoutRef = setTimeout(() => {
            if (props.path)
                router.push(props.path);
        }, 1000);
    }
}
onBeforeUnmount(() => {
    if (timeoutRef)
        clearTimeout(timeoutRef);
});
const __VLS_defaults = {
    browserValidation: false,
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.submit();
            // @ts-ignore
            [submit,];
        } },
    ...{ class: "theme-form" },
});
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Your Name'),
    ...{ class: ('col-form-label pt-0') },
    required: (true),
}));
const __VLS_2 = __VLS_1({
    title: ('Your Name'),
    ...{ class: ('col-form-label pt-0') },
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.form.firstName),
    inputId: ('first-name'),
    placeholder: ('First name'),
}));
const __VLS_8 = __VLS_7({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('First name is required.'),
    modelValue: (__VLS_ctx.form.firstName),
    inputId: ('first-name'),
    placeholder: ('First name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.form.lastName),
    inputId: ('last-name'),
    placeholder: ('Last name'),
}));
const __VLS_13 = __VLS_12({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Last name is required.'),
    modelValue: (__VLS_ctx.form.lastName),
    inputId: ('last-name'),
    placeholder: ('Last name'),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
// @ts-ignore
[formSubmitted, formSubmitted, form, form,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
let __VLS_16;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    title: ('Email Address'),
    required: (true),
}));
const __VLS_18 = __VLS_17({
    title: ('Email Address'),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_21 } = __VLS_19.slots;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.form.email),
    inputId: ('email'),
    placeholder: ('test@gmail.com'),
    inputType: ('email'),
    browserValidation: (props.browserValidation),
}));
const __VLS_24 = __VLS_23({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Email is required.'),
    modelValue: (__VLS_ctx.form.email),
    inputId: ('email'),
    placeholder: ('test@gmail.com'),
    inputType: ('email'),
    browserValidation: (props.browserValidation),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
// @ts-ignore
[formSubmitted, form,];
var __VLS_19;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
let __VLS_27;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    title: ('Password'),
    required: (true),
}));
const __VLS_29 = __VLS_28({
    title: ('Password'),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
const { default: __VLS_32 } = __VLS_30.slots;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.InputField | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Password is required.'),
    modelValue: (__VLS_ctx.form.password),
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword ? 'text' : 'password'),
    browserValidation: (props.browserValidation),
}));
const __VLS_35 = __VLS_34({
    formSubmitted: (__VLS_ctx.formSubmitted),
    errorMessage: ('Password is required.'),
    modelValue: (__VLS_ctx.form.password),
    inputId: ('password'),
    placeholder: ('*********'),
    inputType: (__VLS_ctx.showPassword ? 'text' : 'password'),
    browserValidation: (props.browserValidation),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_38 } = __VLS_36.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.togglePassword();
            // @ts-ignore
            [formSubmitted, form, showPassword, togglePassword,];
        } },
    ...{ class: "show-hide" },
});
/** @type {__VLS_StyleScopedClasses['show-hide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: ({ show: !__VLS_ctx.showPassword }) },
});
/** @type {__VLS_StyleScopedClasses['show']} */ ;
// @ts-ignore
[showPassword,];
var __VLS_36;
// @ts-ignore
[];
var __VLS_30;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-group mb-0" },
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "checkbox-primary form-check-input" },
    id: "checkbox1",
    type: "checkbox",
});
/** @type {__VLS_StyleScopedClasses['checkbox-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "text-muted form-check-label" },
    for: "checkbox1",
});
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "ms-2" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary btn-block w-100 mt-3" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "text-muted mt-4 or" },
});
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['or']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "social mt-4" },
});
/** @type {__VLS_StyleScopedClasses['social']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-showcase" },
});
/** @type {__VLS_StyleScopedClasses['btn-showcase']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-light" },
    href: "https://www.linkedin.com/login",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    type: ('linkedin'),
    ...{ class: "txt-linkedin" },
}));
const __VLS_41 = __VLS_40({
    type: ('linkedin'),
    ...{ class: "txt-linkedin" },
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
/** @type {__VLS_StyleScopedClasses['txt-linkedin']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-light" },
    href: "https://twitter.com/login?lang=en",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
let __VLS_44;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    type: ('twitter'),
    ...{ class: "txt-twitter" },
}));
const __VLS_46 = __VLS_45({
    type: ('twitter'),
    ...{ class: "txt-twitter" },
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
/** @type {__VLS_StyleScopedClasses['txt-twitter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-light" },
    href: "https://www.facebook.com/",
    target: "_blank",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
let __VLS_49;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    type: ('facebook'),
    ...{ class: "txt-fb" },
}));
const __VLS_51 = __VLS_50({
    type: ('facebook'),
    ...{ class: "txt-fb" },
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
/** @type {__VLS_StyleScopedClasses['txt-fb']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-4 mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    ...{ class: "ms-2" },
    to: (props.path),
}));
const __VLS_56 = __VLS_55({
    ...{ class: "ms-2" },
    to: (props.path),
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
const { default: __VLS_59 } = __VLS_57.slots;
// @ts-ignore
[];
var __VLS_57;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
