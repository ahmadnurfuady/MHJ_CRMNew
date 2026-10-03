import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileManager } from '@/store/fileManager';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const FilesModal = defineAsyncComponent(() => import('@/module/fileManager/FilesModal.vue'));
const DeleteFileModal = defineAsyncComponent(() => import('@/module/fileManager/DeleteFileModal.vue'));
const fileManagerStore = useFileManager();
const { fileManagerState } = storeToRefs(fileManagerStore);
const { openDialog, handleForm, navigate, goHome, select, openFolder, closeModal, deleteModal, remove, } = fileManagerStore;
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
    headerTitle: ('All Files'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('All Files'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { header5: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0 f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-file-manager" },
});
/** @type {__VLS_StyleScopedClasses['common-file-manager']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "filemanger" },
});
/** @type {__VLS_StyleScopedClasses['filemanger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "top-menu" },
});
/** @type {__VLS_StyleScopedClasses['top-menu']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openDialog('New File', 'file');
            // @ts-ignore
            [openDialog,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-file-circle-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-file-circle-plus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openDialog('New Folder', 'folder');
            // @ts-ignore
            [openDialog,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-regular fa-folder-open" },
});
/** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-folder-open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openDialog('Rename', 'rename');
            // @ts-ignore
            [openDialog,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-pen-to-square" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-pen-to-square']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.deleteModal();
            // @ts-ignore
            [deleteModal,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-trash" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-trash']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "top-folder-path" },
});
/** @type {__VLS_StyleScopedClasses['top-folder-path']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "path-action-btns" },
});
/** @type {__VLS_StyleScopedClasses['path-action-btns']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.navigate('back');
            // @ts-ignore
            [navigate,];
        } },
    id: "backwardBtn",
    disabled: (!__VLS_ctx.fileManagerState.isSubFolder),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-arrow-left" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-arrow-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.navigate('next');
            // @ts-ignore
            [navigate, fileManagerState,];
        } },
    id: "forwardBtn",
    disabled: (__VLS_ctx.fileManagerState.forwardStack.length === 0),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-arrow-right" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-arrow-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.goHome();
            // @ts-ignore
            [fileManagerState, goHome,];
        } },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-house" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-house']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "folder-path-write" },
});
/** @type {__VLS_StyleScopedClasses['folder-path-write']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "folder-path-input" },
    type: "text",
    value: (__VLS_ctx.fileManagerState.location),
    readonly: true,
});
/** @type {__VLS_StyleScopedClasses['folder-path-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "block-btn-1" },
});
/** @type {__VLS_StyleScopedClasses['block-btn-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-arrows-rotate" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-arrows-rotate']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "file-manager-grid block-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['file-manager-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['block-wrapper']} */ ;
if (__VLS_ctx.fileManagerState.visibleFiles.length) {
    for (const [file, index] of __VLS_vFor((__VLS_ctx.fileManagerState.visibleFiles))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ onDblclick: (...[$event]) => {
                    if (!(__VLS_ctx.fileManagerState.visibleFiles.length))
                        return;
                    file.type == 'folder' ? __VLS_ctx.openFolder(file.id) : '';
                    // @ts-ignore
                    [fileManagerState, fileManagerState, fileManagerState, openFolder,];
                } },
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.fileManagerState.visibleFiles.length))
                        return;
                    __VLS_ctx.select(file);
                    // @ts-ignore
                    [select,];
                } },
            ...{ class: ({
                    file: file.type == 'file',
                    folder: file.type == 'folder',
                    'item-selected': __VLS_ctx.fileManagerState.selected && __VLS_ctx.fileManagerState.selected.id == file.id,
                }) },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['file']} */ ;
        /** @type {__VLS_StyleScopedClasses['folder']} */ ;
        /** @type {__VLS_StyleScopedClasses['item-selected']} */ ;
        if (file.type == 'file') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.fileManagerState.visibleFiles.length))
                            return;
                        if (!(file.type == 'file'))
                            return;
                        __VLS_ctx.select(file);
                        // @ts-ignore
                        [fileManagerState, fileManagerState, select,];
                    } },
                ...{ class: "doc-icon-container" },
            });
            /** @type {__VLS_StyleScopedClasses['doc-icon-container']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "doc-icon" },
            });
            /** @type {__VLS_StyleScopedClasses['doc-icon']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
            (file.text);
        }
        if (file.type == 'folder') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ onDblclick: (...[$event]) => {
                        if (!(__VLS_ctx.fileManagerState.visibleFiles.length))
                            return;
                        if (!(file.type == 'folder'))
                            return;
                        __VLS_ctx.openFolder(file.id);
                        // @ts-ignore
                        [openFolder,];
                    } },
                ...{ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.fileManagerState.visibleFiles.length))
                            return;
                        if (!(file.type == 'folder'))
                            return;
                        __VLS_ctx.select(file);
                        // @ts-ignore
                        [select,];
                    } },
                ...{ class: "folder-icon-container" },
            });
            /** @type {__VLS_StyleScopedClasses['folder-icon-container']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "folder-icon" },
            });
            /** @type {__VLS_StyleScopedClasses['folder-icon']} */ ;
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "common-space" },
        });
        /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "folder-name" },
        });
        /** @type {__VLS_StyleScopedClasses['folder-name']} */ ;
        (file.name);
        // @ts-ignore
        [];
    }
}
if (!__VLS_ctx.fileManagerState.visibleFiles.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "folderEmpty" },
        ...{ style: ({ display: 'block' }) },
    });
    /** @type {__VLS_StyleScopedClasses['folderEmpty']} */ ;
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: ('folder-empty'),
        type: "default",
    }));
    const __VLS_9 = __VLS_8({
        icon: ('folder-empty'),
        type: "default",
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
}
// @ts-ignore
[fileManagerState,];
var __VLS_3;
if (__VLS_ctx.fileManagerState.isModalOpen) {
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.FilesModal} */
    FilesModal;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        ...{ 'onFileForm': {} },
        ...{ 'onCloseModal': {} },
        modalDetails: (__VLS_ctx.fileManagerState.modalDetails),
    }));
    const __VLS_14 = __VLS_13({
        ...{ 'onFileForm': {} },
        ...{ 'onCloseModal': {} },
        modalDetails: (__VLS_ctx.fileManagerState.modalDetails),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_17;
    const __VLS_18 = ({ fileForm: {} },
        { onFileForm: (...[$event]) => {
                if (!(__VLS_ctx.fileManagerState.isModalOpen))
                    return;
                __VLS_ctx.handleForm($event);
                // @ts-ignore
                [fileManagerState, fileManagerState, handleForm,];
            } });
    const __VLS_19 = ({ closeModal: {} },
        { onCloseModal: (...[$event]) => {
                if (!(__VLS_ctx.fileManagerState.isModalOpen))
                    return;
                __VLS_ctx.closeModal($event);
                // @ts-ignore
                [closeModal,];
            } });
    var __VLS_15;
    var __VLS_16;
}
if (__VLS_ctx.fileManagerState.deleteModalOpen) {
    let __VLS_20;
    /** @ts-ignore @type {typeof __VLS_components.DeleteFileModal} */
    DeleteFileModal;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        ...{ 'onDelete': {} },
        ...{ 'onCloseModal': {} },
        modalOpen: (__VLS_ctx.fileManagerState.deleteModalOpen),
    }));
    const __VLS_22 = __VLS_21({
        ...{ 'onDelete': {} },
        ...{ 'onCloseModal': {} },
        modalOpen: (__VLS_ctx.fileManagerState.deleteModalOpen),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_25;
    const __VLS_26 = ({ delete: {} },
        { onDelete: (...[$event]) => {
                if (!(__VLS_ctx.fileManagerState.deleteModalOpen))
                    return;
                __VLS_ctx.remove($event);
                // @ts-ignore
                [fileManagerState, fileManagerState, remove,];
            } });
    const __VLS_27 = ({ closeModal: {} },
        { onCloseModal: (...[$event]) => {
                if (!(__VLS_ctx.fileManagerState.deleteModalOpen))
                    return;
                __VLS_ctx.fileManagerState.deleteModalOpen = false;
                // @ts-ignore
                [fileManagerState,];
            } });
    var __VLS_23;
    var __VLS_24;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
