import { ref, reactive, onMounted, defineAsyncComponent } from 'vue';
import AOS from 'aos';
import { aosAnimationImages } from '@/core/data/animation';
import { getImages } from '@/utils/index';
import MasonryWall from '@yeger/vue-masonry-wall';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const imageList = ref(aosAnimationImages);
const lightBoxImages = ref([]);
const state = reactive({
    visibleRef: false,
    indexRef: 0,
});
onMounted(() => {
    AOS.init({ duration: 1500 });
    lightBoxImages.value = imageList.value.map((item) => getImages(item.previewImage));
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
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('AOS Animation'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('AOS Animation'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
if (__VLS_ctx.imageList?.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row gallery grid my-gallery" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    /** @type {__VLS_StyleScopedClasses['gallery']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['my-gallery']} */ ;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.MasonryWall | typeof __VLS_components.MasonryWall} */
    MasonryWall;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        items: (__VLS_ctx.imageList),
        columnWidth: (300),
        gap: (20),
    }));
    const __VLS_8 = __VLS_7({
        items: (__VLS_ctx.imageList),
        columnWidth: (300),
        gap: (20),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    {
        const { default: __VLS_11 } = __VLS_9.slots;
        const [{ item, index }] = __VLS_vSlot(__VLS_11);
        __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
            ...{ onClick: (() => __VLS_ctx.showImg(index)) },
            'data-aos': (item.animationType),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: "#",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-thumbnail" },
            src: (__VLS_ctx.getImages(item.srcImage)),
        });
        /** @type {__VLS_StyleScopedClasses['img-thumbnail']} */ ;
        // @ts-ignore
        [imageList, imageList, showImg, getImages,];
        __VLS_9.slots['' /* empty slot name completion */];
    }
    var __VLS_9;
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.VueEasyLightbox} */
VueEasyLightbox;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.state.visibleRef),
    imgs: (__VLS_ctx.lightBoxImages),
    index: (__VLS_ctx.state.indexRef),
}));
const __VLS_14 = __VLS_13({
    ...{ 'onHide': {} },
    visible: (__VLS_ctx.state.visibleRef),
    imgs: (__VLS_ctx.lightBoxImages),
    index: (__VLS_ctx.state.indexRef),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_17;
const __VLS_18 = {
    /** @type {typeof __VLS_17.hide} */
    onHide: (__VLS_ctx.onHide),
};
var __VLS_15;
var __VLS_16;
// @ts-ignore
[state, state, lightBoxImages, onHide,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
