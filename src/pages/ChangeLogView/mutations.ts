import {MutationTree} from 'vuex';
import {Change, ChangeLogState} from "@/pages/ChangeLogView/changes";

export const mutations: MutationTree<ChangeLogState> = {
    addChange(state, payload: Change) {
        // @ts-ignore
        state.changes = [...state.changes, payload];
    },
    setChanges(state, payload: Change[]) {
        // @ts-ignore
        state.changes = payload;
    },
};
