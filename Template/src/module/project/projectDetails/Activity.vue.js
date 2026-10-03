import { ref, defineAsyncComponent } from 'vue';
import { dayFilterOptions } from '@/core/data/common';
import { projectDetails } from '@/core/data/project';
import { routes } from '@/router/routes';
import { getImages } from '@/utils/index';
const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'));
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const cardToggleOption = ref(dayFilterOptions);
const projectActivity = ref(projectDetails.activity);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card filter-header" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.CardDropdown} */
CardDropdown;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    dropdownType: ('classic'),
    options: (__VLS_ctx.cardToggleOption),
    dropdownClass: ('btn-group'),
}));
const __VLS_2 = __VLS_1({
    dropdownType: ('classic'),
    options: (__VLS_ctx.cardToggleOption),
    dropdownClass: ('btn-group'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    cardClass: ('project-timeline'),
    cardBodyClass: ('notification'),
}));
const __VLS_7 = __VLS_6({
    cardClass: ('project-timeline'),
    cardBodyClass: ('notification'),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_10 } = __VLS_8.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [activity, index] of __VLS_vFor((__VLS_ctx.projectActivity))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "d-flex" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`activity-dot-${activity.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "w-100 ms-3" },
    });
    /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: "f-w-600" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (activity.title), }, null, null);
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "date-time" },
    });
    /** @type {__VLS_StyleScopedClasses['date-time']} */ ;
    (activity.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "activity-profile" },
    });
    /** @type {__VLS_StyleScopedClasses['activity-profile']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(activity.addedBy.profile)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (activity.addedBy.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mt-3" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    if (activity.description) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (activity.description);
    }
    if (activity.attachments) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "common-flex" },
        });
        /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
        for (const [attachment, index] of __VLS_vFor((activity.attachments))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "upload-doc" },
                key: (index),
            });
            /** @type {__VLS_StyleScopedClasses['upload-doc']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "d-flex" },
            });
            /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
            let __VLS_11;
            /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
            SvgIcon;
            // @ts-ignore
            const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
                icon: (attachment.fileIcon),
                type: "default",
            }));
            const __VLS_13 = __VLS_12({
                icon: (attachment.fileIcon),
                type: "default",
            }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "mb-0" },
            });
            /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
            (attachment.fileName);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "mb-0 c-o-light" },
            });
            /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
            /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
            (attachment.fileSize);
            // @ts-ignore
            [cardToggleOption, projectActivity, getImages,];
        }
    }
    if (activity.images) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flowchart-wrapper" },
        });
        /** @type {__VLS_StyleScopedClasses['flowchart-wrapper']} */ ;
        for (const [image, index] of __VLS_vFor((activity.images))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                key: (index),
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "flowchart-img" },
            });
            /** @type {__VLS_StyleScopedClasses['flowchart-img']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-fluid" },
                src: (__VLS_ctx.getImages(image.imageUrl)),
                alt: "flowchart",
            });
            /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
            // @ts-ignore
            [getImages,];
        }
    }
    if (activity.members) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "project-teammate" },
        });
        /** @type {__VLS_StyleScopedClasses['project-teammate']} */ ;
        let __VLS_16;
        /** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
        GroupItem;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
            items: (activity.members),
            ...{ class: ('common-f-start') },
            imgClass: ('common-circle'),
        }));
        const __VLS_18 = __VLS_17({
            items: (activity.members),
            ...{ class: ('common-f-start') },
            imgClass: ('common-circle'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
    }
    if (activity.templates) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "table-responsive custom-scrollbar" },
        });
        /** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
        /** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
            ...{ class: "table project-task-note" },
        });
        /** @type {__VLS_StyleScopedClasses['table']} */ ;
        /** @type {__VLS_StyleScopedClasses['project-task-note']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({
            ...{ class: "project-header" },
        });
        /** @type {__VLS_StyleScopedClasses['project-header']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            scope: "col",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            scope: "col",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            scope: "col",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            scope: "col",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            scope: "col",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
            scope: "col",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({
            ...{ class: "project-content" },
        });
        /** @type {__VLS_StyleScopedClasses['project-content']} */ ;
        for (const [details, index] of __VLS_vFor((activity.templates))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
                key: (index),
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            (details.projectName);
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            (details.task);
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            let __VLS_21;
            /** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
            GroupItem;
            // @ts-ignore
            const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
                items: (details.assignTo),
                ...{ class: ('common-f-start') },
            }));
            const __VLS_23 = __VLS_22({
                items: (details.assignTo),
                ...{ class: ('common-f-start') },
            }, ...__VLS_functionalComponentArgsRest(__VLS_22));
            /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: (`badge badge-light-${details.color} txt-${details.color}`) },
            });
            (details.status);
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            (details.dueDate);
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
            let __VLS_26;
            /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
            routerLink;
            // @ts-ignore
            const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
                ...{ class: "btn" },
                to: (__VLS_ctx.routes.Project.ProjectList),
            }));
            const __VLS_28 = __VLS_27({
                ...{ class: "btn" },
                to: (__VLS_ctx.routes.Project.ProjectList),
            }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            /** @type {__VLS_StyleScopedClasses['btn']} */ ;
            const { default: __VLS_31 } = __VLS_29.slots;
            // @ts-ignore
            [routes,];
            var __VLS_29;
            // @ts-ignore
            [];
        }
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_8;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
