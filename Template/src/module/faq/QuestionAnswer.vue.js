import { ref } from 'vue';
import { faqQuestionAnswer } from '@/core/data/faq';
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
for (const [items] of __VLS_vFor((__VLS_ctx.faqQuestionAnswer))) {
    (items.id);
    if (items.headerTitle) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "faq-title" },
        });
        /** @type {__VLS_StyleScopedClasses['faq-title']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
        (items.headerTitle);
    }
    for (const [item] of __VLS_vFor((items.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card" },
            key: (item.id),
        });
        /** @type {__VLS_StyleScopedClasses['card']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-header" },
        });
        /** @type {__VLS_StyleScopedClasses['card-header']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.toggleAccordion(item.id);
                    // @ts-ignore
                    [faqQuestionAnswer, toggleAccordion,];
                } },
            ...{ class: "btn btn-link collapsed ps-0" },
            'aria-expanded': (__VLS_ctx.visibleAccordion !== item.id ? false : true),
            ...{ class: ({ collapsed: __VLS_ctx.visibleAccordion !== item.id }) },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-link']} */ ;
        /** @type {__VLS_StyleScopedClasses['collapsed']} */ ;
        /** @type {__VLS_StyleScopedClasses['ps-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['collapsed']} */ ;
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            type: ('help-circle'),
        }));
        const __VLS_2 = __VLS_1({
            type: ('help-circle'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        (item.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "collapse" },
            ...{ class: ({ show: __VLS_ctx.visibleAccordion === item.id }) },
        });
        /** @type {__VLS_StyleScopedClasses['collapse']} */ ;
        /** @type {__VLS_StyleScopedClasses['show']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-body" },
        });
        /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
        (item.description);
        // @ts-ignore
        [visibleAccordion, visibleAccordion, visibleAccordion,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
