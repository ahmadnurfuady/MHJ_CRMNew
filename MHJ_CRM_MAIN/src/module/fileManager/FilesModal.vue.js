import { ref, onMounted, watch, defineAsyncComponent } from 'vue';
import { fileFormats } from '@/core/data/fileManager';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const props = defineProps();
const emit = defineEmits(['closeModal', 'fileForm']);
const fileForm = ref({
    fileName: '',
    fileType: '',
});
const formSubmitted = ref(false);
const errorMessage = ref('');
onMounted(() => {
    if (props.modalDetails) {
        fileForm.value.fileType = props.modalDetails.type;
        if (props.modalDetails.renameFile && props.modalDetails.file) {
            fileForm.value.fileName = props.modalDetails.file.name;
        }
    }
});
watch(() => props.modalDetails, (newValue) => {
    if (newValue) {
        fileForm.value.fileType = newValue.type;
        if (newValue.renameFile && newValue.file) {
            fileForm.value.fileName = newValue.file.name;
        }
    }
}, { immediate: true });
function submit() {
    formSubmitted.value = true;
    if (fileForm.value.fileName) {
        if (props.modalDetails &&
            (props.modalDetails.type == 'file' || props.modalDetails.type == 'rename')) {
            const filename = fileForm.value.fileName;
            if (filename.includes('.')) {
                const index = filename.lastIndexOf('.');
                if (index !== -1) {
                    const fileType = filename.substring(index);
                    const isValid = fileFormats.includes(fileType.toLowerCase());
                    if (!isValid) {
                        errorMessage.value = 'Invalid Format';
                        return;
                    }
                }
            }
            else {
                fileForm.value.fileName += '.txt';
            }
        }
        emit('fileForm', fileForm.value);
        emit('closeModal');
    }
    else {
        if (props.modalDetails) {
            if (props.modalDetails.type == 'file') {
                errorMessage.value = 'File name is required.';
            }
            else if (props.modalDetails.type == 'folder') {
                errorMessage.value = 'Folder name is required.';
            }
        }
    }
}
function closeModal() {
    errorMessage.value = '';
    fileForm.value.fileName = '';
    emit('closeModal');
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
if (props.modalDetails) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
    Modal;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onCloseModal': {} },
        title: (props.modalDetails.title),
        modalOpen: (props.modalDetails.open),
        modalCentered: (true),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onCloseModal': {} },
        title: (props.modalDetails.title),
        modalOpen: (props.modalDetails.open),
        modalCentered: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = {
        /** @type {typeof __VLS_5.closeModal} */
        onCloseModal: (...[$event]) => {
            if (!(props.modalDetails))
                throw 0;
            return (__VLS_ctx.closeModal());
            // @ts-ignore
            [closeModal,];
        },
    };
    var __VLS_7;
    const { default: __VLS_8 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-body" },
    });
    /** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ onSubmit: (...[$event]) => {
                if (!(props.modalDetails))
                    throw 0;
                return (__VLS_ctx.submit());
                // @ts-ignore
                [submit,];
            } },
        ...{ class: "row g-3 needs-validation" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-control" },
        placeholder: "Enter name",
        ...{ class: ({ 'is-invalid': __VLS_ctx.errorMessage }) },
    });
    (__VLS_ctx.fileForm.fileName);
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-invalid']} */ ;
    if (__VLS_ctx.errorMessage) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        (__VLS_ctx.errorMessage);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        type: "submit",
        ...{ class: "btn btn-primary mt-10" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
    // @ts-ignore
    [errorMessage, errorMessage, errorMessage, fileForm,];
    var __VLS_3;
    var __VLS_4;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
