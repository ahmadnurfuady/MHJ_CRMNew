import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const listFiltered = ref([]);
const options = ref({
    placeholder: 'States of USA',
    minInputLength: 1,
    hint: false,
});
function listFilter(event) {
    listFiltered.value = event.items;
}
const scroll = ref([
    'Andorra',
    'United Arab Emirates',
    'Afghanistan',
    'Antigua and Barbuda',
    'Anguilla',
    'Albania',
    'Armenia',
    'Angola',
    'Antarctica',
    'Argentina',
    'American Samoa',
    'Austria',
    'Australia',
    'Aruba',
    'Åland',
    'Azerbaijan',
    'Bosnia and Herzegovina',
    'Barbados',
    'United Kingdom',
    'Grenada',
    'Georgia',
    'French Guiana',
    'Guernsey',
    'Ghana',
    'Gibraltar',
    'Greenland',
    'Gambia',
    'Guinea',
    'Guadeloupe',
    'Equatorial Guinea',
    'Greece',
    'South Georgia and the South Sandwich Islands',
    'Guatemala',
    'Guam',
    'Guinea-Bissau',
    'Guyana',
    'Yemen',
    'Mayotte',
    'South Africa',
    'Zambia',
    'Zimbabwe',
]);
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
    headerTitle: ('Scrollable Dropdown Menu'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Scrollable Dropdown Menu'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1 mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "scrollable-dropdown-menu",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "theme-form" },
});
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.TypeAhead} */
TypeAhead;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ 'onOnInput': {} },
    ...{ 'onOnBlur': {} },
    items: (__VLS_ctx.scroll),
    ...{ class: "form-control typeahead form-control" },
    placeholder: "Countries",
    minInputLength: (__VLS_ctx.options.minInputLength),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onOnInput': {} },
    ...{ 'onOnBlur': {} },
    items: (__VLS_ctx.scroll),
    ...{ class: "form-control typeahead form-control" },
    placeholder: "Countries",
    minInputLength: (__VLS_ctx.options.minInputLength),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
const __VLS_14 = ({ onInput: {} },
    { onOnInput: (__VLS_ctx.listFilter) });
const __VLS_15 = ({ onBlur: {} },
    { onOnBlur: (__VLS_ctx.listFilter) });
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['typeahead']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
var __VLS_11;
var __VLS_12;
// @ts-ignore
[scroll, options, listFilter, listFilter,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
