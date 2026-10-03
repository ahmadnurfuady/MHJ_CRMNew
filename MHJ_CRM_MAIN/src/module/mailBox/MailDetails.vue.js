import { ref, onMounted, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useMailBox } from '@/store/mailBox';
import { getTextColor, getUserText, getImages } from '@/utils/index';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const emailStore = useMailBox();
const { mailState } = storeToRefs(emailStore);
const { addToFavorite } = emailStore;
const editor = ref();
onMounted(async () => {
    const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic');
    editor.value = ClassicEditor;
});
function goPrevious() {
    mailState.value.isOpenMail = false;
}
function print() {
    window.print();
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.mailState.currentMailDetails) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mail-header-wrapper header-wrapper1" },
    });
    /** @type {__VLS_StyleScopedClasses['mail-header-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['header-wrapper1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mail-header1" },
    });
    /** @type {__VLS_StyleScopedClasses['mail-header1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.mailState.currentMailDetails))
                    throw 0;
                return (__VLS_ctx.goPrevious());
                // @ts-ignore
                [mailState, goPrevious,];
            } },
        ...{ class: "light-square" },
    });
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        icon: ('back-arrow'),
        type: "default",
        svgClass: ('btn-email'),
    }));
    const __VLS_2 = __VLS_1({
        icon: ('back-arrow'),
        type: "default",
        svgClass: ('btn-email'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.mailState.currentMailDetails && __VLS_ctx.mailState.currentMailDetails.emailTitle
        ? __VLS_ctx.mailState.currentMailDetails.emailTitle
        : 'No Subject');
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mail-body1" },
    });
    /** @type {__VLS_StyleScopedClasses['mail-body1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-square" },
        title: "Achieve",
    });
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        icon: ('sms'),
        type: "default",
    }));
    const __VLS_7 = __VLS_6({
        icon: ('sms'),
        type: "default",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-square" },
        title: "Bookmark",
    });
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        icon: ('bookmark'),
        type: "default",
        svgClass: ('bookmark-box'),
    }));
    const __VLS_12 = __VLS_11({
        icon: ('bookmark'),
        type: "default",
        svgClass: ('bookmark-box'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-square" },
        title: "Spam",
    });
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    let __VLS_15;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        icon: ('spam'),
        type: "default",
    }));
    const __VLS_17 = __VLS_16({
        icon: ('spam'),
        type: "default",
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-square bg-light-danger" },
        title: "Trash",
    });
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-light-danger']} */ ;
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        icon: ('mail-trash'),
        type: "default",
        svgClass: ('stroke-danger'),
    }));
    const __VLS_22 = __VLS_21({
        icon: ('mail-trash'),
        type: "default",
        svgClass: ('stroke-danger'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-square" },
        title: "Settings",
    });
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    let __VLS_25;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
        icon: ('setting'),
        type: "default",
    }));
    const __VLS_27 = __VLS_26({
        icon: ('setting'),
        type: "default",
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mail-body-wrapper" },
        id: "DivIdToPrint",
    });
    /** @type {__VLS_StyleScopedClasses['mail-body-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-mail-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['user-mail-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-title" },
    });
    /** @type {__VLS_StyleScopedClasses['user-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "rounded-border" },
    });
    /** @type {__VLS_StyleScopedClasses['rounded-border']} */ ;
    if (__VLS_ctx.mailState.currentMailDetails.userProfile) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-fluid" },
            src: (__VLS_ctx.getImages(__VLS_ctx.mailState.currentMailDetails.userProfile)),
            alt: (__VLS_ctx.mailState.currentMailDetails.userName),
        });
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`circle-${__VLS_ctx.getTextColor(__VLS_ctx.getUserText(__VLS_ctx.mailState.currentMailDetails.userName))}`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: (`txt-${__VLS_ctx.getTextColor(__VLS_ctx.getUserText(__VLS_ctx.mailState.currentMailDetails.userName))}`) },
        });
        (__VLS_ctx.getUserText(__VLS_ctx.mailState.currentMailDetails.userName));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-subtitle" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-subtitle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.mailState.currentMailDetails.userName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "onhover-dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['onhover-dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn p-0 dropdown-button" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-button']} */ ;
    let __VLS_30;
    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
    vueFeather;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
        type: ('chevron-down'),
    }));
    const __VLS_32 = __VLS_31({
        type: ('chevron-down'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "inbox-security onhover-show-div" },
    });
    /** @type {__VLS_StyleScopedClasses['inbox-security']} */ ;
    /** @type {__VLS_StyleScopedClasses['onhover-show-div']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.mailState.currentMailDetails.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.mailState.currentMailDetails.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.mailState.currentMailDetails.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.mailState.currentMailDetails.emailTitle);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "inbox-options" },
    });
    /** @type {__VLS_StyleScopedClasses['inbox-options']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    if (__VLS_ctx.mailState.currentMailDetails.date) {
        (__VLS_ctx.mailState.currentMailDetails.date);
        (__VLS_ctx.mailState.currentMailDetails.time);
    }
    else {
        (__VLS_ctx.mailState.currentMailDetails.time);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.mailState.currentMailDetails))
                    throw 0;
                return (__VLS_ctx.addToFavorite(__VLS_ctx.mailState.currentMailDetails));
                // @ts-ignore
                [mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, mailState, vTooltip, vTooltip, vTooltip, vTooltip, vTooltip, getImages, getTextColor, getTextColor, getUserText, getUserText, getUserText, addToFavorite,];
            } },
        ...{ class: "light-square" },
    });
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    let __VLS_35;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
        icon: ('fill-star'),
        ...{ class: ('important-mail ' + (__VLS_ctx.mailState.currentMailDetails.isFavorite ? 'active' : '')) },
    }));
    const __VLS_37 = __VLS_36({
        icon: ('fill-star'),
        ...{ class: ('important-mail ' + (__VLS_ctx.mailState.currentMailDetails.isFavorite ? 'active' : '')) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.mailState.currentMailDetails))
                    throw 0;
                return (__VLS_ctx.print());
                // @ts-ignore
                [mailState, print,];
            } },
        type: "button",
        ...{ class: "light-square" },
    });
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    let __VLS_40;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
        icon: ('print'),
    }));
    const __VLS_42 = __VLS_41({
        icon: ('print'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "light-square btn-group" },
    });
    /** @type {__VLS_StyleScopedClasses['light-square']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-toggle" },
        role: "main",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
    let __VLS_45;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
        icon: ('menubar'),
    }));
    const __VLS_47 = __VLS_46({
        icon: ('menubar'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-block" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa fa-mail-reply" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-mail-reply']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa fa-mail-forward" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-mail-forward']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-body" },
    });
    /** @type {__VLS_StyleScopedClasses['user-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.mailState.currentMailDetails.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mail-subcontent" },
    });
    /** @type {__VLS_StyleScopedClasses['mail-subcontent']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "user-footer" },
    });
    /** @type {__VLS_StyleScopedClasses['user-footer']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    let __VLS_50;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
        icon: ('attchment'),
    }));
    const __VLS_52 = __VLS_51({
        icon: ('attchment'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-inline-block" },
    });
    /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "attachment-file common-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['attachment-file']} */ ;
    /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-flex align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (`${__VLS_ctx.getImages('email-template/pdfs.png')}`),
        alt: "pdf",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa fa-download f-light" },
    });
    /** @type {__VLS_StyleScopedClasses['fa']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-download']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-light']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "toolbar-box" },
    });
    /** @type {__VLS_StyleScopedClasses['toolbar-box']} */ ;
    if (__VLS_ctx.editor) {
        let __VLS_55;
        /** @ts-ignore @type { | typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor | typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor} */
        ckeditor;
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
            editor: (__VLS_ctx.editor),
        }));
        const __VLS_57 = __VLS_56({
            editor: (__VLS_ctx.editor),
        }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "send-btn" },
    });
    /** @type {__VLS_StyleScopedClasses['send-btn']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-primary" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-paper-plane" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-paper-plane']} */ ;
}
// @ts-ignore
[mailState, getImages, editor, editor,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
