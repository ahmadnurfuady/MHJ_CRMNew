import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
    ...{ class: "row main-dropzone" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['main-dropzone']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Single File Upload'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Single File Upload'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { header5: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "dropzone dropzone-secondary custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['dropzone']} */ ;
/** @type {__VLS_StyleScopedClasses['dropzone-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.FilePond} */
FilePond;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    name: "file",
    labelIdle: "<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>",
    acceptedFileTypes: (['image/png', 'image/jpeg']),
}));
const __VLS_9 = __VLS_8({
    name: "file",
    labelIdle: "<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>",
    acceptedFileTypes: (['image/png', 'image/jpeg']),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-lg-6" },
});
/** @type {__VLS_StyleScopedClasses['col-lg-6']} */ ;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    headerTitle: ('Multiple File Upload'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_14 = __VLS_13({
    headerTitle: ('Multiple File Upload'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
{
    const { header5: __VLS_18 } = __VLS_15.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "dropzone dropzone-secondary custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['dropzone']} */ ;
/** @type {__VLS_StyleScopedClasses['dropzone-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_19;
/** @ts-ignore @type { | typeof __VLS_components.FilePond} */
FilePond;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    ...{ class: "multipal" },
    name: "file",
    labelIdle: "<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>",
    acceptedFileTypes: (['image/png', 'image/jpeg']),
    allowMultiple: (true),
    maxFiles: (10),
}));
const __VLS_21 = __VLS_20({
    ...{ class: "multipal" },
    name: "file",
    labelIdle: "<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>",
    acceptedFileTypes: (['image/png', 'image/jpeg']),
    allowMultiple: (true),
    maxFiles: (10),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {__VLS_StyleScopedClasses['multipal']} */ ;
var __VLS_15;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
