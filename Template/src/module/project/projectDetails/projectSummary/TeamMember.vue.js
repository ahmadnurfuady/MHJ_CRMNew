import { ref, defineAsyncComponent } from 'vue';
import { projectDetails } from '@/core/data/project';
import { getImages } from '@/utils/index';
import { routes } from '@/router/routes';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const teamMembers = ref(projectDetails.projectSummary.teamMembers);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardType: ('classic'),
    headerTitle: ('Team Members'),
    sortDescription: ('Total 205 Members'),
    cardBodyClass: ('pt-0 invite-member'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Chat.PrivateChat),
}));
const __VLS_2 = __VLS_1({
    cardType: ('classic'),
    headerTitle: ('Team Members'),
    sortDescription: ('Total 205 Members'),
    cardBodyClass: ('pt-0 invite-member'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.Chat.PrivateChat),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
for (const [member, index] of __VLS_vFor((__VLS_ctx.teamMembers))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "common-align gap-2" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "img-fluid" },
        src: (__VLS_ctx.getImages(member.image)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (member.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (member.email);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    let __VLS_7;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: ('view-member'),
        type: "default",
        title: "View",
    }));
    const __VLS_9 = __VLS_8({
        icon: ('view-member'),
        type: "default",
        title: "View",
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    let __VLS_12;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        icon: ('stroke-note'),
        type: "default",
        title: "Chat",
    }));
    const __VLS_14 = __VLS_13({
        icon: ('stroke-note'),
        type: "default",
        title: "Chat",
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
    // @ts-ignore
    [routes, teamMembers, getImages, vTooltip, vTooltip,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
