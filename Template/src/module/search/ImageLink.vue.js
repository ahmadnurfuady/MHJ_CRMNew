import { ref, onMounted } from "vue";
import { search } from "@/core/data/searchResult";
import { getImages } from "@/utils/index";
const lightBoxImages = ref([]);
const visible = ref(false);
const indexRef = ref(0);
function showImg(index) {
    indexRef.value = index;
    visible.value = true;
}
function handleHide() {
    visible.value = false;
}
onMounted(() => {
    search.forEach((item) => {
        lightBoxImages.value.push({
            src: "/riho/images/" + item.image,
            title: item.description,
        });
    });
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "my-gallery row gallery-with-description" },
    id: "aniimated-thumbnials",
    itemscope: true,
});
/** @type {__VLS_StyleScopedClasses['my-gallery']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery-with-description']} */ ;
for (const [src, index] of __VLS_vFor((__VLS_ctx.search))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
        ...{ onClick: (() => __VLS_ctx.showImg(index)) },
        ...{ class: "col-xl-3 col-sm-6" },
        key: (index),
        itemprop: "associatedMedia",
        itemscope: true,
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(src.image || '')),
        itemprop: "thumbnail",
        alt: "Image description",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "caption" },
    });
    /** @type {__VLS_StyleScopedClasses['caption']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (src.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (src.description);
    // @ts-ignore
    [search, showImg, getImages,];
}
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.vueEasyLightbox | typeof __VLS_components.VueEasyLightbox | typeof __VLS_components['vue-easy-lightbox'] | typeof __VLS_components.vueEasyLightbox | typeof __VLS_components.VueEasyLightbox | typeof __VLS_components['vue-easy-lightbox']} */
vueEasyLightbox;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onHide': {} },
    index: (__VLS_ctx.indexRef),
    visible: (__VLS_ctx.visible),
    imgs: (__VLS_ctx.lightBoxImages),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onHide': {} },
    index: (__VLS_ctx.indexRef),
    visible: (__VLS_ctx.visible),
    imgs: (__VLS_ctx.lightBoxImages),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.hide} */
    onHide: (__VLS_ctx.handleHide),
};
var __VLS_3;
var __VLS_4;
// @ts-ignore
[indexRef, visible, lightBoxImages, handleHide,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
