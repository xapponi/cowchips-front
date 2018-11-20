import { shallowMount } from '@vue/test-utils';
//import HelloWorld from '@/components/HelloWorld.vue';
import HomePage from '@/components/HomePage.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';
import * as chai from 'chai';

Vue.use(Vuetify);

const jestExpect = global.expect;
const expect = chai.expect

describe('HomePage.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HomePage);
    console.log(wrapper.text());
    expect(wrapper.text()).to.include('Welcome to the CowChips4Charity event page');
  });
});
