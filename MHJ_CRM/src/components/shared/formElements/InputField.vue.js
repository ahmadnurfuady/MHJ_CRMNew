import { useInputField } from '@/composable/useInputField';
const props = withDefaults(defineProps(), {
    inputType: 'text',
    required: true,
    rows: 3,
    multiple: false,
    helperText: '',
    disabled: false,
    tooltipValidation: false,
    browserValidation: false,
    animation: false,
    datalist: () => [],
    isPlaceholder: true,
    showLengthBadge: false,
    formatValue: false,
    formatFunction: null,
});
const emit = defineEmits(['update:modelValue', 'badgeVisible']);
const { onInput, onFileChange, showBadge, hideBadge, animationClass } = useInputField(props, emit);
const __VLS_defaults = {
    inputType: 'text',
    required: true,
    rows: 3,
    multiple: false,
    helperText: '',
    disabled: false,
    tooltipValidation: false,
    browserValidation: false,
    animation: false,
    datalist: () => [],
    isPlaceholder: true,
    showLengthBadge: false,
    formatValue: false,
    formatFunction: null,
};
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
if (__VLS_ctx.inputType !== 'textarea' && __VLS_ctx.inputType !== 'file') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onInput: (__VLS_ctx.onInput) },
        ...{ onFocusout: (__VLS_ctx.onInput) },
        ...{ onFocus: (...[$event]) => {
                if (!(__VLS_ctx.inputType !== 'textarea' && __VLS_ctx.inputType !== 'file'))
                    return;
                __VLS_ctx.showBadge();
                // @ts-ignore
                [inputType, inputType, onInput, onInput, showBadge,];
            } },
        ...{ onBlur: (...[$event]) => {
                if (!(__VLS_ctx.inputType !== 'textarea' && __VLS_ctx.inputType !== 'file'))
                    return;
                __VLS_ctx.hideBadge();
                // @ts-ignore
                [hideBadge,];
            } },
        value: (__VLS_ctx.modelValue?.data ? __VLS_ctx.modelValue?.data : ''),
        type: (__VLS_ctx.inputType),
        id: (__VLS_ctx.inputId),
        placeholder: (__VLS_ctx.isPlaceholder ? __VLS_ctx.placeholder || 'Enter Value' : undefined),
        ...{ class: "form-control" },
        ...{ class: ([
                props.class,
                { 'is-invalid ': __VLS_ctx.modelValue?.errorMessage && !props.browserValidation },
                { 'animated input-shake': __VLS_ctx.animationClass },
            ]) },
        required: (props?.required && props.browserValidation),
        disabled: (props.disabled),
        list: (props.datalist?.length ? `datalistOptions-${__VLS_ctx.inputId}` : undefined),
        maxlength: (props.maxLength),
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-invalid']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['animated']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-shake']} */ ;
}
if (props.datalist?.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.datalist, __VLS_intrinsics.datalist)({
        id: (`datalistOptions-${__VLS_ctx.inputId}`),
    });
    for (const [item] of __VLS_vFor((props.datalist))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.option)({
            key: (item.label),
            value: (item.label),
        });
        // @ts-ignore
        [inputType, modelValue, modelValue, modelValue, inputId, inputId, inputId, isPlaceholder, placeholder, animationClass,];
    }
}
else if (__VLS_ctx.inputType == 'textarea') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea)({
        ...{ onInput: (__VLS_ctx.onInput) },
        ...{ onFocusout: (__VLS_ctx.onInput) },
        ...{ onFocus: (...[$event]) => {
                if (!!(props.datalist?.length))
                    return;
                if (!(__VLS_ctx.inputType == 'textarea'))
                    return;
                __VLS_ctx.showBadge();
                // @ts-ignore
                [inputType, onInput, onInput, showBadge,];
            } },
        ...{ onBlur: (...[$event]) => {
                if (!!(props.datalist?.length))
                    return;
                if (!(__VLS_ctx.inputType == 'textarea'))
                    return;
                __VLS_ctx.hideBadge();
                // @ts-ignore
                [hideBadge,];
            } },
        value: (__VLS_ctx.modelValue?.data ? __VLS_ctx.modelValue?.data : ''),
        id: (__VLS_ctx.inputId),
        placeholder: (__VLS_ctx.isPlaceholder ? __VLS_ctx.placeholder || 'Enter Value' : undefined),
        rows: (__VLS_ctx.rows),
        ...{ class: "form-control" },
        ...{ class: ([
                props.class,
                { 'is-invalid': __VLS_ctx.modelValue?.errorMessage && !props.browserValidation },
                { 'error animated input-shake': __VLS_ctx.animationClass },
            ]) },
        required: (props.required && props.browserValidation),
        disabled: (props.disabled),
        maxlength: (props.maxLength),
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-invalid']} */ ;
    /** @type {__VLS_StyleScopedClasses['error']} */ ;
    /** @type {__VLS_StyleScopedClasses['animated']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-shake']} */ ;
}
else if (__VLS_ctx.inputType === 'file') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onChange: (__VLS_ctx.onFileChange) },
        type: "file",
        id: (__VLS_ctx.inputId),
        placeholder: (__VLS_ctx.isPlaceholder ? __VLS_ctx.placeholder || 'Enter Value' : undefined),
        multiple: (__VLS_ctx.multiple),
        ...{ class: "form-control" },
        ...{ class: ([
                props.class,
                { 'is-invalid': __VLS_ctx.modelValue?.errorMessage && !props.browserValidation },
                { 'error animated input-shake': __VLS_ctx.animationClass },
            ]) },
        required: (props.required && props.browserValidation),
        disabled: (props.disabled),
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-invalid']} */ ;
    /** @type {__VLS_StyleScopedClasses['error']} */ ;
    /** @type {__VLS_StyleScopedClasses['animated']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-shake']} */ ;
}
if (__VLS_ctx.modelValue?.errorMessage && __VLS_ctx.required && !props.browserValidation) {
    if (props.tooltipValidation) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-tooltip" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-tooltip']} */ ;
        (__VLS_ctx.modelValue?.errorMessage);
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        (__VLS_ctx.modelValue?.errorMessage);
    }
}
if (props.helperText) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "helper-text" },
    });
    /** @type {__VLS_StyleScopedClasses['helper-text']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "fst-italic c-o-light" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (`*${props.helperText}`) }, null, null);
    /** @type {__VLS_StyleScopedClasses['fst-italic']} */ ;
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
}
// @ts-ignore
[inputType, modelValue, modelValue, modelValue, modelValue, modelValue, modelValue, modelValue, inputId, inputId, isPlaceholder, isPlaceholder, placeholder, placeholder, animationClass, animationClass, rows, onFileChange, multiple, required,];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
export default {};
