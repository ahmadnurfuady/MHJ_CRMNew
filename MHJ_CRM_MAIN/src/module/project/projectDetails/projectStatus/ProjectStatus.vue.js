import { ref, defineAsyncComponent } from 'vue';
import { projectDetails, projectStatus, projectStatusOptions } from '@/core/data/project';
import { getImages } from '@/utils/index';
const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'));
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Searchbox = defineAsyncComponent(() => import('@/module/project/projectDetails/projectStatus/Searchbox.vue'));
const statusOption = ref(projectStatusOptions);
const projects = ref(projectDetails.projectStatus);
function getTotalProject(value) {
    return projects.value.filter((project) => project.status === value).length;
}
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
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Searchbox} */
Searchbox;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
for (const [status, index] of __VLS_vFor((__VLS_ctx.projectStatus))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 xl-50 col-md-6 box-col-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card progress-project" },
    });
    /** @type {__VLS_StyleScopedClasses['card']} */ ;
    /** @type {__VLS_StyleScopedClasses['progress-project']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`card-header card-no-border scope-light-${status.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-align" },
    });
    /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`common-dot bg-${status.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (status.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge rounded-circle c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (__VLS_ctx.getTotalProject(status.value));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-header-right-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['card-header-right-icon']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.CardDropdown | typeof __VLS_components.CardDropdown} */
    CardDropdown;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        dropdownType: ('simple'),
        options: (__VLS_ctx.statusOption),
    }));
    const __VLS_7 = __VLS_6({
        dropdownType: ('simple'),
        options: (__VLS_ctx.statusOption),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body" },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    for (const [project, index] of __VLS_vFor((__VLS_ctx.projects))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        if (project.status == status.value) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "progress-project-box" },
            });
            /** @type {__VLS_StyleScopedClasses['progress-project-box']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: (`list-box title-line-${project.tagColor}`) },
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "header-top" },
            });
            /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
            if (!project.projectBanner) {
                if (project.developer && project.developer.length) {
                    let __VLS_10;
                    /** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
                    GroupItem;
                    // @ts-ignore
                    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
                        items: (project.developer),
                        ...{ class: ('common-f-start') },
                    }));
                    const __VLS_12 = __VLS_11({
                        items: (project.developer),
                        ...{ class: ('common-f-start') },
                    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
                }
            }
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: (`badge badge-light-${project.tagColor}`) },
            });
            (project.tag);
            if (project.projectBanner) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "common-box" },
                });
                /** @type {__VLS_StyleScopedClasses['common-box']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                    ...{ class: (`fa-solid fa-plus txt-${project.tagColor}`) },
                });
            }
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "project-body" },
            });
            /** @type {__VLS_StyleScopedClasses['project-body']} */ ;
            if (project.projectBanner) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                    ...{ class: "img-fluid" },
                    src: (__VLS_ctx.getImages(project.projectBanner)),
                    alt: "banner",
                });
                /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
            }
            __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
                ...{ class: "mb-2" },
            });
            /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
            (project.projectTitle);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
            (project.projectDescription);
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "progress" },
            });
            /** @type {__VLS_StyleScopedClasses['progress']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "progress-bar" },
                ...{ class: (status.value == 'pending'
                        ? 'bg-secondary'
                        : status.value == 'progress'
                            ? 'bg-warning'
                            : 'bg-success') },
                ...{ style: ({ width: project.progress + '%' }) },
            });
            /** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
            if (project.developer && project.developer.length && project.projectBanner) {
                let __VLS_15;
                /** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
                GroupItem;
                // @ts-ignore
                const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
                    items: (project.developer),
                    ...{ class: ('common-f-start') },
                }));
                const __VLS_17 = __VLS_16({
                    items: (project.developer),
                    ...{ class: ('common-f-start') },
                }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
            }
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "project-bottom common-space" },
            });
            /** @type {__VLS_StyleScopedClasses['project-bottom']} */ ;
            /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "common-flex" },
            });
            /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                placement: "top",
                ngbTooltip: "Attachment",
            });
            let __VLS_20;
            /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
            SvgIcon;
            // @ts-ignore
            const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
                icon: ('project-attachment'),
                svgClass: ('me-2'),
                type: "default",
            }));
            const __VLS_22 = __VLS_21({
                icon: ('project-attachment'),
                svgClass: ('me-2'),
                type: "default",
            }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            (project.attachment);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                placement: "top",
                ngbTooltip: "Comments",
            });
            let __VLS_25;
            /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
            SvgIcon;
            // @ts-ignore
            const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
                icon: ('project-cmt'),
                svgClass: ('me-2'),
                type: "default",
            }));
            const __VLS_27 = __VLS_26({
                icon: ('project-cmt'),
                svgClass: ('me-2'),
                type: "default",
            }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            (project.comments);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "mb-0 c-o-light" },
            });
            /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
            /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
            let __VLS_30;
            /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
            SvgIcon;
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
                icon: ('vector-calendar'),
                svgClass: ('me-2'),
                type: "default",
            }));
            const __VLS_32 = __VLS_31({
                icon: ('vector-calendar'),
                svgClass: ('me-2'),
                type: "default",
            }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            (project.date);
        }
        // @ts-ignore
        [projectStatus, getTotalProject, statusOption, projects, getImages,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
