import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { autoPlayVariant } from '@/core/data/bonusUI/owlCarousel';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const modules = [Autoplay, Navigation, Pagination];
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
    headerTitle: ('Auto Play Variant'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Auto Play Variant'),
    border: (true),
    padding: (false),
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
}
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.Swiper | typeof __VLS_components.Swiper} */
Swiper;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ class: "autoplay-swiper swiper-h" },
    spaceBetween: (30),
    centeredSlides: (true),
    autoplay: ({ delay: 2500, disableOnInteraction: false }),
    pagination: ({ el: '.swiper-pagination', clickable: true }),
    navigation: ({ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }),
    modules: (__VLS_ctx.modules),
}));
const __VLS_10 = __VLS_9({
    ...{ class: "autoplay-swiper swiper-h" },
    spaceBetween: (30),
    centeredSlides: (true),
    autoplay: ({ delay: 2500, disableOnInteraction: false }),
    pagination: ({ el: '.swiper-pagination', clickable: true }),
    navigation: ({ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }),
    modules: (__VLS_ctx.modules),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['autoplay-swiper']} */ ;
/** @type {__VLS_StyleScopedClasses['swiper-h']} */ ;
const { default: __VLS_13 } = __VLS_11.slots;
for (const [slider, index] of __VLS_vFor((__VLS_ctx.autoPlayVariant))) {
    let __VLS_14;
    /** @ts-ignore @type { | typeof __VLS_components.SwiperSlide | typeof __VLS_components.SwiperSlide} */
    SwiperSlide;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        key: (index),
    }));
    const __VLS_16 = __VLS_15({
        key: (index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const { default: __VLS_19 } = __VLS_17.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(slider.image)),
        alt: "image",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    // @ts-ignore
    [modules, autoPlayVariant, getImages,];
    var __VLS_17;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "swiper-button-next" },
});
/** @type {__VLS_StyleScopedClasses['swiper-button-next']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "swiper-button-prev" },
});
/** @type {__VLS_StyleScopedClasses['swiper-button-prev']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "swiper-pagination" },
});
/** @type {__VLS_StyleScopedClasses['swiper-pagination']} */ ;
// @ts-ignore
[];
var __VLS_11;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
