import {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {RootState} from '@/store';

export interface Change {
    id: number;
    changeType: string;
    editedObject: string;
    destination?: string;   // Only needed when moving a Task to another state (e.g. destination = "In Progress")
    created: string;
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
