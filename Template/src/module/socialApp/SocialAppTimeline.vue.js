import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
import { userPost } from '@/core/data/socialApp';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SocialAppLeftPanel = defineAsyncComponent(() => import('@/module/socialApp/SocialAppLeftPanel.vue'));
const SocialAppRightPanel = defineAsyncComponent(() => import('@/module/socialApp/SocialAppRightPanel.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 xl-40 col-lg-6 col-md-5 box-col-4" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-40']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-5']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-4']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.SocialAppLeftPanel} */
SocialAppLeftPanel;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6 xl-60 col-lg-6 col-md-7 box-col-8e" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-60']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-7']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-8e']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
for (const [post, index] of __VLS_vFor((__VLS_ctx.userPost))) {
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        key: (index),
    }));
    const __VLS_7 = __VLS_6({
        key: (index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const { default: __VLS_10 } = __VLS_8.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "new-users-social" },
    });
    /** @type {__VLS_StyleScopedClasses['new-users-social']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "rounded-circle image-radius m-r-15" },
        src: (__VLS_ctx.getImages(post.userProfile)),
        alt: (post.userName),
    });
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    /** @type {__VLS_StyleScopedClasses['image-radius']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-15']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (post.userName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (post.postDate);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "pull-right mt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
    vueFeather;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        type: ('more-vertical'),
    }));
    const __VLS_13 = __VLS_12({
        type: ('more-vertical'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        alt: "post",
        src: (__VLS_ctx.getImages(post.postImage)),
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "timeline-content" },
    });
    /** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (post.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "like-content" },
    });
    /** @type {__VLS_StyleScopedClasses['like-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-heart font-danger" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-heart']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-danger']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "pull-right comment-number" },
    });
    /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
    /** @type {__VLS_StyleScopedClasses['comment-number']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (post.comment);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-share-nodes" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-share-nodes']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "pull-right comment-number" },
    });
    /** @type {__VLS_StyleScopedClasses['pull-right']} */ ;
    /** @type {__VLS_StyleScopedClasses['comment-number']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (post.share);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-regular fa-comments" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-comments']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "social-chat" },
    });
    /** @type {__VLS_StyleScopedClasses['social-chat']} */ ;
    for (const [comment, index] of __VLS_vFor((post.comments))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (comment.isReply ? 'other-msg' : 'your-msg') },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-50 img-fluid m-r-20 rounded-circle" },
            alt: (comment.userName),
            src: (__VLS_ctx.getImages(comment.userProfile)),
        });
        /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex-grow-1" },
        });
        /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "f-w-500" },
        });
        /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
        (comment.userName);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (comment.time);
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-reply font-primary" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-reply']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-primary']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (comment.comment);
        // @ts-ignore
        [userPost, getImages, getImages, getImages,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "comments-box" },
    });
    /** @type {__VLS_StyleScopedClasses['comments-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-50 img-fluid m-r-20 rounded-circle" },
        alt: "user",
        src: (__VLS_ctx.getImages('user/1.jpg')),
    });
    /** @type {__VLS_StyleScopedClasses['img-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "input-group text-box" },
    });
    /** @type {__VLS_StyleScopedClasses['input-group']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-control input-txt-bx" },
        type: "text",
        name: "message-to-send",
        placeholder: "Post your comments",
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-txt-bx']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "input-group-append" },
    });
    /** @type {__VLS_StyleScopedClasses['input-group-append']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-transparent" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-transparent']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-regular fa-face-smile" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-face-smile']} */ ;
    // @ts-ignore
    [getImages,];
    var __VLS_8;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 xl-100 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['xl-100']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.SocialAppRightPanel} */
SocialAppRightPanel;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
