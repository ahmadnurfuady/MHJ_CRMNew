import { storeToRefs } from 'pinia';
import { getImages } from '@/utils/index';
import { useBookmark } from '@/store/bookmark';
const bookmarkStore = useBookmark();
const { bookmarkState, getFilteredBookmark } = storeToRefs(bookmarkStore);
const { favoriteBookmark, deleteBookmark, editBookmarkModal } = bookmarkStore;
function editBookmark(bookmark) {
    bookmarkState.value.isBookmarkModalOpen = true;
    editBookmarkModal(bookmark);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "details-bookmark text-center" },
    ...{ class: ({ 'list-bookmark': __VLS_ctx.bookmarkState.isListView }) },
});
/** @type {__VLS_StyleScopedClasses['details-bookmark']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['list-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
    id: "bookmarkData",
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
if (__VLS_ctx.getFilteredBookmark.length) {
    for (const [bookmark] of __VLS_vFor((__VLS_ctx.getFilteredBookmark))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-xxl-3 col-md-4 col-ed-4 col-sm-6" },
            key: (bookmark.id),
        });
        /** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-ed-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card card-with-border bookmark-card o-hidden" },
        });
        /** @type {__VLS_StyleScopedClasses['card']} */ ;
        /** @type {__VLS_StyleScopedClasses['card-with-border']} */ ;
        /** @type {__VLS_StyleScopedClasses['bookmark-card']} */ ;
        /** @type {__VLS_StyleScopedClasses['o-hidden']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "details-website" },
        });
        /** @type {__VLS_StyleScopedClasses['details-website']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid" },
            src: (__VLS_ctx.getImages(bookmark.image)),
            alt: (bookmark.title),
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.getFilteredBookmark.length))
                        return;
                    __VLS_ctx.favoriteBookmark(bookmark);
                    // @ts-ignore
                    [bookmarkState, getFilteredBookmark, getFilteredBookmark, getImages, favoriteBookmark,];
                } },
            ...{ class: "favourite-icon favourite_0" },
            ...{ class: ({ favourite: bookmark.isFavorite }) },
        });
        /** @type {__VLS_StyleScopedClasses['favourite-icon']} */ ;
        /** @type {__VLS_StyleScopedClasses['favourite_0']} */ ;
        /** @type {__VLS_StyleScopedClasses['favourite']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: "#",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-star" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-star']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "desciption-data" },
        });
        /** @type {__VLS_StyleScopedClasses['desciption-data']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "title-bookmark" },
        });
        /** @type {__VLS_StyleScopedClasses['title-bookmark']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: "title_0" },
        });
        /** @type {__VLS_StyleScopedClasses['title_0']} */ ;
        (bookmark.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "weburl_0" },
        });
        /** @type {__VLS_StyleScopedClasses['weburl_0']} */ ;
        (bookmark.url);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "hover-block" },
        });
        /** @type {__VLS_StyleScopedClasses['hover-block']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.getFilteredBookmark.length))
                        return;
                    __VLS_ctx.editBookmark(bookmark);
                    // @ts-ignore
                    [editBookmark,];
                } },
            href: "#",
        });
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            type: ('edit-2'),
        }));
        const __VLS_2 = __VLS_1({
            type: ('edit-2'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: "#",
        });
        let __VLS_5;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            type: ('link'),
        }));
        const __VLS_7 = __VLS_6({
            type: ('link'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: "#",
        });
        let __VLS_10;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
            type: ('share-2'),
        }));
        const __VLS_12 = __VLS_11({
            type: ('share-2'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.getFilteredBookmark.length))
                        return;
                    __VLS_ctx.deleteBookmark(bookmark);
                    // @ts-ignore
                    [deleteBookmark,];
                } },
            href: "#",
        });
        let __VLS_15;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
            type: ('trash-2'),
        }));
        const __VLS_17 = __VLS_16({
            type: ('trash-2'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "pull-right text-end" },
        });
        /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: "#",
        });
        let __VLS_20;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
            type: ('tag'),
        }));
        const __VLS_22 = __VLS_21({
            type: ('tag'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "content-general" },
        });
        /** @type {__VLS_StyleScopedClasses['content-general']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "desc_0" },
        });
        /** @type {__VLS_StyleScopedClasses['desc_0']} */ ;
        (bookmark.description);
        if (bookmark.collection) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "collection_0" },
            });
            /** @type {__VLS_StyleScopedClasses['collection_0']} */ ;
            (bookmark.collection);
        }
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "details-bookmark text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['details-bookmark']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
