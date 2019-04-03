import {Vue} from 'vue-property-decorator';

import Vuex, {StoreOptions} from 'vuex';
import {projects} from '@/pages/ProjectView/projects';
import {changelogs} from '@/pages/ChangeLogView/changelogs';
import {tasks} from "@/pages/TasksView/tasks";

Vue.use(Vuex);

export interface RootState {
    version: string;
}

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0'
    },
    modules: {
        projects,
        changelog: changelogs,
        tasks
    }
};

export default new Vuex.Store<RootState>(store);
