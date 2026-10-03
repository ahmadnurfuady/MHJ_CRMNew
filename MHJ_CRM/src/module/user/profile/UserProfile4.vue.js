import { ref, computed } from "vue";
import { getImages } from "@/utils/index";
const visible = ref(false);
const indexRef = ref(0);
const props = defineProps();
const images = ref([{ image: "blog/img.png" }]);
const previewImages = computed(() => images.value.map((img) => getImages(img.image)));
function showImg(index) {
    indexRef.value = index;
    visible.value = true;
}
function handleHide() {
    visible.value = false;
}
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
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "profile-img-style" },
});
/** @type {__VLS_StyleScopedClasses['profile-img-style']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-8" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-thumbnail rounded-circle me-3" },
    src: (__VLS_ctx.getImages('user/7.jpg')),
});
/** @type {__VLS_StyleScopedClasses['img-thumbnail']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['me-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1 align-self-center" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['align-self-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
    ...{ class: "mt-0 user-name" },
});
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['user-name']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.hr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-12 col-xl-4" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
if (__VLS_ctx.tour) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid rounded" },
        src: (__VLS_ctx.getImages('other-images/sidebar-bg.jpg')),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "my-gallery" },
    });
    /** @type {__VLS_StyleScopedClasses['my-gallery']} */ ;
    for (const [src, index] of __VLS_vFor((__VLS_ctx.images))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.tour))
                        return;
                    __VLS_ctx.showImg(index);
                    // @ts-ignore
                    [getImages, getImages, tour, images, showImg,];
                } },
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid rounded" },
            src: (__VLS_ctx.getImages(src.image)),
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
        // @ts-ignore
        [getImages,];
    }
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.vueEasyLightbox | typeof __VLS_components.VueEasyLightbox} */
    vueEasyLightbox;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onHide': {} },
        index: (__VLS_ctx.indexRef),
        visible: (__VLS_ctx.visible),
        imgs: (__VLS_ctx.previewImages),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onHide': {} },
        index: (__VLS_ctx.indexRef),
        visible: (__VLS_ctx.visible),
        imgs: (__VLS_ctx.previewImages),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = ({ hide: {} },
        { onHide: (__VLS_ctx.handleHide) });
    var __VLS_3;
    var __VLS_4;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
// @ts-ignore
[indexRef, visible, previewImages, handleHide,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
