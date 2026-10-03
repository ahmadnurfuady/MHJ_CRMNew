import { toolbarGroups, nestedGroup } from '@/core/data/buttons';
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "button-wrapper button-box" },
});
/** @type {__VLS_StyleScopedClasses['button-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['button-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group" },
    role: "group",
    'aria-label': "Default button group",
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-outline-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group" },
    role: "group",
    'aria-label': "Button group with nested dropdown",
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.nestedGroup))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn" },
        ...{ class: (item.class) },
        type: "button",
        key: (item.id),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    (item.text);
    // @ts-ignore
    [nestedGroup,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group" },
    role: "group",
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary dropdown-toggle" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group select-checkbox" },
    role: "group",
    'aria-label': "Basic checkbox toggle button group",
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
/** @type {__VLS_StyleScopedClasses['select-checkbox']} */ ;
for (const [index] of __VLS_vFor((3))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "btn-check" },
        id: ('btncheck' + index),
        type: "checkbox",
    });
    /** @type {__VLS_StyleScopedClasses['btn-check']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "btn btn-outline-success mb-0" },
        for: ('btncheck' + index),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-outline-success']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    (index);
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-wrapper border rounded-3 h-100" },
});
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "sub-title fw-bold" },
});
/** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-toolbar" },
    role: "toolbar",
    'aria-label': "Toolbar with button groups",
});
/** @type {__VLS_StyleScopedClasses['btn-toolbar']} */ ;
for (const [group, index] of __VLS_vFor((__VLS_ctx.toolbarGroups))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "btn-group" },
        role: "group",
        key: (index),
        'aria-label': (group.ariaLabel),
    });
    /** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
    for (const [button, buttonIndex] of __VLS_vFor((group.buttons))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            key: (buttonIndex),
            ...{ class: (button.class) },
            type: "button",
        });
        (button.text);
        // @ts-ignore
        [toolbarGroups,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
