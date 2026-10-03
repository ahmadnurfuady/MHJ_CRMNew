import { ref, watch } from "vue";
import { OnClickOutside } from "@vueuse/components";
const props = defineProps();
const selectedItem = ref("");
const show = ref(false);
watch(() => props.options, (newValue) => {
    if (newValue) {
        selectedItem.value = newValue[0].title;
    }
}, { immediate: true });
function openDropdown() {
    show.value = !show.value;
}
function selectItem(value) {
    selectedItem.value = value;
    show.value = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(show, {});
if (props.dropdownType == 'simple') {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.OnClickOutside | typeof __VLS_components.OnClickOutside} */
    OnClickOutside;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        // @ts-ignore
        ...{ 'onTrigger': {} },
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onTrigger': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = {
        /** @type {typeof __VLS_5.trigger} */
        onTrigger: // @ts-ignore
        (...[$event]) => {
            void $event;
            if (!(props.dropdownType == 'simple'))
                throw 0;
            return (show.value = false);
            // @ts-ignore
            [show,];
        },
    };
    void __VLS_6;
    const { default: __VLS_7 } = __VLS_nonNull(__VLS_3.slots);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown icon-dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: // @ts-ignore
            (...[$event]) => {
                void $event;
                if (!(props.dropdownType == 'simple'))
                    throw 0;
                return (openDropdown());
                // @ts-ignore
                [];
            } },
        ...{ class: "btn dropdown-toggle" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icon-more-alt" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-more-alt']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        ...{ class: ({ show: show.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    const __VLS_8 = __VLS_tryAsConstant((props.options));
    for (const [option, index] of __VLS_vFor(__VLS_nonNull(__VLS_8))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!(props.dropdownType == 'simple'))
                        throw 0;
                    return (selectItem(option.title));
                    // @ts-ignore
                    [show,];
                } },
            ...{ class: "dropdown-item" },
            href: "javascript:void(0)",
        });
        /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
        (option.title);
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_3;
    var __VLS_4;
}
if (props.dropdownType == 'classic') {
    let __VLS_9;
    /** @ts-ignore @type { | typeof __VLS_components.OnClickOutside | typeof __VLS_components.OnClickOutside} */
    OnClickOutside;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
        // @ts-ignore
        ...{ 'onTrigger': {} },
    }));
    const __VLS_11 = __VLS_10({
        ...{ 'onTrigger': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_14;
    const __VLS_15 = {
        /** @type {typeof __VLS_14.trigger} */
        onTrigger: // @ts-ignore
        (...[$event]) => {
            void $event;
            if (!(props.dropdownType == 'classic'))
                throw 0;
            return (show.value = false);
            // @ts-ignore
            [show,];
        },
    };
    void __VLS_15;
    const { default: __VLS_16 } = __VLS_nonNull(__VLS_12.slots);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
        ...{ class: (props.dropdownClass) },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: // @ts-ignore
            (...[$event]) => {
                void $event;
                if (!(props.dropdownType == 'classic'))
                    throw 0;
                return (openDropdown());
                // @ts-ignore
                [];
            } },
        ...{ class: "btn dropdown-toggle" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    (__VLS_unwrap(selectedItem, {}));
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "dropdown-menu" },
        ...{ class: ({ show: show.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    const __VLS_17 = __VLS_tryAsConstant((props.options));
    for (const [option, index] of __VLS_vFor(__VLS_nonNull(__VLS_17))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!(props.dropdownType == 'classic'))
                        throw 0;
                    return (selectItem(option.title));
                    // @ts-ignore
                    [show, selectedItem,];
                } },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "dropdown-item" },
            href: "javascript:void(0)",
        });
        /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
        (option.title);
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_12;
    var __VLS_13;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
import { defineProps, } from 'vue';
