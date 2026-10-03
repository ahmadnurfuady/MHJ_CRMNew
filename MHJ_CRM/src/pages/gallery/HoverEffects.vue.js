import { ref, reactive, defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { imgDetails } from '@/core/data/gallery';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const lightBoxImages = ref([]);
const state = reactive({
    visibleRef: false,
    indexRef: 0,
});
function showImg(index, images) {
    lightBoxImages.value = images.map((item) => getImages(item.previewUrl));
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
for (const [details, index] of __VLS_vFor((__VLS_ctx.imgDetails))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
        key: (index),
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
        headerTitle: ('Hover Effect ' + details.hoverDigits),
        border: (true),
        padding: (false),
    }));
    const __VLS_2 = __VLS_1({
        headerTitle: ('Hover Effect ' + details.hoverDigits),
        border: (true),
        padding: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row my-gallery gallery" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['my-gallery']} */ ;
    /** @type {__VLS_StyleScopedClasses['gallery']} */ ;
    for (const [image, i] of __VLS_vFor((details.images))) {
        (i);
        if (details.text) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
                ...{ onClick: (() => __VLS_ctx.showImg(i, details.images)) },
                ...{ class: "col-xxl-3 col-xl-4 col-md-6 box-col-4 img-hover" },
            });
            /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
            /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
            /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
            /** @type {__VLS_StyleScopedClasses['box-col-4']} */ ;
            /** @type {__VLS_StyleScopedClasses['img-hover']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                ...{ class: (details.hoverClass) },
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-thumbnail" },
                src: (__VLS_ctx.getImages(image.srcUrl)),
            });
            /** @type {__VLS_StyleScopedClasses['img-thumbnail']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "overlay-hover" },
            });
            /** @type {__VLS_StyleScopedClasses['overlay-hover']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "overlay-content" },
            });
            /** @type {__VLS_StyleScopedClasses['overlay-content']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
            (image.title);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
            (image.description);
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "common-align gap-2" },
            });
            /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
            /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
            for (const [button] of __VLS_vFor((image.buttons))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: (`btn btn-${button.color}`) },
                    key: (button.color),
                });
                (button.title);
                // @ts-ignore
                [imgDetails, showImg, getImages,];
            }
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
                ...{ onClick: (() => __VLS_ctx.showImg(index, details.images)) },
                ...{ class: (`col-md-3 col-6 img-hover ${details.hoverClass}`) },
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                href: "#",
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ style: {} },
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-thumbnail" },
                src: (__VLS_ctx.getImages(image.srcUrl)),
            });
            /** @type {__VLS_StyleScopedClasses['img-thumbnail']} */ ;
        }
        // @ts-ignore
        [showImg, getImages,];
    }
    // @ts-ignore
    [];
    var __VLS_3;
    // @ts-ignore
    [];
}
if (__VLS_ctx.lightBoxImages) {
    let __VLS_6;
    /** @ts-ignore @type {typeof __VLS_components.VueEasyLightbox} */
    VueEasyLightbox;
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
}
// @ts-ignore
[lightBoxImages, lightBoxImages, state, state, onHide,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
