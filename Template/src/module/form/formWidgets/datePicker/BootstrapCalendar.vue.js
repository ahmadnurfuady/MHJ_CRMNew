import { ref, defineAsyncComponent, onMounted } from 'vue';
import { initInputField } from '@/core/data/common';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const inputValues = ref({
    dateTime: initInputField(),
    date: initInputField(),
    month: initInputField(),
    week: initInputField(),
    time: initInputField(),
});
onMounted(() => {
    const now = new Date();
    // 1. Full datetime (ISO string)
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mi = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const dateTime = `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}`; // 'YYYY-MM-DDTHH:mm:ss'
    // 2. Date (YYYY-MM-DD)
    const date = now.toISOString().split('T')[0];
    // 3. Month (YYYY-MM)
    const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    // 4. Week (YYYY-Www)
    function getISOWeekString(d) {
        const target = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        const day = target.getUTCDay() || 7;
        target.setUTCDate(target.getUTCDate() + 4 - day);
        const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
        const diffInDays = (target.getTime() - yearStart.getTime()) / 86400000;
        const weekNo = Math.ceil((diffInDays + 1) / 7);
        return `${target.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
    }
    const week = getISOWeekString(now);
    // 5. Time (HH:mm:ss)
    const time = now.toTimeString().split(' ')[0];
    inputValues.value = {
        dateTime: { ...initInputField(), data: dateTime },
        date: { ...initInputField(), data: date },
        month: { ...initInputField(), data: month },
        week: { ...initInputField(), data: week },
        time: { ...initInputField(), data: time },
    };
});
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
    headerTitle: ('Bootstrap Calendar'),
    cardClass: ('bootstrap-calendar'),
    cardBodyClass: ('card-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Bootstrap Calendar'),
    cardClass: ('bootstrap-calendar'),
    cardBodyClass: ('card-wrapper'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    title: ('Date and Time'),
    ...{ class: ('col-md-3') },
}));
const __VLS_10 = __VLS_9({
    title: ('Date and Time'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    inputId: ('date-time'),
    inputType: ('datetime-local'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.dateTime),
}));
const __VLS_16 = __VLS_15({
    inputId: ('date-time'),
    inputType: ('datetime-local'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.dateTime),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
// @ts-ignore
[inputValues,];
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_19;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    title: ('Date'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_21 = __VLS_20({
    title: ('Date'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_24 } = __VLS_22.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    inputId: ('date'),
    inputType: ('date'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.date),
}));
const __VLS_27 = __VLS_26({
    inputId: ('date'),
    inputType: ('date'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.date),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[inputValues,];
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_30;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    title: ('Month'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_32 = __VLS_31({
    title: ('Month'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_35 } = __VLS_33.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_36;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    inputId: ('date'),
    inputType: ('month'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.month),
}));
const __VLS_38 = __VLS_37({
    inputId: ('date'),
    inputType: ('month'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.month),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
// @ts-ignore
[inputValues,];
var __VLS_33;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_41;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    title: ('Week'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_43 = __VLS_42({
    title: ('Week'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_46 } = __VLS_44.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_47;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    inputId: ('week'),
    inputType: ('week'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.week),
}));
const __VLS_49 = __VLS_48({
    inputId: ('week'),
    inputType: ('week'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.week),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
// @ts-ignore
[inputValues,];
var __VLS_44;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3 row" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_52;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({
    title: ('Time'),
    ...{ class: ('col-sm-3') },
}));
const __VLS_54 = __VLS_53({
    title: ('Time'),
    ...{ class: ('col-sm-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
/** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
const { default: __VLS_57 } = __VLS_55.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-9" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-9']} */ ;
let __VLS_58;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    inputId: ('time'),
    inputType: ('time'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.time),
}));
const __VLS_60 = __VLS_59({
    inputId: ('time'),
    inputType: ('time'),
    required: (false),
    modelValue: (__VLS_ctx.inputValues.time),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
// @ts-ignore
[inputValues,];
var __VLS_55;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
