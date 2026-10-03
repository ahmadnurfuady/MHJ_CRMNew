import { defineAsyncComponent } from 'vue';
import { titleCase, getImages } from '@/utils/index';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'));
const props = withDefaults(defineProps(), {
    showMember: true,
});
const __VLS_defaults = {
    showMember: true,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.project) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress-project-box" },
    });
    /** @type {__VLS_StyleScopedClasses['progress-project-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`list-box ${props.project.status == 'pending'
                ? 'title-line-primary'
                : props.project.status == 'in_progress'
                    ? 'title-line-warning'
                    : 'title-line-success'}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "header-top" },
    });
    /** @type {__VLS_StyleScopedClasses['header-top']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`badge badge-light-${props.project.status == 'pending'
                ? 'primary'
                : props.project.status == 'in_progress'
                    ? 'warning'
                    : 'success'}`) },
    });
    (__VLS_ctx.titleCase(props.project.status.replace('_', ' ')));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0 c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        icon: ('vector-calendar'),
        ...{ class: ('me-2') },
    }));
    const __VLS_2 = __VLS_1({
        icon: ('vector-calendar'),
        ...{ class: ('me-2') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    (props.project.date);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "project-body" },
    });
    /** @type {__VLS_StyleScopedClasses['project-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-f-start gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(props.project.projectBanner)),
        alt: "banner",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    (props.project.projectName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (props.project.projectDescription);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-space" },
    });
    /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0 c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (props.project.progress);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "progress" },
    });
    /** @type {__VLS_StyleScopedClasses['progress']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`progress-bar bg-${props.project.status == 'pending'
                ? 'primary'
                : props.project.status == 'in_progress'
                    ? 'warning'
                    : 'success'}`) },
        ...{ style: ({ width: props.project.progress + '%' }) },
    });
    if (props.showMember) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "project-bottom common-space" },
        });
        /** @type {__VLS_StyleScopedClasses['project-bottom']} */ ;
        /** @type {__VLS_StyleScopedClasses['common-space']} */ ;
        if (props.project.teamMember && props.project.teamMember.length) {
            let __VLS_5;
            /** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
            GroupItem;
            // @ts-ignore
            const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
                items: (props.project.teamMember),
                ...{ class: ('common-f-start') },
            }));
            const __VLS_7 = __VLS_6({
                items: (props.project.teamMember),
                ...{ class: ('common-f-start') },
            }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "mb-0" },
        });
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (props.project.budget);
    }
}
// @ts-ignore
[titleCase, getImages,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
