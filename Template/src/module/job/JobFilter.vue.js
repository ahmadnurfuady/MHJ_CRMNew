import { ref } from 'vue';
import { jobSidebarDetails } from '@/core/data/jobs/jobSearch';
const sidebarOpen = ref(false);
const sidebarDetails = ref(jobSidebarDetails);
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
    ...{ class: "md-sidebar-aside job-sidebar" },
    ...{ class: ({ open: __VLS_ctx.sidebarOpen }) },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['job-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "default-according style-1 faq-accordion job-accordion" },
});
/** @type {__VLS_StyleScopedClasses['default-according']} */ ;
/** @type {__VLS_StyleScopedClasses['style-1']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['job-accordion']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "accordion" },
    id: "accordionExample",
});
/** @type {__VLS_StyleScopedClasses['accordion']} */ ;
for (const [items] of __VLS_vFor((__VLS_ctx.sidebarDetails))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card" },
        key: (items.id),
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header" },
        id: (`heading-${items.id}`),
    });
    /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-link btn-block text-start" },
        type: "button",
        'data-bs-toggle': "collapse",
        'data-bs-target': (`#collapse-${items.id}`),
        'aria-expanded': "true",
        'aria-controls': (`collapse-${items.id}`),
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-start']} */ ;
    (items.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "collapse show" },
        id: (`collapse-${items.id}`),
        'aria-labelledby': (`heading-${items.id}`),
        'data-bs-parent': "#accordionExample",
    });
    /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body animate-chk" },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    /** @type {__VLS_StyleScopedClasses['animate-chk']} */ ;
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
        /** @ts-ignore @type {typeof __VLS_components.FeatherIcon} */
        FeatherIcon;
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
    if (items.location) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "job-filter mb-3" },
        });
        /** @type {__VLS_StyleScopedClasses['job-filter']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "faq-form" },
        });
        /** @type {__VLS_StyleScopedClasses['faq-form']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-control" },
            type: "text",
            placeholder: "location..",
        });
        /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
        let __VLS_5;
        /** @ts-ignore @type {typeof __VLS_components.FeatherIcon} */
        FeatherIcon;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            type: ('map-pin'),
            ...{ class: ('search-icon') },
        }));
        const __VLS_7 = __VLS_6({
            type: ('map-pin'),
            ...{ class: ('search-icon') },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        /** @type {__VLS_StyleScopedClasses['search-icon']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (items.class) },
    });
    for (const [item] of __VLS_vFor((items.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "d-block" },
            for: (item.checkId),
            key: (item.id),
        });
        /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "checkbox_animated" },
            id: (item.checkId),
            type: "checkbox",
        });
        /** @type {__VLS_StyleScopedClasses['checkbox_animated']} */ ;
        (item.title);
        if (item.countryCode) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "d-block" },
            });
            /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
            (item.countryCode);
            (item.badgeText);
        }
        else if (item.badge) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "number" },
            });
            /** @type {__VLS_StyleScopedClasses['number']} */ ;
            (item.badgeText);
        }
        // @ts-ignore
        [sidebarOpen, sidebarDetails,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-block btn-primary text-center" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    (items.button);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
