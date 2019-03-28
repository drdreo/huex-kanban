import {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {RootState} from '@/store';

export interface ChangeLog {
    projectId: string;
    projectName: string;
    changes: Change[];
}

export interface Change {
    id: number;
    actionType: string;
    object1: string;
    object2?: string;
    created: string;
}

export interface ChangeLogState {
    changes: Change[];
}

export const state: ChangeLogState = {
    changes: []
};

export const changelogs: Module<ChangeLogState, RootState> = {
    state,
    actions,
    mutations
};
