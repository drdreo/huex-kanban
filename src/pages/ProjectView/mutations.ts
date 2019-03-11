import {MutationTree} from 'vuex';
import Project from '@/components/Project/Project.vue';
import {ProjectsState} from '@/pages/ProjectView/projects';

export const mutations: MutationTree<ProjectsState> = {
    createProject(state, payload: Project) {
        state.projects = [...state.projects, payload];
    },
    deleteProject(state, payload: Project) {
        state.projects = [...state.projects.filter(project => project.id === payload.id)];
    }
};
