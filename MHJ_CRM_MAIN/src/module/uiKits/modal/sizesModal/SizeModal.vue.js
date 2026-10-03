import { defineAsyncComponent } from 'vue';
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'));
const props = withDefaults(defineProps(), {
    button: false,
});
const emits = defineEmits(['closeModal']);
function close() {
    emits('closeModal');
}
const __VLS_defaults = {
    button: false,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Modal | typeof __VLS_components.Modal} */
Modal;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onCloseModal': {} },
    title: (props.modalDetails?.title),
    sizeClass: (props.modalDetails?.sizeClass),
    modalOpen: (props.modalOpen),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onCloseModal': {} },
    title: (props.modalDetails?.title),
    sizeClass: (props.modalDetails?.sizeClass),
    modalOpen: (props.modalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.closeModal} */
    onCloseModal: (...[$event]) => {
        return (__VLS_ctx.close());
        // @ts-ignore
        [close,];
    },
};
var __VLS_7;
const { default: __VLS_8 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-body dark-modal" },
});
/** @type {__VLS_StyleScopedClasses['modal-body']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-modal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "large-modal-header" },
});
/** @type {__VLS_StyleScopedClasses['large-modal-header']} */ ;
let __VLS_9;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9({
    type: ('chevrons-right'),
}));
const __VLS_11 = __VLS_10({
    type: ('chevrons-right'),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "modal-padding-space" },
});
/** @type {__VLS_StyleScopedClasses['modal-padding-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "large-modal-header" },
});
/** @type {__VLS_StyleScopedClasses['large-modal-header']} */ ;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    type: ('chevrons-right'),
}));
const __VLS_16 = __VLS_15({
    type: ('chevrons-right'),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "modal-padding-space" },
});
/** @type {__VLS_StyleScopedClasses['modal-padding-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "large-modal-header" },
});
/** @type {__VLS_StyleScopedClasses['large-modal-header']} */ ;
let __VLS_19;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    type: ('chevrons-right'),
}));
const __VLS_21 = __VLS_20({
    type: ('chevrons-right'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "modal-padding-space" },
});
/** @type {__VLS_StyleScopedClasses['modal-padding-space']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "large-modal-header" },
});
/** @type {__VLS_StyleScopedClasses['large-modal-header']} */ ;
let __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    type: ('chevrons-right'),
}));
const __VLS_26 = __VLS_25({
    type: ('chevrons-right'),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "modal-padding-space" },
});
/** @type {__VLS_StyleScopedClasses['modal-padding-space']} */ ;
if (props.button) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "modal-footer" },
    });
    /** @type {__VLS_StyleScopedClasses['modal-footer']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(props.button))
                    throw 0;
                return (__VLS_ctx.close());
                // @ts-ignore
                [close,];
            } },
        ...{ class: "btn btn-secondary" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "btn btn-primary" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
}
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
    props: {},
});
export default {};
