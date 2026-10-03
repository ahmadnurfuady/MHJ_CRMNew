import { ref } from "vue";
import { notificationTabs } from "@/core/data/header";
import { defineAsyncComponent } from "vue";
const activeTab = ref("all");
const tabs = ref(notificationTabs);
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));
const All = defineAsyncComponent(() => import("@/components/layout/header/notification/All.vue"));
const MessagesList = defineAsyncComponent(() => import("@/components/layout/header/notification/Message.vue"));
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(activeTab, {});
// @ts-ignore
__VLS_withDotValue(notificationTabs, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "notification-box" },
});
/** @type {__VLS_StyleScopedClasses['notification-box']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    icon: "notification-header",
}));
const __VLS_2 = __VLS_1({
    icon: "notification-header",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "badge rounded-pill badge-secondary" },
});
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
/** @type {__VLS_StyleScopedClasses['badge-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "onhover-show-div notification-dropdown" },
});
/** @type {__VLS_StyleScopedClasses['onhover-show-div']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-dropdown']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card mb-0" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "text-center f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "notitications-bar" },
});
/** @type {__VLS_StyleScopedClasses['notitications-bar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-pills nav-primary p-0" },
    id: "pills-tab",
    role: "tablist",
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-pills']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
const __VLS_5 = __VLS_tryAsConstant((__VLS_unwrap(tabs, {})));
for (const [tab] of __VLS_vFor(__VLS_nonNull(__VLS_5))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item p-0" },
        key: (tab.id),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: // @ts-ignore
            (...[$event]) => {
                void $event;
                return (activeTab.value = tab.id);
                // @ts-ignore
                [tabs, activeTab,];
            } },
        ...{ class: "nav-link" },
        ...{ class: ({ active: activeTab.value === tab.id }) },
        id: "pills-aboutus-tab",
        'data-bs-toggle': "pill",
        href: "javascript:void(0)",
        role: "tab",
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (tab.title);
    if (tab.title === 'All') {
        (tab.items.length);
    }
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "pills-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
if (activeTab.value === 'all') {
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.All} */
    All;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        // @ts-ignore
        items: (notificationTabs.value.find((t) => t.id === 'all')?.items || []),
    }));
    const __VLS_8 = __VLS_7({
        items: (notificationTabs.value.find((t) => t.id === 'all')?.items || []),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
if (activeTab.value === 'messages') {
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.MessagesList} */
    MessagesList;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        // @ts-ignore
        items: (notificationTabs.value.find((t) => t.id === 'messages')?.items || []),
    }));
    const __VLS_13 = __VLS_12({
        items: (notificationTabs.value.find((t) => t.id === 'messages')?.items || []),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
}
// @ts-ignore
[activeTab, activeTab, notificationTabs, notificationTabs,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
