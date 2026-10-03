import { ref, defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const alerts = ref(Array.from({ length: 0 }, (_, index) => index));
function addAlert() {
    alerts.value.push(alerts.value.length + 1);
}
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
    headerTitle: ('Live Alert'),
    border: (true),
    padding: (false),
    cardBodyClass: ('live-dark'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Live Alert'),
    border: (true),
    padding: (false),
    cardBodyClass: ('live-dark'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
}
for (const [item, index] of __VLS_vFor((__VLS_ctx.alerts))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "alert alert-light-dark txt-dark mb-3 alert-dismissible" },
        role: "alert",
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['alert']} */ ;
    /** @type {__VLS_StyleScopedClasses['alert-light-dark']} */ ;
    /** @type {__VLS_StyleScopedClasses['txt-dark']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['alert-dismissible']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        type: "button",
        ...{ class: "btn-close" },
        'data-bs-dismiss': "alert",
        'aria-label': "Close",
    });
    /** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
    // @ts-ignore
    [alerts,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.addAlert();
            // @ts-ignore
            [addAlert,];
        } },
    ...{ class: "btn btn-dark" },
    id: "liveAlertBtn",
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-dark']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
