import {shallowMount, RouterLinkStub} from '@vue/test-utils';
import Project from '@/components/Project/Project.vue';

describe('Project.vue', () => {
    const wrapper = shallowMount(Project, {
        propsData: {
            id: '1',
            name: 'test-project',
            tasks: [{test: 'test'}]

        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    });

    it('has name in title', () => {
        expect(wrapper.find('.title-content').text()).toBe('test-project');
    });

    it('has amount of tasks icon', () => {
        expect(wrapper.find('.tasks').text()).toBe('1');
    });
});
