import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { defineAsyncComponent } from 'vue';
import { useBookmark } from '@/composable/useBookmark';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const dropdownRef = ref(null);
const { state, searchMenuItems, isBookmarked, openTab, openBookmark, searchTerms, addToBookmark } = useBookmark();
onClickOutside(dropdownRef, () => {
    state.show = false;
    state.bookmarkSearchBox = false;
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ref: "dropdownRef",
    ...{ class: "bookmark-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['bookmark-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (__VLS_ctx.openTab) },
    href: "#",
});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: "star",
}));
const __VLS_2 = __VLS_1({
    icon: "star",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "onhover-show-div bookmark-flip" },
    ...{ class: ({ active: __VLS_ctx.state.show }) },
});
/** @type {__VLS_StyleScopedClasses['onhover-show-div']} */ ;
/** @type {__VLS_StyleScopedClasses['bookmark-flip']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flip-card" },
});
/** @type {__VLS_StyleScopedClasses['flip-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flip-card-inner" },
    ...{ class: ({ flipped: __VLS_ctx.state.bookmarkSearchBox }) },
});
/** @type {__VLS_StyleScopedClasses['flip-card-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['flipped']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "front" },
});
/** @type {__VLS_StyleScopedClasses['front']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-18 mb-0 dropdown-title" },
});
/** @type {__VLS_StyleScopedClasses['f-18']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "bookmark-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['bookmark-dropdown']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "pt-0 px-0 custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [menuItem, index] of __VLS_vFor((__VLS_ctx.state.bookmarkItems.slice(0, 8)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-4 text-center" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bookmark-content" },
    });
    /** @type {__VLS_StyleScopedClasses['bookmark-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bookmark-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['bookmark-icon']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        icon: (menuItem.icon || menuItem.iconForDisplay),
        type: "stroke",
    }));
    const __VLS_7 = __VLS_6({
        icon: (menuItem.icon || menuItem.iconForDisplay),
        type: "stroke",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (menuItem.title);
    // @ts-ignore
    [openTab, state, state, state,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "text-center" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (__VLS_ctx.openBookmark) },
    ...{ class: "flip-btn f-w-700 btn btn-primary w-100 text-white" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['flip-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-700']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "back" },
});
/** @type {__VLS_StyleScopedClasses['back']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flip-back-content" },
});
/** @type {__VLS_StyleScopedClasses['flip-back-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_ctx.searchTerms) },
    type: "text",
    placeholder: "Search...",
    value: (__VLS_ctx.state.terms),
});
if (__VLS_ctx.searchMenuItems.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bookmark-search custom-scrollbar shadow-none px-2 py-0" },
        ...{ class: ({
                'Typeahead-menu is-open custom-scrollar': !__VLS_ctx.state.bookmarkSearchResultEmpty,
                'Typeahead-menu': __VLS_ctx.state.bookmarkSearchResultEmpty,
            }) },
    });
    /** @type {__VLS_StyleScopedClasses['bookmark-search']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-open']} */ ;
    /** @type {__VLS_StyleScopedClasses['custom-scrollar']} */ ;
    /** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
    for (const [menuItem, index] of __VLS_vFor((__VLS_ctx.searchMenuItems.slice(0, 8)))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard u-cf" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard']} */ ;
        /** @type {__VLS_StyleScopedClasses['u-cf']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-avatar header-search" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-avatar']} */ ;
        /** @type {__VLS_StyleScopedClasses['header-search']} */ ;
        let __VLS_10;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
            icon: (menuItem.iconForDisplay),
            type: "stroke",
            svgClass: "svg-color stroke-primary",
        }));
        const __VLS_12 = __VLS_11({
            icon: (menuItem.iconForDisplay),
            type: "stroke",
            svgClass: "svg-color stroke-primary",
        }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-details" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-realName" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-realName']} */ ;
        let __VLS_15;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
            to: ({ path: menuItem.path }),
            ...{ class: "realname" },
        }));
        const __VLS_17 = __VLS_16({
            to: ({ path: menuItem.path }),
            ...{ class: "realname" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        /** @type {__VLS_StyleScopedClasses['realname']} */ ;
        const { default: __VLS_20 } = __VLS_18.slots;
        (menuItem.title);
        // @ts-ignore
        [state, state, state, openBookmark, searchTerms, searchMenuItems, searchMenuItems,];
        var __VLS_18;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "pull-right" },
        });
        /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.searchMenuItems.length))
                        throw 0;
                    return (__VLS_ctx.addToBookmark(menuItem));
                    // @ts-ignore
                    [addToBookmark,];
                } },
            href: "#",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-regular fa-star" },
            ...{ class: ({
                    'text-warning': __VLS_ctx.isBookmarked(menuItem),
                }) },
        });
        /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-star']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-warning']} */ ;
        // @ts-ignore
        [isBookmarked,];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: ({
            'Typeahead-menu custom-scrollbar is-open': __VLS_ctx.state.bookmarkSearchResultEmpty,
            'Typeahead-menu custom-scrollbar filled-bookmark': !__VLS_ctx.state.bookmarkSearchResultEmpty,
        }) },
});
/** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['is-open']} */ ;
/** @type {__VLS_StyleScopedClasses['Typeahead-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['filled-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tt-dataset tt-dataset-0" },
});
/** @type {__VLS_StyleScopedClasses['tt-dataset']} */ ;
/** @type {__VLS_StyleScopedClasses['tt-dataset-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "EmptyMessage" },
});
/** @type {__VLS_StyleScopedClasses['EmptyMessage']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ onClick: (__VLS_ctx.openBookmark) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "flip-back btn btn-primary w-100" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['flip-back']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
// @ts-ignore
[state, state, openBookmark,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
