import { defineAsyncComponent, ref } from 'vue';
import { getImages } from '@/utils';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const showToast = ref(true);
function closeToast() {
    showToast.value = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('height-equal'),
    headerTitle: ('Default Toast'),
    border: (true),
    padding: (false),
    cardBodyClass: ('toast-rtl'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    headerTitle: ('Default Toast'),
    border: (true),
    padding: (false),
    cardBodyClass: ('toast-rtl'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast default-show-toast toast" },
    ...{ class: (__VLS_ctx.showToast ? 'show' : 'hide') },
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['default-show-toast']} */ ;
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-header toast-img" },
});
/** @type {__VLS_StyleScopedClasses['toast-header']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "rounded me-2" },
    src: (__VLS_ctx.getImages('dashboard/profile.png')),
    alt: "profile",
});
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "me-auto" },
});
/** @type {__VLS_StyleScopedClasses['me-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({
    ...{ class: "d-sm-block d-none" },
});
/** @type {__VLS_StyleScopedClasses['d-sm-block']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.closeToast());
            // @ts-ignore
            [showToast, getImages, closeToast,];
        } },
    ...{ class: "btn-close" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body toast-dark" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "txt-success" },
});
/** @type {__VLS_StyleScopedClasses['txt-success']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
