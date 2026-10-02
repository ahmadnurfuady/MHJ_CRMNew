import { ref, defineAsyncComponent } from 'vue';
import { courseSidebar } from '@/core/data/courses';
const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'));
const sidebarOpen = ref(false);
function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleSidebar();
            // @ts-ignore
            [toggleSidebar,];
        } },
    ...{ class: "btn btn-primary email-aside-toggle md-sidebar-toggle" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['email-aside-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar-aside job-sidebar custom-scrollbar" },
    ...{ class: ({ open: __VLS_ctx.sidebarOpen }) },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['job-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "default-according style-1 faq-accordion job-accordion" },
});
/** @type {__VLS_StyleScopedClasses['default-according']} */ ;
/** @type {__VLS_StyleScopedClasses['style-1']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['job-accordion']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [items] of __VLS_vFor((__VLS_ctx.courseSidebar))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-12" },
        key: (items.id),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-link" },
        'data-bs-toggle': "collapse",
        'data-bs-target': (`#collapse-${items.id}`),
        'aria-expanded': "true",
        'aria-controls': (`collapse-${items.id}`),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-link']} */ ;
    (items.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "collapse show" },
        id: (`collapse-${items.id}`),
        'aria-labelledby': (`collapse-${items.id}`),
        'data-bs-parent': "#accordion",
    });
    /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body" },
        ...{ class: (items.class) },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    if (items.search) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "job-filter mb-2" },
        });
        /** @type {__VLS_StyleScopedClasses['job-filter']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "faq-form" },
        });
        /** @type {__VLS_StyleScopedClasses['faq-form']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-control" },
            type: "text",
            placeholder: "Search..",
        });
        /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            type: ('search'),
            ...{ class: ('search-icon') },
        }));
        const __VLS_2 = __VLS_1({
            type: ('search'),
            ...{ class: ('search-icon') },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        /** @type {__VLS_StyleScopedClasses['search-icon']} */ ;
    }
    for (const [content] of __VLS_vFor((items.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (content.class) },
            key: (content.id),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "learning-header" },
        });
        /** @type {__VLS_StyleScopedClasses['learning-header']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "f-w-600" },
        });
        /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
        (content.subTitle);
        for (const [item] of __VLS_vFor((content.item))) {
            (item.id);
            if (!item.badge) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
                    ...{ class: "d-block" },
                    for: (item.checkId),
                });
                /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
                    ...{ class: (item.class) },
                    id: (item.checkId),
                    type: (content.type),
                    name: (content.type === 'radio' ? content.subTitle : ''),
                });
                (item.title);
            }
            else {
                __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                    href: "#",
                });
                (item.title);
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "badge badge-primary pull-right" },
                });
                /** @type {__VLS_StyleScopedClasses['badge']} */ ;
                /** @type {__VLS_StyleScopedClasses['badge-primary']} */ ;
                /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
                (item.badgeText);
            }
            // @ts-ignore
            [sidebarOpen, courseSidebar,];
        }
        if (content.rating) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "flex-grow-1" },
            });
            /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "f-w-500" },
            });
            /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
            (content.title);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "d-block" },
            });
            /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                href: "#",
            });
            (content.createdBy);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "d-block" },
            });
            /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
            let __VLS_5;
            /** @ts-ignore @type {typeof __VLS_components.Rate} */
            Rate;
            // @ts-ignore
            const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
                rating: (Number(content.rate)),
            }));
            const __VLS_7 = __VLS_6({
                rating: (Number(content.rate)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
                ...{ class: "mb-0 font-primary" },
            });
            /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
            /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
            (content.date);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "d-block" },
            });
            /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
            (content.month);
        }
        // @ts-ignore
        [];
    }
    if (items.search) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "btn btn-primary text-center" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        (items.button);
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
