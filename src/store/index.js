import { createStore } from 'vuex'

export default createStore({
  state: {
    cartModal: null,
  },
  mutations: {
    TOGGLE_CART(state) {
      state.cartModal = !state.cartModal;
    }
  },
  actions: {
  },
  modules: {
  }
})
