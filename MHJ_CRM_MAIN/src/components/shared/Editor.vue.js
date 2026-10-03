import { ref, onMounted } from 'vue';
const editor = ref();
onMounted(async () => {
    const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic');
    editor.value = ClassicEditor;
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.editor) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor | typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor} */
    ckeditor;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        editor: (__VLS_ctx.editor),
    }));
    const __VLS_2 = __VLS_1({
        editor: (__VLS_ctx.editor),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_5;
    var __VLS_3;
}
// @ts-ignore
[editor, editor,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
