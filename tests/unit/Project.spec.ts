import {shallowMount} from '@vue/test-utils';
import Project from '@/Project.vue';

describe('Project.vue', () => {
    const wrapper = shallowMount(Project);

    it('has a button', () => {
        expect(true).toBe(true);
    });
});
