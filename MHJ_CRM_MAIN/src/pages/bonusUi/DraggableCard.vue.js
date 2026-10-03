import { ref } from 'vue';
import { list } from '@/core/data/bonusUI/draggableCard';
const cards = ref(list);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.draggable | typeof __VLS_components.Draggable | typeof __VLS_components.draggable | typeof __VLS_components.Draggable} */
draggable;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.cards),
    group: ({ name: 'nested', pull: false, put: false }),
    itemKey: "id",
    tag: "div",
    componentData: ({ class: 'row' }),
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.cards),
    group: ({ name: 'nested', pull: false, put: false }),
    itemKey: "id",
    tag: "div",
    componentData: ({ class: 'row' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { item: __VLS_6 } = __VLS_3.slots;
    const [{ element }] = __VLS_vSlot(__VLS_6);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-4 col-md-6" },
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`card height-equal ${element.cardClass}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`card-header ${element.cardHeaderClass}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: (`${element.headingClass}`) },
    });
    (element.title);
    if (element.cardType == 'simple') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "mt-1 f-m-light" },
        });
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`card-body ${element.cardBodyClass}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: (`list-group ${element.class}`) },
    });
    for (const [item, index] of __VLS_vFor((element.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        if (item.list) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
                ...{ class: "list-group-item" },
                ...{ class: ({ 'active bg-warning-light': item.active }) },
            });
            /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
            /** @type {__VLS_StyleScopedClasses['active']} */ ;
            /** @type {__VLS_StyleScopedClasses['bg-warning-light']} */ ;
            if (item.icon) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                    ...{ class: (`icofont icofont-${item.icon}`) },
                });
            }
            else {
                __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                    ...{ class: "icofont icofont-arrow-right" },
                });
                /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
                /** @type {__VLS_StyleScopedClasses['icofont-arrow-right']} */ ;
            }
            (item.name);
        }
        // @ts-ignore
        [cards,];
    }
    for (const [item, index] of __VLS_vFor((element.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        if (element.cardType == 'classic') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
                ...{ class: (`pb-2 ${item.titleClass}`) },
            });
            (item.title);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: (`mb-0 c-light ${item.descriptionClass}`) },
            });
            (item.description);
        }
        // @ts-ignore
        [];
    }
    if (element.cardType == 'classic') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`card-footer ${element.cardFooterClass}`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
            ...{ class: (`mb-0 text-end ${element.footerClass}`) },
        });
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
