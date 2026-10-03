import { ref, onMounted } from 'vue';
import { touchSpinDetails } from '@/core/data/forms/formWidgets';
const props = withDefaults(defineProps(), {
    outlined: false,
});
const touchSpinClass = ref('');
const touchspin = touchSpinDetails;
const list = ref(JSON.parse(JSON.stringify(touchspin)));
onMounted(() => {
    if (props.outlined) {
        touchSpinClass.value = 'spin-border';
    }
    else {
        touchSpinClass.value = 'touchspin';
    }
});
function changeValue(id, value) {
    list.value.forEach((details) => {
        if (details.id === id) {
            if (value === -1 && details.value > 0) {
                details.value -= 1;
            }
            else if (value === 1) {
                details.value += 1;
            }
        }
    });
}
const __VLS_defaults = {
    outlined: false,
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
for (const [details, index] of __VLS_vFor((__VLS_ctx.list))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "touchspin-wrapper" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['touchspin-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeValue(details.id, -1);
                // @ts-ignore
                [list, changeValue,];
            } },
        ...{ class: (`decrement-touchspin btn-touchspin ${__VLS_ctx.touchSpinClass}-${details.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-minus" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-minus']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: (`input-touchspin spin-outline-${details.color}`) },
        type: "number",
        value: (details.value),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeValue(details.id, 1);
                // @ts-ignore
                [changeValue, touchSpinClass,];
            } },
        ...{ class: (`increment-touchspin btn-touchspin ${__VLS_ctx.touchSpinClass}-${details.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-plus" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
    // @ts-ignore
    [touchSpinClass,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
