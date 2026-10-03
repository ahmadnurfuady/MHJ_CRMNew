import { ref, reactive, onMounted, defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { galleryGridDetails } from '@/core/data/gallery';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const images = ref(galleryGridDetails);
const lightBoxImages = ref([]);
const state = reactive({
    visibleRef: false,
    indexRef: 0,
});
onMounted(() => {
    lightBoxImages.value = images.value.map((item) => getImages(item.previewUrl));
});
function showImg(index) {
    state.indexRef = index;
    state.visibleRef = true;
}
function onHide() {
    state.visibleRef = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('IMAGE GALLERY'),
    cardBodyClass: ('gallery my-gallery row'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('IMAGE GALLERY'),
    cardBodyClass: ('gallery my-gallery row'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
for (const [image, index] of __VLS_vFor((__VLS_ctx.images))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.showImg(index);
                // @ts-ignore
                [images, showImg,];
            } },
        ...{ class: "col-xl-3 col-md-4 col-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-thumbnail" },
        src: (__VLS_ctx.getImages(image.srcUrl)),
    });
    /** @type {__VLS_StyleScopedClasses['img-thumbnail']} */ ;
    // @ts-ignore
    [getImages,];
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.vueEasyLightbox | typeof __VLS_components.VueEasyLightbox} */
vueEasyLightbox;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.state.visibleRef),
    imgs: (__VLS_ctx.lightBoxImages),
    index: (__VLS_ctx.state.indexRef),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.state.visibleRef),
    imgs: (__VLS_ctx.lightBoxImages),
    index: (__VLS_ctx.state.indexRef),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = ({ hide: {} },
    { onHide: (__VLS_ctx.onHide) });
var __VLS_9;
var __VLS_10;
// @ts-ignore
[state, state, lightBoxImages, onHide,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
