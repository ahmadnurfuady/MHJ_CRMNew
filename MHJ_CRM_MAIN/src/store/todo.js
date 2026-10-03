import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { data } from '@/core/data/todo';
export const useTodo = defineStore('todo', () => {
    const todo = ref(data);
    function addTodo(item) {
        const id = todo.value.length ? Math.max(...todo.value.map((t) => t.id)) + 1 : 1;
        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' }).toUpperCase()}`;
        todo.value.unshift({
            id,
            date: formattedDate,
            title: item.title,
            priority: 'Pending',
            badgeClass: 'badge-light-danger',
            delete: false,
            status: 'pending',
        });
    }
    function toggleTask(id) {
        const task = todo.value.find((t) => t.id === id);
        if (task) {
            task.delete = !task.delete;
            task.status = task.delete ? 'complete' : 'pending';
            task.priority = task.delete ? 'Done' : 'Pending';
            task.badgeClass = task.delete ? 'badge-light-success' : 'badge-light-danger';
        }
    }
    function deleteTask(index) {
        todo.value.splice(index, 1);
    }
    function getTaskById(id) {
        return todo.value.find((task) => task.id === id);
    }
    function clearCompleted() {
        todo.value = todo.value.filter((task) => !task.delete);
    }
    const totalTasks = computed(() => todo.value.length);
    const completedTasks = computed(() => todo.value.filter((t) => t.delete).length);
    const pendingTasks = computed(() => todo.value.filter((t) => !t.delete).length);
    return {
        todo,
        addTodo,
        toggleTask,
        deleteTask,
        getTaskById,
        clearCompleted,
        totalTasks,
        completedTasks,
        pendingTasks,
    };
});
