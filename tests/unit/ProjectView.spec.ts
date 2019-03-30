/* tslint:disable */

import {shallowMount, createLocalVue, Wrapper} from '@vue/test-utils';
import Vuex from 'vuex';

import ProjectView from '@/pages/ProjectView/ProjectView.vue';

const localVue = createLocalVue();

localVue.use(Vuex);


describe('ProjectView.vue', () => {

    let actions: { createProject: any; getProjects?: jest.Mock<any, any>; deleteProjects?: jest.Mock<any, any>; };
    let state;
    // @ts-ignore
    let store;

    // let wrapper: Wrapper<ProjectView>;

    beforeEach(() => {
        state = {
            projects: [
                {id: 1, name: 'test-project-1', tasks: [{name: 'Task1'}]},
                {id: 2, name: 'test-project-2', tasks: [{name: 'Task1'}]}
            ]
        };

        actions = {
            createProject: jest.fn(),
            getProjects: jest.fn(),
            deleteProjects: jest.fn()
        };

        store = new Vuex.Store({
            //@ts-ignore
            modules: {
                projects: {
                    state,
                    actions
                }
            }
        });
        // wrapper = shallowMount(ProjectView, {store, localVue});
    });

    it('is a vue instance', () => {
        // @ts-ignore
        const wrapper = shallowMount(ProjectView, {store, localVue});

        expect(wrapper.isVueInstance()).toBe(true);
    });


    it('calls store action createProject when create-button is clicked', () => {
        // @ts-ignore
        const wrapper = shallowMount(ProjectView, {store, localVue});

        const createBtn = wrapper.find('.project-view__project_create > span');
        createBtn.trigger('click');
        expect(actions.createProject).toHaveBeenCalled();
    });
});
