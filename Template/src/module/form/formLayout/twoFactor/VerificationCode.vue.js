import { ref } from 'vue';
import { getImages } from '@/utils';
const otpDigits = ref(Array(6).fill(''));
// Reference to the input fields for focus management
const inputs = ref([]);
// Handle input to move to the next field
const handleInput = (index) => {
    if (otpDigits.value[index].match(/^[0-9]$/)) {
        // Move to the next field if the input is a single digit
        if (index < otpDigits.value.length - 1) {
            inputs.value[index + 1].focus();
        }
    }
    else {
        // Clear the field if the input is invalid
        otpDigits.value[index] = '';
    }
};
// Handle key down to allow moving to the previous field with backspace
const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && otpDigits.value[index] === '' && index > 0) {
        inputs.value[index - 1].focus(); // Move focus to the previous field
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 h-100" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "authenticate" },
});
/** @type {__VLS_StyleScopedClasses['authenticate']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "pb-2" },
});
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('forms/authenticate.png')),
    alt: "authenticate",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col otp-generate" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
/** @type {__VLS_StyleScopedClasses['otp-generate']} */ ;
for (const [digit, index] of __VLS_vFor((__VLS_ctx.otpDigits))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onInput: (...[$event]) => {
                __VLS_ctx.handleInput(index);
                // @ts-ignore
                [getImages, otpDigits, handleInput,];
            } },
        ...{ onKeydown: (...[$event]) => {
                __VLS_ctx.handleKeyDown(index, $event);
                // @ts-ignore
                [handleKeyDown,];
            } },
        key: (index),
        type: "text",
        ...{ class: "form-control code-input" },
        maxlength: "1",
        value: (__VLS_ctx.otpDigits[index]),
        ref: "inputs",
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['code-input']} */ ;
    // @ts-ignore
    [otpDigits,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary w-100" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
});
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
