import { reactive, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { selectChocolates, selectColor, selectTheme } from '@/core/data/forms/formControl';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const form = reactive({
    favoritePixelstrapTheme: initSelectField(),
    favoriteColor: initSelectField(),
    favoriteChocolate: initSelectField(),
    favoriteTheme: initSelectField(),
});
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
    headerTitle: ('Custom Forms'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex main-custom-form'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Custom Forms'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex main-custom-form'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "input-group-text" },
    for: "inputGroupSelect01",
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite pixelstrap theme'),
    modelValue: (__VLS_ctx.form.favoritePixelstrapTheme),
    options: (__VLS_ctx.selectTheme),
    required: (false),
}));
const __VLS_10 = __VLS_9({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite pixelstrap theme'),
    modelValue: (__VLS_ctx.form.favoritePixelstrapTheme),
    options: (__VLS_ctx.selectTheme),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite color'),
    modelValue: (__VLS_ctx.form.favoriteColor),
    options: (__VLS_ctx.selectColor),
    required: (false),
}));
const __VLS_15 = __VLS_14({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite color'),
    modelValue: (__VLS_ctx.form.favoriteColor),
    options: (__VLS_ctx.selectColor),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "input-group-text" },
    for: "inputGroupSelect02",
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "icofont icofont-credit-card" },
});
/** @type {__VLS_StyleScopedClasses['icofont']} */ ;
/** @type {__VLS_StyleScopedClasses['icofont-credit-card']} */ ;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite chocolate'),
    modelValue: (__VLS_ctx.form.favoriteChocolate),
    options: (__VLS_ctx.selectChocolates),
    required: (false),
}));
const __VLS_20 = __VLS_19({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite chocolate'),
    modelValue: (__VLS_ctx.form.favoriteChocolate),
    options: (__VLS_ctx.selectChocolates),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_23;
/** @ts-ignore @type {typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite theme'),
    modelValue: (__VLS_ctx.form.favoriteTheme),
    options: (__VLS_ctx.selectTheme),
    required: (false),
}));
const __VLS_25 = __VLS_24({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select your favorite theme'),
    modelValue: (__VLS_ctx.form.favoriteTheme),
    options: (__VLS_ctx.selectTheme),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-secondary']} */ ;
// @ts-ignore
[form, form, form, form, selectTheme, selectTheme, selectColor, selectChocolates,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
