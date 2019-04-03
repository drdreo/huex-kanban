import {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {RootState} from '@/store';

export interface Change {
    id: string;
    description: string;
    createdAt: Date;
}

export interface ChangeLogState {
    changes: Change[];
}

export const state: ChangeLogState = {
    changes: []
};

export const changes: Module<ChangeLogState, RootState> = {
    state,
    actions,
    mutations
};
