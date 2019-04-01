import {MutationTree} from 'vuex';
import Task from '@/components/Task/Task.vue';
import {TasksState} from '@/pages/TasksView/tasks';

export const mutations: MutationTree<TasksState> = {
    createTask(state, payload: Task) {
        // @ts-ignore
        state.tasks = [...state.tasks, payload];
    },
    setTasks(state, payload: Task[]) {
        // @ts-ignore
        state.tasks = payload;
    },
    deleteTask(state, taskId: string) {
        state.tasks = [...state.tasks.filter(task => task.id !== taskId)];
    },
    /*updateTaskState(state, payload: Task) {
        state.tasks = state.tasks.map(Task => {
            if (Task.id === payload.id) {
                Task.state = payload.state;
            }
            return Task;
        });
    }*/
};
