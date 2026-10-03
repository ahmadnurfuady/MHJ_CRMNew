import { ref, defineAsyncComponent } from 'vue';
import { list } from '@/core/data/bonusUI/draggableCard';
const BasicCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/BasicCard.vue'));
const FlatCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/FlatCard.vue'));
const NoShadowCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/NoShadowCard.vue'));
const IconHeading = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/IconHeading.vue'));
const DarkCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/DarkCard.vue'));
const InfoCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/InfoCard.vue'));
const infoCard = ref([...list]);
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
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.BasicCard} */
BasicCard;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.FlatCard} */
FlatCard;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.NoShadowCard} */
NoShadowCard;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.IconHeading} */
IconHeading;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.DarkCard} */
DarkCard;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
for (const [details, index] of __VLS_vFor((__VLS_ctx.infoCard.slice(3, 6)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (index === __VLS_ctx.infoCard.length - 4 ? 'col-xl-4 col-12' : 'col-xl-4 col-sm-6') },
    });
    let __VLS_25;
    /** @ts-ignore @type { | typeof __VLS_components.InfoCard | typeof __VLS_components.InfoCard} */
    InfoCard;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
        details: (details),
    }));
    const __VLS_27 = __VLS_26({
        details: (details),
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    // @ts-ignore
    [infoCard, infoCard,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
