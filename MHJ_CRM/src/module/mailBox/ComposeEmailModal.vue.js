import { ref, defineAsyncComponent, onMounted } from 'vue';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
const fields = ref({
    cc: false,
    bcc: false,
});
const editor = ref();
const editorData = ref('');
onMounted(async () => {
    const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic');
    editor.value = ClassicEditor;
});
function handleFields(value) {
    fields.value[value] = !fields.value[value];
}
function closeModal() {
    emits('closeModal');
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: ('Compose Message'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-lg'),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Compose Message'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-lg'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [closeModal,];
        } });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body compose-modal" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['compose-modal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row mb-lg-3 g-1 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['g-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
let __VLS_9;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
    title: ('To :'),
    ...{ class: ('col-lg-2') },
}));
const __VLS_11 = __VLS_10({
    title: ('To :'),
    ...{ class: ('col-lg-2') },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
/** @type {__VLS_StyleScopedClasses['col-lg-2']} */ ;
const { default: __VLS_14 } = __VLS_12.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-10" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-10']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    inputId: ('to'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_17 = __VLS_16({
    inputId: ('to'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "add-bcc" },
});
/** @type {__VLS_StyleScopedClasses['add-bcc']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex gap-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleFields('cc');
            // @ts-ignore
            [handleFields,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleFields('bcc');
            // @ts-ignore
            [handleFields,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
// @ts-ignore
[];
var __VLS_12;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "collapse row mb-lg-3 mb-2" },
    id: "collapseCc",
    ...{ class: ({ show: __VLS_ctx.fields['cc'] }) },
});
/** @type {__VLS_StyleScopedClasses['collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
let __VLS_20;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    title: ('Cc :'),
    ...{ class: ('col-lg-2') },
}));
const __VLS_22 = __VLS_21({
    title: ('Cc :'),
    ...{ class: ('col-lg-2') },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
/** @type {__VLS_StyleScopedClasses['col-lg-2']} */ ;
const { default: __VLS_25 } = __VLS_23.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-10" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-10']} */ ;
let __VLS_26;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    inputId: ('composeCc'),
    placeholder: ('elanarob@gmail.com'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_28 = __VLS_27({
    inputId: ('composeCc'),
    placeholder: ('elanarob@gmail.com'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
// @ts-ignore
[fields,];
var __VLS_23;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "collapse row mb-lg-3 mb-2" },
    id: "collapseBcc",
    ...{ class: ({ show: __VLS_ctx.fields['bcc'] }) },
});
/** @type {__VLS_StyleScopedClasses['collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
let __VLS_31;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    title: ('Bcc :'),
    ...{ class: ('col-lg-2') },
}));
const __VLS_33 = __VLS_32({
    title: ('Bcc :'),
    ...{ class: ('col-lg-2') },
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
/** @type {__VLS_StyleScopedClasses['col-lg-2']} */ ;
const { default: __VLS_36 } = __VLS_34.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-10" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-10']} */ ;
let __VLS_37;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    inputId: ('composeBcc'),
    placeholder: ('stiphen@yahoo.com'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_39 = __VLS_38({
    inputId: ('composeBcc'),
    placeholder: ('stiphen@yahoo.com'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
// @ts-ignore
[fields,];
var __VLS_34;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row mb-lg-3 g-1 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['g-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
let __VLS_42;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
    title: ('Subject :'),
    ...{ class: ('col-lg-2') },
}));
const __VLS_44 = __VLS_43({
    title: ('Subject :'),
    ...{ class: ('col-lg-2') },
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
/** @type {__VLS_StyleScopedClasses['col-lg-2']} */ ;
const { default: __VLS_47 } = __VLS_45.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-10" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-10']} */ ;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({
    inputId: ('composeSubject'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_50 = __VLS_49({
    inputId: ('composeSubject'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
// @ts-ignore
[];
var __VLS_45;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toolbar-box mb-lg-3 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['toolbar-box']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
if (__VLS_ctx.editor) {
    let __VLS_53;
    /** @ts-ignore @type {typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor | typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor} */
    ckeditor;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent1(__VLS_53, new __VLS_53({
        editor: (__VLS_ctx.editor),
    }));
    const __VLS_55 = __VLS_54({
        editor: (__VLS_ctx.editor),
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row mb-3 align-items-center g-1" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['g-1']} */ ;
let __VLS_58;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
    title: ('Attachments :'),
    ...{ class: ('col-lg-2') },
}));
const __VLS_60 = __VLS_59({
    title: ('Attachments :'),
    ...{ class: ('col-lg-2') },
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
/** @type {__VLS_StyleScopedClasses['col-lg-2']} */ ;
const { default: __VLS_63 } = __VLS_61.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-10" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-10']} */ ;
let __VLS_64;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    inputId: ('formFileMultiple'),
    inputType: ('file'),
    required: (false),
    multiple: (true),
}));
const __VLS_66 = __VLS_65({
    inputId: ('formFileMultiple'),
    inputType: ('file'),
    required: (false),
    multiple: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
// @ts-ignore
[editor, editor,];
var __VLS_61;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-footer" },
});
/** @type {__VLS_StyleScopedClasses['modal-footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn button-light-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [closeModal,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
