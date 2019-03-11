import {shallowMount} from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    const wrapper = shallowMount(App);

    it('has a button', () => {
        expect(wrapper.contains('img')).toBe(true);
    });
});
