import { defineAsyncComponent } from 'vue';
import { useProduct } from '@/store/product';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const props = defineProps();
const emits = defineEmits(['changeTab']);
const { changeTab } = useProduct();
function handleTab(value) {
    if (props.activeTabId) {
        const updatedId = changeTab(value, props.activeTabId);
        if (updatedId) {
            emits('changeTab', updatedId);
        }
    }
}
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content custom-input" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "sidebar-body common-form" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-body']} */ ;
/** @type {__VLS_StyleScopedClasses['common-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-upload" },
});
/** @type {__VLS_StyleScopedClasses['product-upload']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropzone-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['dropzone-wrapper']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.DropZone | typeof __VLS_components.DropZone} */
DropZone;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "show-preview custom-scrollbar dropzone-secondary" },
    uploadOnDrop: (true),
    acceptedFiles: (['image']),
    maxFiles: (1),
    multipleUpload: (false),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "show-preview custom-scrollbar dropzone-secondary" },
    uploadOnDrop: (true),
    acceptedFiles: (['image']),
    maxFiles: (1),
    multipleUpload: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['show-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['dropzone-secondary']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { message: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dz-message needsclick" },
    });
    /** @type {__VLS_StyleScopedClasses['dz-message']} */ ;
    /** @type {__VLS_StyleScopedClasses['needsclick']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-cloud-arrow-up fa-fade" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-cloud-arrow-up']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-fade']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "note needsclick" },
    });
    /** @type {__VLS_StyleScopedClasses['note']} */ ;
    /** @type {__VLS_StyleScopedClasses['needsclick']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
}
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-upload" },
});
/** @type {__VLS_StyleScopedClasses['product-upload']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "dropzone-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['dropzone-wrapper']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.DropZone | typeof __VLS_components.DropZone} */
DropZone;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "show-preview custom-scrollbar dropzone-secondary" },
    uploadOnDrop: (true),
    acceptedFiles: (['image']),
    multipleUpload: (true),
}));
const __VLS_9 = __VLS_8({
    ...{ class: "show-preview custom-scrollbar dropzone-secondary" },
    uploadOnDrop: (true),
    acceptedFiles: (['image']),
    multipleUpload: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['show-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['dropzone-secondary']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
{
    const { message: __VLS_13 } = __VLS_10.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dz-message needsclick" },
    });
    /** @type {__VLS_StyleScopedClasses['dz-message']} */ ;
    /** @type {__VLS_StyleScopedClasses['needsclick']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "fa-solid fa-cloud-arrow-up fa-fade" },
    });
    /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-cloud-arrow-up']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-fade']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "note needsclick" },
    });
    /** @type {__VLS_StyleScopedClasses['note']} */ ;
    /** @type {__VLS_StyleScopedClasses['needsclick']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
}
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-buttons" },
});
/** @type {__VLS_StyleScopedClasses['product-buttons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(-1);
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    icon: ('back-arrow'),
}));
const __VLS_16 = __VLS_15({
    icon: ('back-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleTab(1);
            // @ts-ignore
            [handleTab,];
        } },
    ...{ class: "btn" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
SvgIcon;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    icon: ('front-arrow'),
}));
const __VLS_21 = __VLS_20({
    icon: ('front-arrow'),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
export default {};
