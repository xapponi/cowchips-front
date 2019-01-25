import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import * as chai from 'chai'
import Vuex from 'vuex'
import Vue from 'vue'
import Login from '@/views/Login'
import axios from 'axios'

Vue.config.silent = true

Vue.use(Vuex)
Vue.use(Vuetify)

const jestExpect = global.expect
const expect = chai.expect

describe('Login screen', () => {
  
  let state
  let store
  let loginMock
  
  beforeEach(() => {
    
    loginMock = jest.fn()
  
    axios.post = jest.fn()
    const mockRes = {
      data: {
        blah: 'blah'
      }
    }
    axios.post.mockResolvedValue(mockRes)
    
    state = {}
    
    let actions = {
      login: loginMock
    }
    
    store = new Vuex.Store({
      state,
      actions
    })
  })
  
  it('Login shows the login form', () => {
    const wrapper = mount(Login, {
      store
    })
    expect(wrapper.text()).to.include('Login')
    expect(wrapper.find('#email').exists()).to.eql(true)
    expect(wrapper.find('#password').exists()).to.eql(true)
  })
  
  it('Login calls the login action on button click', () => {
    const wrapper = mount(Login, {
      store
    })
    
    const loginInfo = {
      email: 'a@b.com',
      password: 'password',
    }
    
    wrapper.setData(loginInfo)
    
    const submitButton = wrapper.find('#submit')
    submitButton.trigger('click')
    jestExpect(loginMock).toHaveBeenCalledWith(jestExpect.anything(), loginInfo, undefined)
  })
  
})
