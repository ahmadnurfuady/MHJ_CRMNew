import { onMounted, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useMailBox } from '@/store/mailBox';
import { getTextColor, getUserText, getImages } from '@/utils/index';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const emailStore = useMailBox();
const { mailState, getFilteredEmails } = storeToRefs(emailStore);
const { addToFavorite, openEmail, deleteMail, getTotalEmails } = emailStore;
onMounted(() => {
    getTotalEmails();
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.getFilteredEmails.length) {
    for (const [email, index] of __VLS_vFor((__VLS_ctx.getFilteredEmails))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "inbox-data project" },
        });
        /** @type {__VLS_StyleScopedClasses['inbox-data']} */ ;
        /** @type {__VLS_StyleScopedClasses['project']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "inbox-user" },
        });
        /** @type {__VLS_StyleScopedClasses['inbox-user']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-check form-check-inline m-0" },
        });
        /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
        /** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
        /** @type {__VLS_StyleScopedClasses['m-0']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-check-input checkbox-primary" },
            id: "emailCheckbox1",
            type: "checkbox",
            value: "option1",
        });
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        /** @type {__VLS_StyleScopedClasses['checkbox-primary']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label" },
            for: "emailCheckbox1",
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            ...{ 'onClick': {} },
            icon: ('fill-star'),
            ...{ class: ('important-mail ' + (email.isFavorite ? 'active' : '')) },
        }));
        const __VLS_2 = __VLS_1({
            ...{ 'onClick': {} },
            icon: ('fill-star'),
            ...{ class: ('important-mail ' + (email.isFavorite ? 'active' : '')) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_5;
        const __VLS_6 = {
            /** @type {typeof __VLS_5.click} */
            onClick: (...[$event]) => {
                if (!(__VLS_ctx.getFilteredEmails.length))
                    throw 0;
                return (__VLS_ctx.addToFavorite(email));
                // @ts-ignore
                [getFilteredEmails, getFilteredEmails, addToFavorite,];
            },
        };
        var __VLS_3;
        var __VLS_4;
        if (__VLS_ctx.mailState.activeTab == 'sent') {
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "rounded-border" },
        });
        /** @type {__VLS_StyleScopedClasses['rounded-border']} */ ;
        if (email.userProfile) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-fluid" },
                src: (__VLS_ctx.getImages(email.userProfile)),
                alt: (email.userName),
            });
            /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: (`circle-${__VLS_ctx.getTextColor(__VLS_ctx.getUserText(email.userName))}`) },
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: (`txt-${__VLS_ctx.getTextColor(__VLS_ctx.getUserText(email.userName))}`) },
            });
            (__VLS_ctx.getUserText(email.userName));
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (email.userName);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "inbox-message" },
        });
        /** @type {__VLS_StyleScopedClasses['inbox-message']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.getFilteredEmails.length))
                        throw 0;
                    return (__VLS_ctx.openEmail(email));
                    // @ts-ignore
                    [mailState, getImages, getTextColor, getTextColor, getUserText, getUserText, getUserText, openEmail,];
                } },
            ...{ class: "email-data" },
        });
        /** @type {__VLS_StyleScopedClasses['email-data']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (email.emailTitle);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (email.description);
        if (email.tag) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "badge badge-light-light" },
            });
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-light-light']} */ ;
            (email.tag);
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "email-timing" },
        });
        /** @type {__VLS_StyleScopedClasses['email-timing']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (email.time);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "email-options" },
        });
        /** @type {__VLS_StyleScopedClasses['email-options']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.getFilteredEmails.length))
                        throw 0;
                    return (email.isRead = !email.isRead);
                    // @ts-ignore
                    [];
                } },
            ...{ class: "fa-regular" },
            ...{ class: (email.isRead ? 'fa-envelope-open envelope-2' : 'fa-envelope envelope-1') },
        });
        /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.getFilteredEmails.length))
                        throw 0;
                    return (__VLS_ctx.deleteMail(email));
                    // @ts-ignore
                    [deleteMail,];
                } },
            ...{ class: "fa-regular fa-trash-can trash-3" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-trash-can']} */ ;
        /** @type {__VLS_StyleScopedClasses['trash-3']} */ ;
        // @ts-ignore
        [];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "empty-box" },
    });
    /** @type {__VLS_StyleScopedClasses['empty-box']} */ ;
    (__VLS_ctx.mailState.activeTab);
    (__VLS_ctx.mailState.emailType);
}
// @ts-ignore
[mailState, mailState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
