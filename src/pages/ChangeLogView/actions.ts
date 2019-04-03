import {ActionTree} from 'vuex';
import {RootState} from '@/store';
import {ChangeLogState} from "@/pages/ChangeLogView/changes";
import graphqlClient from "@/apollo";
import gql from "graphql-tag";

export const actions: ActionTree<ChangeLogState, RootState> = {
    async getChanges({commit}, payload) {
        const response = await graphqlClient.query({
            query: gql`
        {
          changes(orderBy: createdAt_DESC, where: {project: {id: "${payload}"}}) {
            id
            description
            createdAt
          }
        }
      `,
        });
        commit('setChanges', response.data.changes);
    },
    async addChange({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
               mutation {
                  createChange(
                    data: {
                        description: "${payload.description}",
                        project: {
                            connect: { id: "${payload.projectId}" }
                        }
                    }
                   ) 
                   {                  
                      id         
                  }
               }
      `,
        });
        commit('addChange', response.data.addChange);
    },
};
