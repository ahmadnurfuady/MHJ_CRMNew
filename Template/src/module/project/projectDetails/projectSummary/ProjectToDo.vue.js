import { ref, defineAsyncComponent } from 'vue';
import { projectDetails, todoListColors, todoStatus } from '@/core/data/project';
import { routes } from '@/router/routes';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'));
const projectTodo = ref(projectDetails.projectSummary.todoList);
const colors = ref(todoListColors);
const status = ref(todoStatus);
function getColor(index) {
    return colors.value[index % colors.value.length];
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    cardClass: ('main-summary'),
    cardType: ('classic'),
    headerTitle: ('To Do List'),
    cardBodyClass: ('pt-0 project-todo'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.App.Todo),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('main-summary'),
    cardType: ('classic'),
    headerTitle: ('To Do List'),
    cardBodyClass: ('pt-0 project-todo'),
    buttonText: ('View All'),
    path: (__VLS_ctx.routes.App.Todo),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "crm-todo-list" },
});
/** @type {__VLS_StyleScopedClasses['crm-todo-list']} */ ;
for (const [todo, index] of __VLS_vFor((__VLS_ctx.projectTodo))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "d-flex align-items-center" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (`l-line-${__VLS_ctx.getColor(index)}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "form-check" },
    });
    /** @type {__VLS_StyleScopedClasses['form-check']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: (`form-check-input checkbox-${__VLS_ctx.getColor(index)}`) },
        type: "checkbox",
        value: "",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "f-w-400" },
    });
    /** @type {__VLS_StyleScopedClasses['f-w-400']} */ ;
    (todo.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    (todo.description);
    let __VLS_7;
    /** @ts-ignore @type { | typeof __VLS_components.CardDropdown | typeof __VLS_components.CardDropdown} */
    CardDropdown;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        dropdownType: ('simple'),
        options: (__VLS_ctx.status),
    }));
    const __VLS_9 = __VLS_8({
        dropdownType: ('simple'),
        options: (__VLS_ctx.status),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore
    [routes, projectTodo, getColor, getColor, status,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
