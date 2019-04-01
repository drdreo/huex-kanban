import {ActionTree} from 'vuex';
import {TasksState} from './tasks';
import {RootState} from '@/store';
import gql from 'graphql-tag';

import graphqlClient from '../../apollo';

export const actions: ActionTree<TasksState, RootState> = {
    async getTasks({commit}) {

        const response = await graphqlClient.query({
            query: gql`
       {
          tasks {
            id
            name
            description
            state
            project {
                id
            }
          }
       }

      `,
        });

        commit('setTasks', response.data.tasks);
    },
};