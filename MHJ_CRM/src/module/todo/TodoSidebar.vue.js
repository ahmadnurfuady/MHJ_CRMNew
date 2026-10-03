import { computed, ref } from 'vue';
import { getImages } from '@/utils/index';
import { useTodo } from '@/store/todo';
import { todoSidebar } from '@/core/data/todo';
const store = useTodo();
const todoList = store.todo;
const filtered = ref(false);
function collapseFilter() {
    filtered.value = !filtered.value;
}
const todos = ref(todoList);
const inProgressTasks = computed(() => todos.value.filter((todo) => todo.priority === 'In progress'));
const completedTasks = computed(() => todos.value.filter((todo) => todo.priority === 'Done').length);
const pendingTasks = computed(() => todos.value.filter((todo) => todo.priority === 'Pending').length);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 col-xl-4 box-col-30" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-30']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-sidebar md-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['email-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.collapseFilter();
            // @ts-ignore
            [collapseFilter,];
        } },
    ...{ class: "btn btn-primary email-aside-toggle md-sidebar-toggle" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['email-aside-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-left-aside md-sidebar-aside" },
    ...{ class: (__VLS_ctx.filtered ? 'open' : '') },
});
/** @type {__VLS_StyleScopedClasses['email-left-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "email-app-sidebar left-bookmark custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['email-app-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['left-bookmark']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "media-size-email" },
});
/** @type {__VLS_StyleScopedClasses['media-size-email']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "me-3 rounded-circle" },
    src: (__VLS_ctx.getImages('user/user.png')),
    alt: "images",
});
/** @type {__VLS_StyleScopedClasses['me-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-grow-1" },
});
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav main-menu" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['main-menu']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn-primary text-white badge-light d-block btn-mail w-100" },
});
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['badge-light']} */ ;
/** @type {__VLS_StyleScopedClasses['d-block']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-mail']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "me-2" },
    type: "check-circle",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "me-2" },
    type: "check-circle",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.todoSidebar))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: "nav-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "iconbg" },
        ...{ class: (item.badgeClass) },
    });
    /** @type {__VLS_StyleScopedClasses['iconbg']} */ ;
    let __VLS_5;
    /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
    vueFeather;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        type: (item.icon),
    }));
    const __VLS_7 = __VLS_6({
        type: (item.icon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "title ms-2" },
    });
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    /** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
    (item.title);
    if (item.title == 'Completed') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (item.pillClass) },
        });
        (__VLS_ctx.completedTasks);
    }
    if (item.title == 'Pending') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (item.pillClass) },
        });
        (__VLS_ctx.pendingTasks);
    }
    if (item.title == 'In Process') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (item.pillClass) },
        });
        (__VLS_ctx.inProgressTasks.length);
    }
    // @ts-ignore
    [filtered, getImages, todoSidebar, completedTasks, pendingTasks, inProgressTasks,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
