import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const props = defineProps();
const emits = defineEmits(['closeOffcanvas']);
const form = ref({
    project: initSelectField(),
    projectCount: initSelectField(),
});
const projects = ref([
    { value: 'Project1', label: 'Project1' },
    { value: 'Project2', label: 'Project2' },
    { value: 'Project3', label: 'Project3' },
]);
const projectCount = ref([
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' },
]);
const isVisible = ref(true);
function closeOffcanvas() {
    isVisible.value = false;
    emits('closeOffcanvas');
}
function handleBackdropClick() {
    if (props.details)
        if (props.details && props.details.outsideClose) {
            closeOffcanvas();
        }
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
    if (__VLS_ctx.isVisible && props.details.backdrop) {
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
            id: "offcanvasRightLabel",
        });
        /** @type {__VLS_StyleScopedClasses['offcanvas-title']} */ ;
        (props.details.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.details))
                        return;
                    if (!(__VLS_ctx.isVisible))
                        return;
                    __VLS_ctx.closeOffcanvas();
                    // @ts-ignore
                    [isVisible, isVisible, handleBackdropClick, closeOffcanvas,];
                } },
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
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            title: ('Email'),
        }));
        const __VLS_2 = __VLS_1({
            title: ('Email'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const { default: __VLS_5 } = __VLS_3.slots;
        let __VLS_6;
        /** @ts-ignore @type {typeof __VLS_components.InputField} */
        InputField;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            inputId: ('email'),
            inputType: ('email'),
            placeholder: ('name@example.com'),
            required: (false),
        }));
        const __VLS_8 = __VLS_7({
            inputId: ('email'),
            inputType: ('email'),
            placeholder: ('name@example.com'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        // @ts-ignore
        [];
        var __VLS_3;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        let __VLS_11;
        /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            title: ('Select Project'),
        }));
        const __VLS_13 = __VLS_12({
            title: ('Select Project'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        const { default: __VLS_16 } = __VLS_14.slots;
        let __VLS_17;
        /** @ts-ignore @type {typeof __VLS_components.Select} */
        Select;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
            getValueKey: "label",
            displayKey: "label",
            placeholder: ('Select your projects'),
            modelValue: (__VLS_ctx.form.project),
            options: (__VLS_ctx.projects),
            required: (false),
        }));
        const __VLS_19 = __VLS_18({
            getValueKey: "label",
            displayKey: "label",
            placeholder: ('Select your projects'),
            modelValue: (__VLS_ctx.form.project),
            options: (__VLS_ctx.projects),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        // @ts-ignore
        [form, projects,];
        var __VLS_14;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        let __VLS_22;
        /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
            title: ('Project Counts'),
        }));
        const __VLS_24 = __VLS_23({
            title: ('Project Counts'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        const { default: __VLS_27 } = __VLS_25.slots;
        let __VLS_28;
        /** @ts-ignore @type {typeof __VLS_components.Select} */
        Select;
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
            getValueKey: "label",
            displayKey: "label",
            placeholder: ('How many projects do you make?'),
            modelValue: (__VLS_ctx.form.projectCount),
            options: (__VLS_ctx.projectCount),
            required: (false),
        }));
        const __VLS_30 = __VLS_29({
            getValueKey: "label",
            displayKey: "label",
            placeholder: ('How many projects do you make?'),
            modelValue: (__VLS_ctx.form.projectCount),
            options: (__VLS_ctx.projectCount),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        // @ts-ignore
        [form, projectCount,];
        var __VLS_25;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        let __VLS_33;
        /** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
        InputWrapper;
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
            title: ('External Notes'),
        }));
        const __VLS_35 = __VLS_34({
            title: ('External Notes'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        const { default: __VLS_38 } = __VLS_36.slots;
        let __VLS_39;
        /** @ts-ignore @type {typeof __VLS_components.InputField} */
        InputField;
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
            inputId: ('note'),
            inputType: ('textarea'),
            placeholder: ('External Notes'),
            rows: (4),
            required: (false),
        }));
        const __VLS_41 = __VLS_40({
            inputId: ('note'),
            inputType: ('textarea'),
            placeholder: ('External Notes'),
            rows: (4),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_40));
        // @ts-ignore
        [];
        var __VLS_36;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-check checkbox-checked" },
        });
        /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
        /** @type {__VLS_StyleScopedClasses['checkbox-checked']} */ ;
        let __VLS_44;
        /** @ts-ignore @type {typeof __VLS_components.Checkbox} */
        Checkbox;
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
            ...{ class: ('form-check-input') },
            label: ('Agree to terms and conditions'),
            inputId: ('check'),
            required: (false),
        }));
        const __VLS_46 = __VLS_45({
            ...{ class: ('form-check-input') },
            label: ('Agree to terms and conditions'),
            inputId: ('check'),
            required: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-12" },
        });
        /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.details))
                        return;
                    if (!(__VLS_ctx.isVisible))
                        return;
                    __VLS_ctx.closeOffcanvas();
                    // @ts-ignore
                    [closeOffcanvas,];
                } },
            ...{ class: "btn btn-light me-2" },
            type: "submit",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "btn btn-primary" },
            type: "submit",
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
