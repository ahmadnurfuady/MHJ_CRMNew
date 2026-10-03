import { ref, defineAsyncComponent } from 'vue';
import { stepProgressBar } from '@/core/data/uiKits/progressBar';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const activeStep = ref(2);
function handleStep(index) {
    activeStep.value = index;
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
    headerTitle: ('Step Progressbar'),
    border: (true),
    padding: (false),
    cardBodyClass: ('progress-showcase step-progress-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Step Progressbar'),
    border: (true),
    padding: (false),
    cardBodyClass: ('progress-showcase step-progress-wrapper'),
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
    ...{ class: "step-progress-box" },
});
/** @type {__VLS_StyleScopedClasses['step-progress-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
for (const [step, index] of __VLS_vFor((__VLS_ctx.stepProgressBar))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        type: (step.icon),
        ...{ class: ('bookmark-search') },
    }));
    const __VLS_10 = __VLS_9({
        type: (step.icon),
        ...{ class: ('bookmark-search') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    /** @type {__VLS_StyleScopedClasses['bookmark-search']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleStep(index);
                // @ts-ignore
                [stepProgressBar, handleStep,];
            } },
        ...{ class: "p-step" },
        ...{ class: ([{ active: index <= __VLS_ctx.activeStep }, step.value]) },
    });
    /** @type {__VLS_StyleScopedClasses['p-step']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (index + 1);
    let __VLS_13;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        type: ('check'),
        ...{ class: ('bookmark-search') },
    }));
    const __VLS_15 = __VLS_14({
        type: ('check'),
        ...{ class: ('bookmark-search') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    /** @type {__VLS_StyleScopedClasses['bookmark-search']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (step.title);
    // @ts-ignore
    [activeStep,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
