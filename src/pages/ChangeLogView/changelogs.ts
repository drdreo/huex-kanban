import {Module} from 'vuex';

import {actions} from './actions';
import {mutations} from './mutations';
import {RootState} from '@/store';

export interface ChangeLog {
    id: string;
    name: string;
    tasks: any[];
}

export interface ChangeLogState {
    projects: ChangeLog[];
}

export const state: ChangeLogState = {
    projects: []
};


export const changelogs: Module<ChangeLogState, RootState> = {
    state,
    actions,
    mutations
};
