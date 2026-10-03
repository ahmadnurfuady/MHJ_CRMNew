import { ref, defineAsyncComponent } from 'vue';
import { permissions } from '@/core/data/user';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const props = defineProps();
const emits = defineEmits(['closeModal']);
const permissionList = ref(permissions);
const selectedPermission = ref([]);
function closeModal() {
    emits('closeModal');
}
function checkUncheckAll(event, module) {
    module.modulePermission.forEach((item) => {
        item.isChecked = event.target.checked;
        addPermission(event.target.checked, item?.id, module);
    });
}
function onPermissionChecked(event, module) {
    module.modulePermission.forEach((item) => {
        item.isChecked = false;
        if (item.name == 'index') {
            item.isChecked = !item.isChecked ? true : false;
            addPermission(true, +item.id, module);
        }
        addPermission(event.target?.checked, +event?.target?.value, module);
    });
}
function addPermission(checked, value, module) {
    const index = selectedPermission.value.indexOf(Number(value));
    if (checked) {
        if (index == -1)
            selectedPermission.value.push(Number(value));
    }
    else {
        selectedPermission.value = selectedPermission.value.filter((id) => id != Number(value));
    }
    updateCheckBoxStatus(module);
}
function updateCheckBoxStatus(module) {
    let count = 0;
    module.modulePermission.filter((permission) => {
        if (selectedPermission.value.includes(permission.id)) {
            count++;
        }
        if (module.modulePermission.length <= count)
            module.isChecked = true;
        else
            module.isChecked = false;
    });
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
    title: ('Create Role'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-xl'),
    contentClass: ('role-permission-wrapper'),
    modalCentered: (true),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: ('Create Role'),
    modalOpen: (props.modalOpen),
    sizeClass: ('modal-xl'),
    contentClass: ('role-permission-wrapper'),
    modalCentered: (true),
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
    ...{ class: "modal-body custom-input" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-lg-3 row mb-4 g-lg-3 g-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['g-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-2" },
});
/** @type {__VLS_StyleScopedClasses['col-md-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label mb-0" },
    for: "validationName",
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "txt-danger" },
});
/** @type {__VLS_StyleScopedClasses['txt-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-10" },
});
/** @type {__VLS_StyleScopedClasses['col-md-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-control" },
    id: "validationName",
    type: "text",
    placeholder: "Enter name",
    required: true,
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-lg-3 g-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-lg-3']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "form-label mb-0" },
    for: "validationName",
});
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "txt-danger" },
});
/** @type {__VLS_StyleScopedClasses['txt-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row permission-form g-2" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['permission-form']} */ ;
/** @type {__VLS_StyleScopedClasses['g-2']} */ ;
for (const [module, index] of __VLS_vFor((__VLS_ctx.permissionList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    (module.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onChange: (...[$event]) => {
                __VLS_ctx.checkUncheckAll($event, module);
                // @ts-ignore
                [permissionList, checkUncheckAll,];
            } },
        ...{ class: "form-check-input check-all" },
        id: "all",
        type: "checkbox",
        checked: (module.isChecked),
    });
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    /** @type {__VLS_StyleScopedClasses['check-all']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-check-label" },
        for: "all",
    });
    /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
    for (const [permission, index] of __VLS_vFor((module.modulePermission))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-check" },
        });
        /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ onChange: (...[$event]) => {
                    __VLS_ctx.onPermissionChecked($event, module);
                    // @ts-ignore
                    [onPermissionChecked,];
                } },
            ...{ class: "form-check-input" },
            id: (permission.permissionId.toString()),
            type: "checkbox",
            checked: (__VLS_ctx.selectedPermission.includes(+permission.permissionId) ||
                permission.isChecked
                ? true
                : false),
            value: (permission.permissionId),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label" },
            for: (permission.permissionId.toString()),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        (permission.name);
        // @ts-ignore
        [selectedPermission,];
    }
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-12 d-flex justify-content-end mt-3" },
});
/** @type {__VLS_StyleScopedClasses['col-md-12']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.closeModal();
            // @ts-ignore
            [closeModal,];
        } },
    ...{ class: "btn btn-primary" },
    type: "submit",
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
