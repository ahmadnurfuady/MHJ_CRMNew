import { defineAsyncComponent, onMounted } from 'vue';
import { handlePagination } from '@/utils/pagination';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const { paginate, handlePage, setPage, setTotalPages, pagination, currentPage } = handlePagination();
onMounted(() => {
    setTotalPages(20, 1);
    paginate();
});
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
    headerTitle: ('Pagination With Icons'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Pagination With Icons'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({});
if (__VLS_ctx.pagination) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "pagination pagination-secondary pagin-border-secondary" },
    });
    /** @type {__VLS_StyleScopedClasses['pagination']} */ ;
    /** @type {__VLS_StyleScopedClasses['pagination-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['pagin-border-secondary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.pagination))
                    throw 0;
                return (__VLS_ctx.handlePage(-1));
                // @ts-ignore
                [pagination, handlePage,];
            } },
        ...{ class: "page-link" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        'aria-hidden': "true",
    });
    if (__VLS_ctx.currentPage >= 4) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "page-item" },
            ...{ class: ({ active: __VLS_ctx.currentPage === 1 }) },
        });
        /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['active']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.pagination))
                        throw 0;
                    if (!(__VLS_ctx.currentPage >= 4))
                        throw 0;
                    return (__VLS_ctx.setPage(1));
                    // @ts-ignore
                    [currentPage, currentPage, setPage,];
                } },
            ...{ class: "page-link" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    }
    if (__VLS_ctx.currentPage >= 4) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "page-item disabled" },
        });
        /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "page-link" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    }
    for (const [page] of __VLS_vFor((__VLS_ctx.pagination.pages))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (page),
        });
        if (page !== __VLS_ctx.pagination.totalItems) {
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
                        if (!(page !== __VLS_ctx.pagination.totalItems))
                            throw 0;
                        return (__VLS_ctx.setPage(page));
                        // @ts-ignore
                        [pagination, pagination, currentPage, currentPage, setPage,];
                    } },
                ...{ class: "page-link" },
                href: "#",
            });
            /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
            (page);
        }
        // @ts-ignore
        [];
    }
    if (__VLS_ctx.currentPage < __VLS_ctx.pagination.totalItems - 2) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "page-item disabled" },
        });
        /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['disabled']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "page-link" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
        ...{ class: ({ active: __VLS_ctx.currentPage === __VLS_ctx.pagination.totalItems }) },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.pagination))
                    throw 0;
                return (__VLS_ctx.setPage(__VLS_ctx.pagination.totalItems));
                // @ts-ignore
                [pagination, pagination, pagination, currentPage, currentPage, setPage,];
            } },
        ...{ class: "page-link" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    (__VLS_ctx.pagination.totalItems);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "page-item" },
    });
    /** @type {__VLS_StyleScopedClasses['page-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.pagination))
                    throw 0;
                return (__VLS_ctx.handlePage(1));
                // @ts-ignore
                [pagination, handlePage,];
            } },
        ...{ class: "page-link" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['page-link']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        'aria-hidden': "true",
    });
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
