import { defineAsyncComponent } from 'vue';
import { colors } from '@/core/data/common';
import { titleCase } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Icons Switch'),
    cardClass: ('height-equal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex flex-column switch-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Icons Switch'),
    cardClass: ('height-equal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex flex-column switch-wrapper'),
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
}
for (const [item, index] of __VLS_vFor((__VLS_ctx.colors))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-end icon-state" },
    });
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-state']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "switch mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['switch']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "checkbox",
        checked: true,
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`switch-state bg-${item.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "col-form-label m-l-10" },
    });
    /** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-l-10']} */ ;
    (__VLS_ctx.titleCase(item.color));
    // @ts-ignore
    [colors, titleCase,];
}
// @ts-ignore
[];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    headerTitle: ('Uncheck Switch'),
    cardClass: ('height-equal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex flex-column switch-wrapper'),
}));
const __VLS_9 = __VLS_8({
    headerTitle: ('Uncheck Switch'),
    cardClass: ('height-equal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex flex-column switch-wrapper'),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
{
    const { header5: __VLS_13 } = __VLS_10.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
for (const [item, index] of __VLS_vFor((__VLS_ctx.colors))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-end" },
    });
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "switch mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['switch']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "checkbox",
        checked: true,
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`switch-state bg-${item.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "col-form-label m-l-10" },
    });
    /** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-l-10']} */ ;
    (__VLS_ctx.titleCase(item.color));
    // @ts-ignore
    [colors, titleCase,];
}
// @ts-ignore
[];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    headerTitle: ('Borders with Icons'),
    cardClass: ('height-equal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex flex-column switch-wrapper'),
}));
const __VLS_16 = __VLS_15({
    headerTitle: ('Borders with Icons'),
    cardClass: ('height-equal'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex flex-column switch-wrapper'),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_19 } = __VLS_17.slots;
{
    const { header5: __VLS_20 } = __VLS_17.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
for (const [item, index] of __VLS_vFor((__VLS_ctx.colors))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-end icon-state switch-outline" },
    });
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-state']} */ ;
    /** @type {__VLS_StyleScopedClasses['switch-outline']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "switch mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['switch']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "checkbox",
        checked: true,
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`switch-state bg-${item.color}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "col-form-label m-l-10" },
    });
    /** @type {__VLS_StyleScopedClasses['col-form-label']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-l-10']} */ ;
    (__VLS_ctx.titleCase(item.color));
    // @ts-ignore
    [colors, titleCase,];
}
// @ts-ignore
[];
var __VLS_17;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
