import { defineAsyncComponent } from 'vue';
const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'));
const props = withDefaults(defineProps(), {
    cardType: 'simple',
    border: false,
    padding: true,
    rightSideDetails: false,
});
const __VLS_defaults = {
    cardType: 'simple',
    border: false,
    padding: true,
    rightSideDetails: false,
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
    ...{ class: (props.cardClass) },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
if (props.cardType === 'simple') {
    if (props.headerTitle || props.headerTopTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-header" },
            ...{ class: ([{ 'card-no-border': !props.border, 'pb-0': props.padding }, props.header]) },
        });
        /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
        /** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
        if ((props.dropdownType && props.options) || props.rightSideDetails) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "header-top" },
                ...{ class: (props.headerTopClass) },
            });
            /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
            var __VLS_0 = {};
            if (props.headerTitle) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
                    ...{ class: (__VLS_ctx.headerClass) },
                });
                (props.headerTitle);
                var __VLS_2 = {};
            }
            var __VLS_4 = {};
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "card-header-right-icon" },
            });
            /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
            var __VLS_6 = {};
            if (props.dropdownType && props.options) {
                let __VLS_8;
                /** @ts-ignore @type {typeof __VLS_components.CardDropdown} */
                CardDropdown;
                // @ts-ignore
                const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
                    dropdownType: (props.dropdownType),
                    options: (props.options),
                    dropdownClass: (props.dropdownClass),
                }));
                const __VLS_10 = __VLS_9({
                    dropdownType: (props.dropdownType),
                    options: (props.options),
                    dropdownClass: (props.dropdownClass),
                }, ...__VLS_functionalComponentArgsRest(__VLS_9));
            }
            var __VLS_13 = {};
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
                ...{ class: (props.headerClass) },
            });
            var __VLS_15 = {};
            (props.headerTitle);
            var __VLS_17 = {};
            var __VLS_19 = {};
        }
    }
    else {
        var __VLS_21 = {};
    }
}
else if (props.cardType == 'classic') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header card-no-border" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
    /** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
    if (props.headerTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "common-space" },
        });
        /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "left-header-content" },
        });
        /** @type {__VLS_StyleScopedClasses['left-header-content']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
        (props.headerTitle);
        if (props.sortDescription) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "m-0 c-o-light" },
            });
            /** @type {__VLS_StyleScopedClasses['m-0']} */ ;
            /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
            (props.sortDescription);
        }
        if (props.buttonText) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "card-header-right-btn" },
            });
            /** @type {__VLS_StyleScopedClasses['card-header-right-btn']} */ ;
            let __VLS_23;
            /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
            routerLink;
            // @ts-ignore
            const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
                ...{ class: "c-o-light" },
                to: (props.path || ''),
            }));
            const __VLS_25 = __VLS_24({
                ...{ class: "c-o-light" },
                to: (props.path || ''),
            }, ...__VLS_functionalComponentArgsRest(__VLS_24));
            /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
            const { default: __VLS_28 } = __VLS_26.slots;
            (props.buttonText);
            // @ts-ignore
            [headerClass,];
            var __VLS_26;
        }
    }
}
else if (props.cardType == 'dataTable') {
    if (props.headerTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-header" },
            ...{ class: ([{ 'card-no-border': !props.border, 'pb-2': props.padding }]) },
        });
        /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
        /** @type {__VLS_StyleScopedClasses['card-no-border']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "header-top" },
            ...{ class: (props.headerTopClass) },
        });
        /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
            ...{ class: (props.headerClass) },
        });
        (props.headerTitle);
        var __VLS_29 = {};
        var __VLS_31 = {};
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
    ...{ class: (props.cardBodyClass) },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
var __VLS_33 = {};
var __VLS_35 = {};
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2, __VLS_5 = __VLS_4, __VLS_7 = __VLS_6, __VLS_14 = __VLS_13, __VLS_16 = __VLS_15, __VLS_18 = __VLS_17, __VLS_20 = __VLS_19, __VLS_22 = __VLS_21, __VLS_30 = __VLS_29, __VLS_32 = __VLS_31, __VLS_34 = __VLS_33, __VLS_36 = __VLS_35;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
