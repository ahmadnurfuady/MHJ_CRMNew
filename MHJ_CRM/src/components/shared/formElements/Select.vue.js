import { OnClickOutside } from '@vueuse/components';
import { useSmartSelect } from '../../../composable/useSelect';
const props = withDefaults(defineProps(), {
    placeholder: 'Select',
    displayKey: 'label',
    getValueKey: 'label',
    multiSelect: false,
    required: true,
    formSubmitted: false,
    disableClearButton: false,
    tooltipValidation: false,
    isPlaceholder: true,
    disabled: false,
    showOptions: false,
});
const emits = defineEmits(['update:modelValue']);
const { showDropdown, search, highlightedIndex, displaySelected, filteredOptions, toggleDropdown, isSelected, handleSelect, handleKeydown, setOptionRef, clear, } = useSmartSelect(props, emits);
const __VLS_defaults = {
    placeholder: 'Select',
    displayKey: 'label',
    getValueKey: 'label',
    multiSelect: false,
    required: true,
    formSubmitted: false,
    disableClearButton: false,
    tooltipValidation: false,
    isPlaceholder: true,
    disabled: false,
    showOptions: false,
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.OnClickOutside | typeof __VLS_components.OnClickOutside} */
OnClickOutside;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onTrigger': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onTrigger': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ trigger: {} },
    { onTrigger: (...[$event]) => {
            __VLS_ctx.showDropdown = false;
            // @ts-ignore
            [showDropdown,];
        } });
const { default: __VLS_7 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "smart-select" },
});
/** @type {__VLS_StyleScopedClasses['smart-select']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleDropdown($event);
            // @ts-ignore
            [toggleDropdown,];
        } },
    ...{ class: "select-box" },
    ref: "wrapperRef",
});
/** @type {__VLS_StyleScopedClasses['select-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-select d-flex flex-wrap align-items-center gap-1 px-2 py-1" },
    ...{ class: ([
            props.class,
            {
                'is-invalid': props.modelValue.errorMessage && __VLS_ctx.required && props.formSubmitted,
            },
        ]) },
    disabled: (props.disabled),
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['is-invalid']} */ ;
if (__VLS_ctx.multiSelect && Array.isArray(__VLS_ctx.displaySelected) && __VLS_ctx.displaySelected.length) {
    for (const [item, index] of __VLS_vFor((__VLS_ctx.displaySelected))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            key: (index),
            ...{ class: "badge badge-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['badge']} */ ;
        /** @type {__VLS_StyleScopedClasses['badge-primary']} */ ;
        (item[props.displayKey]);
        // @ts-ignore
        [required, multiSelect, displaySelected, displaySelected, displaySelected,];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-muted" },
    });
    /** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
    if (__VLS_ctx.displaySelected && !Array.isArray(__VLS_ctx.displaySelected)) {
        (__VLS_ctx.displaySelected);
    }
    else {
        (__VLS_ctx.isPlaceholder ? __VLS_ctx.placeholder || 'Select' : '');
    }
}
if (!__VLS_ctx.disableClearButton &&
    (__VLS_ctx.multiSelect
        ? Array.isArray(__VLS_ctx.displaySelected) && __VLS_ctx.displaySelected.length
        : __VLS_ctx.displaySelected)) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ onClick: (__VLS_ctx.clear) },
        ...{ class: "clear-btn" },
    });
    /** @type {__VLS_StyleScopedClasses['clear-btn']} */ ;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        type: ('x'),
    }));
    const __VLS_10 = __VLS_9({
        type: ('x'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
if (__VLS_ctx.showDropdown) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.showDropdown))
                    return;
                __VLS_ctx.handleKeydown($event);
                // @ts-ignore
                [showDropdown, multiSelect, displaySelected, displaySelected, displaySelected, displaySelected, displaySelected, displaySelected, isPlaceholder, placeholder, disableClearButton, clear, handleKeydown,];
            } },
        type: "text",
        value: (__VLS_ctx.search),
        ...{ class: "form-control" },
        placeholder: "Search...",
        ref: "searchInput",
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "custom-scrollbar" },
    });
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    for (const [option, index] of __VLS_vFor((__VLS_ctx.filteredOptions))) {
        (index);
        if (option && option.data && Array.isArray(option.data) && props.showOptions) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "disabled" },
            });
            /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
            (option[__VLS_ctx.displayKey]);
            for (const [child, childIndex] of __VLS_vFor((option.data))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                    ...{ onClick: (...[$event]) => {
                            if (!(__VLS_ctx.showDropdown))
                                return;
                            if (!(option && option.data && Array.isArray(option.data) && props.showOptions))
                                return;
                            __VLS_ctx.handleSelect(child);
                            // @ts-ignore
                            [search, filteredOptions, displayKey, handleSelect,];
                        } },
                    ...{ class: ({ selected: __VLS_ctx.isSelected(child) }) },
                    ref: ((el) => __VLS_ctx.setOptionRef(el, index)),
                    key: (childIndex),
                });
                /** @type {__VLS_StyleScopedClasses['selected']} */ ;
                (child[__VLS_ctx.displayKey]);
                // @ts-ignore
                [displayKey, isSelected, setOptionRef,];
            }
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                ...{ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.showDropdown))
                            return;
                        if (!!(option && option.data && Array.isArray(option.data) && props.showOptions))
                            return;
                        __VLS_ctx.handleSelect(option);
                        // @ts-ignore
                        [handleSelect,];
                    } },
                ...{ class: ({
                        highlighted: index === __VLS_ctx.highlightedIndex,
                        selected: __VLS_ctx.isSelected(option),
                    }) },
                ref: ((el) => __VLS_ctx.setOptionRef(el, index)),
            });
            /** @type {__VLS_StyleScopedClasses['highlighted']} */ ;
            /** @type {__VLS_StyleScopedClasses['selected']} */ ;
            (option[__VLS_ctx.displayKey]);
        }
        // @ts-ignore
        [displayKey, isSelected, setOptionRef, highlightedIndex,];
    }
    if (!__VLS_ctx.filteredOptions.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "no-option" },
        });
        /** @type {__VLS_StyleScopedClasses['no-option']} */ ;
    }
}
// @ts-ignore
[filteredOptions,];
var __VLS_3;
var __VLS_4;
if (__VLS_ctx.modelValue?.errorMessage && __VLS_ctx.required && props.formSubmitted) {
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
// @ts-ignore
[required, modelValue, modelValue, modelValue,];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
export default {};
