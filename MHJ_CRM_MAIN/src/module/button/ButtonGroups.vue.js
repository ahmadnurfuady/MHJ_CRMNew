import { defineAsyncComponent } from 'vue';
import { buttonGroups } from '@/core/data/buttons';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Button Groups'),
    border: (true),
    padding: (false),
    cardBodyClass: ('btn-groups'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Button Groups'),
    border: (true),
    padding: (false),
    cardBodyClass: ('btn-groups'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { header5: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.buttonGroups))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xxl-4 col-md-6 box-col-6" },
        key: (item.id),
    });
    /** @type {__VLS_StyleScopedClasses['col-xxl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['box-col-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-wrapper border rounded-3 h-100" },
    });
    /** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-100']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "sub-title fw-bold" },
    });
    /** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
    /** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
    (item.headTitle);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (item.class) },
    });
    for (const [group] of __VLS_vFor((item.item))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (group.class) },
            key: (group.class),
            role: "group",
            'aria-label': "Basic example",
        });
        for (const [button] of __VLS_vFor((group.button))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ class: "btn" },
                ...{ class: (button.class) },
                type: "button",
                key: (button.class),
            });
            /** @type {__VLS_StyleScopedClasses['btn']} */ ;
            if (button.text) {
                (button.text);
            }
            if (button.icon) {
                let __VLS_7;
                /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
                vueFeather;
                // @ts-ignore
                const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
                    type: (button.icon),
                }));
                const __VLS_9 = __VLS_8({
                    type: (button.icon),
                }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            }
            // @ts-ignore
            [buttonGroups,];
        }
        // @ts-ignore
        [];
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
