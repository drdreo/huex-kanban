import {ActionTree} from 'vuex';
import {ProjectsState} from './projects';
import {RootState} from '@/store';


export const actions: ActionTree<ProjectsState, RootState> = {
    createProject({commit}, payload): any {
        commit('createProject', payload);
    },
    deleteProject({commit}, payload): any {
        commit('deleteProject', payload);
    }
};
