import { createStore } from 'vuex'

export default createStore({
  state: {
    cartModal: null,
    thankyouModal: null
  },
  mutations: {
    TOGGLE_CART_MODAL(state) {
      state.cartModal = !state.cartModal;
    },

    TOGGLE_THANKYOU_MODAL(state) {
      state.thankyouModal = !state.thankyouModal;
    }
  },
  actions: {
    async GET_EARPHONES({ state }) {

    }
  },
  modules: {
  }
})
