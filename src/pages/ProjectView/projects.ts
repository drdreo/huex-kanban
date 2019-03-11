import {Module} from 'vuex';

import {actions} from './actions';
import {mutations} from './mutations';
import {RootState} from '@/store';

export interface Project {
    id: number;
    name: string;
}

export interface ProjectsState {
    projects: Project[];
}

export const state: ProjectsState = {
    projects: []
};


export const projects: Module<ProjectsState, RootState> = {
    state,
    actions,
    mutations
};
