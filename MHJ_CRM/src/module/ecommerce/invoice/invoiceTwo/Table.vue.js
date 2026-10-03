import { getImages } from '@/utils/index';
import { invoiceProducts } from '@/core/data/ecommerce';
function rowBackground(i) {
    return i % 2 === 0 ? 'background-color: rgba(245, 246, 249, 1);' : '';
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "products-table" },
});
/** @type {__VLS_StyleScopedClasses['products-table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
    ...{ class: "products-header" },
});
/** @type {__VLS_StyleScopedClasses['products-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "th-left" },
});
/** @type {__VLS_StyleScopedClasses['th-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "th-text" },
});
/** @type {__VLS_StyleScopedClasses['th-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "th-left" },
});
/** @type {__VLS_StyleScopedClasses['th-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "th-text" },
});
/** @type {__VLS_StyleScopedClasses['th-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "th-left" },
});
/** @type {__VLS_StyleScopedClasses['th-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "th-text" },
});
/** @type {__VLS_StyleScopedClasses['th-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "th-left" },
});
/** @type {__VLS_StyleScopedClasses['th-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "th-text" },
});
/** @type {__VLS_StyleScopedClasses['th-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "th-left" },
});
/** @type {__VLS_StyleScopedClasses['th-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "th-text" },
});
/** @type {__VLS_StyleScopedClasses['th-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    ...{ class: "th-left" },
});
/** @type {__VLS_StyleScopedClasses['th-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "th-text" },
});
/** @type {__VLS_StyleScopedClasses['th-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [item, i] of __VLS_vFor((__VLS_ctx.invoiceProducts))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        ...{ class: "product-row" },
        key: (i),
    });
    /** @type {__VLS_StyleScopedClasses['product-row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "product-cell" },
    });
    /** @type {__VLS_StyleScopedClasses['product-cell']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "product-image-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['product-image-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(item.img)),
        alt: (item.title),
        ...{ style: {} },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
        ...{ style: {} },
    });
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ style: {} },
    });
    (item.code);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "product-data" },
    });
    /** @type {__VLS_StyleScopedClasses['product-data']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "data-text" },
    });
    /** @type {__VLS_StyleScopedClasses['data-text']} */ ;
    (item.qty);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "product-data product-sale" },
    });
    /** @type {__VLS_StyleScopedClasses['product-data']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-sale']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "data-text" },
    });
    /** @type {__VLS_StyleScopedClasses['data-text']} */ ;
    (item.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "product-data product-unit" },
    });
    /** @type {__VLS_StyleScopedClasses['product-data']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-unit']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "data-text" },
    });
    /** @type {__VLS_StyleScopedClasses['data-text']} */ ;
    (item.unit);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "product-data product-vat" },
    });
    /** @type {__VLS_StyleScopedClasses['product-data']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-vat']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "data-text" },
    });
    /** @type {__VLS_StyleScopedClasses['data-text']} */ ;
    (item.vat);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "product-data" },
    });
    /** @type {__VLS_StyleScopedClasses['product-data']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "data-text" },
    });
    /** @type {__VLS_StyleScopedClasses['data-text']} */ ;
    (item.price * item.qty);
    // @ts-ignore
    [invoiceProducts, getImages,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
