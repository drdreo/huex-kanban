import {ActionTree} from 'vuex';
import {ProjectsState} from './projects';
import {RootState} from '@/store';
import gql from 'graphql-tag';

import graphqlClient from '../../apollo';

export const actions: ActionTree<ProjectsState, RootState> = {
    async createProject({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
               mutation {
                  createProject(data: {name: "${payload.name}"}) {                  
                      id
                      name
                      tasks {
                        id
                        name
                      }                   
                  }
               }
      `,
        });

        commit('createProject', response.data.createProject);
    },
    async getProjects({commit}) {

        const response = await graphqlClient.query({
            query: gql`
       {
          projects {
            id
            name
            tasks {
              id
            }
          }
       }

      `,
        });

        commit('setProjects', response.data.projects);
    },
    async deleteProject({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
            mutation {
              deleteProject(where: {id: "${payload.id}"}) {
                id
              }
            }
      `,
        });

        commit('deleteProject', response.data.deleteProject.id);
    }
};
