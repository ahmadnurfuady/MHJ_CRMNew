import { ref, defineAsyncComponent } from 'vue';
import { offcanvasDetails } from '@/core/data/uiKits/offcanvas';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const OffcanvasProjectForm = defineAsyncComponent(() => import('@/module/uiKits/offcanvas/OffcanvasProjectForm.vue'));
const details = ref(offcanvasDetails.value);
function openScrolling() {
    details.value = {
        ...details.value,
        title: 'Offcanvas Body Scrolling',
        direction: 'start',
        backdrop: false,
    };
}
function openBackdropScrolling() {
    details.value = {
        ...details.value,
        title: 'Backdrop with Scrolling',
        direction: 'start',
    };
}
function openStatic() {
    details.value = {
        ...details.value,
        title: 'Static Offcanvas',
        direction: 'start',
        outsideClose: false,
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
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Offcanvas Variations'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex common-offcanvas'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Offcanvas Variations'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex common-offcanvas'),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openScrolling();
            // @ts-ignore
            [openScrolling,];
        } },
    ...{ class: "btn btn-info" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-info']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openBackdropScrolling();
            // @ts-ignore
            [openBackdropScrolling,];
        } },
    ...{ class: "btn btn-warning" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.openStatic();
            // @ts-ignore
            [openStatic,];
        } },
    ...{ class: "btn btn-info" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-info']} */ ;
if (__VLS_ctx.details.direction) {
    const __VLS_8 = (__VLS_ctx.OffcanvasProjectForm);
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
    const __VLS_14 = ({ closeOffcanvas: {} },
        { onCloseOffcanvas: (...[$event]) => {
                if (!(__VLS_ctx.details.direction))
                    return;
                __VLS_ctx.handleOffcanvas();
                // @ts-ignore
                [details, details, OffcanvasProjectForm, handleOffcanvas,];
            } });
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
