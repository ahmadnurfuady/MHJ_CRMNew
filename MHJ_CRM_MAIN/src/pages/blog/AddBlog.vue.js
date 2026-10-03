import { ref, onMounted, defineAsyncComponent } from 'vue';
import { addBlogCategory, blogType } from '@/core/data/blog';
import { initSelectField } from '@/core/data/common';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const editor = ref();
const category = ref(initSelectField());
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
    headerTitle: ('Post Edit'),
    border: (true),
    padding: (false),
    cardBodyClass: ('add-post'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Post Edit'),
    border: (true),
    padding: (false),
    cardBodyClass: ('add-post'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    title: ('Title:'),
}));
const __VLS_8 = __VLS_7({
    title: ('Title:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    inputId: ('title'),
    placeholder: ('Post Title'),
    required: (false),
}));
const __VLS_14 = __VLS_13({
    inputId: ('title'),
    placeholder: ('Post Title'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    title: ('Type:'),
}));
const __VLS_19 = __VLS_18({
    title: ('Type:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
const { default: __VLS_22 } = __VLS_20.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "m-checkbox-inline" },
});
/** @type {__VLS_StyleScopedClasses['m-checkbox-inline']} */ ;
for (const [type, index] of __VLS_vFor((__VLS_ctx.blogType))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        for: (type.id),
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "radio_animated" },
        id: (type.id),
        type: "radio",
        name: "rdo-ani",
        checked: (type.checked),
    });
    /** @type {__VLS_StyleScopedClasses['radio_animated']} */ ;
    (type.title);
    // @ts-ignore
    [blogType,];
}
// @ts-ignore
[];
var __VLS_20;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_23;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    title: ('Category:'),
}));
const __VLS_25 = __VLS_24({
    title: ('Category:'),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
const { default: __VLS_28 } = __VLS_26.slots;
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    placeholder: ('Select category'),
    modelValue: (__VLS_ctx.category),
    options: (__VLS_ctx.addBlogCategory),
    multiSelect: (true),
    required: (false),
}));
const __VLS_31 = __VLS_30({
    placeholder: ('Select category'),
    modelValue: (__VLS_ctx.category),
    options: (__VLS_ctx.addBlogCategory),
    multiSelect: (true),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
// @ts-ignore
[category, addBlogCategory,];
var __VLS_26;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['email-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "theme-form" },
});
/** @type {__VLS_StyleScopedClasses['theme-form']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
let __VLS_34;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent1(__VLS_34, new __VLS_34({
    title: ('Content:'),
    ...{ class: ('w-100') },
}));
const __VLS_36 = __VLS_35({
    title: ('Content:'),
    ...{ class: ('w-100') },
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
const { default: __VLS_39 } = __VLS_37.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toolbar-box" },
});
/** @type {__VLS_StyleScopedClasses['toolbar-box']} */ ;
if (__VLS_ctx.editor) {
    let __VLS_40;
    /** @ts-ignore @type { | typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor | typeof __VLS_components.ckeditor | typeof __VLS_components.Ckeditor} */
    ckeditor;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
        editor: (__VLS_ctx.editor),
    }));
    const __VLS_42 = __VLS_41({
        editor: (__VLS_ctx.editor),
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
}
// @ts-ignore
[editor, editor,];
var __VLS_37;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "dropzone dropzone-secondary custom-scrollbar" },
    id: "multiFileUpload",
});
/** @type {__VLS_StyleScopedClasses['dropzone']} */ ;
/** @type {__VLS_StyleScopedClasses['dropzone-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_45;
/** @ts-ignore @type { | typeof __VLS_components.FilePond} */
FilePond;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
    name: "file",
    labelIdle: "<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>",
    allowMultiple: true,
    acceptedFileTypes: (['image/png', 'image/jpeg']),
}));
const __VLS_47 = __VLS_46({
    name: "file",
    labelIdle: "<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>",
    allowMultiple: true,
    acceptedFileTypes: (['image/png', 'image/jpeg']),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex justify-content-end mt-3" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "btn btn-secondary" },
    type: "reset",
    value: "Discard",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
