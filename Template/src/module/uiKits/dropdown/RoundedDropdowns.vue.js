import { defineAsyncComponent } from 'vue';
import { roundedDropdown } from '@/core/data/uiKits/dropdown';
import { titleCase } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
    headerTitle: ('Rounded Dropdowns'),
    border: (true),
    padding: (false),
    cardBodyClass: ('rtl-dropdown'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Rounded Dropdowns'),
    border: (true),
    padding: (false),
    cardBodyClass: ('rtl-dropdown'),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
for (const [dropdown, index] of __VLS_vFor((__VLS_ctx.roundedDropdown))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "btn-group" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: (`btn btn-${dropdown.color} rounded-pill dropdown-toggle`) },
        type: "button",
        'data-bs-toggle': "dropdown",
    });
    (__VLS_ctx.titleCase(dropdown.color));
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "dropdown-menu dropdown-block" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-block']} */ ;
    for (const [item, index] of __VLS_vFor((dropdown.dropdownItem))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "dropdown-item" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
        (item.title);
        // @ts-ignore
        [roundedDropdown, titleCase,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
