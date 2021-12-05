import { createStore } from 'vuex';
import { projectFirestore } from "../firebase/config";

export default createStore({
  state: {
    productData: [],
    cartModal: null,
    thankyouModal: null,
    currentProductArray: null,
  },
  mutations: {
    TOGGLE_CART_MODAL(state) {
      state.cartModal = !state.cartModal;
    },

    TOGGLE_THANKYOU_MODAL(state) {
      state.thankyouModal = !state.thankyouModal;
    },

    SET_CART_DATA(state, payload) {
      state.productData.push(payload);
    },

    SET_CURRENT_PRODUCT(state, payload) {
      state.currentProductArray = state.productData.filter(product => {
        return product.productId === payload;
      })
    },
  },
  actions: {
    async GET_HEADPHONES({ commit, state }) {
      const getData = projectFirestore.collection('headphones');
      const results = await getData.get();
      results.forEach(doc => {
        if (!state.productData.some(product => product.docId === doc.id)) {
          const data = {
            docId: doc.id,
            productId: doc.data().productId,
            title: doc.data().title,
            text: doc.data().text,
            features1: doc.data().features1,
            features2: doc.data().features2,
            boxqty1: doc.data().boxqty1,
            boxqty2: doc.data().boxqty2,
            boxname1: doc.data().boxname1,
            boxname2: doc.data().boxname2,
            boxname3: doc.data().boxname3,
            boxname4: doc.data().boxname4,
            price: doc.data().price,
            total: doc.data().total,
          };
          commit('SET_CART_DATA', data);
        }
      });
    },

    async GET_SPEAKERS({ commit, state }) {
      const getData = projectFirestore.collection('speakers');
      const results = await getData.get();
      results.forEach(doc => {
        if (!state.productData.some(product => product.docId === doc.id)) {
          const data = {
            docId: doc.id,
            productId: doc.data().productId,
            title: doc.data().title,
            text: doc.data().text,
            features1: doc.data().features1,
            features2: doc.data().features2,
            boxqty1: doc.data().boxqty1,
            boxqty2: doc.data().boxqty2,
            boxname1: doc.data().boxname1,
            boxname2: doc.data().boxname2,
            boxname3: doc.data().boxname3,
            boxname4: doc.data().boxname4,
            boxname5: doc.data().boxname5,
            price: doc.data().price,
            total: doc.data().total,
          };
          commit('SET_CART_DATA', data);
        }
      });
    },

    async GET_EARPHONES({ commit, state }) {
      const getData = projectFirestore.collection('earphones');
      const results = await getData.get();
      results.forEach(doc => {
        if (!state.productData.some(product => product.docId === doc.id)) {
          const data = {
            docId: doc.id,
            productId: doc.data().productId,
            title: doc.data().title,
            text: doc.data().text,
            features1: doc.data().features1,
            features2: doc.data().features2,
            boxqty1: doc.data().boxqty1,
            boxqty2: doc.data().boxqty2,
            boxqty6: doc.data().boxqty6,
            boxname1: doc.data().boxname1,
            boxname2: doc.data().boxname2,
            boxname3: doc.data().boxname3,
            boxname4: doc.data().boxname4,
            boxname5: doc.data().boxname5,
            price: doc.data().price,
            total: doc.data().total,
          };
          commit('SET_CART_DATA', data);
        }
      });
    }
  },
  modules: {
  }
})
