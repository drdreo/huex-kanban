import {shallowMount, RouterLinkStub} from '@vue/test-utils';
import Project from '@/components/Project/Project.vue';

describe('Project.vue', () => {
    const wrapper = shallowMount(Project, {
        propsData: {
            name: 'test-project'
        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    });

    it('has name in heading', () => {
        expect(wrapper.find("h3").text()).toBe("test-project");
    });
});
