import { defineAsyncComponent } from 'vue';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.details) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        cardClass: ('widget-11 widget-hover'),
    }));
    const __VLS_2 = __VLS_1({
        cardClass: ('widget-11 widget-hover'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5 = {};
    const { default: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "common-align justify-content-start" },
    });
    /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-content-start']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`analytics-tread bg-light-${props.details.color}`) },
    });
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: (props.details.icon),
        ...{ class: (props.details.type && props.details.type == 'stroke'
                ? 'stroke-' + props.details.color
                : 'fill-' + props.details.color) },
    }));
    const __VLS_9 = __VLS_8({
        icon: (props.details.icon),
        ...{ class: (props.details.type && props.details.type == 'stroke'
                ? 'stroke-' + props.details.color
                : 'fill-' + props.details.color) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "c-o-light" },
    });
    /** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
    (props.details.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (props.details.value);
    var __VLS_3;
}
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
