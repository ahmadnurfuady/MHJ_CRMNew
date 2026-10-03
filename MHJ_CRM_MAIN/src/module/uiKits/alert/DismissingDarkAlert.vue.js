import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Dismissing Dark Alert'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Dismissing Dark Alert'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "alert alert-dark dark alert-dismissible fade show" },
    role: "alert",
});
/** @type {__VLS_StyleScopedClasses['alert']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['dark']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-dismissible']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    type: ('heart'),
}));
const __VLS_10 = __VLS_9({
    type: ('heart'),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "txt-light" },
});
/** @type {__VLS_StyleScopedClasses['txt-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "alert-link txt-light" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['alert-link']} */ ;
/** @type {__VLS_StyleScopedClasses['txt-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn-close" },
    type: "button",
    'data-bs-dismiss': "alert",
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
