import { ref, onMounted, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { rating, reviews, reviewStatus } from '@/core/data/review';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const ReviewFilters = defineAsyncComponent(() => import('@/module/ecommerce/mangeReview/ReviewFilters.vue'));
const reviewList = ref([]);
const tableConfig = ref({
    columns: [
        { title: 'Product', fieldValue: 'productName', sort: true },
        { title: 'Reviewer', fieldValue: 'reviewerName', sort: true },
        { title: 'Review', fieldValue: 'review', sort: true },
        { title: 'Date', fieldValue: 'date', sort: true },
        { title: 'Status', fieldValue: 'status', sort: true },
    ],
    rowAction: [
        {
            label: 'Delete',
            actionToPerform: 'delete',
            icon: 'trash1',
            modal: true,
            modelText: 'Do you really want to delete the review?',
        },
    ],
    data: [],
});
const filter = ref({
    rating: null,
    status: '',
});
const reviewForm = ref({
    rating: initSelectField(),
    status: initSelectField(),
});
onMounted(() => {
    tableConfig.value.data = formatReview(reviews);
    reviewList.value = reviews;
});
function handleAction(value) {
    if (value.actionToPerform === 'delete' && value.data) {
        reviewList.value = reviewList.value.filter((r) => r.id !== value.data.id);
        tableConfig.value.data = formatReview(reviewList.value);
    }
}
function handleUpdate({ event, field }) {
    const value = event.selected
        ? field === 'rating'
            ? Number(event.selected.value)
            : event.data
        : field === 'rating'
            ? null
            : '';
    filter.value[field] = value;
    tableConfig.value.data = formatReview(filterDetails());
}
function filterDetails() {
    return reviewList.value.filter((r) => (!filter.value.rating || r.rating === filter.value.rating) &&
        (!filter.value.status || r.status === filter.value.status));
}
function formatReview(reviews) {
    return reviews.map((r) => {
        const stars = Array.from({ length: 5 }, (_, i) => i < r.rating
            ? '<i class="fa-solid fa-star txt-warning"></i>'
            : '<i class="fa-regular fa-star txt-warning"></i>').join('');
        return {
            ...r,
            productName: `
        <div class="product-names">
          <div class="light-product-box">
            <img class="img-fluid"  src="${getImages(r.productImage)}" alt="${r.productName}" />
          </div>
          <p>${r.productName}</p>
        </div>`,
            reviewerName: `
        <div class="common-f-start">
          <img class="img-fluid" src="${getImages(r.reviewerProfile)}" alt="${r.reviewerName}" />
          <div class="user-details">
            <a href="#">${r.reviewerName}</a>
            <p class="mb-0">${r.reviewerEmail}</p>
          </div>
        </div>`,
            review: `
        <div class="rating">${stars}</div>
        <div class="customer-review"><span>${r.review}</span></div>`,
            status: r.status === 'Approve'
                ? `<span class="badge badge-light-success">${r.status}</span>`
                : r.status === 'Reject'
                    ? `<span class="badge badge-light-danger">${r.status}</span>`
                    : '-',
        };
    });
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid manage-review-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['manage-review-wrapper']} */ ;
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
    cardBodyClass: ('px-0 pt-0'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('px-0 pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.ReviewFilters} */
ReviewFilters;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onUpdate': {} },
    form: (__VLS_ctx.reviewForm),
    rating: (__VLS_ctx.rating),
    reviewStatus: (__VLS_ctx.reviewStatus),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onUpdate': {} },
    form: (__VLS_ctx.reviewForm),
    rating: (__VLS_ctx.rating),
    reviewStatus: (__VLS_ctx.reviewStatus),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = ({ update: {} },
    { onUpdate: (__VLS_ctx.handleUpdate) });
var __VLS_9;
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "manage-review" },
});
/** @type {__VLS_StyleScopedClasses['manage-review']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "recent-table table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['recent-table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    rowDetails: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    downloadReports: (true),
    selectedRows: (true),
    searchPlaceholder: ('Search here...'),
}));
const __VLS_15 = __VLS_14({
    ...{ 'onAction': {} },
    hasCheckbox: (true),
    rowDetails: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (10),
    paginateDetails: (true),
    downloadReports: (true),
    selectedRows: (true),
    searchPlaceholder: ('Search here...'),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_18;
const __VLS_19 = ({ action: {} },
    { onAction: (__VLS_ctx.handleAction) });
var __VLS_16;
var __VLS_17;
// @ts-ignore
[reviewForm, rating, reviewStatus, handleUpdate, tableConfig, handleAction,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
