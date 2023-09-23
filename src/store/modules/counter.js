export default {
  state() {
    return {
      counter: 1
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    add(state, payload) {
      state.counter += payload.value
    }
  },
  getters: {
    counter(state) {
      if (state.counter > 30) {
        return state.counter + '!'
      }
      return state.counter
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('add', {
          value: 10
        })
      }, 150)
    }
  }
}