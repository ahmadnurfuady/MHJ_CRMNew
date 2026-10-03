import { ref, watchEffect } from 'vue';
import { getImages } from '@/utils/index';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRoute, useRouter } from 'vue-router';
import { useProduct } from '@/store/product';
import { storeToRefs } from 'pinia';
const thumbsSwiper = ref(null);
const modules = [Autoplay, Navigation, FreeMode, Thumbs];
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const store = useProduct();
const { productState } = storeToRefs(store);
const route = useRoute();
const router = useRouter();
const products = ref(null);
watchEffect(() => {
    let paramId = route.params.id;
    if (Array.isArray(paramId))
        paramId = paramId[0];
    const routeId = parseInt(paramId);
    if (isNaN(routeId)) {
        products.value = productState.value.product[0];
        router.replace({
            name: 'ProductDetails',
            params: { id: productState.value.product[0]?.id },
        });
    }
    else {
        products.value =
            productState.value.product.find((p) => p.id === routeId) ?? productState.value.product[0];
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-4 col-md-6 box-col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-slider owl-carousel owl-theme" },
    id: "sync1",
});
/** @type {__VLS_StyleScopedClasses['product-slider']} */ ;
/** @type {__VLS_StyleScopedClasses['owl-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['owl-theme']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Swiper | typeof __VLS_components.Swiper} */
Swiper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    slidesPerView: (1),
    loop: (true),
    autoplay: ({ delay: 3500, disableOnInteraction: false }),
    thumbs: ({ swiper: __VLS_ctx.thumbsSwiper }),
    centeredSlides: (true),
    modules: (__VLS_ctx.modules),
    ...{ class: "item" },
}));
const __VLS_2 = __VLS_1({
    slidesPerView: (1),
    loop: (true),
    autoplay: ({ delay: 3500, disableOnInteraction: false }),
    thumbs: ({ swiper: __VLS_ctx.thumbsSwiper }),
    centeredSlides: (true),
    modules: (__VLS_ctx.modules),
    ...{ class: "item" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['item']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
for (const [product, index] of __VLS_vFor((__VLS_ctx.products?.images))) {
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.SwiperSlide | typeof __VLS_components['Swiper-slide'] | typeof __VLS_components.SwiperSlide | typeof __VLS_components['Swiper-slide']} */
    SwiperSlide;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        key: (index),
    }));
    const __VLS_8 = __VLS_7({
        key: (index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const { default: __VLS_11 } = __VLS_9.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
        ...{ class: "zoom" },
        ...{ style: ({ backgroundImage: `url('${__VLS_ctx.getImages(product)}')` }) },
    });
    /** @type {__VLS_StyleScopedClasses['zoom']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(product)),
        alt: "index",
    });
    // @ts-ignore
    [thumbsSwiper, modules, products, getImages, getImages,];
    var __VLS_9;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "owl-carousel owl-theme product-tab-slider" },
    id: "sync2",
});
/** @type {__VLS_StyleScopedClasses['owl-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['owl-theme']} */ ;
/** @type {__VLS_StyleScopedClasses['product-tab-slider']} */ ;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.Swiper | typeof __VLS_components.Swiper} */
Swiper;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    ...{ 'onSwiper': {} },
    loop: (true),
    slidesPerView: (4),
    spaceBetween: (10),
    watchSlidesProgress: (true),
    pagination: ({
        clickable: true,
    }),
    modules: (__VLS_ctx.modules),
    ...{ class: "Swiper" },
}));
const __VLS_14 = __VLS_13({
    ...{ 'onSwiper': {} },
    loop: (true),
    slidesPerView: (4),
    spaceBetween: (10),
    watchSlidesProgress: (true),
    pagination: ({
        clickable: true,
    }),
    modules: (__VLS_ctx.modules),
    ...{ class: "Swiper" },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_17;
const __VLS_18 = {
    /** @type {typeof __VLS_17.swiper} */
    onSwiper: (__VLS_ctx.setThumbsSwiper),
};
/** @type {__VLS_StyleScopedClasses['Swiper']} */ ;
const { default: __VLS_19 } = __VLS_15.slots;
for (const [product, index] of __VLS_vFor((__VLS_ctx.products?.images))) {
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.SwiperSlide | typeof __VLS_components['Swiper-slide'] | typeof __VLS_components.SwiperSlide | typeof __VLS_components['Swiper-slide']} */
    SwiperSlide;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        key: (index),
    }));
    const __VLS_22 = __VLS_21({
        key: (index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const { default: __VLS_25 } = __VLS_23.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(product)),
        ...{ class: "img-fluid bg-img" },
        alt: "index",
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-img']} */ ;
    // @ts-ignore
    [modules, products, getImages, setThumbsSwiper,];
    var __VLS_23;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_15;
var __VLS_16;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
