import { ref, onMounted, defineAsyncComponent } from 'vue';
import { productReports } from '@/core/data/reports';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'));
const tableConfig = ref({
    columns: [
        { title: 'Product Name', fieldValue: 'productName', sort: true },
        { title: 'SKU', fieldValue: 'sku', sort: true },
        { title: 'Total Product Sold', fieldValue: 'productSold', sort: true },
        {
            title: 'Price',
            fieldValue: 'price',
            sort: true,
            type: 'price',
            decimalNumber: true,
        },
        { title: 'Rating', fieldValue: 'rating', sort: true },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = productReports;
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid product-report-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['product-report-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardBodyClass: ('px-0 pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('px-0 pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-report table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['product-report']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    selectedRows: (true),
    dateFilter: (true),
}));
const __VLS_8 = __VLS_7({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    selectedRows: (true),
    dateFilter: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
{
    const { productName: __VLS_12 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_12);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-names" },
    });
    /** @type {__VLS_StyleScopedClasses['product-names']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-product-box" },
    });
    /** @type {__VLS_StyleScopedClasses['light-product-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(row.productImage)),
        alt: (row.productName),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (row.productName);
    // @ts-ignore
    [tableConfig, getImages,];
}
{
    const { rating: __VLS_13 } = __VLS_9.slots;
    const [{ row }] = __VLS_vSlot(__VLS_13);
    let __VLS_14;
    /** @ts-ignore @type {typeof __VLS_components.RatingStars} */
    RatingStars;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        rating: (Number(row.rating)),
    }));
    const __VLS_16 = __VLS_15({
        rating: (Number(row.rating)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_9;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
