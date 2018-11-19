import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';
import * as chai from 'chai';

Vue.use(Vuetify);

const jestExpect = global.expect;
const expect = chai.expect

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).to.include('Welcome to Vuetify');
  });
});
