import { sellerDetails } from '@/core/data/seller';
const notifications = sellerDetails.notifications;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "notification-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['notification-wrapper']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.notifications.notificationList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check checkbox checkbox-primary mb-0" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    /** @type {__VLS_StyleScopedClasses['checkbox']} */ ;
    /** @type {__VLS_StyleScopedClasses['checkbox-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-check-input" },
        id: ('checkbox-primary-' + item.id),
        type: "checkbox",
        checked: (item.checked),
    });
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-check-label" },
        for: ('checkbox-primary-' + item.id),
    });
    /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
    (item.title);
    // @ts-ignore
    [notifications,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "checkbox-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['checkbox-wrapper']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.notifications.notificationPlatform))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        title: (item.name),
        key: (index),
    });
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-check-input checkbox-shadow" },
        id: ('checkbox-icon' + item.id),
        type: "checkbox",
    });
    /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
    /** @type {__VLS_StyleScopedClasses['checkbox-shadow']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "form-check-label" },
        for: ('checkbox-icon' + item.id),
    });
    /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (item.logo) },
    });
    // @ts-ignore
    [notifications, vTooltip,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
