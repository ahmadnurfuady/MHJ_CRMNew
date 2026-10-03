import { ref } from 'vue';
import { useTodo } from '@/store/todo';
import { toast } from 'vue3-toastify';
const task = ref('');
const store = useTodo();
const { addTodo, toggleTask, deleteTask } = store;
const todoList = store.todo;
function addNewTask() {
    if (task.value.trim()) {
        addTodo({ id: 0, title: task.value, delete: false, status: 'pending' });
        task.value = '';
        toast.success('Task added!');
    }
    else {
        toast.error('Please enter a task.');
    }
}
function taskComplete(id) {
    toggleTask(id);
}
function remove(index) {
    deleteTask(index);
    toast.error('Task deleted!');
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 col-xl-8 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header b-bottom" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['b-bottom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "todo-list-header" },
});
/** @type {__VLS_StyleScopedClasses['todo-list-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "new-task-wrapper input-group" },
});
/** @type {__VLS_StyleScopedClasses['new-task-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_ctx.addNewTask) },
    ...{ class: "form-control" },
    id: "new-task",
    placeholder: "Enter new task here. . .",
});
(__VLS_ctx.task);
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.addNewTask());
            // @ts-ignore
            [addNewTask, addNewTask, task,];
        } },
    ...{ class: "btn btn-primary add-new-task-btn" },
    id: "add-task",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['add-new-task-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "todo" },
});
/** @type {__VLS_StyleScopedClasses['todo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "todo-list-wrapper custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['todo-list-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "todo-list-container" },
});
/** @type {__VLS_StyleScopedClasses['todo-list-container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "todo-list-body custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['todo-list-body']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    id: "todo-list",
});
for (const [todo, index] of __VLS_vFor((__VLS_ctx.todoList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
        ...{ class: "task" },
        ...{ class: ({ completed: todo.delete }) },
    });
    /** @type {__VLS_StyleScopedClasses['task']} */ ;
    /** @type {__VLS_StyleScopedClasses['completed']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "task-container" },
    });
    /** @type {__VLS_StyleScopedClasses['task-container']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.taskComplete(todo.id));
                // @ts-ignore
                [todoList, taskComplete,];
            } },
        ...{ class: "task-label" },
    });
    /** @type {__VLS_StyleScopedClasses['task-label']} */ ;
    (todo.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-items-center gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "badge" },
        ...{ class: (todo.badgeClass) },
    });
    /** @type {__VLS_StyleScopedClasses['badge']} */ ;
    (todo.priority);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({
        ...{ class: "assign-name m-0" },
    });
    /** @type {__VLS_StyleScopedClasses['assign-name']} */ ;
    /** @type {__VLS_StyleScopedClasses['m-0']} */ ;
    (todo.date);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "task-action-btn" },
    });
    /** @type {__VLS_StyleScopedClasses['task-action-btn']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.remove(index));
                // @ts-ignore
                [remove,];
            } },
        ...{ class: "action-box large delete-btn" },
        title: "Delete Task",
    });
    /** @type {__VLS_StyleScopedClasses['action-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['large']} */ ;
    /** @type {__VLS_StyleScopedClasses['delete-btn']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icon" },
    });
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icon-trash" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-trash']} */ ;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "notification-popup hide" },
});
/** @type {__VLS_StyleScopedClasses['notification-popup']} */ ;
/** @type {__VLS_StyleScopedClasses['hide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "task" },
});
/** @type {__VLS_StyleScopedClasses['task']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "notification-text" },
});
/** @type {__VLS_StyleScopedClasses['notification-text']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
