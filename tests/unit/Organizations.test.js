import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import * as chai from 'chai'
import Vue from 'vue'
import Vuex from 'vuex'
import Organizations from '@/views/Organizations'

Vue.config.silent = true

Vue.use(Vuetify)
Vue.use(Vuex)

const jestExpect = global.expect
const expect = chai.expect

describe('Organizations', () => {
  
  let mutations
  let store
  
  beforeEach(() => {
    mutations = {
      setGameId: jest.fn(),
      setOrgId: jest.fn()
    }
    store = new Vuex.Store({
      mutations
    })
  })
  
  it('emit next event when tile is clicked', () => {
    const wrapper = mount(Organizations)
    expect(wrapper.find(Organizations).isEmpty()).to.eql(false)
  })
  
  it('Tiles appear', () => {
    const wrapper = mount(Organizations)
    expect(wrapper.findAll('div[role=listitem]').length).to.eql(2)
  })
  
  it('Click emits next event', () => {
    const wrapper = mount(Organizations, {
      store
    })
    const tile = wrapper.find('.v-list__tile')
    tile.trigger('click')
    expect(wrapper.emitted().next).to.be.ok
  })
  
  it('Click calls the correct store methods', () => {
    const wrapper = mount(Organizations, {
      store
    })
    const tile = wrapper.find('.v-list__tile')
    tile.trigger('click')
    jestExpect(mutations.setGameId).toHaveBeenCalled()
    jestExpect(mutations.setOrgId).toHaveBeenCalled()
  })
  
})
