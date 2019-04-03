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
          changes(
              orderBy: createdAt_DESC,
              where: 
              {
                task: 
                {
                    project: 
                    {
                        id: "${payload}"
                    }
                }
              }
          ) 
          {
            id
            changeType
            taskState
            createdAt
            task {
                name
            }
          }
       }
      `,
        });
        commit('setChanges', response.data.getChanges);
    },
    async addChange({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
               mutation {
                  createChange(
                    data: {
                        changeType: "${payload.changeType}",
                        task: {
                            connect: { id: "${payload.taskId}" }
                        }
                    }
                   ) 
               }
      `,
        });
        commit('addChange', response.data.addChange);
    },
    async addStateChange({commit}, payload) {
        const response = await graphqlClient.mutate({
            mutation: gql`
               mutation {
                  createChange(
                    data: {
                        changeType: "${payload.changeType}",
                        taskState: "${payload.taskState}", 
                        task: {
                            connect: { id: "${payload.taskId}" }
                        }
                    }
                   ) 
               }
      `,
        });
        commit('addStateChange', response.data.addStateChange);
    },
};
