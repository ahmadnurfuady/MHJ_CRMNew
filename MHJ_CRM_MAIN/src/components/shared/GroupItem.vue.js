import { getUserText, getTextColor, getImages } from '@/utils/index';
const props = withDefaults(defineProps(), {
    class: '',
    imgClass: '',
    showItems: 4,
});
const __VLS_defaults = {
    class: '',
    imgClass: '',
    showItems: 4,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.items) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: (props.class) },
    });
    for (const [item, index] of __VLS_vFor((props.items.slice(0, props.showItems)))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        if (item && item.profile) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                ...{ class: "d-inline-block" },
                title: (item.name || ''),
            });
            __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
            /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "img-30 rounded-circle" },
                ...{ class: (__VLS_ctx.imgClass) },
                src: (__VLS_ctx.getImages(item.profile)),
                alt: "user",
            });
            /** @type {__VLS_StyleScopedClasses['img-30']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        }
        else if (item.name && !item.profile) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                ...{ class: "d-inline-block" },
                title: (item.name || ''),
            });
            __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
            /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: (`common-circle bg-lighter-${__VLS_ctx.getTextColor(__VLS_ctx.getUserText(item.name))}`) },
            });
            (__VLS_ctx.getUserText(item.name, 'singleText'));
        }
        else if (!item.name && item.profile) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                ...{ class: "d-inline-block" },
            });
            /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "rounded-circle" },
                ...{ class: (__VLS_ctx.imgClass) },
                src: (__VLS_ctx.getImages(item.profile)),
                alt: "user",
            });
            /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        }
        // @ts-ignore
        [vTooltip, vTooltip, imgClass, imgClass, getImages, getImages, getTextColor, getUserText, getUserText,];
    }
    if (props.items.length > props.showItems) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "d-inline-block" },
            title: ((props.items.length - props.showItems).toString() + '+ More'),
        });
        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
        /** @type {__VLS_StyleScopedClasses['d-inline-block']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "bg-lighter-dark common-circle" },
        });
        /** @type {__VLS_StyleScopedClasses['bg-lighter-dark']} */ ;
        /** @type {__VLS_StyleScopedClasses['common-circle']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "f-w-500" },
        });
        /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
        (props.items.length - props.showItems);
    }
}
// @ts-ignore
[vTooltip,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
