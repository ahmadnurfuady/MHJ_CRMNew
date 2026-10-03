import { ref, defineAsyncComponent } from 'vue';
import { flagIcon } from '@/core/data/icons/flagIcon';
import { toast } from 'vue3-toastify';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const details = ref({
    detailsVisible: false,
    icon: '',
});
function getDetails(value) {
    details.value = {
        detailsVisible: true,
        icon: value,
    };
}
function copyText(val) {
    navigator.clipboard.writeText(`<i class="flag-icon flag-icon-${val}"></i>`);
    toast.success(`Code Copied to clipboard!`, {
        autoClose: 2000,
        position: 'bottom-right',
    });
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
    headerTitle: ('Flag Icons'),
    border: (true),
    padding: (false),
    headerClass: ('m-b-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Flag Icons'),
    border: (true),
    padding: (false),
    headerClass: ('m-b-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row icon-lists flag-icons" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-lists']} */ ;
/** @type {__VLS_StyleScopedClasses['flag-icons']} */ ;
for (const [icon] of __VLS_vFor((__VLS_ctx.flagIcon))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (icon.name),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.getDetails(icon.countryCode));
                // @ts-ignore
                [flagIcon, getDetails,];
            } },
        ...{ class: "col-12 col-sm-6 col-xl-4" },
    });
    /** @type {__VLS_StyleScopedClasses['col-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "media" },
    });
    /** @type {__VLS_StyleScopedClasses['media']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`flag-icon flag-icon-${icon.countryCode}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "media-body align-self-center" },
    });
    /** @type {__VLS_StyleScopedClasses['media-body']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-self-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
    (icon.countryCode.toUpperCase());
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mt-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
    (icon.name);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
if (__VLS_ctx.details.detailsVisible) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "icon-hover-bottom p-fixed fa-fa-icon-show-div d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-hover-bottom']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-fixed']} */ ;
    /** @type {__VLS_StyleScopedClasses['fa-fa-icon-show-div']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "container-fluid" },
    });
    /** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "icon-popup" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-popup']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "close-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['close-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.details.detailsVisible))
                    throw 0;
                return (__VLS_ctx.details.detailsVisible = false);
                // @ts-ignore
                [details, details,];
            } },
        ...{ class: "icofont icofont-close" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-close']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "icon-first" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-first']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`flag-icon flag-icon-${__VLS_ctx.details.icon} fa-2x text-white`) },
        id: "icon_main",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "icon-class" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-class']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "icon-title" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.details.icon);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "icon-last icon-last" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-last']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-last']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "icon-title" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-inline" },
    });
    /** @type {__VLS_StyleScopedClasses['form-inline']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-group" },
    });
    /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "inp-val form-control m-r-10" },
        id: "input_copy",
        type: "text",
        value: (`<i class='flag-icon flag-icon-${__VLS_ctx.details.icon}'></i>`),
        readonly: true,
    });
    /** @type {__VLS_StyleScopedClasses['inp-val']} */ ;
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-r-10']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.details.detailsVisible))
                    throw 0;
                return (__VLS_ctx.copyText(__VLS_ctx.details.icon));
                // @ts-ignore
                [details, details, details, details, copyText,];
            } },
        ...{ class: "btn btn-primary notification" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['notification']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
