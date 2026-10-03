import { defineAsyncComponent, onMounted, ref } from 'vue';
import { checkboxList } from '@/core/data/uiKits/lists';
import { initializeCheckboxList } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'));
const list = ref(checkboxList);
onMounted(() => {
    initializeCheckboxList(list.value);
});
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
    headerTitle: ('Lists with Checkbox'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Lists with Checkbox'),
    border: (true),
    padding: (false),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "list-group" },
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.list))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "list-group-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    let __VLS_8;
    /** @ts-ignore @type {typeof __VLS_components.Checkbox} */
    Checkbox;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        inputId: (item.id),
        ...{ class: (`me-1 checkbox-${item.class}`) },
        labelClass: (`txt-${item.class} mb-0`),
        label: (item.title),
        modelValue: (item.model),
        required: (false),
    }));
    const __VLS_10 = __VLS_9({
        inputId: (item.id),
        ...{ class: (`me-1 checkbox-${item.class}`) },
        labelClass: (`txt-${item.class} mb-0`),
        label: (item.title),
        modelValue: (item.model),
        required: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    // @ts-ignore
    [list,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
