import { ref, defineAsyncComponent, onMounted, onBeforeUnmount } from 'vue';
import { animationValues } from '@/core/data/animation';
import { initSelectField } from '@/core/data/common';
import { getImages, titleCase } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const animated = ref(false);
const animation = ref('bounceIn');
const animation_value = ref(initSelectField());
let animationTimer = null;
onMounted(() => {
    animation_value.value = {
        selectedItems: [],
        selected: { label: titleCase(animation.value), value: animation.value },
        data: animation.value,
        errorMessage: '',
        type: 'dropdown',
    };
});
onBeforeUnmount(() => {
    if (animationTimer) {
        clearTimeout(animationTimer);
    }
});
function handlePosition(value) {
    if (value) {
        animation.value = value.data;
    }
}
function animate() {
    if (animationTimer) {
        clearTimeout(animationTimer);
    }
    animated.value = false;
    void animated.value;
    animated.value = true;
    animationTimer = window.setTimeout(() => {
        animated.value = false;
        animationTimer = null;
    }, 500);
}
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
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('animate-wrapper'),
    border: (false),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('animate-wrapper'),
    border: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6 col-md-8 offset-xl-3 offset-md-2" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-8']} */ ;
/** @type {__VLS_StyleScopedClasses['offset-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['offset-md-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "animation-box",
    ...{ class: (__VLS_ctx.animated && __VLS_ctx.animation ? 'animated' + ' ' + __VLS_ctx.animation : '') },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "animate-widget" },
});
/** @type {__VLS_StyleScopedClasses['animate-widget']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "img-fluid" },
    src: (__VLS_ctx.getImages('banner/3.jpg')),
    alt: "banner",
});
/** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center p-25" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-25']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-muted mb-0" },
});
/** @type {__VLS_StyleScopedClasses['text-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "theme-form text-center" },
});
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.animation_value),
    options: (__VLS_ctx.animationValues),
    required: (false),
    showOptions: (true),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onUpdate:modelValue': {} },
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select Value'),
    modelValue: (__VLS_ctx.animation_value),
    options: (__VLS_ctx.animationValues),
    required: (false),
    showOptions: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = {
    /** @type {typeof __VLS_11.'update:modelValue'} */
    'onUpdate:modelValue': (...[$event]) => {
        return (__VLS_ctx.handlePosition($event));
        // @ts-ignore
        [animated, animation, animation, getImages, animation_value, animationValues, handlePosition,];
    },
};
var __VLS_9;
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.animate());
            // @ts-ignore
            [animate,];
        } },
    ...{ class: "js-triggeraNimation btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['js-triggeraNimation']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// @ts-ignore
[];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    headerTitle: ('How to use it?'),
    border: (true),
    padding: (false),
    cardBodyClass: ('options'),
}));
const __VLS_15 = __VLS_14({
    headerTitle: ('How to use it?'),
    border: (true),
    padding: (false),
    cardBodyClass: ('options'),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
{
    const { header5: __VLS_19 } = __VLS_16.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    // @ts-ignore
    [];
}
for (const [list] of __VLS_vFor((__VLS_ctx.animationValues))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (list.value),
    });
    for (const [item] of __VLS_vFor((list.data))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (item.value),
        });
        (item.label);
        // @ts-ignore
        [animationValues,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_16;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
