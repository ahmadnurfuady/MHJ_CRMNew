import { ref } from 'vue';
const props = withDefaults(defineProps(), {
    button: false,
});
const counter = ref([0, 0]);
function increment(i) {
    if (i == 0 || i == 1) {
        counter.value[i] += 1;
    }
}
function decrement(i) {
    if (i == 0 || i == 1) {
        if (counter.value[i] > 0) {
            counter.value[i] -= 1;
        }
    }
}
const __VLS_defaults = {
    button: false,
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
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.decrement(0));
            // @ts-ignore
            [decrement,];
        } },
    ...{ class: (`decrement-touchspin btn-touchspin touchspin-${props.color}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-minus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-minus']} */ ;
if (props.button) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn-outline-warning" },
        id: "button-addon1",
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn-outline-warning']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "input-group-text" },
    });
    /** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: (`input-touchspin spin-outline-${props.color}`) },
    type: "number",
    value: (__VLS_ctx.counter[0]),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.increment(0));
            // @ts-ignore
            [counter, increment,];
        } },
    ...{ class: (`increment-touchspin btn-touchspin touchspin-${props.color}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.decrement(1));
            // @ts-ignore
            [decrement,];
        } },
    ...{ class: (`decrement-touchspin btn-touchspin touchspin-${props.color}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-minus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-minus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: (`input-touchspin spin-outline-${props.color}`) },
    type: "number",
    value: (__VLS_ctx.counter[1]),
});
if (props.button) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn-outline-warning" },
        id: "button-addon2",
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn-outline-warning']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "input-group-text" },
    });
    /** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.increment(1));
            // @ts-ignore
            [counter, increment,];
        } },
    ...{ class: (`increment-touchspin btn-touchspin touchspin-${props.color}`) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
