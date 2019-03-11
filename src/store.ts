import {Vue} from 'vue-property-decorator';

import Vuex, {StoreOptions} from 'vuex';
import {projects} from '@/pages/ProjectView/projects';

Vue.use(Vuex);

export interface RootState {
    version: string;
}

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0'
    },
    modules: {
        kanban: projects
    }
};

export default new Vuex.Store<RootState>(store);
