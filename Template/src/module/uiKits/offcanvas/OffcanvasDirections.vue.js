import { ref, computed, defineAsyncComponent } from 'vue';
import { offcanvasDetails } from '@/core/data/uiKits/offcanvas';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const OffcanvasProjectForm = defineAsyncComponent(() => import('@/module/uiKits/offcanvas/OffcanvasProjectForm.vue'));
const OffcanvasUserForm = defineAsyncComponent(() => import('@/module/uiKits/offcanvas/OffcanvasUserForm.vue'));
const details = ref(offcanvasDetails.value);
const activeComponent = computed(() => {
    const direction = details.value.direction;
    if (direction === 'top' || direction === 'bottom')
        return OffcanvasUserForm;
    if (direction === 'start' || direction === 'end')
        return OffcanvasProjectForm;
    return null;
});
function openOffcanvas(direction) {
    details.value = {
        ...details.value,
        title: `Offcanvas ${direction.charAt(0).toUpperCase() + direction.slice(1)}`,
        direction,
    };
}
function handleOffcanvas() {
    details.value = offcanvasDetails.value;
}
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
    headerTitle: ('Offcanvas Directions'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex common-offcanvas'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Offcanvas Directions'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex common-offcanvas'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openOffcanvas('top'));
            // @ts-ignore
            [openOffcanvas,];
        } },
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openOffcanvas('end'));
            // @ts-ignore
            [openOffcanvas,];
        } },
    ...{ class: "btn btn-secondary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openOffcanvas('bottom'));
            // @ts-ignore
            [openOffcanvas,];
        } },
    ...{ class: "btn btn-dark" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-dark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.openOffcanvas('start'));
            // @ts-ignore
            [openOffcanvas,];
        } },
    ...{ class: "btn btn-success" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
if (__VLS_ctx.details.direction) {
    const __VLS_8 = (__VLS_ctx.activeComponent);
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        ...{ 'onCloseOffcanvas': {} },
        details: (__VLS_ctx.details),
    }));
    const __VLS_10 = __VLS_9({
        ...{ 'onCloseOffcanvas': {} },
        details: (__VLS_ctx.details),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_13;
    const __VLS_14 = {
        /** @type {typeof __VLS_13.closeOffcanvas} */
        onCloseOffcanvas: (...[$event]) => {
            if (!(__VLS_ctx.details.direction))
                throw 0;
            return (__VLS_ctx.handleOffcanvas());
            // @ts-ignore
            [details, details, activeComponent, handleOffcanvas,];
        },
    };
    var __VLS_11;
    var __VLS_12;
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
