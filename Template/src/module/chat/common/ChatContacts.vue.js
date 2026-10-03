import { defineAsyncComponent, ref } from 'vue';
import { contact, contactEdit } from '@/core/data/chat';
import { getImages } from '@/utils/index';
import { useChat } from '@/store/chat';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const store = useChat();
const search = ref('');
const { setSearchUsers } = store;
function setSearchUser() {
    if (search.value !== '')
        setSearchUsers(search.value);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade" },
    id: "contacts",
    role: "tabpanel",
    'aria-labelledby': "contacts-tab",
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-top" },
});
/** @type {__VLS_StyleScopedClasses['header-top']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn badge-light-primary f-w-500" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['badge-light-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "search-contacts" },
});
/** @type {__VLS_StyleScopedClasses['search-contacts']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_ctx.setSearchUser) },
    ...{ class: "form-control" },
    type: "text",
    placeholder: "Name and phone number",
    value: (__VLS_ctx.search),
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: "search",
    ...{ class: "dropdown-toggle" },
    role: "menu",
    dataBsToggle: "dropdown",
    'aria-expanded': "false",
}));
const __VLS_2 = __VLS_1({
    icon: "search",
    ...{ class: "dropdown-toggle" },
    role: "menu",
    dataBsToggle: "dropdown",
    'aria-expanded': "false",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ class: "mic-search" },
    type: "mic",
}));
const __VLS_7 = __VLS_6({
    ...{ class: "mic-search" },
    type: "mic",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['mic-search']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "contact-wrapper custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['contact-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.contact))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (index),
        ...{ class: "alphabate-order mt-3" },
    });
    /** @type {__VLS_StyleScopedClasses['alphabate-order']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "border-0" },
    });
    /** @type {__VLS_StyleScopedClasses['border-0']} */ ;
    for (const [items, index] of __VLS_vFor((item.children))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "common-space pb-2" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "chat-time" },
        });
        /** @type {__VLS_StyleScopedClasses['chat-time']} */ ;
        if (items.image) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-fluid rounded-circle" },
                src: (__VLS_ctx.getImages(items.image)),
                alt: "user",
            });
            /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        }
        if (items.text) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "custom-name" },
                ...{ class: (items.bgClass) },
            });
            /** @type {__VLS_StyleScopedClasses['custom-name']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "f-w-500" },
                ...{ class: (items.textClass) },
            });
            /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
            (items.text);
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (items.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (items.number);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "contact-edit" },
        });
        /** @type {__VLS_StyleScopedClasses['contact-edit']} */ ;
        let __VLS_10;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
            icon: "menubar",
            ...{ class: "dropdown-toggle" },
            role: "menu",
            dataBsToggle: "dropdown",
            'aria-expanded': "false",
        }));
        const __VLS_12 = __VLS_11({
            icon: "menubar",
            ...{ class: "dropdown-toggle" },
            role: "menu",
            dataBsToggle: "dropdown",
            'aria-expanded': "false",
        }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "dropdown-menu dropdown-menu-end" },
        });
        /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
        /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
        for (const [data, index] of __VLS_vFor((__VLS_ctx.contactEdit))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                ...{ class: "dropdown-item" },
                href: "#",
                key: (index),
            });
            /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
            (data.title);
            // @ts-ignore
            [setSearchUser, search, contact, getImages, contactEdit,];
        }
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
