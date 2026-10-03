import { defineAsyncComponent } from 'vue';
import { colors } from '@/core/data/common';
import { additiveBorder, additiveRadius, borderRadiusClasses, borderTypes, borderWidth, colorsTwo, subtractiveBorder, } from '@/core/data/uiKits/helperClasses';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Border = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/Border.vue'));
const ExtendedBackgroundColors = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/ExtendedBackgroundColors.vue'));
const BorderColors = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/BorderColors.vue'));
const ImagesSizes = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/ImagesSizes.vue'));
const FontStyle = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/FontStyle.vue'));
const FontWeightClass = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/FontWeightClass.vue'));
const TextColorsClass = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/TextColorsClass.vue'));
const PaddingClass = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/PaddingClass.vue'));
const BorderType = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/BorderType.vue'));
const OneSidePaddingClass = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/OneSidePaddingClass.vue'));
const MarginClass = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/MarginClass.vue'));
const OneSideMarginClass = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/OneSideMarginClass.vue'));
const FontSize = defineAsyncComponent(() => import('@/module/uiKits/helperClasses/FontSize.vue'));
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
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Styled Borders'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Styled Borders'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 alert-light-light dark-helper" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-light']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-helper']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    title: ('Custom Border-radius Class'),
    details: (__VLS_ctx.borderRadiusClasses),
    ...{ class: ('helper-box bg-light border') },
}));
const __VLS_9 = __VLS_8({
    title: ('Custom Border-radius Class'),
    details: (__VLS_ctx.borderRadiusClasses),
    ...{ class: ('helper-box bg-light border') },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 alert-light-light dark-helper" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-light']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-helper']} */ ;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    title: ('Border Color'),
    details: (__VLS_ctx.colors),
    ...{ class: ('helper-box border border-') },
    color: (true),
}));
const __VLS_14 = __VLS_13({
    title: ('Border Color'),
    details: (__VLS_ctx.colors),
    ...{ class: ('helper-box border border-') },
    color: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 alert-light-light dark-helper" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-light']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-helper']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    title: ('Border Width'),
    details: (__VLS_ctx.borderWidth),
    ...{ class: ('helper-box border border-') },
}));
const __VLS_19 = __VLS_18({
    title: ('Border Width'),
    details: (__VLS_ctx.borderWidth),
    ...{ class: ('helper-box border border-') },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper alert-light-light h-100 dark-helper" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-light']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-helper']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Text Colors'),
    details: (__VLS_ctx.colors),
    ...{ class: ('helper-box helper-text border txt-') },
    text: (true),
}));
const __VLS_24 = __VLS_23({
    title: ('Text Colors'),
    details: (__VLS_ctx.colors),
    ...{ class: ('helper-box helper-text border txt-') },
    text: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['helper-text']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-']} */ ;
// @ts-ignore
[borderRadiusClasses, colors, colors, borderWidth,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_27;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    headerTitle: ('Variation of Borders and Displays'),
    border: (true),
    padding: (false),
}));
const __VLS_29 = __VLS_28({
    headerTitle: ('Variation of Borders and Displays'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
const { default: __VLS_32 } = __VLS_30.slots;
{
    const { header5: __VLS_33 } = __VLS_30.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 border" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
let __VLS_34;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent1(__VLS_34, new __VLS_34({
    title: ('Additive Border'),
    details: (__VLS_ctx.additiveBorder),
    ...{ class: ('helper-box bg-light') },
}));
const __VLS_36 = __VLS_35({
    title: ('Additive Border'),
    details: (__VLS_ctx.additiveBorder),
    ...{ class: ('helper-box bg-light') },
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 border subtract-border" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['subtract-border']} */ ;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    title: ('Subtractive Border'),
    details: (__VLS_ctx.subtractiveBorder),
    ...{ class: ('helper-box bg-light border') },
}));
const __VLS_41 = __VLS_40({
    title: ('Subtractive Border'),
    details: (__VLS_ctx.subtractiveBorder),
    ...{ class: ('helper-box bg-light border') },
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 border" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
let __VLS_44;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    title: ('Additive Radius'),
    details: (__VLS_ctx.additiveRadius),
    ...{ class: ('helper-radius radius-wrapper') },
}));
const __VLS_46 = __VLS_45({
    title: ('Additive Radius'),
    details: (__VLS_ctx.additiveRadius),
    ...{ class: ('helper-radius radius-wrapper') },
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
/** @type {__VLS_StyleScopedClasses['helper-radius']} */ ;
/** @type {__VLS_StyleScopedClasses['radius-wrapper']} */ ;
// @ts-ignore
[additiveBorder, subtractiveBorder, additiveRadius,];
var __VLS_30;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_49;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    headerTitle: ('Background Colors'),
    border: (true),
    padding: (false),
}));
const __VLS_51 = __VLS_50({
    headerTitle: ('Background Colors'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
const { default: __VLS_54 } = __VLS_52.slots;
{
    const { header5: __VLS_55 } = __VLS_52.slots;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 border" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
let __VLS_56;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
    title: ('Dark Backgrounds'),
    details: (__VLS_ctx.colorsTwo),
    ...{ class: ('helper-box bg-') },
    color: (true),
    backgroundColor: (true),
    helperText: ('bg'),
}));
const __VLS_58 = __VLS_57({
    title: ('Dark Backgrounds'),
    details: (__VLS_ctx.colorsTwo),
    ...{ class: ('helper-box bg-') },
    color: (true),
    backgroundColor: (true),
    helperText: ('bg'),
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 border" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
let __VLS_61;
/** @ts-ignore @type {typeof __VLS_components.Border | typeof __VLS_components.Border} */
Border;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    title: ('Light Backgrounds'),
    details: (__VLS_ctx.colorsTwo),
    ...{ class: ('helper-box alert-light-') },
    color: (true),
    backgroundColor: (true),
    helperText: ('alert-light'),
}));
const __VLS_63 = __VLS_62({
    title: ('Light Backgrounds'),
    details: (__VLS_ctx.colorsTwo),
    ...{ class: ('helper-box alert-light-') },
    color: (true),
    backgroundColor: (true),
    helperText: ('alert-light'),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
/** @type {__VLS_StyleScopedClasses['helper-box']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-light-']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-4 col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "border-wrapper h-100 border" },
});
/** @type {__VLS_StyleScopedClasses['border-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
let __VLS_66;
/** @ts-ignore @type {typeof __VLS_components.ExtendedBackgroundColors} */
ExtendedBackgroundColors;
// @ts-ignore
const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({}));
const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
// @ts-ignore
[colorsTwo, colorsTwo,];
var __VLS_52;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
let __VLS_71;
/** @ts-ignore @type {typeof __VLS_components.BorderColors} */
BorderColors;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent1(__VLS_71, new __VLS_71({}));
const __VLS_73 = __VLS_72({}, ...__VLS_functionalComponentArgsRest(__VLS_72));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_76;
/** @ts-ignore @type {typeof __VLS_components.ImagesSizes} */
ImagesSizes;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({}));
const __VLS_78 = __VLS_77({}, ...__VLS_functionalComponentArgsRest(__VLS_77));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-6']} */ ;
let __VLS_81;
/** @ts-ignore @type {typeof __VLS_components.FontStyle} */
FontStyle;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent1(__VLS_81, new __VLS_81({}));
const __VLS_83 = __VLS_82({}, ...__VLS_functionalComponentArgsRest(__VLS_82));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_86;
/** @ts-ignore @type {typeof __VLS_components.FontWeightClass} */
FontWeightClass;
// @ts-ignore
const __VLS_87 = __VLS_asFunctionalComponent1(__VLS_86, new __VLS_86({}));
const __VLS_88 = __VLS_87({}, ...__VLS_functionalComponentArgsRest(__VLS_87));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_91;
/** @ts-ignore @type {typeof __VLS_components.TextColorsClass} */
TextColorsClass;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({}));
const __VLS_93 = __VLS_92({}, ...__VLS_functionalComponentArgsRest(__VLS_92));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_96;
/** @ts-ignore @type {typeof __VLS_components.PaddingClass} */
PaddingClass;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({}));
const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
for (const [types, index] of __VLS_vFor((__VLS_ctx.borderTypes))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-3" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
    let __VLS_101;
    /** @ts-ignore @type {typeof __VLS_components.BorderType | typeof __VLS_components.BorderType} */
    BorderType;
    // @ts-ignore
    const __VLS_102 = __VLS_asFunctionalComponent1(__VLS_101, new __VLS_101({
        borderType: (types.type),
    }));
    const __VLS_103 = __VLS_102({
        borderType: (types.type),
    }, ...__VLS_functionalComponentArgsRest(__VLS_102));
    // @ts-ignore
    [borderTypes,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_106;
/** @ts-ignore @type {typeof __VLS_components.OneSidePaddingClass} */
OneSidePaddingClass;
// @ts-ignore
const __VLS_107 = __VLS_asFunctionalComponent1(__VLS_106, new __VLS_106({}));
const __VLS_108 = __VLS_107({}, ...__VLS_functionalComponentArgsRest(__VLS_107));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_111;
/** @ts-ignore @type {typeof __VLS_components.MarginClass} */
MarginClass;
// @ts-ignore
const __VLS_112 = __VLS_asFunctionalComponent1(__VLS_111, new __VLS_111({}));
const __VLS_113 = __VLS_112({}, ...__VLS_functionalComponentArgsRest(__VLS_112));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_116;
/** @ts-ignore @type {typeof __VLS_components.OneSideMarginClass} */
OneSideMarginClass;
// @ts-ignore
const __VLS_117 = __VLS_asFunctionalComponent1(__VLS_116, new __VLS_116({}));
const __VLS_118 = __VLS_117({}, ...__VLS_functionalComponentArgsRest(__VLS_117));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
let __VLS_121;
/** @ts-ignore @type {typeof __VLS_components.FontSize} */
FontSize;
// @ts-ignore
const __VLS_122 = __VLS_asFunctionalComponent1(__VLS_121, new __VLS_121({}));
const __VLS_123 = __VLS_122({}, ...__VLS_functionalComponentArgsRest(__VLS_122));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
