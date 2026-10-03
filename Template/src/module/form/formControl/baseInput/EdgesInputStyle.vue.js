import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { themeSelection } from '@/core/data/forms/formControl';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const theme = ref(initSelectField());
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
    headerTitle: ('Edges Input Style'),
    border: (true),
    padding: (false),
    cardBodyClass: ('theme-form'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Edges Input Style'),
    border: (true),
    padding: (false),
    cardBodyClass: ('theme-form'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    title: ('Email Address'),
}));
const __VLS_10 = __VLS_9({
    title: ('Email Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_11.slots;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    inputId: ('email'),
    placeholder: ('name&#64;example.com'),
    required: (false),
    ...{ class: ('btn-pill') },
}));
const __VLS_16 = __VLS_15({
    inputId: ('email'),
    placeholder: ('name&#64;example.com'),
    required: (false),
    ...{ class: ('btn-pill') },
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {__VLS_StyleScopedClasses['btn-pill']} */ ;
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Password'),
}));
const __VLS_21 = __VLS_20({
    title: ('Password'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    inputId: ('password'),
    placeholder: ('Enter Password'),
    required: (false),
    ...{ class: ('btn-pill') },
}));
const __VLS_27 = __VLS_26({
    inputId: ('password'),
    placeholder: ('Enter Password'),
    required: (false),
    ...{ class: ('btn-pill') },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {__VLS_StyleScopedClasses['btn-pill']} */ ;
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    title: ('Select Your Favorite Pixelstrap Theme'),
}));
const __VLS_32 = __VLS_31({
    title: ('Select Your Favorite Pixelstrap Theme'),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_35 } = __VLS_33.slots;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Your Favorite Pixelstrap Theme'),
    modelValue: (__VLS_ctx.theme),
    options: (__VLS_ctx.themeSelection),
    required: (false),
    ...{ class: ('btn-pill') },
}));
const __VLS_38 = __VLS_37({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Your Favorite Pixelstrap Theme'),
    modelValue: (__VLS_ctx.theme),
    options: (__VLS_ctx.themeSelection),
    required: (false),
    ...{ class: ('btn-pill') },
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
/** @type {__VLS_StyleScopedClasses['btn-pill']} */ ;
// @ts-ignore
[theme, themeSelection,];
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    title: ('Default File Input Example'),
}));
const __VLS_43 = __VLS_42({
    title: ('Default File Input Example'),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
const { default: __VLS_46 } = __VLS_44.slots;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    inputId: ('file'),
    inputType: ('file'),
    required: (false),
    ...{ class: ('btn-pill px-4') },
}));
const __VLS_49 = __VLS_48({
    inputId: ('file'),
    inputType: ('file'),
    required: (false),
    ...{ class: ('btn-pill px-4') },
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
/** @type {__VLS_StyleScopedClasses['btn-pill']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
// @ts-ignore
[];
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-control btn-pill" },
    type: "text",
    placeholder: "Default input",
    'aria-label': "default input example",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-pill']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 d-flex gap-3 checkbox-checked" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "flexRadioDefault1",
    type: "radio",
    name: "flexRadioDefault",
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label mb-0" },
    for: "flexRadioDefault1",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input" },
    id: "flexRadioDefault2",
    type: "radio",
    name: "flexRadioDefault",
    checked: true,
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-check-label mb-0" },
    for: "flexRadioDefault2",
});
/** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_52;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    title: ('Comments'),
}));
const __VLS_54 = __VLS_53({
    title: ('Comments'),
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const { default: __VLS_57 } = __VLS_55.slots;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    inputId: ('comments'),
    inputType: ('textarea'),
    required: (false),
    ...{ class: ('btn-pill') },
}));
const __VLS_60 = __VLS_59({
    inputId: ('comments'),
    inputType: ('textarea'),
    required: (false),
    ...{ class: ('btn-pill') },
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
/** @type {__VLS_StyleScopedClasses['btn-pill']} */ ;
// @ts-ignore
[];
var __VLS_55;
{
    const { details: __VLS_63 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-footer text-end" },
    });
    /** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-primary me-3" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['me-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "btn btn-light" },
        type: "reset",
        value: "Cancel",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
