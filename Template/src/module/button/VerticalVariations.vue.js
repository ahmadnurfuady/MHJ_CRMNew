import { verticalVariations } from '@/core/data/buttons';
const verticalVariationColor = ['primary', 'secondary', 'success', 'danger', 'warning'];
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex gap-3 align-items-end flex-wrap" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group-vertical" },
    role: "group",
    'aria-label': "Vertical button group",
});
/** @type {__VLS_StyleScopedClasses['btn-group-vertical']} */ ;
for (const [button, index] of __VLS_vFor((__VLS_ctx.verticalVariationColor))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn" },
        ...{ class: ('btn-' + button) },
        type: "button",
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    (button);
    // @ts-ignore
    [verticalVariationColor,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group-vertical buttons-box" },
});
/** @type {__VLS_StyleScopedClasses['btn-group-vertical']} */ ;
/** @type {__VLS_StyleScopedClasses['buttons-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn button-light-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn button-light-dark" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['button-light-dark']} */ ;
for (const [button] of __VLS_vFor((__VLS_ctx.verticalVariations))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "btn-group" },
        ...{ class: (button.mainClass) },
        role: "group",
        key: (button.class),
    });
    /** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn dropdown-toggle" },
        ...{ class: ('button-light-' + button.class) },
        type: "button",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    (button.class);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "dropdown-menu" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    // @ts-ignore
    [verticalVariations,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group-vertical" },
    role: "group",
    'aria-label': "Vertical radio toggle button group",
});
/** @type {__VLS_StyleScopedClasses['btn-group-vertical']} */ ;
for (const [index] of __VLS_vFor((3))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "btn-check" },
        id: ('vbtn-radio' + index),
        type: "radio",
        name: "vbtn-radio",
        checked: true,
    });
    /** @type {__VLS_StyleScopedClasses['btn-check']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "btn btn-outline-primary" },
        for: ('vbtn-radio' + index),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
    (index);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
