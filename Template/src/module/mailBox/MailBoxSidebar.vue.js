import { ref, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { emailTags } from '@/core/data/mailBox';
import { useMailBox } from '@/store/mailBox';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const ComposeEmailModal = defineAsyncComponent(() => import('@/module/mailBox/ComposeEmailModal.vue'));
const MailLabelModal = defineAsyncComponent(() => import('@/module/mailBox/MailLabelModal.vue'));
const emailStore = useMailBox();
const { mailState } = storeToRefs(emailStore);
const sidebarOpen = ref(false);
const isMailModalOpen = ref(false);
const isLabelModalOpen = ref(false);
function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
}
function handleTabChange(value) {
    mailState.value.activeTab = value;
}
function composeEmail() {
    isMailModalOpen.value = true;
}
function openLabelModal() {
    isLabelModalOpen.value = true;
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
            return (__VLS_ctx.toggleSidebar());
            // @ts-ignore
            [toggleSidebar,];
        } },
    ...{ class: "btn btn-primary md-sidebar-toggle" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar-aside job-left-aside custom-scrollbar" },
    ...{ class: ({ open: __VLS_ctx.sidebarOpen }) },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['job-left-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-left-aside" },
});
/** @type {__VLS_StyleScopedClasses['email-left-aside']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "custom-scrollbar" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "custom-scrollbar" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-app-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['email-app-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.composeEmail());
            // @ts-ignore
            [sidebarOpen, composeEmail,];
        } },
    ...{ class: "btn btn-primary emailbox" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['emailbox']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
if (__VLS_ctx.mailState.sidebar) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "nav nav-pills main-menu email-category" },
        id: "email-pills-tab",
        role: "tablist",
    });
    /** @type {__VLS_StyleScopedClasses['nav']} */ ;
    /** @type {__VLS_StyleScopedClasses['nav-pills']} */ ;
    /** @type {__VLS_StyleScopedClasses['main-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['email-category']} */ ;
    for (const [item, index] of __VLS_vFor((__VLS_ctx.mailState.sidebar))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "nav-item" },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.mailState.sidebar))
                        throw 0;
                    return (__VLS_ctx.handleTabChange(item.value));
                    // @ts-ignore
                    [mailState, mailState, handleTabChange,];
                } },
            ...{ class: "nav-link" },
            ...{ class: ({ active: __VLS_ctx.mailState.activeTab == item.value }) },
        });
        /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
        /** @type {__VLS_StyleScopedClasses['active']} */ ;
        let __VLS_6;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
            icon: (item.icon),
            type: "default",
            ...{ class: ('stroke-icon') },
        }));
        const __VLS_8 = __VLS_7({
            icon: (item.icon),
            type: "default",
            ...{ class: ('stroke-icon') },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        /** @type {__VLS_StyleScopedClasses['stroke-icon']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        (item.title);
        if (item.count) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "badge badge-light-primary" },
            });
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-light-primary']} */ ;
            (item.count);
        }
        // @ts-ignore
        [mailState,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    for (const [tag, index] of __VLS_vFor((__VLS_ctx.emailTags))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            href: "#",
            ...{ class: "nav-link" },
        });
        /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
        let __VLS_11;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
            icon: ('pintag'),
            type: "default",
            svgClass: ('stroke-icon stroke-' + tag.color),
        }));
        const __VLS_13 = __VLS_12({
            icon: ('pintag'),
            type: "default",
            svgClass: ('stroke-icon stroke-' + tag.color),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        (tag.title);
        // @ts-ignore
        [emailTags,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.mailState.sidebar))
                    throw 0;
                return (__VLS_ctx.openLabelModal());
                // @ts-ignore
                [openLabelModal,];
            } },
        ...{ class: "nav-link btn" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-plus" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.ComposeEmailModal} */
ComposeEmailModal;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isMailModalOpen),
}));
const __VLS_18 = __VLS_17({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isMailModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_21;
const __VLS_22 = {
    /** @type {typeof __VLS_21.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.isMailModalOpen = false);
        // @ts-ignore
        [isMailModalOpen, isMailModalOpen,];
    },
};
var __VLS_19;
var __VLS_20;
let __VLS_23;
/** @ts-ignore @type { | typeof __VLS_components.MailLabelModal} */
MailLabelModal;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isLabelModalOpen),
}));
const __VLS_25 = __VLS_24({
    ...{ 'onCloseModal': {} },
    modalOpen: (__VLS_ctx.isLabelModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
let __VLS_28;
const __VLS_29 = {
    /** @type {typeof __VLS_28.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.isLabelModalOpen = false);
        // @ts-ignore
        [isLabelModalOpen, isLabelModalOpen,];
    },
};
var __VLS_26;
var __VLS_27;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
