import { ref, onMounted, defineAsyncComponent } from 'vue';
import { initInputField } from '@/core/data/common';
import { analyticTabs } from '@/core/data/setting';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const settingTabs = analyticTabs;
const activeTab = ref('facebook-pixel');
const analyticsForm = ref({
    facebookPixelId: initInputField(),
    googleMeasurementId: initInputField(),
});
onMounted(() => {
    analyticsForm.value = {
        facebookPixelId: { ...analyticsForm.value.facebookPixelId, data: '5899947538419005' },
        googleMeasurementId: {
            ...analyticsForm.value.googleMeasurementId,
            data: 'G-47FG4DEV34',
        },
    };
});
function handleTab(value) {
    activeTab.value = value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "advance-options" },
});
/** @type {__VLS_StyleScopedClasses['advance-options']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-tabs border-tab" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.settingTabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.handleTab(tab.value));
                // @ts-ignore
                [settingTabs, handleTab,];
            } },
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.activeTab === tab.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (tab.title);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
if (__VLS_ctx.activeTab === 'facebook-pixel') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: ('Status'),
        ...{ class: ('col-md-3 col-auto') },
    }));
    const __VLS_2 = __VLS_1({
        title: ('Status'),
        ...{ class: ('col-md-3 col-auto') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-9 col-auto" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check form-switch form-check-inline" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check form-switch form-check-inline" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-check-input switch-primary check-size" },
        type: "checkbox",
        role: "switch",
        checked: true,
    });
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    /** @type {__VLS_StyleScopedClasses['switch-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['check-size']} */ ;
    // @ts-ignore
    [activeTab,];
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        title: ('Pixel Id'),
        ...{ class: ('col-md-3') },
    }));
    const __VLS_8 = __VLS_7({
        title: ('Pixel Id'),
        ...{ class: ('col-md-3') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    /** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
    const { default: __VLS_11 } = __VLS_9.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-9" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
    let __VLS_12;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        inputId: ('pixel-id'),
        placeholder: ('Enter pixel Id'),
        modelValue: (__VLS_ctx.analyticsForm.facebookPixelId),
        required: (false),
    }));
    const __VLS_14 = __VLS_13({
        inputId: ('pixel-id'),
        placeholder: ('Enter pixel Id'),
        modelValue: (__VLS_ctx.analyticsForm.facebookPixelId),
        required: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    // @ts-ignore
    [analyticsForm,];
    var __VLS_9;
}
else if (__VLS_ctx.activeTab === 'google-analytics') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        title: ('Status'),
        ...{ class: ('col-md-3 col-auto') },
    }));
    const __VLS_19 = __VLS_18({
        title: ('Status'),
        ...{ class: ('col-md-3 col-auto') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    /** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
    const { default: __VLS_22 } = __VLS_20.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-9 col-auto" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check form-switch form-check-inline" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check form-switch form-check-inline" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-check-input switch-primary check-size" },
        type: "checkbox",
        role: "switch",
    });
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    /** @type {__VLS_StyleScopedClasses['switch-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['check-size']} */ ;
    // @ts-ignore
    [activeTab,];
    var __VLS_20;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    let __VLS_23;
    /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
    InputWrapper;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
        title: ('Measurement Id'),
        ...{ class: ('col-md-3') },
    }));
    const __VLS_25 = __VLS_24({
        title: ('Measurement Id'),
        ...{ class: ('col-md-3') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    /** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
    const { default: __VLS_28 } = __VLS_26.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-md-9" },
    });
    /** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
    let __VLS_29;
    /** @ts-ignore @type { | typeof __VLS_components.InputField} */
    InputField;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
        inputId: ('measurement-id'),
        placeholder: ('Enter measurement Id'),
        modelValue: (__VLS_ctx.analyticsForm.googleMeasurementId),
        required: (false),
    }));
    const __VLS_31 = __VLS_30({
        inputId: ('measurement-id'),
        placeholder: ('Enter measurement Id'),
        modelValue: (__VLS_ctx.analyticsForm.googleMeasurementId),
        required: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    // @ts-ignore
    [analyticsForm,];
    var __VLS_26;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
