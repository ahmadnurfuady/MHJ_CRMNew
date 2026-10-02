import { defineAsyncComponent, reactive } from 'vue';
import { storeCategories, stores } from '@/core/data/seller';
const AddSellerModal = defineAsyncComponent(() => import('@/module/ecommerce/seller/AddSellerModal.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const sellerState = reactive({
    storesCategory: storeCategories,
    activeCategory: undefined,
    searchQuery: '',
    storeList: stores,
    filteredStores: stores,
    search: '',
    storeCategoryId: undefined,
    isModalOpen: false,
});
function filterStore(id) {
    sellerState.storeCategoryId = id;
    sellerState.activeCategory = id;
    filterDetails();
}
function searchStores() {
    sellerState.search = sellerState.searchQuery.toLowerCase();
    filterDetails();
}
function filterDetails() {
    sellerState.filteredStores = sellerState.storeList.filter((store) => {
        const matchesCategory = sellerState.storeCategoryId
            ? store.storeCategoryId === sellerState.storeCategoryId
            : true;
        const matchesSearch = sellerState.search
            ? store.storeName.toLowerCase().includes(sellerState.search)
            : true;
        return matchesCategory && matchesSearch;
    });
}
function openSellerModal() {
    sellerState.isModalOpen = true;
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
    ...{ class: "row seller-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['seller-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header common-space" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-f-start" },
});
/** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.filterStore();
            // @ts-ignore
            [filterStore,];
        } },
    ...{ class: "seller-filter" },
    ...{ class: ({ active: !__VLS_ctx.sellerState.activeCategory }) },
});
/** @type {__VLS_StyleScopedClasses['seller-filter']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
for (const [category, index] of __VLS_vFor((__VLS_ctx.sellerState.storesCategory))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.filterStore(category.id);
                // @ts-ignore
                [filterStore, sellerState, sellerState,];
            } },
        ...{ class: "seller-filter" },
        ...{ class: ({ active: __VLS_ctx.sellerState.activeCategory === category.id }) },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['seller-filter']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (category.name);
    // @ts-ignore
    [sellerState,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "right-vendor" },
});
/** @type {__VLS_StyleScopedClasses['right-vendor']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group common-searchbox" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['common-searchbox']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    type: ('search'),
    ...{ class: "text-gray" },
}));
const __VLS_2 = __VLS_1({
    type: ('search'),
    ...{ class: "text-gray" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['text-gray']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.searchStores();
            // @ts-ignore
            [searchStores,];
        } },
    ...{ class: "form-control" },
    type: "text",
    placeholder: "Search...",
    value: (__VLS_ctx.sellerState.searchQuery),
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openSellerModal();
            // @ts-ignore
            [sellerState, openSellerModal,];
        } },
    ...{ class: "btn btn-primary" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "me-2 fa-solid fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.AddSellerModal} */
AddSellerModal;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.sellerState.isModalOpen),
}));
const __VLS_7 = __VLS_6({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.sellerState.isModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
const __VLS_11 = ({ closeModal: {} },
    { onCloseModal: (...[$event]) => {
            __VLS_ctx.sellerState.isModalOpen = false;
            // @ts-ignore
            [sellerState, sellerState,];
        } });
var __VLS_8;
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "seller-cards" },
});
/** @type {__VLS_StyleScopedClasses['seller-cards']} */ ;
for (const [store, index] of __VLS_vFor((__VLS_ctx.sellerState.filteredStores))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "seller-box" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['seller-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        icon: (store.storeLogo),
    }));
    const __VLS_14 = __VLS_13({
        icon: (store.storeLogo),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    (store.storeName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    (store.vendorName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "seller-profits" },
    });
    /** @type {__VLS_StyleScopedClasses['seller-profits']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (store.totalOrder);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (store.totalProduct);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (store.totalEarning);
    let __VLS_17;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        ...{ class: "btn btn-primary btn-hover-effect" },
        to: ({ name: 'SellerDetails', params: { id: store.id } }),
    }));
    const __VLS_19 = __VLS_18({
        ...{ class: "btn btn-primary btn-hover-effect" },
        to: ({ name: 'SellerDetails', params: { id: store.id } }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-hover-effect']} */ ;
    const { default: __VLS_22 } = __VLS_20.slots;
    // @ts-ignore
    [sellerState,];
    var __VLS_20;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
