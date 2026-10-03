import { titleCase } from '@/utils/index';
const props = withDefaults(defineProps(), {
    rounded: false,
});
const __VLS_defaults = {
    rounded: false,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.badgeDetails) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "badge-spacing" },
    });
    /** @type {__VLS_StyleScopedClasses['badge-spacing']} */ ;
    for (const [badge, index] of __VLS_vFor((props.badgeDetails))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        if (props.type == 'outline') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: ([
                        `badge badge-b-${badge.color}`,
                        { 'rounded-pill': props.rounded },
                        badge.color == 'light' ? 'txt-dark' : 'txt-' + badge.color,
                    ]) },
            });
            /** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
            (__VLS_ctx.titleCase(badge.color));
        }
        else if (__VLS_ctx.type == 'number') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                ...{ class: ([
                        `badge badge-${badge.color}`,
                        {
                            'txt-dark': badge.color == 'light',
                            'rounded-circle badge-p-space': props.rounded,
                        },
                    ]) },
                href: "#",
            });
            /** @type {__VLS_StyleScopedClasses['txt-dark']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-p-space']} */ ;
            (index + 1);
        }
        else if (__VLS_ctx.type == 'icon') {
            for (const [icon, i] of __VLS_vFor((props.badgeIcons))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
                    key: (i),
                });
                if (i === index) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                        ...{ class: ([
                                `badge badge-${badge.color}`,
                                {
                                    'txt-dark': badge.color == 'light',
                                    'rounded-circle p-2': props.rounded,
                                    'b-ln-height': !props.rounded,
                                },
                            ]) },
                        href: "#",
                    });
                    /** @type {__VLS_StyleScopedClasses['txt-dark']} */ ;
                    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
                    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
                    /** @type {__VLS_StyleScopedClasses['b-ln-height']} */ ;
                    let __VLS_0;
                    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
                    vueFeather;
                    // @ts-ignore
                    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
                        type: (icon.icon),
                    }));
                    const __VLS_2 = __VLS_1({
                        type: (icon.icon),
                    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
                }
                // @ts-ignore
                [titleCase, type, type,];
            }
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: ([
                        `badge badge-${badge.color}`,
                        { 'txt-dark': badge.color == 'light', 'rounded-pill': props.rounded },
                    ]) },
            });
            /** @type {__VLS_StyleScopedClasses['txt-dark']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
            (__VLS_ctx.titleCase(badge.color));
        }
        // @ts-ignore
        [titleCase,];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
