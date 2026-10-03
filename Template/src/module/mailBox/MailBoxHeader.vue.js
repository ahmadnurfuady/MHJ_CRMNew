import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { emailTypes } from '@/core/data/mailBox';
import { useMailBox } from '@/store/mailBox';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const emailStore = useMailBox();
const { mailState } = storeToRefs(emailStore);
function handleType(value) {
    mailState.value.emailType = value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mail-header-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['mail-header-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mail-header" },
});
/** @type {__VLS_StyleScopedClasses['mail-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check form-check-inline" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input checkbox-primary" },
    id: "emailCheckboxA",
    type: "checkbox",
    value: "option1",
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "mail-filters" },
});
/** @type {__VLS_StyleScopedClasses['mail-filters']} */ ;
for (const [type, index] of __VLS_vFor((__VLS_ctx.emailTypes))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.handleType(type.value));
                // @ts-ignore
                [emailTypes, handleType,];
            } },
        ...{ class: "common-align mail-header-option" },
        ...{ class: ({ active: __VLS_ctx.mailState.emailType == type.value }) },
    });
    /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
    /** @type {__VLS_StyleScopedClasses['mail-header-option']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        icon: (type.icon),
        svgClass: ('stroke-icon'),
    }));
    const __VLS_2 = __VLS_1({
        icon: (type.icon),
        svgClass: ('stroke-icon'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (type.title);
    // @ts-ignore
    [mailState,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mail-body" },
});
/** @type {__VLS_StyleScopedClasses['mail-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mail-search d-flex-align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['mail-search']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex-align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-control" },
    type: "search",
    placeholder: "Search...",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-magnifying-glass" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-magnifying-glass']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "light-square block-btn-1" },
});
/** @type {__VLS_StyleScopedClasses['light-square']} */ ;
/** @type {__VLS_StyleScopedClasses['block-btn-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-arrows-rotate" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-arrows-rotate']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "light-square bg-light-danger" },
});
/** @type {__VLS_StyleScopedClasses['light-square']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-trash-can txt-danger" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-trash-can']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "light-square dropdown-toggle" },
    role: "main",
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['light-square']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-ellipsis-vertical" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-ellipsis-vertical']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu dropdown-block dropdown-menu-end" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-block']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "dropdown-item" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "dropdown-item" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "dropdown-item" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "dropdown-item" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "dropdown-item" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "dropdown-item" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
