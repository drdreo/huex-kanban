import {ActionTree} from 'vuex';
import {ProjectsState} from './projects';
import {RootState} from '@/store';


export const actions: ActionTree<ProjectsState, RootState> = {
    createProject({commit}, payload): any {
        commit('createProject', payload);
    },
    deleteProject({commit}, payload): any {
        console.log('delete: ', payload);
        commit('deleteProject', payload);
    }
};
