import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { country } from '@/core/data/country';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const emits = defineEmits(['closeOffcanvas']);
const form = ref({
    country: initSelectField(),
});
const isVisible = ref(true);
function closeOffcanvas() {
    isVisible.value = false;
    emits('closeOffcanvas');
}
function handleBackdropClick() {
    closeOffcanvas();
}
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
if (props.details) {
    if (__VLS_ctx.isVisible) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ onClick: (__VLS_ctx.handleBackdropClick) },
            ...{ class: "offcanvas-backdrop fade show" },
        });
        /** @type {__VLS_StyleScopedClasses['offcanvas-backdrop']} */ ;
        /** @type {__VLS_StyleScopedClasses['fade']} */ ;
        /** @type {__VLS_StyleScopedClasses['show']} */ ;
    }
    if (__VLS_ctx.isVisible) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`offcanvas offcanvas-${props.details.direction} show`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "offcanvas-header pb-0" },
        });
        /** @type {__VLS_StyleScopedClasses['offcanvas-header']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
            ...{ class: "offcanvas-title" },
        });
        /** @type {__VLS_StyleScopedClasses['offcanvas-title']} */ ;
        (props.details.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button)({
            ...{ onClick: (__VLS_ctx.closeOffcanvas) },
            ...{ class: "btn-close" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "offcanvas-body custom-input custom-scrollbar" },
        });
        /** @type {__VLS_StyleScopedClasses['offcanvas-body']} */ ;
        /** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
        /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
            ...{ class: "row g-3" },
        });
        /** @type {__VLS_StyleScopedClasses['row']} */ ;
        /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-md-4" },
        });
        /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            title: ('First Name'),
        }));
        const __VLS_2 = __VLS_1({
            title: ('First Name'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const { default: __VLS_5 } = __VLS_3.slots;
        let __VLS_6;
        /** @ts-ignore @type { | typeof __VLS_components.InputField} */
        InputField;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            inputId: ('first-name'),
            placeholder: ('Enter first name'),
            required: (false),
        }));
        const __VLS_8 = __VLS_7({
            inputId: ('first-name'),
            placeholder: ('Enter first name'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        // @ts-ignore
        [isVisible, isVisible, handleBackdropClick, closeOffcanvas,];
        var __VLS_3;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-md-4" },
        });
        /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
        let __VLS_11;
        /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            title: ('Last Name'),
        }));
        const __VLS_13 = __VLS_12({
            title: ('Last Name'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        const { default: __VLS_16 } = __VLS_14.slots;
        let __VLS_17;
        /** @ts-ignore @type { | typeof __VLS_components.InputField} */
        InputField;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
            inputId: ('last-name'),
            placeholder: ('Enter last name'),
            required: (false),
        }));
        const __VLS_19 = __VLS_18({
            inputId: ('last-name'),
            placeholder: ('Enter last name'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        // @ts-ignore
        [];
        var __VLS_14;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-md-4" },
        });
        /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
        let __VLS_22;
        /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
            title: ('Username'),
        }));
        const __VLS_24 = __VLS_23({
            title: ('Username'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        const { default: __VLS_27 } = __VLS_25.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "input-group" },
        });
        /** @type {__VLS_StyleScopedClasses['input-group']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "input-group-text" },
            id: "inputGroupPrepend2",
        });
        /** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
        let __VLS_28;
        /** @ts-ignore @type { | typeof __VLS_components.InputField} */
        InputField;
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
            inputId: ('username'),
            placeholder: ('Enter username'),
            required: (false),
        }));
        const __VLS_30 = __VLS_29({
            inputId: ('username'),
            placeholder: ('Enter username'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        // @ts-ignore
        [];
        var __VLS_25;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-md-6" },
        });
        /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
        let __VLS_33;
        /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
            title: ('City'),
        }));
        const __VLS_35 = __VLS_34({
            title: ('City'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        const { default: __VLS_38 } = __VLS_36.slots;
        let __VLS_39;
        /** @ts-ignore @type { | typeof __VLS_components.InputField} */
        InputField;
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
            inputId: ('city'),
            placeholder: ('Enter city'),
            required: (false),
        }));
        const __VLS_41 = __VLS_40({
            inputId: ('city'),
            placeholder: ('Enter city'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_40));
        // @ts-ignore
        [];
        var __VLS_36;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-md-3" },
        });
        /** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
        let __VLS_44;
        /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
            title: ('Country'),
        }));
        const __VLS_46 = __VLS_45({
            title: ('Country'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        const { default: __VLS_49 } = __VLS_47.slots;
        let __VLS_50;
        /** @ts-ignore @type { | typeof __VLS_components.Select} */
        Select;
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
            getValueKey: "label",
            displayKey: "label",
            placeholder: ('Select country'),
            modelValue: (__VLS_ctx.form.country),
            options: (__VLS_ctx.country),
            required: (false),
        }));
        const __VLS_52 = __VLS_51({
            getValueKey: "label",
            displayKey: "label",
            placeholder: ('Select country'),
            modelValue: (__VLS_ctx.form.country),
            options: (__VLS_ctx.country),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        // @ts-ignore
        [form, country,];
        var __VLS_47;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-md-3" },
        });
        /** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
        let __VLS_55;
        /** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
            title: ('Zip'),
        }));
        const __VLS_57 = __VLS_56({
            title: ('Zip'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_56));
        const { default: __VLS_60 } = __VLS_58.slots;
        let __VLS_61;
        /** @ts-ignore @type { | typeof __VLS_components.InputField} */
        InputField;
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
            inputId: ('zip'),
            placeholder: ('Enter zip'),
            required: (false),
        }));
        const __VLS_63 = __VLS_62({
            inputId: ('zip'),
            placeholder: ('Enter zip'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        // @ts-ignore
        [];
        var __VLS_58;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-check checkbox-checked" },
        });
        /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
        /** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
        let __VLS_66;
        /** @ts-ignore @type { | typeof __VLS_components.Checkbox} */
        Checkbox;
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
            ...{ class: ('form-check-input') },
            label: ('Agree to terms and conditions'),
            inputId: ('check'),
            required: (false),
        }));
        const __VLS_68 = __VLS_67({
            ...{ class: ('form-check-input') },
            label: ('Agree to terms and conditions'),
            inputId: ('check'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "btn btn-primary" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
