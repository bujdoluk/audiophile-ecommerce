<template>
  <div class="allproducts">
    <Navbar />
    <transition name="success">
      <SuccessNotification v-if="showSuccessNotification" />
    </transition>

    <div class="overlay" v-if="showModal" @click="showModal = false"></div>
    <div class="detail-info flex flex-column" v-if="showModal">
      <span class="detail-info-close close-modal" @click="showModal = false">
        &#x2715;
      </span>
      <div class="detail-info-title">{{ current.title }}</div>

      <img :src="current.image" :alt="current.name" class="product-image" />

      <div class="detail-info-text">{{ current.text }}</div>

      <Stars :rate="rated(current.stars)" :reviews="current.reviews" />
      <ul>
        <li>{{ current.boxname1 }}</li>
        <li>{{ current.boxname2 }}</li>
        <li>{{ current.boxname3 }}</li>
        <li>{{ current.boxname4 }}</li>
      </ul>

      <div class="price">$ {{ current.price }}</div>
      <div class="detail-info-sold">Sold: {{ current.sold }}</div>
    </div>

    <ul class="allproducts-list" v-if="!showModal">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="product"
        @click="addCurrentProduct(product)"
      >
        <img :src="product.image" alt="image" class="product-image" />
        <button class="btn btn-white" @click="showModal = true">
          View Details
        </button>
        <button
          class="btn btn-orange"
          @click="
            addProductToCart(product);
            showModal = false;
          "
        >
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SuccessNotification from "../components/SuccessNotification.vue";
import Navbar from "../components/Navbar.vue";
import Stars from "../components/Stars.vue";

export default {
  props: ["products"],
  components: {
    SuccessNotification,
    Navbar,
    Stars,
  },
  data() {
    return {
      showSuccessNotification: false,
      showModal: false,
    };
  },
  methods: {
    ...mapActions([
      "addProduct",
      "currentProduct",
      "toggleModal",
      "emptyCurrentProduct",
    ]),

    addCurrentProduct(product) {
      this.currentProduct(product);
    },

    emptyCurrent(product) {
      this.emptyCurrentProduct(product);
    },

    addProductToCart(product) {
      this.addProduct(product);
      this.showSuccessNotification = true;
      setTimeout(() => (this.showSuccessNotification = false), 5000);
    },

    rated(rate) {
      return `${rate * 20}%`;
    },
  },
  computed: {
    ...mapGetters({ current: "getCurrentProduct" }),
  },
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
  overflow-x: hidden;

  &-list {
    max-width: 1000px;
    height: 70%;

    margin: 110px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;

    .product {
      width: 300px;
      height: 420px;
      background-color: #fff;
      list-style: none;
      box-sizing: border-box;
      padding: 1em;
      margin: 1em 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      border: 1px solid rgb(204, 204, 204);
      justify-content: space-evenly;
      &-image {
        width: 270px;
        height: 250px;
        border-radius: 8px;
      }
    }
  }
  .overlay {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .detail-info {
    width: 400px;
    height: 750px;
    position: relative;
    z-index: 101;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    top: 150px;
    border-radius: 8px;
    justify-content: space-evenly;

    @media only screen and (max-width: 376px) {
      width: 300px;
      height: 650px;
    }

    li {
      list-style: decimal;
      margin-left: 15px;
    }

    &-close {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    &-image {
      width: 300px;
      height: 250px;
      object-fit: cover;
      border-radius: 8px;
    }

    &-title {
      font-size: 20px;
      font-weight: bold;
    }

    &-text {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      opacity: 0.5;
    }

    &-sold {
      text-decoration: underline;
    }

    .stars-box {
      display: flex;
      flex-direction: column;
    }
    .stars {
      width: 60%;
    }
    .star-bg {
      fill: #c4c4c4;
    }
    .star-fill {
      fill: #f2c94c;
    }
    .star-path {
      fill: #ffffff;
    }
    .total-stars {
      box-sizing: border-box;
      padding: 0.5em 0;
    }
  }
}
</style>