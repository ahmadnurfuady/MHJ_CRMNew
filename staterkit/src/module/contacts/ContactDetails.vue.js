import { defineAsyncComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useContact } from "@/store/contact";
import { getImages } from "@/utils/index";
const EditContactForm = defineAsyncComponent(() => import("@/module/contacts/EditContactForm.vue"));
const GeneralDetails = defineAsyncComponent(() => import("@/module/contacts/GeneralDetails.vue"));
const contactStore = useContact();
const { contactState, filteredContact } = storeToRefs(contactStore);
const { handleContact } = contactStore;
onMounted(() => {
    contactStore.initStore();
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card mb-0" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header d-flex" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
(__VLS_ctx.contactState.currentTab && __VLS_ctx.contactState.currentTab.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "f-14 pull-right mt-0 f-w-500" },
});
/** @type {__VLS_StyleScopedClasses['f-14']} */ ;
/** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
(__VLS_ctx.filteredContact.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row list-persons g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['list-persons']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
if (__VLS_ctx.filteredContact.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-4 xl-50 col-md-5" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-md-5']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "nav flex-column nav-pills" },
    });
    /** @type {__VLS_StyleScopedClasses['nav']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
    /** @type {__VLS_StyleScopedClasses['nav-pills']} */ ;
    for (const [contact, index] of __VLS_vFor((__VLS_ctx.filteredContact))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredContact.length))
                        return;
                    __VLS_ctx.handleContact(contact);
                    // @ts-ignore
                    [contactState, contactState, filteredContact, filteredContact, filteredContact, handleContact,];
                } },
            ...{ class: "contact-tab-0 nav-link" },
            ...{ class: ({
                    active: contact.id == __VLS_ctx.contactState.activeContact?.id,
                }) },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['contact-tab-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
        /** @type {__VLS_StyleScopedClasses['active']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-50 img-fluid m-r-20 rounded-circle update_img_0" },
            src: (__VLS_ctx.getImages(contact.profile)),
            alt: (contact.firstName),
        });
        /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['update_img_0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex-grow-1" },
        });
        /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "first_name_0" },
        });
        /** @type {__VLS_StyleScopedClasses['first_name_0']} */ ;
        (contact.firstName);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "last_name_0" },
        });
        /** @type {__VLS_StyleScopedClasses['last_name_0']} */ ;
        (contact.lastName);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "email_add_0" },
        });
        /** @type {__VLS_StyleScopedClasses['email_add_0']} */ ;
        (contact.email);
        // @ts-ignore
        [contactState, getImages,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-8 xl-50 col-md-7" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['xl-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-md-7']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "tab-content" },
        ...{ style: ({
                display: __VLS_ctx.contactState.isEditContact ? 'none' : 'block',
            }) },
    });
    /** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "tab-pane contact-tab-0 tab-content-child fade show active" },
    });
    /** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
    /** @type {__VLS_StyleScopedClasses['contact-tab-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['tab-content-child']} */ ;
    /** @type {__VLS_StyleScopedClasses['fade']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    if (__VLS_ctx.contactState.activeContact &&
        __VLS_ctx.filteredContact &&
        __VLS_ctx.filteredContact.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "profile-mail" },
        });
        /** @type {__VLS_StyleScopedClasses['profile-mail']} */ ;
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.GeneralDetails} */
        GeneralDetails;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "contact-editform ps-0" },
        ...{ style: ({
                display: __VLS_ctx.contactState.isEditContact ? 'block' : 'none',
            }) },
    });
    /** @type {__VLS_StyleScopedClasses['contact-editform']} */ ;
    /** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
    let __VLS_5;
    /** @ts-ignore @type {typeof __VLS_components.EditContactForm} */
    EditContactForm;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col" },
    });
    /** @type {__VLS_StyleScopedClasses['col']} */ ;
}
// @ts-ignore
[contactState, contactState, contactState, filteredContact, filteredContact,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
