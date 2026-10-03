import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { defineAsyncComponent } from "vue";
import { useBookmark } from "@/composable/useBookmark";
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const dropdownRef = ref(null);
const { state, searchMenuItems, isBookmarked, openTab, openBookmark, searchTerms, addToBookmark, } = useBookmark();
onClickOutside(dropdownRef, () => {
    state.show = false;
    state.bookmarkSearchBox = false;
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(state, {});
// @ts-ignore
__VLS_withDotValue(searchMenuItems, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ref: "dropdownRef",
    ...{ class: "bookmark-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['bookmark-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (__VLS_unwrap(openTab, {})) },
    href: "javascript:void(0)",
});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    icon: "star",
}));
const __VLS_2 = __VLS_1({
    icon: "star",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "onhover-show-div bookmark-flip" },
    ...{ class: ({ active: state.value.show }) },
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
    ...{ class: ({ flipped: state.value.bookmarkSearchBox }) },
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
const __VLS_5 = __VLS_tryAsConstant((state.value.bookmarkItems.slice(0, 8)));
for (const [menuItem, index] of __VLS_vFor(__VLS_nonNull(__VLS_5))) {
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
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        // @ts-ignore
        icon: (menuItem.icon || menuItem.iconForDisplay), type: "stroke",
    }));
    const __VLS_8 = __VLS_7({
        icon: (menuItem.icon || menuItem.iconForDisplay),
        type: "stroke",
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
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
    ...{ onClick: (__VLS_unwrap(openBookmark, {})) },
    ...{ class: "flip-btn f-w-700 btn btn-primary w-100 text-white" },
    href: "javascript:void(0)",
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
    ...{ onKeyup: (__VLS_unwrap(searchTerms, {})) },
    type: "text",
    placeholder: "Search...",
    value: (state.value.terms),
});
if (searchMenuItems.value.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "bookmark-search custom-scrollbar shadow-none px-2 py-0" },
        ...{ class: ({
                'Typeahead-menu is-open custom-scrollar': !state.value.bookmarkSearchResultEmpty,
                'Typeahead-menu': state.value.bookmarkSearchResultEmpty,
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
    const __VLS_11 = __VLS_tryAsConstant((searchMenuItems.value.slice(0, 8)));
    for (const [menuItem, index] of __VLS_vFor(__VLS_nonNull(__VLS_11))) {
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
        let __VLS_12;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
            // @ts-ignore
            icon: (menuItem.iconForDisplay), type: "stroke", svgClass: "svg-color stroke-primary",
        }));
        const __VLS_14 = __VLS_13({
            icon: (menuItem.iconForDisplay),
            type: "stroke",
            svgClass: "svg-color stroke-primary",
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-details" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-details']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ProfileCard-realName" },
        });
        /** @type {__VLS_StyleScopedClasses['ProfileCard-realName']} */ ;
        let __VLS_17;
        /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
        routerLink;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
            // @ts-ignore
            to: ({ path: menuItem.path }), ...{ class: "realname" },
        }));
        const __VLS_19 = __VLS_18({
            to: ({ path: menuItem.path }),
            ...{ class: "realname" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        /** @type {__VLS_StyleScopedClasses['realname']} */ ;
        const { default: __VLS_22 } = __VLS_nonNull(__VLS_20.slots);
        (menuItem.title);
        // @ts-ignore
        [state, state, state, openBookmark, searchTerms, searchMenuItems, searchMenuItems,];
        var __VLS_20;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "pull-right" },
        });
        /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!(searchMenuItems.value.length))
                        throw 0;
                    return (__VLS_unwrap(addToBookmark, {})(menuItem));
                    // @ts-ignore
                    [addToBookmark,];
                } },
            href: "javascript:void(0)",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-regular fa-star" },
            ...{ class: ({
                    'text-warning': __VLS_unwrap(isBookmarked, {})(menuItem),
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
            'Typeahead-menu custom-scrollbar is-open': state.value.bookmarkSearchResultEmpty,
            'Typeahead-menu custom-scrollbar filled-bookmark': !state.value.bookmarkSearchResultEmpty,
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
    ...{ onClick: (__VLS_unwrap(openBookmark, {})) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "flip-back btn btn-primary w-100" },
    href: "javascript:void(0)",
});
/** @type {__VLS_StyleScopedClasses['flip-back']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
// @ts-ignore
[state, state, openBookmark,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
