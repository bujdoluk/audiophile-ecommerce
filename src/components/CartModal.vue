<template>
  <div class="modal-wrap">
    <form class="modal-content">
      <span class="empty-cart" v-if="!hasProductInCart()"
        >No products added. Add some products to the cart.</span
      >
      <div class="cart flex flex-column" v-if="hasProductInCart()">
        <div class="cart-detail flex flex-row">
          <div class="cart-name">Cart ({{ totalQuantity() }})</div>
          <div class="grey" @click="removeAllProductsFromCart()">
            Remove all
          </div>
        </div>

        <div v-for="(product, index) in getCart" :key="index">
          <section class="content-details flex flex-row">
            <div>
              <img class="img" :src="product.image" alt="img" />
            </div>
            <div class="info flex flex-row">
              <div class="title-price flex flex-column">
                <div>
                  <h6>{{ product.name }}</h6>
                </div>
                <div class="price-small">{{ product.price }} $</div>
              </div>
              <div class="count">{{ product.quantity }}x</div>
            </div>
          </section>
        </div>

        <div class="detail flex flex-row">
          <div class="grey">Total</div>
          <div class="price">{{ totalPrice() }} $</div>
        </div>

        <router-link @click="closeCart" class="link" :to="{ name: 'Checkout' }">
          <button class="btn-orange btn">Checkout</button>
        </router-link>
        <span class="close-modal" @click="closeCart()">&#x2715;</span>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartModal",
  components: { Navbar },
  methods: {
    ...mapActions(["toggleCartModal"]),

    hasProductInCart() {
      return this.getCart.length > 0;
    },

    totalPrice() {
      let total = 0;
      this.getCart.forEach((item, index) => {
        total += item.price * item.quantity;
      });
      return total;
    },

    totalQuantity() {
      let totalQuantity = 0;
      this.getCart.forEach((item, index) => {
        totalQuantity += item.quantity;
      });
      return totalQuantity;
    },

    removeAllProductsFromCart() {
      window.localStorage.clear();
      return (this.getCart.length = 0);
    },

    closeCart() {
      this.toggleCartModal();
    },
  },
  computed: {
    ...mapGetters(["getCart"]),
  },
};
</script>

<style lang="scss" scoped>
.modal-wrap {
  position: fixed;
  top: 96px;
  left: 0;
  width: 100vw;
  //height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  @media only screen and (max-width: 376px) {
    width: 376px;
  }

  .modal-content {
    position: relative;
    z-index: 5;
    max-width: 100vw;
    width: 100%;
    height: 1200px;
    background-color: transparent;
    @media only screen and (max-width: 376px) {
      width: 376px;
    }

    .cart {
      padding: 32px 33px;
      position: absolute;
      z-index: 10;
      top: 128px;
      right: 165px;
      border-radius: 8px;
      background: #ffffff;
      max-width: 377px;
      min-height: 230px;
      max-height: 650px;
      z-index: 10;
      // Scrollbar
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.5) #d87d4a;
      @media only screen and (max-width: 376px) {
        width: 327px;
        right: 0;
        left: 24px;
      }

      &-detail {
        justify-content: space-between;
        margin-bottom: 31px;

        .cart-name {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          letter-spacing: 1.28571px;
          text-transform: uppercase;
          color: #000000;
        }
        .grey {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          text-decoration-line: underline;
          mix-blend-mode: normal;
          color: #000000;
          opacity: 0.5;
          cursor: pointer;
          margin-right: 20px;
        }
        .grey:hover {
          color: #d87d4a;
        }
      }

      // Content Details //

      .content-details {
        margin-bottom: 24px;
        width: 313px;

        .img {
          width: 64px;
          height: 64px;
          border-radius: 8px;
        }

        .info {
          align-items: center;
          width: 260px;
          justify-content: space-between;
          @media only screen and (max-width: 376px) {
            width: 210px;
          }

          .title-price {
            justify-content: flex-start;
            margin-left: 16px;
          }

          .count {
            font-weight: bold;
            opacity: 0.5;
            margin-left: 114px;
          }
        }
      }

      // Total //

      .detail {
        justify-content: space-between;
        width: 313px;
        height: 25px;
        margin-bottom: 24px;
        @media only screen and (max-width: 376px) {
          width: 271px;
        }
        .grey {
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 25px;
          color: #000000;
          mix-blend-mode: normal;
          opacity: 0.5;
          text-transform: uppercase;
        }

        .price {
          span {
            text-transform: uppercase;
            color: #d87d4a;
          }
        }
      }

      .btn {
        width: 313px;
        cursor: pointer;
        @media only screen and (max-width: 376px) {
          width: 271px;
        }
      }
    }

    .empty-cart {
      padding: 32px 33px;
      position: absolute;
      z-index: 10;
      top: 128px;
      right: 165px;
      border-radius: 8px;
      background: #ffffff;
      max-width: 377px;
      min-height: 100px;
      z-index: 10;
      @media only screen and (max-width: 376px) {
        width: 328px;
        left: 24px;
      }
    }

    // Styling scollbar on Chrome, Edge and Safari
    *::-webkit-scrollbar {
      width: 12px;
    }

    *::-webkit-scrollbar-track {
      background: orange;
    }

    *::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      border: 3px solid #d87d4a;
    }
  }
}
</style>