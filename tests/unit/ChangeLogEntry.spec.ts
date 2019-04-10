import {shallowMount, RouterLinkStub, createLocalVue} from '@vue/test-utils';
import Project from '@/components/Project/Project.vue';
import Vuex from 'vuex';
import ChangeLogEntry from "@/components/ChangeLog/ChangeLogEntry.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ChangeLogEntry.vue', () => {

    let state;
    // @ts-ignore
    let store;

    // @ts-ignore
    let wrapper;

    const date = new Date();

    beforeEach(() => {
        state = {
            projects: [
                {id: 1, name: 'test-project-1', tasks: [{name: 'Task1'}]},
                {id: 2, name: 'test-project-2', tasks: [{name: 'Task1'}]}
            ]
        };

        store = new Vuex.Store({
            //@ts-ignore
            modules: {
                projects: {
                    state
                }
            }
        });

        wrapper = shallowMount(ChangeLogEntry, {
            propsData: {
                id: '1',
                description: 'task created',
                createdAt: date
            },
            store,
            localVue
        });

    });

    it('has description', () => {
        // @ts-ignore
        expect(wrapper.find('.changelog-entry__description').text()).toBe('task created');
    });

    it('has date', () => {
        const formattedDate = date.toLocaleString()+":";
        // @ts-ignore
        expect(wrapper.find('.changelog-entry__date').text()).toBe(formattedDate);
    });
});
