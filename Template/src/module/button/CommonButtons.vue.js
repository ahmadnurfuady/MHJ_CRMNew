import { defineAsyncComponent } from 'vue';
import { commonButtons } from '@/core/data/buttons';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
for (const [item] of __VLS_vFor((__VLS_ctx.commonButtons))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-6" },
        key: (item.id),
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        headerTitle: (item.headTitle),
        border: (true),
        padding: (false),
        cardBodyClass: (item.bodyClass),
    }));
    const __VLS_2 = __VLS_1({
        headerTitle: (item.headTitle),
        border: (true),
        padding: (false),
        cardBodyClass: (item.bodyClass),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    {
        const { header5: __VLS_6 } = __VLS_3.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "f-m-light mt-1" },
            innerHTML: (item.description),
        });
        /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        // @ts-ignore
        [commonButtons,];
    }
    for (const [button] of __VLS_vFor((item.items))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "btn" },
            ...{ class: (button.class) },
            key: (button.class),
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        if (button.icon) {
            let __VLS_7;
            /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
            vueFeather;
            // @ts-ignore
            const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
                type: (button.icon),
            }));
            const __VLS_9 = __VLS_8({
                type: (button.icon),
            }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        }
        if (button.text) {
            (button.text);
        }
        if (button.simpleIcon) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                ...{ class: (button.simpleIcon) },
            });
        }
        if (button.title) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
            (button.title);
        }
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_3;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
