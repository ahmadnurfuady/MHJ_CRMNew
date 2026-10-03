import { defineAsyncComponent } from 'vue';
import { verticalDashedDivider } from '@/core/data/uiKits/divider';
import { titleCase } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
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
    cardClass: ('height-equal'),
    headerTitle: ('Vertical Dashed Divider'),
    border: (true),
    padding: (false),
    cardBodyClass: ('main-divider'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    headerTitle: ('Vertical Dashed Divider'),
    border: (true),
    padding: (false),
    cardBodyClass: ('main-divider'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0 mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-sm-2 d-flex gy-4" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-sm-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gy-4']} */ ;
for (const [divider, index] of __VLS_vFor((__VLS_ctx.verticalDashedDivider))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-3 col-6" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "vertical-divider" },
    });
    /** @type {__VLS_StyleScopedClasses['vertical-divider']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`vertical-line bg-${divider.color}`) },
    });
    if (divider.icon) {
        let __VLS_8;
        /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
        SvgIcon;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            icon: (divider.icon),
            type: "default",
            ...{ class: ('my-2 ' + divider.icon_type + '-icon ' + divider.icon_type + '-' + divider.color) },
        }));
        const __VLS_10 = __VLS_9({
            icon: (divider.icon),
            type: "default",
            ...{ class: ('my-2 ' + divider.icon_type + '-icon ' + divider.icon_type + '-' + divider.color) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "my-2" },
            ...{ class: ([
                    {
                        border: divider.border,
                        'rounded-pill': divider.border && divider.rounded,
                    },
                    divider.border ? 'border-' + divider.color : 'txt-' + divider.color,
                ]) },
        });
        /** @type {__VLS_StyleScopedClasses['my-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['border']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-pill']} */ ;
        (__VLS_ctx.titleCase(divider.color));
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`vertical-line bg-${divider.color}`) },
    });
    // @ts-ignore
    [verticalDashedDivider, titleCase,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
