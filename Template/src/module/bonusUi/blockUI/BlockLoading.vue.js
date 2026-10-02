import { defineAsyncComponent, onBeforeUnmount, ref } from 'vue';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const type = ref('');
const loadingShow = ref(false);
let loadingTimer = null;
function loading(value) {
    type.value = value;
    loadingShow.value = true;
    if (loadingTimer) {
        clearTimeout(loadingTimer);
    }
    loadingTimer = window.setTimeout(() => {
        loadingShow.value = false;
        loadingTimer = null;
    }, 3000);
}
onBeforeUnmount(() => {
    if (loadingTimer) {
        clearTimeout(loadingTimer);
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Block Loading'),
    headerClass: ('mb-0'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Block Loading'),
    headerClass: ('mb-0'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "block-main-wrapper position-relative" },
});
/** @type {__VLS_StyleScopedClasses['block-main-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "block-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['block-wrapper']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.loadingOverlay | typeof __VLS_components.LoadingOverlay | typeof __VLS_components.loadingOverlay | typeof __VLS_components.LoadingOverlay} */
loadingOverlay;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    active: (__VLS_ctx.loadingShow),
    isFullPage: (false),
    opacity: (0.5),
    color: ('#343a40'),
    backgroundColor: ('#ffffffcc'),
    width: (30),
    height: (30),
    loader: (['dots', 'bars'].includes(__VLS_ctx.type) ? __VLS_ctx.type : ''),
}));
const __VLS_10 = __VLS_9({
    active: (__VLS_ctx.loadingShow),
    isFullPage: (false),
    opacity: (0.5),
    color: ('#343a40'),
    backgroundColor: ('#ffffffcc'),
    width: (30),
    height: (30),
    loader: (['dots', 'bars'].includes(__VLS_ctx.type) ? __VLS_ctx.type : ''),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_11.slots;
if (!['dots', 'bars'].includes(__VLS_ctx.type)) {
    {
        const { default: __VLS_14 } = __VLS_11.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "custom-loader" },
        });
        /** @type {__VLS_StyleScopedClasses['custom-loader']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-center fw-semibold" },
            ...{ style: ({ color: '#343a40' }) },
        });
        /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['fw-semibold']} */ ;
        // @ts-ignore
        [loadingShow, type, type, type,];
    }
}
// @ts-ignore
[];
var __VLS_11;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "card-img-top1 img-fluid" },
    src: (__VLS_ctx.getImages('other-images/profile-style-img3.png')),
    alt: "nature",
});
/** @type {__VLS_StyleScopedClasses['card-img-top1']} */ ;
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-t-10" },
});
/** @type {__VLS_StyleScopedClasses['p-t-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "card-title" },
});
/** @type {__VLS_StyleScopedClasses['card-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "card-text c-light" },
});
/** @type {__VLS_StyleScopedClasses['card-text']} */ ;
/** @type {__VLS_StyleScopedClasses['c-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.loading('custom');
            // @ts-ignore
            [getImages, loading,];
        } },
    ...{ class: "button btn btn-primary block-btn-1" },
});
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['block-btn-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.loading('dots');
            // @ts-ignore
            [loading,];
        } },
    ...{ class: "button btn btn-primary block-btn-2" },
});
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['block-btn-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.loading('bars');
            // @ts-ignore
            [loading,];
        } },
    ...{ class: "button btn btn-primary block-btn-3" },
});
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['block-btn-3']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
