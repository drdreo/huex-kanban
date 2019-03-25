import {shallowMount, RouterLinkStub, createLocalVue} from '@vue/test-utils';
import Project from '@/components/Project/Project.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Project.vue', () => {

    let actions: { deleteProject?: jest.Mock<any, any>; };
    let state;
    // @ts-ignore
    let store;

    // @ts-ignore
    let wrapper;

    beforeEach(() => {
        state = {
            projects: [
                {id: 1, name: 'test-project-1', tasks: [{name: 'Task1'}]},
                {id: 2, name: 'test-project-2', tasks: [{name: 'Task1'}]}
            ]
        };
        actions = {
            deleteProject: jest.fn()
        };

        store = new Vuex.Store({
            //@ts-ignore
            modules: {
                kanban: {
                    state,
                    actions
                }
            }
        });


        wrapper = shallowMount(Project, {
            propsData: {
                id: '1',
                name: 'test-project',
                tasks: [{test: 'test'}]

            },
            stubs: {
                RouterLink: RouterLinkStub
            },
            store,
            localVue
        });

    });

    it('has name in title', () => {
        // @ts-ignore
        expect(wrapper.find('.title-content').text()).toBe('test-project');
    });

    it('has amount of tasks icon', () => {
        // @ts-ignore
        expect(wrapper.find('.tasks').text()).toBe('1');
    });


    it('calls store action deleteProject when remove-button is clicked', () => {

        // @ts-ignore
        const createBtn = wrapper.find('.card-remove');
        createBtn.trigger('click');
        expect(actions.deleteProject).toHaveBeenCalled();
    });
});
