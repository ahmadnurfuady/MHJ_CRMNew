import { ref, computed, watch } from 'vue';
import { useProduct } from '@/store/product';
import { products } from '@/core/data/product';
import { discount } from '@/core/data/ecommerce';
import VueSlider from 'vue-3-slider-component';
import { storeToRefs } from 'pinia';
const allRatings = ref(Array.from({ length: 5 }, (_, i) => i + 1)); // [1,2,3,4,5]
const reversedRatings = computed(() => [...allRatings.value].reverse());
const store = useProduct();
const { activeFilters, getCategory, getBrands, getColors } = storeToRefs(store);
const { setFilter } = store;
const categoryFilters = ref(activeFilters.value.category);
const brandFilters = ref(activeFilters.value.brand);
const priceFilters = ref(activeFilters.value.price);
const filteredProducts = ref([]);
const minPrice = ref(0);
const maxPrice = ref(100);
const __VLS_emit = defineEmits();
watch(priceFilters, (newRange) => {
    if (newRange.length !== 2 || newRange[0] > newRange[1]) {
        priceFilters.value = [minPrice.value, maxPrice.value];
    }
});
function updateFilteredProducts(priceRange) {
    const [minPrice, maxPrice] = priceRange;
    if (minPrice === undefined || maxPrice === undefined || minPrice > maxPrice) {
        filteredProducts.value = [];
        return;
    }
    filteredProducts.value = products.filter((product) => {
        const salePrice = product.price;
        if (typeof salePrice !== 'number') {
            return false;
        }
        return salePrice >= minPrice && salePrice <= maxPrice;
    });
}
function updateFilters() {
    setFilter('price', priceFilters.value);
    setFilter('category', categoryFilters.value);
    setFilter('brand', brandFilters.value);
    updateFilteredProducts(priceFilters.value);
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "left-filter" },
});
/** @type {__VLS_StyleScopedClasses['left-filter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body filter-cards-view animate-chk custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-cards-view']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-chk']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-filter" },
});
/** @type {__VLS_StyleScopedClasses['product-filter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "checkbox-animated mt-0" },
});
/** @type {__VLS_StyleScopedClasses['checkbox-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
for (const [product, index] of __VLS_vFor((__VLS_ctx.getCategory))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "d-block" },
        for: ('category-' + index),
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onChange: (__VLS_ctx.updateFilters) },
        type: "checkbox",
        id: ('category-' + index),
        ...{ class: "checkbox_animated" },
        value: (product.category),
    });
    (__VLS_ctx.categoryFilters);
    /** @type {__VLS_StyleScopedClasses['checkbox_animated']} */ ;
    (product.category);
    // @ts-ignore
    [getCategory, updateFilters, categoryFilters,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-filter" },
});
/** @type {__VLS_StyleScopedClasses['product-filter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "checkbox-animated mt-0" },
});
/** @type {__VLS_StyleScopedClasses['checkbox-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
for (const [brand, index] of __VLS_vFor((__VLS_ctx.getBrands))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "d-block" },
        for: ('brand-' + index),
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onChange: (__VLS_ctx.updateFilters) },
        ...{ class: "checkbox_animated" },
        id: ('brand-' + index),
        value: (brand),
        type: "checkbox",
    });
    (__VLS_ctx.brandFilters);
    /** @type {__VLS_StyleScopedClasses['checkbox_animated']} */ ;
    (brand);
    // @ts-ignore
    [updateFilters, getBrands, brandFilters,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-filter slider-product" },
});
/** @type {__VLS_StyleScopedClasses['product-filter']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-product']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "color-selector" },
});
/** @type {__VLS_StyleScopedClasses['color-selector']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [color, index] of __VLS_vFor((__VLS_ctx.getColors))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ style: ({ 'background-color': color.color }) },
        key: ('color' + index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onChange: (__VLS_ctx.updateFilters) },
        ...{ class: "colorCheckbox" },
        value: (color.color),
        id: (color.color),
        type: "checkbox",
    });
    /** @type {__VLS_StyleScopedClasses['colorCheckbox']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "colorDiv" },
    });
    /** @type {__VLS_StyleScopedClasses['colorDiv']} */ ;
    // @ts-ignore
    [updateFilters, getColors,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-filter pb-5 product-range" },
});
/** @type {__VLS_StyleScopedClasses['product-filter']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['product-range']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.VueSlider} */
VueSlider;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onChange': {} },
    min: (__VLS_ctx.minPrice),
    max: (__VLS_ctx.maxPrice),
    modelValue: (__VLS_ctx.priceFilters),
    marks: ({
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
    }),
    tooltip: ('always'),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onChange': {} },
    min: (__VLS_ctx.minPrice),
    max: (__VLS_ctx.maxPrice),
    modelValue: (__VLS_ctx.priceFilters),
    marks: ({
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
    }),
    tooltip: ('always'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.change} */
    onChange: (__VLS_ctx.updateFilters),
};
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-filter" },
});
/** @type {__VLS_StyleScopedClasses['product-filter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "checkbox-animated mt-0" },
});
/** @type {__VLS_StyleScopedClasses['checkbox-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
for (const [data] of __VLS_vFor((__VLS_ctx.discount))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check" },
        key: (data.id),
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "checkbox_animated" },
        id: "chk-ani6",
        type: "checkbox",
    });
    /** @type {__VLS_StyleScopedClasses['checkbox_animated']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-check-label" },
        for: "chk-ani6",
    });
    /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "name" },
    });
    /** @type {__VLS_StyleScopedClasses['name']} */ ;
    (data.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "number" },
    });
    /** @type {__VLS_StyleScopedClasses['number']} */ ;
    (data.badge);
    // @ts-ignore
    [updateFilters, minPrice, maxPrice, priceFilters, discount,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-filter" },
});
/** @type {__VLS_StyleScopedClasses['product-filter']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "checkbox-animated mt-0 product-rate" },
});
/** @type {__VLS_StyleScopedClasses['checkbox-animated']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['product-rate']} */ ;
for (const [rate, index] of __VLS_vFor((__VLS_ctx.reversedRatings))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "checkbox_animated" },
        id: ('rating-' + rate),
        type: "checkbox",
        'data-original-title': "",
        title: "",
    });
    /** @type {__VLS_StyleScopedClasses['checkbox_animated']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-check-label" },
        for: ('rating-' + rate),
    });
    /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "common-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
    for (const [i] of __VLS_vFor((rate))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            key: (i),
            ...{ class: "fa-solid fa-star fill" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-star']} */ ;
        /** @type {__VLS_StyleScopedClasses['fill']} */ ;
        // @ts-ignore
        [reversedRatings,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "number" },
    });
    /** @type {__VLS_StyleScopedClasses['number']} */ ;
    (rate);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
});
export default {};
