import {shallowMount, createLocalVue} from '@vue/test-utils';
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
            changes: [
                {id: 1, description: 'Task created', createdAt: new Date()},
                {id: 2, description: 'Task deleted', createdAt: new Date()}
            ]
        };

        store = new Vuex.Store({
            //@ts-ignore
            modules: {
                changes: {
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
