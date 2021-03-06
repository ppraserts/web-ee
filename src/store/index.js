import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import application from './modules/application'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
      application
    },
    strict: debug
  })