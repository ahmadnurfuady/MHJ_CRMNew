import { ref, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { user } from '@/core/data/user';
import { useContact } from '@/store/contact';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const AddContactModal = defineAsyncComponent(() => import('@/module/contacts/AddContactModal.vue'));
const ContactCategoryModal = defineAsyncComponent(() => import('@/module/contacts/ContactCategoryModal.vue'));
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
const { handleActiveTab, openContactModal } = contactStore;
const sidebarOpen = ref(false);
const userDetails = user;
function toggleFilter() {
    sidebarOpen.value = !sidebarOpen.value;
}
function categoryModal() {
    contactState.value.openCategoryModal = true;
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
            __VLS_ctx.toggleFilter();
            // @ts-ignore
            [toggleFilter,];
        } },
    ...{ class: "btn btn-primary md-sidebar-toggle" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar-aside job-left-aside" },
    ...{ class: ({ open: __VLS_ctx.sidebarOpen }) },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['job-left-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-left-aside" },
});
/** @type {__VLS_StyleScopedClasses['email-left-aside']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardBodyClass: ('custom-scrollbar'),
}));
const __VLS_2 = __VLS_1({
    cardBodyClass: ('custom-scrollbar'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-app-sidebar left-bookmark" },
});
/** @type {__VLS_StyleScopedClasses['email-app-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['left-bookmark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex-size-email" },
});
/** @type {__VLS_StyleScopedClasses['d-flex-size-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "rounded-circle" },
    src: (__VLS_ctx.getImages(__VLS_ctx.userDetails.userProfile)),
    alt: (__VLS_ctx.userDetails.name),
});
/** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
(__VLS_ctx.userDetails.name);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.userDetails.userEmail);
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav main-menu contact-options custom-scrollbar" },
    role: "tablist",
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['main-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-options']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openContactModal();
            // @ts-ignore
            [sidebarOpen, getImages, userDetails, userDetails, userDetails, userDetails, openContactModal,];
        } },
    ...{ class: "button-primary btn-block btn-mail w-100" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['button-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-block']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-mail']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    type: ('users'),
    ...{ class: ('me-2') },
}));
const __VLS_8 = __VLS_7({
    type: ('users'),
    ...{ class: ('me-2') },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "main-title" },
});
/** @type {__VLS_StyleScopedClasses['main-title']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.contactState.tabList.slice(0, 1)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (item.value),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleActiveTab(item);
                // @ts-ignore
                [contactState, handleActiveTab,];
            } },
        ...{ class: ({ active: item.value == __VLS_ctx.contactState.activeTab }) },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "title" },
    });
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (item.title);
    // @ts-ignore
    [contactState,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.categoryModal();
            // @ts-ignore
            [categoryModal,];
        } },
    ...{ class: "btn btn-category" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-category']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "title" },
});
/** @type {__VLS_StyleScopedClasses['title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [item] of __VLS_vFor((__VLS_ctx.contactState.tabList.slice(1)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (item.value),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleActiveTab(item);
                // @ts-ignore
                [contactState, handleActiveTab,];
            } },
        ...{ class: ({ active: item.value == __VLS_ctx.contactState.activeTab }) },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "title" },
    });
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (item.title);
    // @ts-ignore
    [contactState,];
}
// @ts-ignore
[];
var __VLS_3;
if (__VLS_ctx.contactState.openAddContactModal) {
    let __VLS_11;
    /** @ts-ignore @type {typeof __VLS_components.AddContactModal} */
    AddContactModal;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
}
if (__VLS_ctx.contactState.openCategoryModal) {
    let __VLS_16;
    /** @ts-ignore @type {typeof __VLS_components.ContactCategoryModal} */
    ContactCategoryModal;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({}));
    const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
}
// @ts-ignore
[contactState, contactState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
