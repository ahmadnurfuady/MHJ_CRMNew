const props = withDefaults(defineProps(), {
    color: false,
    text: false,
    backgroundColor: false,
    helperText: 'border',
});
const __VLS_defaults = {
    color: false,
    text: false,
    backgroundColor: false,
    helperText: 'border',
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.title) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    (props.title);
}
for (const [border, index] of __VLS_vFor((props.details))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "helper-common-box" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['helper-common-box']} */ ;
    if (__VLS_ctx.color) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (props.class + '' + border.color) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (__VLS_ctx.helperText);
        (border.color);
    }
    else if (props.text) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: ([
                    border.color === 'dark'
                        ? props.class + '' + 'txt-light bg-dark'
                        : props.class + '' + border.color,
                ]) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (border.color);
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (props.class + ' ' + border.class) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (border.class);
    }
    // @ts-ignore
    [color, helperText,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
