import { defineAsyncComponent } from 'vue';
import { maskingValue } from '@/utils/inputMask';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const { maskingForm, formatDate, formatMonthDate, formatTime, formatHourTime, formatCurrency, formatPrefix, formatDelimiter, formatPhoneNumber, formatCardNumber, formatTailPrefix, formatIpAddress, formatMultipleDelimiter, formatMultipleCharacters, } = maskingValue();
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
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Input Masks'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Input Masks'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { header5: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
        header5: true,
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 light-card checkbox-checked" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['light-card']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "sub-title" },
});
/** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    title: ('Date'),
}));
const __VLS_9 = __VLS_8({
    title: ('Date'),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatDate($event));
            // @ts-ignore
            [formatDate,];
        } },
    id: "cleave-date1",
    ...{ class: "form-control" },
    type: "text",
    placeholder: "DD-MM-YYYY",
    name: "date",
    value: (__VLS_ctx.maskingForm.formattedDate),
    maxlength: "10",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    title: ('Date Format Type'),
}));
const __VLS_15 = __VLS_14({
    title: ('Date Format Type'),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatMonthDate($event));
            // @ts-ignore
            [formatMonthDate,];
        } },
    ...{ class: "form-control" },
    id: "cleave-date2",
    type: "text",
    placeholder: "MM-YYYY",
    name: "date2",
    maxlength: (7),
    value: (__VLS_ctx.maskingForm.formattedMonthDate),
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_16;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 light-card checkbox-checked" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['light-card']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "sub-title" },
});
/** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_19;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Time Format Type'),
}));
const __VLS_21 = __VLS_20({
    title: ('Time Format Type'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatTime($event));
            // @ts-ignore
            [formatTime,];
        } },
    id: "cleave-time1",
    ...{ class: "form-control" },
    type: "text",
    placeholder: "hh:mm:ss",
    name: "time",
    value: (__VLS_ctx.maskingForm.formattedTime),
    maxlength: "8",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    title: ('Hour/month Type'),
}));
const __VLS_27 = __VLS_26({
    title: ('Hour/month Type'),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const { default: __VLS_30 } = __VLS_28.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatHourTime($event));
            // @ts-ignore
            [formatHourTime,];
        } },
    id: "cleave-time2",
    ...{ class: "form-control" },
    type: "text",
    placeholder: "hh:mm",
    name: "hourTime",
    value: (__VLS_ctx.maskingForm.formattedHourTime),
    maxlength: "5",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_28;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 light-card checkbox-checked" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['light-card']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "sub-title" },
});
/** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_31;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    title: ('Currency'),
}));
const __VLS_33 = __VLS_32({
    title: ('Currency'),
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatCurrency($event));
            // @ts-ignore
            [formatCurrency,];
        } },
    ...{ class: "form-control" },
    id: "currency-format",
    type: "text",
    placeholder: "Enter number",
    name: "currency",
    value: (__VLS_ctx.maskingForm.currency),
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_34;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_37;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    title: ('Prefix'),
}));
const __VLS_39 = __VLS_38({
    title: ('Prefix'),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
const { default: __VLS_42 } = __VLS_40.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatPrefix($event));
            // @ts-ignore
            [formatPrefix,];
        } },
    ...{ class: "form-control" },
    id: "prefix",
    type: "text",
    placeholder: "Prefix-xxxx-xxxx-xxxx",
    name: "prefix",
    value: (__VLS_ctx.maskingForm.prefixNumber),
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_40;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_43;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    title: ('Delimiter'),
}));
const __VLS_45 = __VLS_44({
    title: ('Delimiter'),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const { default: __VLS_48 } = __VLS_46.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatDelimiter($event));
            // @ts-ignore
            [formatDelimiter,];
        } },
    ...{ class: "form-control" },
    id: "delimiter",
    type: "text",
    placeholder: "xxx·xxx·xxx",
    name: "delimiter",
    value: (__VLS_ctx.maskingForm.delimiterNumber),
    maxLength: "11",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_46;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_49;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    title: ('Phone Number'),
}));
const __VLS_51 = __VLS_50({
    title: ('Phone Number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
const { default: __VLS_54 } = __VLS_52.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatPhoneNumber($event));
            // @ts-ignore
            [formatPhoneNumber,];
        } },
    ...{ class: "form-control" },
    id: "phone-number",
    type: "text",
    placeholder: "(xxx)xxx-xxxx",
    name: "phone-number",
    value: (__VLS_ctx.maskingForm.phoneNumber),
    maxLength: "14",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_52;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_55;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    title: ('Card Number'),
}));
const __VLS_57 = __VLS_56({
    title: ('Card Number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
const { default: __VLS_60 } = __VLS_58.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatCardNumber($event));
            // @ts-ignore
            [formatCardNumber,];
        } },
    ...{ class: "form-control" },
    id: "card-number",
    type: "text",
    placeholder: "xxxx xxxx xxxx xxxx",
    name: "card-number",
    value: (__VLS_ctx.maskingForm.cardNumber),
    maxLength: "19",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_58;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_61;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    title: ('Tailprefix'),
}));
const __VLS_63 = __VLS_62({
    title: ('Tailprefix'),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
const { default: __VLS_66 } = __VLS_64.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatTailPrefix($event));
            // @ts-ignore
            [formatTailPrefix,];
        } },
    ...{ class: "form-control" },
    id: "tailprefix",
    type: "text",
    placeholder: "0000.00€",
    name: "tailprefix",
    value: (__VLS_ctx.maskingForm.tailPrefix),
    maxLength: "19",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_64;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_67;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
    title: ('IP Address'),
}));
const __VLS_69 = __VLS_68({
    title: ('IP Address'),
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
const { default: __VLS_72 } = __VLS_70.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatIpAddress($event));
            // @ts-ignore
            [formatIpAddress,];
        } },
    ...{ class: "form-control" },
    id: "ip-address",
    type: "text",
    placeholder: "192.168.38.45",
    name: "ip-address",
    value: (__VLS_ctx.maskingForm.ipAddress),
    maxLength: "13",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_70;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_73;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent1(__VLS_73, new __VLS_73({
    title: ('Use Multiple Delimiters'),
}));
const __VLS_75 = __VLS_74({
    title: ('Use Multiple Delimiters'),
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
const { default: __VLS_78 } = __VLS_76.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatMultipleDelimiter($event));
            // @ts-ignore
            [formatMultipleDelimiter,];
        } },
    ...{ class: "form-control" },
    id: "multiple-delimiter",
    type: "text",
    placeholder: "489.254.587-47",
    name: "multiple-delimiter",
    value: (__VLS_ctx.maskingForm.multipleDelimiter),
    maxLength: "14",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_76;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_79;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
    title: ('Multiple Characters in Delimiter'),
}));
const __VLS_81 = __VLS_80({
    title: ('Multiple Characters in Delimiter'),
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
const { default: __VLS_84 } = __VLS_82.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            return (__VLS_ctx.formatMultipleCharacters($event));
            // @ts-ignore
            [formatMultipleCharacters,];
        } },
    ...{ class: "form-control" },
    id: "multiple-characters",
    type: "text",
    placeholder: "777 | 777 | 777 | 777",
    name: "multiple-characters",
    value: (__VLS_ctx.maskingForm.multipleCharacters),
    maxLength: "15",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
// @ts-ignore
[maskingForm,];
var __VLS_82;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
