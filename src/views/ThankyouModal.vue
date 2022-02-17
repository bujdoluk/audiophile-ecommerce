<template>
  <div @click="checkClick" ref="modalWrapThankYou" class="modal-thankyou-wrap">
    <div class="modal-thankyou-content">
      <div class="thankyou flex flex-column">
        <div class="orange flex flex-row">
          <div class="white">&#10003;</div>
        </div>
        <div>
          <h3>
            Thank you<br />
            for your order
          </h3>
        </div>
        <div>
          <p class="grey">You will recieve an email confirmation shortly.</p>
        </div>
        <div class="payment-detail flex">
          <div class="left">
            <div class="content flex flex-column">
              <div
                class="border flex flex-row"
                v-for="(product, index) in getCart.slice(0, 1)"
                :key="index"
              >
                <img class="img-cart" :src="product.image" />
                <div>
                  <div>{{ product.name }}</div>
                  <div class="item">$ {{ product.price }}</div>
                </div>
                <div class="item">x{{ product.quantity }}</div>
              </div>
              <div class="item">
                <p>and {{ getCart.length - 1 }} other item(s)</p>
              </div>
            </div>
          </div>
          <div class="right flex flex-column">
            <div class="grand">grand total</div>
            <div>$ {{ grandPrice() }}</div>
          </div>
        </div>
        <div>
          <router-link
            @click="closeThankYou"
            class="link"
            :to="{ name: 'Home' }"
          >
            <button class="btn-orange btn">Back to Home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ThankyouModal",
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["toggleThankYouModal"]),

    hasProductInCart() {
      return this.getCart.length > 0;
    },

    grandPrice() {
      if (this.hasProductInCart()) {
        return (
          this.getCart.reduce((current, next) => current + next.price, 0) *
            1.2 +
          50
        ).toFixed(2);
      } else {
        this.getCart.reduce((current, next) => current + next.price, 0);
      }
    },

    closeThankYou() {
      this.toggleThankYouModal();
    },
  },
  computed: {
    ...mapGetters(["getCart"]),
  },
};
</script>

<style lang="scss" scoped>
.modal-thankyou-wrap {
  position: fixed;
  top: 96px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  @media only screen and (max-width: 376px) {
    width: 376px;
  }

  .modal-thankyou-content {
    position: relative;
    z-index: 5;
    max-width: 100vw;
    width: 100%;
    height: 1200px;
    background-color: transparent;
    @media only screen and (max-width: 376px) {
      width: 376px;
    }

    .thankyou {
      padding: 48px 48px;
      position: absolute;
      top: 120px;
      left: 50%;
      transform: translate(-50%, 10%);
      margin: 0 auto;
      border-radius: 8px;
      background: #ffffff;
      width: 540px;
      height: 581px;
      z-index: 10;
      gap: 24px;
      @media only screen and (max-width: 376px) {
        width: 327px;
        height: 620px;
        padding: 32px 32px;
      }

      .orange {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #d87d4a;
        z-index: 10;
        justify-content: center;
        align-items: center;
      }

      .white {
        color: #ffffff;
        transform: scale(200%);
      }

      .grey {
        margin-top: -20px;
        color: #000000;
        opacity: 0.5;
      }

      .payment-detail {
        width: 444px;
        height: 140px;
        z-index: 10;
        border-radius: 8px;
        background-color: transparent;
        font-weight: bold;
        flex-direction: row;
        @media only screen and (max-width: 376px) {
          flex-direction: column;
          width: 263px;
          height: 232px;
        }

        .left {
          width: 246px;
          background: #f1f1f1;
          color: #000000;
          border-radius: 8px 0 0 8px;
          @media only screen and (max-width: 376px) {
            width: 263px;

            border-radius: 8px 8px 0 0;
          }

          .content {
            padding: 24px;
            .border {
              color: #000000;
              border-bottom: 1px solid grey;
              margin-bottom: 12px;
              justify-content: space-between;
              align-items: center;

              .img-cart {
                width: 2.8rem;
                height: 3.2rem;
              }
            }

            .item {
              color: #000000;
              opacity: 0.5;
              margin-bottom: 8px;

              p {
                text-align: center;
              }
            }
          }
        }

        .right {
          width: 198px;
          background-color: #000000;
          color: #ffffff;
          border-radius: 0 8px 8px 0;
          align-items: flex-start;
          justify-content: center;
          padding-left: 32px;
          font-size: 18px;
          @media only screen and (max-width: 376px) {
            width: 263px;
            height: 92px;
            border-radius: 0 0 8px 8px;
          }

          .grand {
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
            margin-bottom: 8px;
            text-transform: uppercase;
            color: #ffffff;
            mix-blend-mode: normal;
            opacity: 0.5;
          }
        }
      }

      .btn {
        width: 444px;
        height: 48px;
        @media only screen and (max-width: 376px) {
          width: 263px;
        }
      }
    }
  }
}
</style>