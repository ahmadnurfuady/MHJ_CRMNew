import { storeToRefs } from 'pinia';
import { useContact } from '@/store/contact';
import { getImages } from '@/utils/index';
const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);
const { editContact, deleteContact, showHistory, printContact } = contactStore;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.contactState.activeContact) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-100 img-fluid m-r-20 rounded-circle update_img_0" },
        src: (__VLS_ctx.getImages(__VLS_ctx.contactState.activeContact.profile)),
        alt: (__VLS_ctx.contactState.activeContact.firstName),
    });
    /** @type {__VLS_StyleScopedClasses['img-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['update_img_0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "updateimg" },
        type: "file",
        name: "img",
        accept: "image/*",
    });
    /** @type {__VLS_StyleScopedClasses['updateimg']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1 mt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "firstName_0" },
    });
    /** @type {__VLS_StyleScopedClasses['firstName_0']} */ ;
    (__VLS_ctx.contactState.activeContact.firstName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "last_name_0" },
    });
    /** @type {__VLS_StyleScopedClasses['last_name_0']} */ ;
    (__VLS_ctx.contactState.activeContact.lastName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "email_add_0" },
    });
    /** @type {__VLS_StyleScopedClasses['email_add_0']} */ ;
    (__VLS_ctx.contactState.activeContact.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "main-contact-option" },
    });
    /** @type {__VLS_StyleScopedClasses['main-contact-option']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.contactState.activeContact))
                    throw 0;
                return (__VLS_ctx.editContact());
                // @ts-ignore
                [contactState, contactState, contactState, contactState, contactState, contactState, getImages, editContact,];
            } },
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.contactState.activeContact))
                    throw 0;
                return (__VLS_ctx.deleteContact());
                // @ts-ignore
                [deleteContact,];
            } },
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.contactState.activeContact))
                    throw 0;
                return (__VLS_ctx.showHistory());
                // @ts-ignore
                [showHistory,];
            } },
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.contactState.activeContact))
                    throw 0;
                return (__VLS_ctx.printContact());
                // @ts-ignore
                [printContact,];
            } },
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "email-general" },
    });
    /** @type {__VLS_StyleScopedClasses['email-general']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary firstName_0" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['firstName_0']} */ ;
    (__VLS_ctx.contactState.activeContact.firstName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    (__VLS_ctx.contactState.activeContact.gender);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    (__VLS_ctx.contactState.activeContact.dob);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary personality_0" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['personality_0']} */ ;
    (__VLS_ctx.contactState.activeContact.personality);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary city_0" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['city_0']} */ ;
    (__VLS_ctx.contactState.activeContact.city);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary mobile_num_0" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['mobile_num_0']} */ ;
    (__VLS_ctx.contactState.activeContact.contactNumber);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary email_add_0" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['email_add_0']} */ ;
    (__VLS_ctx.contactState.activeContact.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary url_add_0" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['url_add_0']} */ ;
    (__VLS_ctx.contactState.activeContact.website);
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-primary interest_0" },
    });
    /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['interest_0']} */ ;
    (__VLS_ctx.contactState.activeContact.interest);
}
// @ts-ignore
[contactState, contactState, contactState, contactState, contactState, contactState, contactState, contactState, contactState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
