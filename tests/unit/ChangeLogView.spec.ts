import {shallowMount, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import ChangeLogView from "@/pages/ChangeLogView/ChangeLogView.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ChangeLogView.vue', () => {

    let actions: { getChanges?: jest.Mock<any, any>; };
    let state;
    // @ts-ignore
    let store;
    let wrapper;

    beforeEach(() => {
        state = {
            changes: [
                {id: 1, description: 'Task created', createdAt: new Date()},
                {id: 2, description: 'Task deleted', createdAt: new Date()}
            ]
        };

        actions = {
            getChanges: jest.fn(),
        };

        store = new Vuex.Store({
            //@ts-ignore
            modules: {
                changes: {
                    state,
                    actions
                }
            }
        });

        const $route = {
            params: {
                id: 123
            }
        };

        wrapper = shallowMount(ChangeLogView, {
            stubs: ['router-link', 'router-view'],
            store,
            localVue,
            mocks: {
                $route
            }
        });
    });

    it('should get Changes on load', () => {
        expect(actions.getChanges).toHaveBeenCalled();
    });
});
