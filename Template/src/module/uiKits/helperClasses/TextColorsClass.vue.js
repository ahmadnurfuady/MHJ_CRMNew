import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const fontColors = ref([
    { label: 'font-primary', class: 'font-primary' },
    { label: 'font-secondary', class: 'font-secondary' },
    { label: 'font-success', class: 'font-success' },
    { label: 'font-danger', class: 'font-danger' },
    { label: 'font-warning', class: 'font-warning' },
    { label: 'font-info', class: 'font-info' },
    { label: 'font-dark', class: 'font-dark' },
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
    cardClass: ('height-equal helper-height-equal'),
    headerTitle: ('Text Colors'),
    border: (true),
    padding: (false),
    cardBodyClass: ('txt-space'),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal helper-height-equal'),
    headerTitle: ('Text Colors'),
    border: (true),
    padding: (false),
    cardBodyClass: ('txt-space'),
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
for (const [item, index] of __VLS_vFor((__VLS_ctx.fontColors))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (index),
        ...{ class: (item.class) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (item.label);
    (item.class);
    // @ts-ignore
    [fontColors,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
