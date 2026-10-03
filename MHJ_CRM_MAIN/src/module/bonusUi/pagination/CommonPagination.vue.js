import { onMounted, watch } from 'vue';
import { handlePagination } from '@/utils/pagination';
const { paginate, handlePage, setPage, setTotalPages, pagination, currentPage } = handlePagination();
const props = withDefaults(defineProps(), {
    disable: true,
    totalPages: 20,
    pageSize: 1,
});
const emits = defineEmits(['pagination']);
onMounted(() => {
    setTotalPages(props.totalPages, props.pageSize);
    paginate();
});
watch(() => pagination.value, (newValue) => {
    if (newValue) {
        emits('pagination', newValue);
    }
});
function getPageNumber(page) {
    if (props.type === 'romanUppercase') {
        return toRoman(page);
    }
    else if (props.type === 'romanLowercase') {
        return toRoman(page).toLowerCase();
    }
    else {
        return page;
    }
}
const toRoman = (num) => {
    const romanMap = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ];
    let result = '';
    for (const [value, symbol] of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
};
const __VLS_defaults = {
    disable: true,
    totalPages: 20,
    pageSize: 1,
};
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
if (__VLS_ctx.pagination) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
        ...{ class: (props.class) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: ([
                `pagination pagination-${props.color} pagin-border-${props.color}`,
                props.alignmentClass,
                props.sizeClass,
            ]) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
        ...{ class: ({ disabled: __VLS_ctx.currentPage === 1 && props.disable }) },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.pagination))
                    throw 0;
                return (__VLS_ctx.handlePage(-1));
                // @ts-ignore
                [pagination, currentPage, handlePage,];
            } },
        ...{ class: "page-link" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    for (const [page] of __VLS_vFor((__VLS_ctx.pagination.pages))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (page),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "page-item" },
            ...{ class: ({ active: __VLS_ctx.currentPage === page }) },
        });
        /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['active']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.pagination))
                        throw 0;
                    return (__VLS_ctx.setPage(page));
                    // @ts-ignore
                    [pagination, currentPage, setPage,];
                } },
            ...{ class: "page-link" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
        (__VLS_ctx.getPageNumber(page));
        // @ts-ignore
        [getPageNumber,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
        ...{ class: ({ disabled: __VLS_ctx.currentPage === __VLS_ctx.pagination?.totalPages && props.disable }) },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.pagination))
                    throw 0;
                return (__VLS_ctx.handlePage(1));
                // @ts-ignore
                [pagination, currentPage, handlePage,];
            } },
        ...{ class: "page-link" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
export default {};
