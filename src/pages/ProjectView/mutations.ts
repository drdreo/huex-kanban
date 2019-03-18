import {MutationTree} from 'vuex';
import Project from '@/components/Project/Project.vue';
import {ProjectsState} from '@/pages/ProjectView/projects';

export const mutations: MutationTree<ProjectsState> = {
    createProject(state, payload: Project) {
        state.projects = [...state.projects, payload];
    },
    setProjects(state, payload: Project[]) {
        state.projects = payload;
    },
    deleteProject(state, projectId: string) {
        state.projects = [...state.projects.filter(project => project.id !== projectId)];
    }
};
