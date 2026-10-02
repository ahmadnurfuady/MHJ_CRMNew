import { ref, defineAsyncComponent } from 'vue';
import { iconAccordion } from '@/core/data/uiKits/accordion';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const visibleAccordion = ref(1);
function toggleAccordion(id) {
    visibleAccordion.value = id;
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
    headerTitle: ('With Icons Accordion'),
    border: (true),
    padding: (false),
    cardBodyClass: ('accordion-border icons-accordion'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('With Icons Accordion'),
    border: (true),
    padding: (false),
    cardBodyClass: ('accordion-border icons-accordion'),
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
    ...{ class: "accordion dark-accordion" },
    id: "accordionPanelsStayOpenExample",
});
/** @type {__VLS_StyleScopedClasses['accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-accordion']} */ ;
for (const [accordion] of __VLS_vFor((__VLS_ctx.iconAccordion))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "accordion-item" },
        key: (accordion.id),
    });
    /** @type {__VLS_StyleScopedClasses['accordion-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "accordion-header" },
        id: "panelsStayOpen-headingOne",
    });
    /** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(accordion.id);
                // @ts-ignore
                [iconAccordion, toggleAccordion,];
            } },
        ...{ class: "accordion-button collapsed gap-2 accordion-light-secondary active txt-secondary" },
        ...{ class: ({ collapsed: __VLS_ctx.visibleAccordion !== accordion.id }) },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['accordion-button']} */ ;
    /** @type {__VLS_StyleScopedClasses['collapsed']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['accordion-light-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['collapsed']} */ ;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        type: (accordion.icon),
        ...{ class: ('svg-wrapper') },
    }));
    const __VLS_10 = __VLS_9({
        type: (accordion.icon),
        ...{ class: ('svg-wrapper') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    /** @type {__VLS_StyleScopedClasses['svg-wrapper']} */ ;
    (accordion.title);
    let __VLS_13;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        type: ('chevron-down'),
        ...{ class: ('svg-color') },
    }));
    const __VLS_15 = __VLS_14({
        type: ('chevron-down'),
        ...{ class: ('svg-color') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
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
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (accordion.description) }, null, null);
    /** @type {__VLS_StyleScopedClasses['accordion-body']} */ ;
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
