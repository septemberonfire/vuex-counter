import {createStore} from 'vuex'
import counterModule from './modules/counter'

export default createStore({
  modules: {
    count: counterModule,
  },
  state: {
    appTitle: 'vuex counter'
  }, 
  getters: {
    uppercaseTitle(state) {
      return state.appTitle.toUpperCase()
    }
  }
})