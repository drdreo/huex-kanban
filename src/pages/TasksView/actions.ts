import {ActionTree} from 'vuex';
import {TasksState} from './tasks';
import {RootState} from '@/store';
import gql from 'graphql-tag';

import graphqlClient from '../../apollo';

export const actions: ActionTree<TasksState, RootState> = {
    async createTask({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
               mutation {
                  createTask(data: {name: "${payload.name}",
                  description: "${payload.description}", state: ${payload.state}, project: {
                    connect: { id: "${payload.project}" }
                    }}) {                  
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
        commit('createTask', response.data.createTask);
    },

    async getTasks({commit}, payload) {
        const response = await graphqlClient.query({
            query: gql`
       {
          tasks(where: {
            project: {
                id: "${payload}"
            }
          }) 
          {
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

    async deleteTask({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
            mutation {
              deleteTask(where: {id: "${payload.id}"}) {
                id
              }
            }
      `,
        });
        commit('deleteTask', response.data.deleteTask.id);
    },

    async updateTaskState({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
            mutation {
                updateTaskState(where: {id: "${payload.id}"})
            }
            `,
        });
    }
};