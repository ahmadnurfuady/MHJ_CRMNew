import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
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
    headerTitle: ('Variation of Addons'),
    border: (true),
    padding: (false),
    cardBodyClass: ('card-wrapper input-radius'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Variation of Addons'),
    border: (true),
    padding: (false),
    cardBodyClass: ('card-wrapper input-radius'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 m-form__group" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['m-form__group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-primary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-pencil-alt-5 txt-primary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-pencil-alt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    inputId: ('email'),
    placeholder: ('Email'),
    required: (false),
}));
const __VLS_10 = __VLS_9({
    inputId: ('email'),
    placeholder: ('Email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    inputId: ('recipient-username'),
    placeholder: ('Recipient\'s username'),
    required: (false),
}));
const __VLS_15 = __VLS_14({
    inputId: ('recipient-username'),
    placeholder: ('Recipient\'s username'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-secondary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-ui-dial-phone txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-ui-dial-phone']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-primary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-unlink txt-primary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-unlink']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
let __VLS_18;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    inputId: ('joint-addon'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_20 = __VLS_19({
    inputId: ('joint-addon'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group mb-3" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-secondary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-ui-zoom-out txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-ui-zoom-out']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
let __VLS_23;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    inputId: ('left-right-addon'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_25 = __VLS_24({
    inputId: ('left-right-addon'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-secondary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-ui-zoom-in txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-ui-zoom-in']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 input-group-solid" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group-solid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-primary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-users txt-primary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-users']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
let __VLS_28;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    inputId: ('solid-style-field'),
    placeholder: ('999999'),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    inputId: ('solid-style-field'),
    placeholder: ('999999'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 input-group-square" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group-square']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-secondary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-credit-card txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-credit-card']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
let __VLS_33;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    inputId: ('flat-style-field'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_35 = __VLS_34({
    inputId: ('flat-style-field'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 input-group-square" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group-square']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-primary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-download txt-primary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-download']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
let __VLS_38;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    inputId: ('raise-style-field'),
    placeholder: ('https://www.example.com'),
    required: (false),
    ...{ class: ('input-group-air') },
}));
const __VLS_40 = __VLS_39({
    inputId: ('raise-style-field'),
    placeholder: ('https://www.example.com'),
    required: (false),
    ...{ class: ('input-group-air') },
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
/** @type {__VLS_StyleScopedClasses['input-group-air']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label" },
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group pill-input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['pill-input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-secondary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-ui-copy txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-ui-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
let __VLS_43;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    inputId: ('left-right-addon'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_45 = __VLS_44({
    inputId: ('left-right-addon'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text bg-light-secondary" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-stock-search txt-secondary" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-stock-search']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
{
    const { details: __VLS_48 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-footer" },
    });
    /** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-primary m-r-15" },
        type: "submit",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-15']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-light" },
        type: "submit",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
}
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
