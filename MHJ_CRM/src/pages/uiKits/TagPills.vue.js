import { defineAsyncComponent } from 'vue';
import { badgeIcons } from '@/core/data/uiKits/badge';
import { colorsTwo } from '@/core/data/uiKits/helperClasses';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const VariationBadges = defineAsyncComponent(() => import('@/module/uiKits/tagPills/VariationBadges.vue'));
const BadgeHeadings = defineAsyncComponent(() => import('@/module/uiKits/tagPills/BadgeHeadings.vue'));
const PositionedBadges = defineAsyncComponent(() => import('@/module/uiKits/tagPills/PositionedBadges.vue'));
const ButtonBadges = defineAsyncComponent(() => import('@/module/uiKits/tagPills/ButtonBadges.vue'));
const badgeColors = colorsTwo;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row ng-tag-pills" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['ng-tag-pills']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Badges Contextual Variations'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Badges Contextual Variations'),
    border: (true),
    padding: (false),
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
}
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.VariationBadges} */
VariationBadges;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    badgeDetails: (__VLS_ctx.badgeColors),
}));
const __VLS_9 = __VLS_8({
    badgeDetails: (__VLS_ctx.badgeColors),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[badgeColors,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    headerTitle: ('Pill Contextual Variations'),
    border: (true),
    padding: (false),
}));
const __VLS_14 = __VLS_13({
    headerTitle: ('Pill Contextual Variations'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
{
    const { header5: __VLS_18 } = __VLS_15.slots;
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
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.VariationBadges} */
VariationBadges;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    badgeDetails: (__VLS_ctx.badgeColors),
    rounded: (true),
}));
const __VLS_21 = __VLS_20({
    badgeDetails: (__VLS_ctx.badgeColors),
    rounded: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
// @ts-ignore
[badgeColors,];
var __VLS_15;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    headerTitle: ('Number of Badges'),
    border: (true),
    padding: (false),
}));
const __VLS_26 = __VLS_25({
    headerTitle: ('Number of Badges'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const { default: __VLS_29 } = __VLS_27.slots;
{
    const { header5: __VLS_30 } = __VLS_27.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
let __VLS_31;
/** @ts-ignore @type {typeof __VLS_components.VariationBadges} */
VariationBadges;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('number'),
}));
const __VLS_33 = __VLS_32({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('number'),
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
// @ts-ignore
[badgeColors,];
var __VLS_27;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    headerTitle: ('Number of Pill Badges'),
    border: (true),
    padding: (false),
}));
const __VLS_38 = __VLS_37({
    headerTitle: ('Number of Pill Badges'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const { default: __VLS_41 } = __VLS_39.slots;
{
    const { header5: __VLS_42 } = __VLS_39.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
let __VLS_43;
/** @ts-ignore @type {typeof __VLS_components.VariationBadges} */
VariationBadges;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('number'),
    rounded: (true),
}));
const __VLS_45 = __VLS_44({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('number'),
    rounded: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
// @ts-ignore
[badgeColors,];
var __VLS_39;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({
    headerTitle: ('Badge Tag with Icons'),
    border: (true),
    padding: (false),
}));
const __VLS_50 = __VLS_49({
    headerTitle: ('Badge Tag with Icons'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
{
    const { header5: __VLS_54 } = __VLS_51.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.VariationBadges} */
VariationBadges;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('icon'),
    badgeIcons: (__VLS_ctx.badgeIcons),
}));
const __VLS_57 = __VLS_56({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('icon'),
    badgeIcons: (__VLS_ctx.badgeIcons),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
// @ts-ignore
[badgeColors, badgeIcons,];
var __VLS_51;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({
    headerTitle: ('Rounded Pills with Icons'),
    border: (true),
    padding: (false),
}));
const __VLS_62 = __VLS_61({
    headerTitle: ('Rounded Pills with Icons'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const { default: __VLS_65 } = __VLS_63.slots;
{
    const { header5: __VLS_66 } = __VLS_63.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
let __VLS_67;
/** @ts-ignore @type {typeof __VLS_components.VariationBadges} */
VariationBadges;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('icon'),
    rounded: (true),
    badgeIcons: (__VLS_ctx.badgeIcons),
}));
const __VLS_69 = __VLS_68({
    badgeDetails: (__VLS_ctx.badgeColors),
    type: ('icon'),
    rounded: (true),
    badgeIcons: (__VLS_ctx.badgeIcons),
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
// @ts-ignore
[badgeColors, badgeIcons,];
var __VLS_63;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_72;
/** @ts-ignore @type {typeof __VLS_components.BadgeHeadings} */
BadgeHeadings;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({}));
const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_77;
/** @ts-ignore @type {typeof __VLS_components.PositionedBadges} */
PositionedBadges;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77({}));
const __VLS_79 = __VLS_78({}, ...__VLS_functionalComponentArgsRest(__VLS_78));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_82;
/** @ts-ignore @type {typeof __VLS_components.ButtonBadges} */
ButtonBadges;
// @ts-ignore
const __VLS_83 = __VLS_asFunctionalComponent1(__VLS_82, new __VLS_82({}));
const __VLS_84 = __VLS_83({}, ...__VLS_functionalComponentArgsRest(__VLS_83));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
