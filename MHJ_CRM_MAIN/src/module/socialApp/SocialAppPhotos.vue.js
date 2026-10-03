import { reactive, onMounted, defineAsyncComponent } from 'vue';
import { photos } from '@/core/data/socialApp';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const props = withDefaults(defineProps(), {
    likesSection: true,
});
const state = reactive({
    visibleRef: false,
    indexRef: 0,
    photoList: photos,
    lightBoxImages: [''],
});
onMounted(() => {
    state.lightBoxImages = state.photoList.map((item) => getImages(item.previewUrl));
});
function showImg(index) {
    state.indexRef = index;
    state.visibleRef = true;
}
function onHide() {
    state.visibleRef = false;
}
const __VLS_defaults = {
    likesSection: true,
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
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardBodyClass: ('my-gallery gallery-with-description'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('my-gallery gallery-with-description'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [photo, index] of __VLS_vFor((__VLS_ctx.state.photoList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.showImg(index));
                // @ts-ignore
                [state, showImg,];
            } },
        ...{ class: "col-xxl-3 col-lg-4 col-sm-6 box-col-4" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-lg-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(photo.srcUrl)),
        itemprop: "thumbnail",
        alt: "Image description",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "caption" },
    });
    /** @type {__VLS_StyleScopedClasses['caption']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (photo.userName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    (photo.description);
    // @ts-ignore
    [getImages,];
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.VueEasyLightbox} */
VueEasyLightbox;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.state.visibleRef),
    imgs: (__VLS_ctx.state.lightBoxImages),
    index: (__VLS_ctx.state.indexRef),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.state.visibleRef),
    imgs: (__VLS_ctx.state.lightBoxImages),
    index: (__VLS_ctx.state.indexRef),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = {
    /** @type {typeof __VLS_11.hide} */
    onHide: (__VLS_ctx.onHide),
};
var __VLS_9;
var __VLS_10;
// @ts-ignore
[state, state, state, onHide,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
