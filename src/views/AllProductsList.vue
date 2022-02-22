<template>
  <div class="allproducts">
    <Navbar />
    <transition name="success">
      <SuccessNotification v-if="showSuccessNotification" />
    </transition>
    <div class="overlay" v-if="showModal" @click="showModal = false"></div>
    <div v-if="showModal">
      <button @click="showModal = false">X</button>
    </div>
    <ul class="allproducts-list">
      <li v-for="(product, index) in products" :key="index" class="product">
        <img :src="product.image" alt="image" class="product-image" />
        <router-link :to="{ name: 'ProductDetail' }">
          <h2 class="title">{{ product.name }}</h2>
        </router-link>
        <div class="product-price">
          <span>$ {{ product.price }}</span>
        </div>
        <button class="btn btn-orange" @click="addProductToCart(product)">
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SuccessNotification from "../components/SuccessNotification.vue";
import Navbar from "../components/Navbar.vue";
export default {
  props: ["products"],
  components: {
    SuccessNotification,
    Navbar,
  },
  data() {
    return {
      showSuccessNotification: false,
    };
  },
  methods: {
    ...mapActions(["addProduct", "toggleModal"]),

    showModal() {
      this.toggleModal = !this.toggleModal;
    },

    addProductToCart(product) {
      this.addProduct(product);
      this.showSuccessNotification = true;
      setTimeout(() => (this.showSuccessNotification = false), 5000);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
// Success Notification transition
.success-enter-from {
  opacity: 0.5;
  transform: translateY(110px);
}
.success-enter-to {
  opacity: 1;
  transform: translateY(130px);
}
.success-enter-active {
  transition: all 3s linear;
}

.allproducts {
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &-list {
    max-width: 1000px;

    margin: 150px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;

    .product {
      width: 300px;
      background-color: #fff;
      list-style: none;
      box-sizing: border-box;
      padding: 1em;
      margin: 1em 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 7px;
      border: 1px solid rgb(204, 204, 204);
      &-image {
        width: 270px;
        height: 200px;
      }
    }
  }
}
</style>