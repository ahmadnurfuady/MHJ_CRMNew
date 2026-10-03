import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.details) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
    Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        headerTitle: (props.details.heading),
        border: (true),
        padding: (false),
        headerClass: ('txt-light'),
        header: (props.details.bgColor),
        cardClass: ('card-absolute'),
    }));
    const __VLS_2 = __VLS_1({
        headerTitle: (props.details.heading),
        border: (true),
        padding: (false),
        headerClass: ('txt-light'),
        header: (props.details.bgColor),
        cardClass: ('card-absolute'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5 = {};
    const { default: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex list-behavior-1 align-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-behavior-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "tab-img img-fluid" },
        src: (__VLS_ctx.getImages(props.details.image)),
        alt: "home",
    });
    /** @type {__VLS_StyleScopedClasses['tab-img']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-xl-0 mb-sm-4" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (props.details.text) }, null, null);
    /** @type {__VLS_StyleScopedClasses['mb-xl-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-sm-4']} */ ;
    // @ts-ignore
    [getImages,];
    var __VLS_3;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
