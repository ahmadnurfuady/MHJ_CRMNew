import { accountType } from '@/core/data/forms/formLayout';
const props = defineProps();
const defaultChecked = accountType.find((type) => type.checked);
if (defaultChecked && props.form) {
    props.form.accountType = defaultChecked.title;
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.form) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ class: "row g-3 needs-validation" },
        novalidate: true,
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['g-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-12" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check radio radio-primary ps-0 select-account" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['radio']} */ ;
    /** @type {__VLS_StyleScopedClasses['radio-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['select-account']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "radio-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['radio-wrapper']} */ ;
    for (const [type, index] of __VLS_vFor((__VLS_ctx.accountType))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-check-input" },
            id: (type.id),
            type: "radio",
            name: "radio2",
            value: (type.title),
        });
        (props.form.accountType);
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label mb-0" },
            for: (type.id),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: (`fa-solid fa-${type.icon}`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "d-flex flex-column" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (type.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (type.description);
        // @ts-ignore
        [accountType,];
    }
    if (!props.form.accountType && props.formSubmitted) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "invalid-feedback d-block" },
        });
        /** @type {__VLS_StyleScopedClasses['invalid-feedback']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
