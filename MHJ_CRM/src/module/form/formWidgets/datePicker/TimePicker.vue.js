import { reactive, defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const dateState = reactive({
    defaultTime: null,
    hourTimeConfig: null,
    timeLimitConfig: null,
    preloadingConfig: null,
    dateTimeLimitConfig: null,
    minMaxTimeConfig: null,
    dateTimeConfig: null,
});
const timeConfigs = reactive({
    timeConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
    },
    HourTimeConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time24hr: true,
    },
    timeLimitConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        minTime: '16:00',
        maxTime: '22:30',
    },
    preloadingConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        defaultDate: '13:45',
    },
    dateTimeLimitConfig: {
        enableTime: true,
        minTime: '09:00',
        dateFormat: 'd-m-Y H:i',
    },
    minMaxTimeConfig: {
        enableTime: true,
        minTime: '16:00',
        maxTime: '22:00',
        dateFormat: 'd-m-Y H:i',
    },
    dateTimeConfig: {
        enableTime: true,
        dateFormat: 'd-m-Y H:i',
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
    headerTitle: ('Time Picker'),
    cardBodyClass: ('main-flatpickr'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Time Picker'),
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
    title: ('Time Picker'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_10 = __VLS_9({
    title: ('Time Picker'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    ...{ class: "form-control digits" },
    placeholder: "hh:mm",
    modelValue: (__VLS_ctx.dateState.defaultTime),
    config: (__VLS_ctx.timeConfigs.timeConfig),
}));
const __VLS_16 = __VLS_15({
    ...{ class: "form-control digits" },
    placeholder: "hh:mm",
    modelValue: (__VLS_ctx.dateState.defaultTime),
    config: (__VLS_ctx.timeConfigs.timeConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, timeConfigs,];
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
    title: ('24-hour Time Picker'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_21 = __VLS_20({
    title: ('24-hour Time Picker'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ class: "form-control digits" },
    placeholder: "hh:mm",
    modelValue: (__VLS_ctx.dateState.hourTimeConfig),
    config: (__VLS_ctx.timeConfigs.HourTimeConfig),
}));
const __VLS_27 = __VLS_26({
    ...{ class: "form-control digits" },
    placeholder: "hh:mm",
    modelValue: (__VLS_ctx.dateState.hourTimeConfig),
    config: (__VLS_ctx.timeConfigs.HourTimeConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, timeConfigs,];
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
    title: ('Time Picker W/Limits'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_32 = __VLS_31({
    title: ('Time Picker W/Limits'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    ...{ class: "form-control digits" },
    placeholder: "hh:mm",
    modelValue: (__VLS_ctx.dateState.timeLimitConfig),
    config: (__VLS_ctx.timeConfigs.timeLimitConfig),
}));
const __VLS_38 = __VLS_37({
    ...{ class: "form-control digits" },
    placeholder: "hh:mm",
    modelValue: (__VLS_ctx.dateState.timeLimitConfig),
    config: (__VLS_ctx.timeConfigs.timeLimitConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, timeConfigs,];
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
    title: ('Preloading Time'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_43 = __VLS_42({
    title: ('Preloading Time'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.preloadingConfig),
    config: (__VLS_ctx.timeConfigs.preloadingConfig),
}));
const __VLS_49 = __VLS_48({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    modelValue: (__VLS_ctx.dateState.preloadingConfig),
    config: (__VLS_ctx.timeConfigs.preloadingConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, timeConfigs,];
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
    title: ('TimePicker with Limited Time Range'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_54 = __VLS_53({
    title: ('TimePicker with Limited Time Range'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    ...{ class: "form-control digits" },
    placeholder: "d-m-Y H:i",
    modelValue: (__VLS_ctx.dateState.dateTimeLimitConfig),
    config: (__VLS_ctx.timeConfigs.dateTimeLimitConfig),
}));
const __VLS_60 = __VLS_59({
    ...{ class: "form-control digits" },
    placeholder: "d-m-Y H:i",
    modelValue: (__VLS_ctx.dateState.dateTimeLimitConfig),
    config: (__VLS_ctx.timeConfigs.dateTimeLimitConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, timeConfigs,];
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
    title: ('TimePicker with Min/Max Time Range'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_65 = __VLS_64({
    title: ('TimePicker with Min/Max Time Range'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_69;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    ...{ class: "form-control digits" },
    placeholder: "d-m-Y H:i",
    modelValue: (__VLS_ctx.dateState.minMaxTimeConfig),
    config: (__VLS_ctx.timeConfigs.minMaxTimeConfig),
}));
const __VLS_71 = __VLS_70({
    ...{ class: "form-control digits" },
    placeholder: "d-m-Y H:i",
    modelValue: (__VLS_ctx.dateState.minMaxTimeConfig),
    config: (__VLS_ctx.timeConfigs.minMaxTimeConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, timeConfigs,];
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
    title: ('Date With Time'),
    ...{ class: ('col-xxl-3 box-col-12 text-start') },
}));
const __VLS_76 = __VLS_75({
    title: ('Date With Time'),
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_80;
/** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent1(__VLS_80, new __VLS_80({
    ...{ class: "form-control digits" },
    placeholder: "d-m-Y H:i",
    modelValue: (__VLS_ctx.dateState.dateTimeConfig),
    config: (__VLS_ctx.timeConfigs.dateTimeConfig),
}));
const __VLS_82 = __VLS_81({
    ...{ class: "form-control digits" },
    placeholder: "d-m-Y H:i",
    modelValue: (__VLS_ctx.dateState.dateTimeConfig),
    config: (__VLS_ctx.timeConfigs.dateTimeConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateState, timeConfigs,];
var __VLS_77;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
