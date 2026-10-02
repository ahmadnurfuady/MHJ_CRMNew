import { defineAsyncComponent } from 'vue';
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
        headerTitle: (props.details.title),
        header: (props.details.cardHeaderClass),
        headerClass: (props.details.headingClass),
        border: (true),
        padding: (false),
        cardClass: ('height-equal'),
        cardBodyClass: (props.details.cardBodyClass),
    }));
    const __VLS_2 = __VLS_1({
        headerTitle: (props.details.title),
        header: (props.details.cardHeaderClass),
        headerClass: (props.details.headingClass),
        border: (true),
        padding: (false),
        cardClass: ('height-equal'),
        cardBodyClass: (props.details.cardBodyClass),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5 = {};
    const { default: __VLS_6 } = __VLS_3.slots;
    for (const [list, index] of __VLS_vFor((props.details.details))) {
        (index);
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: (`pb-2 ${list.titleClass}`) },
        });
        (list.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: (`mb-0 c-light ${list.descriptionClass}`) },
        });
        (list.description);
    }
    {
        const { details: __VLS_7 } = __VLS_3.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`card-footer ${props.details.cardFooterClass}`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: (`mb-0 text-end ${props.details.footerClass}`) },
        });
    }
    var __VLS_3;
}
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
