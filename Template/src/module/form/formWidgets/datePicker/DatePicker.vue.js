import { reactive, defineAsyncComponent } from 'vue';
import { thisMonthStart, thisMonthEnd } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const date = new Date();
const dateState = reactive({
    defaultDate: null,
    humanFriendly: null,
    minMaxDate: null,
    disabledDate: null,
    multipleDate: null,
    conjunctionDate: null,
    rangeDate: null,
    preLoadingDate: null,
});
const dateConfigs = reactive({
    dateConfig: {
        dateFormat: 'd-m-Y',
    },
    humanFriendlyDateConfig: {
        altInput: true,
        altFormat: 'j F, Y',
        dateFormat: 'd-m-Y',
        allowInput: true,
    },
    minMaxDateConfig: {
        dateFormat: 'd.m.Y',
        minDate: new Intl.DateTimeFormat('de-DE').format(thisMonthStart),
        maxDate: new Intl.DateTimeFormat('de-DE').format(thisMonthEnd),
    },
    disabledDateConfig: {
        dateFormat: 'd-m-Y',
        disable: [
            new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
            new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
        ],
    },
    multipleDateConfig: {
        mode: 'multiple',
        dateFormat: 'd-m-Y',
    },
    conjunctionDateConfig: {
        mode: 'multiple',
        dateFormat: 'd-m-Y',
        conjunction: ' :: ',
    },
    rangeDateConfig: {
        mode: 'range',
        dateFormat: 'd-m-Y',
    },
    preLoadingDateConfig: {
        mode: 'range',
        dateFormat: 'd-m-Y',
        defaultDate: ['2016-10-10', '2016-10-20'],
    },
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
    headerTitle: ('Date Picker'),
    cardBodyClass: ('main-flatpickr'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Date Picker'),
    cardBodyClass: ('main-flatpickr'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "timepicker-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['timepicker-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    title: ('Default Date'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_10 = __VLS_9({
    title: ('Default Date'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.defaultDate),
    config: (__VLS_ctx.dateConfigs.dateConfig),
}));
const __VLS_16 = __VLS_15({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.defaultDate),
    config: (__VLS_ctx.dateConfigs.dateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Human Friendly'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_21 = __VLS_20({
    title: ('Human Friendly'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_24 } = __VLS_22.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.humanFriendly),
    config: (__VLS_ctx.dateConfigs.humanFriendlyDateConfig),
}));
const __VLS_27 = __VLS_26({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.humanFriendly),
    config: (__VLS_ctx.dateConfigs.humanFriendlyDateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    title: ('Min-Max Value'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_32 = __VLS_31({
    title: ('Min-Max Value'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_35 } = __VLS_33.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.minMaxDate),
    config: (__VLS_ctx.dateConfigs.minMaxDateConfig),
}));
const __VLS_38 = __VLS_37({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.minMaxDate),
    config: (__VLS_ctx.dateConfigs.minMaxDateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    title: ('Disabled Dates'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_43 = __VLS_42({
    title: ('Disabled Dates'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_46 } = __VLS_44.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.disabledDate),
    config: (__VLS_ctx.dateConfigs.disabledDateConfig),
}));
const __VLS_49 = __VLS_48({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.disabledDate),
    config: (__VLS_ctx.dateConfigs.disabledDateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_52;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    title: ('Multiples Dates'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_54 = __VLS_53({
    title: ('Multiples Dates'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_57 } = __VLS_55.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.multipleDate),
    config: (__VLS_ctx.dateConfigs.multipleDateConfig),
}));
const __VLS_60 = __VLS_59({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.multipleDate),
    config: (__VLS_ctx.dateConfigs.multipleDateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_55;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_63;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent1(__VLS_63, new __VLS_63({
    title: ('Customizing Conjunction'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_65 = __VLS_64({
    title: ('Customizing Conjunction'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_68 } = __VLS_66.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_69;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.conjunctionDate),
    config: (__VLS_ctx.dateConfigs.conjunctionDateConfig),
}));
const __VLS_71 = __VLS_70({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.conjunctionDate),
    config: (__VLS_ctx.dateConfigs.conjunctionDateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_66;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_74;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
    title: ('Range'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_76 = __VLS_75({
    title: ('Range'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_75));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_79 } = __VLS_77.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_80;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent1(__VLS_80, new __VLS_80({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.rangeDate),
    config: (__VLS_ctx.dateConfigs.rangeDateConfig),
}));
const __VLS_82 = __VLS_81({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.rangeDate),
    config: (__VLS_ctx.dateConfigs.rangeDateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_77;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_85;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
    title: ('Preloading Dates'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_87 = __VLS_86({
    title: ('Preloading Dates'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
const { default: __VLS_90 } = __VLS_88.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group flatpicker-calender" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['flatpicker-calender']} */ ;
let __VLS_91;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.preLoadingDate),
    config: (__VLS_ctx.dateConfigs.preLoadingDateConfig),
}));
const __VLS_93 = __VLS_92({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.preLoadingDate),
    config: (__VLS_ctx.dateConfigs.preLoadingDateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_92));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, dateConfigs,];
var __VLS_88;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
