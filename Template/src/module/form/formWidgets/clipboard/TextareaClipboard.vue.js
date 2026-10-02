import { ref, defineAsyncComponent } from 'vue';
import Swal from 'sweetalert2';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const clipboardExample2 = ref('A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.');
function showAlert(message, icon) {
    Swal.fire({
        title: message,
        icon: icon,
        toast: true,
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'top-end',
    });
}
function copyFunction(txt) {
    if (!txt.trim()) {
        showAlert('Please enter some text before copying!', 'error');
        return;
    }
    navigator.clipboard.writeText(txt);
    showAlert('Copied to clipboard!', 'success');
}
function cutFunction(field) {
    switch (field) {
        case 'clipboardExample1':
            if (!clipboardExample2.value.trim()) {
                showAlert('Nothing to cut!', 'error');
                return;
            }
            navigator.clipboard.writeText(clipboardExample2.value);
            clipboardExample2.value = '';
            showAlert('Cut and cleared!', 'success');
            break;
    }
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
    headerTitle: ('Clipboard on textarea'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Clipboard on textarea'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "clipboaard-container" },
});
/** @type {__VLS_StyleScopedClasses['clipboaard-container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "card-description mb-2" },
});
/** @type {__VLS_StyleScopedClasses['card-description']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)({
    ...{ class: "form-control" },
    id: "clipboardExample2",
    value: (__VLS_ctx.clipboardExample2),
    name: "clipboardExample2",
    rows: "1",
    spellcheck: "false",
});
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-3 text-end" },
});
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.copyFunction(__VLS_ctx.clipboardExample2);
            // @ts-ignore
            [clipboardExample2, clipboardExample2, copyFunction,];
        } },
    ...{ class: "btn btn-primary btn-clipboard me-1" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-clipboard']} */ ;
/** @type {__VLS_StyleScopedClasses['me-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-copy" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-copy']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.cutFunction('clipboardExample2');
            // @ts-ignore
            [cutFunction,];
        } },
    ...{ class: "btn btn-secondary btn-clipboard-cut" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-clipboard-cut']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa fa-cut" },
});
/** @type {__VLS_StyleScopedClasses['fa']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-cut']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
