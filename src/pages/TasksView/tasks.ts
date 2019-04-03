import {Module} from 'vuex';

import {actions} from './actions';
import {mutations} from './mutations';
import {RootState} from '@/store';

export interface Task {
    id: string;
    name: string;
    description: string;
    state: number;
    project: any;
}

export interface TasksState {
    tasks: Task[];
}

export const state: TasksState = {
    tasks: []
};


export const tasks: Module<TasksState, RootState> = {
    state,
    actions,
    mutations
};