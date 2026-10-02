import { ref, defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const tag = ref('');
const tags = ref([]);
const selectItems = ref([
    { text: 'Riho' },
    { text: 'Tivo' },
    { text: 'Roxo' },
    { text: 'Viho' },
]);
function handleSelectedTag(selected) {
    // Prevent duplicates
    if (!tags.value.find((t) => t.text === selected.text)) {
        tags.value.push(selected);
    }
}
function handleChangeTag(newTags) {
    tags.value = newTags;
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
    headerTitle: ('Selectable Tag'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Selectable Tag'),
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
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.TagInput | typeof __VLS_components.TagInput} */
TagInput;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ 'onOnSelect': {} },
    ...{ 'onOnTagsChanged': {} },
    tags: (__VLS_ctx.tags),
    modelValue: (__VLS_ctx.tag),
    select: (true),
    selectItems: (__VLS_ctx.selectItems),
    placeholder: "Select the tag",
}));
const __VLS_10 = __VLS_9({
    ...{ 'onOnSelect': {} },
    ...{ 'onOnTagsChanged': {} },
    tags: (__VLS_ctx.tags),
    modelValue: (__VLS_ctx.tag),
    select: (true),
    selectItems: (__VLS_ctx.selectItems),
    placeholder: "Select the tag",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
const __VLS_14 = ({ onSelect: {} },
    { onOnSelect: (__VLS_ctx.handleSelectedTag) });
const __VLS_15 = ({ onTagsChanged: {} },
    { onOnTagsChanged: (__VLS_ctx.handleChangeTag) });
const { default: __VLS_16 } = __VLS_11.slots;
{
    const { item: __VLS_17 } = __VLS_11.slots;
    const [{ tag }] = __VLS_vSlot(__VLS_17);
    (tag.text);
    // @ts-ignore
    [tags, tag, selectItems, handleSelectedTag, handleChangeTag,];
}
{
    const { 'no-data': __VLS_18 } = __VLS_11.slots;
    // @ts-ignore
    [];
}
{
    const { 'select-item': __VLS_19 } = __VLS_11.slots;
    const [tag] = __VLS_vSlot(__VLS_19);
    (tag.text);
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_11;
var __VLS_12;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
