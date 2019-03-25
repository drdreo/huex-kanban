import {shallowMount} from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    const wrapper = shallowMount(App);

    it('is a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });
});
