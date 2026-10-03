import { ref, defineAsyncComponent } from 'vue';
import { outlineAccordion } from '@/core/data/uiKits/accordion';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const visibleAccordion = ref(1);
function toggleAccordion(id) {
    visibleAccordion.value = visibleAccordion.value === id ? null : id;
}
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
    headerTitle: ('Outline Accordion'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Outline Accordion'),
    border: (true),
    padding: (false),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "accordion dark-accordion" },
    id: "accordionPanelsStayOpenExample",
});
/** @type {__VLS_StyleScopedClasses['accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-accordion']} */ ;
for (const [accordion] of __VLS_vFor((__VLS_ctx.outlineAccordion))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-item accordion-wrapper" },
        key: (accordion.id),
    });
    /** @type {__VLS_StyleScopedClasses['accordion-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['accordion-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "accordion-header" },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(accordion.id);
                // @ts-ignore
                [outlineAccordion, toggleAccordion,];
            } },
        ...{ class: "accordion-button accordion-light-primary txt-primary" },
        ...{ class: ({ collapsed: __VLS_ctx.visibleAccordion !== accordion.id }) },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['accordion-button']} */ ;
    /** @type {__VLS_StyleScopedClasses['accordion-light-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['collapsed']} */ ;
    (accordion.title);
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        type: ('chevron-down'),
        ...{ class: ('svg-color') },
    }));
    const __VLS_10 = __VLS_9({
        type: ('chevron-down'),
        ...{ class: ('svg-color') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    /** @type {__VLS_StyleScopedClasses['svg-color']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-collapse collapse" },
        ...{ class: ({ show: __VLS_ctx.visibleAccordion === accordion.id }) },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
    /** @type {__VLS_StyleScopedClasses['show']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-body" },
    });
    /** @type {__VLS_StyleScopedClasses['accordion-body']} */ ;
    (accordion.description);
    // @ts-ignore
    [visibleAccordion, visibleAccordion,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
