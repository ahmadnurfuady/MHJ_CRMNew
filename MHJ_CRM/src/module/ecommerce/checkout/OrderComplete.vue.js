import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const props = withDefaults(defineProps(), {
    type: 'simple',
});
const __VLS_defaults = {
    type: 'simple',
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "stepper-four row g-3 needs-validation shipping-wizard" },
});
/** @type {__VLS_StyleScopedClasses['stepper-four']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['needs-validation']} */ ;
/** @type {__VLS_StyleScopedClasses['shipping-wizard']} */ ;
if (props.type == 'simple') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "order-confirm" },
    });
    /** @type {__VLS_StyleScopedClasses['order-confirm']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (`${__VLS_ctx.getImages('gif/dashboard-8/successful.gif')}`),
        alt: "popper",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
}
else if (props.type == 'classic') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "order-confirm" },
    });
    /** @type {__VLS_StyleScopedClasses['order-confirm']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (`${__VLS_ctx.getImages('gif/dashboard-8/successful.gif')}`),
        alt: "popper",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-center f-w-500 mt-2" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "text-decoration-underline" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['text-decoration-underline']} */ ;
}
// @ts-ignore
[getImages, getImages,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
