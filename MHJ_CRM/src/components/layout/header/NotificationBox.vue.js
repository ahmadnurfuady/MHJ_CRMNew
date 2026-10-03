import { ref } from 'vue';
import { notificationTabs } from '@/core/data/header';
import { defineAsyncComponent } from 'vue';
const activeTab = ref('all');
const tabs = ref(notificationTabs);
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const All = defineAsyncComponent(() => import('@/components/layout/header/notification/All.vue'));
const MessagesList = defineAsyncComponent(() => import('@/components/layout/header/notification/Message.vue'));
const CartBox = defineAsyncComponent(() => import('@/components/layout/header/notification/CartBox.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "notification-box" },
});
/** @type {__VLS_StyleScopedClasses['notification-box']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
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
for (const [tab] of __VLS_vFor((__VLS_ctx.tabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item p-0" },
        key: (tab.id),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeTab = tab.id;
                // @ts-ignore
                [tabs, activeTab,];
            } },
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.activeTab === tab.id }) },
        id: "pills-aboutus-tab",
        'data-bs-toggle': "pill",
        href: "#",
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
if (__VLS_ctx.activeTab === 'all') {
    let __VLS_5;
    /** @ts-ignore @type {typeof __VLS_components.All} */
    All;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        items: (__VLS_ctx.notificationTabs.find((t) => t.id === 'all')?.items || []),
    }));
    const __VLS_7 = __VLS_6({
        items: (__VLS_ctx.notificationTabs.find((t) => t.id === 'all')?.items || []),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
if (__VLS_ctx.activeTab === 'messages') {
    let __VLS_10;
    /** @ts-ignore @type {typeof __VLS_components.MessagesList} */
    MessagesList;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        items: (__VLS_ctx.notificationTabs.find((t) => t.id === 'messages')?.items || []),
    }));
    const __VLS_12 = __VLS_11({
        items: (__VLS_ctx.notificationTabs.find((t) => t.id === 'messages')?.items || []),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
if (__VLS_ctx.activeTab === 'cart') {
    let __VLS_15;
    /** @ts-ignore @type {typeof __VLS_components.CartBox} */
    CartBox;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
}
// @ts-ignore
[activeTab, activeTab, activeTab, notificationTabs, notificationTabs,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
