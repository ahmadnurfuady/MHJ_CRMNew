import { defineAsyncComponent } from 'vue';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const __VLS_props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});
const __VLS_emit = defineEmits(['increment', 'decrement', 'delete']);
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
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "touchspin-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['touchspin-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.$emit('decrement', __VLS_ctx.item));
            // @ts-ignore
            [$emit, item,];
        } },
    ...{ class: "decrement-touchspin btn-touchspin touchspin-primary" },
});
/** @type {__VLS_StyleScopedClasses['decrement-touchspin']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-touchspin']} */ ;
/** @type {__VLS_StyleScopedClasses['touchspin-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-minus" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-minus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "input-touchspin spin-outline-primary" },
    type: "number",
});
(__VLS_ctx.item.quantity);
/** @type {__VLS_StyleScopedClasses['input-touchspin']} */ ;
/** @type {__VLS_StyleScopedClasses['spin-outline-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.$emit('increment', __VLS_ctx.item));
            // @ts-ignore
            [$emit, item, item,];
        } },
    ...{ class: "increment-touchspin btn-touchspin touchspin-primary" },
});
/** @type {__VLS_StyleScopedClasses['increment-touchspin']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-touchspin']} */ ;
/** @type {__VLS_StyleScopedClasses['touchspin-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "txt-primary" },
});
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
(__VLS_ctx.item.price * __VLS_ctx.item.quantity);
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-action" },
});
/** @type {__VLS_StyleScopedClasses['product-action']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "square-white" },
    'data-bs-title': "Wishlist",
});
/** @type {__VLS_StyleScopedClasses['square-white']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: "fill-wishlist",
}));
const __VLS_2 = __VLS_1({
    icon: "fill-wishlist",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.$emit('delete', __VLS_ctx.item));
            // @ts-ignore
            [$emit, item, item, item,];
        } },
    ...{ class: "square-white trash-3" },
    'data-bs-title': "Delete",
});
/** @type {__VLS_StyleScopedClasses['square-white']} */ ;
/** @type {__VLS_StyleScopedClasses['trash-3']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    icon: "trash1",
}));
const __VLS_7 = __VLS_6({
    icon: "trash1",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
});
export default {};
