import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('SVG\'s Tooltip'),
    border: (true),
    padding: (false),
    cardBodyClass: ('svg-tooltip'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('SVG\'s Tooltip'),
    border: (true),
    padding: (false),
    cardBodyClass: ('svg-tooltip'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-light-info" },
    title: ('Notification'),
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['bg-light-info']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    icon: ('email-box'),
    type: "default",
    ...{ class: ('stroke-info') },
}));
const __VLS_10 = __VLS_9({
    icon: ('email-box'),
    type: "default",
    ...{ class: ('stroke-info') },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['stroke-info']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-light-danger" },
    type: "default",
    title: ('Like'),
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['bg-light-danger']} */ ;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    icon: ('stroke-bookmark'),
    ...{ class: ('stroke-danger') },
}));
const __VLS_15 = __VLS_14({
    icon: ('stroke-bookmark'),
    ...{ class: ('stroke-danger') },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {__VLS_StyleScopedClasses['stroke-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-light-dark" },
    type: "default",
    title: ('Comment'),
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['bg-light-dark']} */ ;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    icon: ('stroke-msg'),
    ...{ class: ('stroke-dark') },
}));
const __VLS_20 = __VLS_19({
    icon: ('stroke-msg'),
    ...{ class: ('stroke-dark') },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
/** @type {__VLS_StyleScopedClasses['stroke-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-light-primary" },
    type: "default",
    title: ('Share'),
});
__VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
/** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
let __VLS_23;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    icon: ('stroke-button'),
    ...{ class: ('stroke-primary') },
}));
const __VLS_25 = __VLS_24({
    icon: ('stroke-button'),
    ...{ class: ('stroke-primary') },
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
/** @type {__VLS_StyleScopedClasses['stroke-primary']} */ ;
// @ts-ignore
[vTooltip, vTooltip, vTooltip, vTooltip,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
