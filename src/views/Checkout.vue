<template>
  <div class="checkout">
    <Navbar />
    <div class="back" @click="back()">Go back</div>
    <div class="content flex">
      <form class="form">
        <div class="billing">
          <h3>Checkout</h3>
          <h5>Billing Details</h5>
          <div class="billing-details flex flex-row">
            <div class="flex flex-column">
              <label for="">Name</label>
              <input class="right" type="text" />
            </div>
            <div class="flex flex-column">
              <label for="">Email Address</label>
              <input type="email" />
            </div>
            <div class="flex flex-column">
              <label for="">Phone Number</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="shipping">
          <h5>Shipping Details</h5>
          <div class="shipping-details flex flex-column">
            <div class="flex flex-column">
              <label for="">Address</label>
              <input class="long" type="text" />
            </div>
            <div class="flex flex-row">
              <div class="flex flex-column">
                <label for="">ZIP Code</label>
                <input class="right" type="text" />
              </div>
              <div class="flex flex-column">
                <label for="">City</label>
                <input type="text" />
              </div>
            </div>

            <div class="flex flex-column">
              <label for="">Country</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="payment">
          <h5>Payment Details</h5>
          <div class="payment-details flex flex-row">
            <div class="left flex flex-column">
              <div class="left-pay">
                <label class="bottom">Payment Method</label>
              </div>
              <div class="flex flex-column">
                <label>e-money Number</label>
                <input class="right" type="text" />
              </div>
            </div>

            <div class="right flex flex-column">
              <div class="right-details flex flex-column">
                <input type="text" />
                <input id="emoney" class="checkbox" type="radio" checked />
                <label for="emoney"></label>
                <p class="placeholder">e-Money</p>
              </div>
              <div class="right-details flex flex-column">
                <input type="text" />
                <input id="cash" class="checkbox" type="radio" />
                <label for="cash"></label>
                <p class="placeholder">Cash on Delivery</p>
              </div>
              <div class="flex flex-column">
                <label for="">e-money PIN</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="pay flex flex-column">
        <div class="content" v-for="(product, index) in getCart" :key="index">
          <div>
            <h4 class="bottom">Summary</h4>
          </div>
          <section class="content-details flex flex-row">
            <div>
              <img
                class="img"
                src="../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                alt="img"
              />
            </div>
            <div class="info flex flex-row">
              <div class="title-price flex flex-column">
                <div>
                  <h4>{{ product.name }}</h4>
                </div>
                <div class="price-small">$ {{ product.price }}</div>
              </div>
              <div class="count">x{{ product.quantity }}</div>
            </div>
          </section>

          <div class="detail flex flex-row">
            <div class="grey">Total</div>
            <div class="price">$ {{ totalPrice() }}</div>
          </div>
          <div class="detail flex flex-row">
            <div class="grey">Shipping</div>
            <div class="price">$ 50</div>
          </div>
          <div class="detail flex flex-row bottom">
            <div class="grey">VAT (Included)</div>
            <div class="price">$ {{ VATPrice() }}</div>
          </div>
          <div class="detail flex flex-row bottom">
            <div class="grey">Grand total</div>
            <div class="price">
              <span>$ {{ grandPrice() }}</span>
            </div>
          </div>
          <button type="submit" @click="thankyouModal" class="btn-orange btn">
            Continue & pay
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Checkout",
  components: { Navbar, Footer },
  methods: {
    ...mapActions(["toggleCartModal"]),

    thankyouModal() {
      this.TOGGLE_THANKYOU_MODAL();
    },

    back() {
      history.back();
    },

    hasProductInCart() {
      return this.getCart.length > 0;
    },

    // shipping 50$ included
    totalPrice() {
      return this.getCart.reduce((current, next) => current + next.price, 0);
    },

    // shipping 50$ excluded
    VATPrice() {
      if (this.hasProductInCart()) {
        return (
          this.getCart.reduce((current, next) => current + next.price, 0) * 0.2
        ).toFixed(2);
      } else {
        this.getCart.reduce((current, next) => current + next.price, 0);
      }
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
.checkout {
  .back {
    width: 1110px;
    margin: 0 auto;
    margin-top: 128px;
    margin-bottom: 38px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
      width: 689px;
      margin: 128px 39px 38px 39px;
    }
  }

  .back:hover {
    color: #d87d4a;
    font-weight: bold;
  }

  .content {
    width: 1110px;
    margin: 0 auto;
    gap: 30px;
    margin-bottom: 110px;
    flex-direction: row;
    @media only screen and (max-width: 768px) {
      width: 650px;
      margin: 50px 39px;
      flex-direction: column;
      gap: 30px;
    }

    .form {
      width: 730px;
      height: 1126px;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 54px 48px;
      @media only screen and (max-width: 768px) {
        width: 689px;
        padding: 30px 27.5px;
      }

      .billing {
        .billing-details {
          flex-wrap: wrap;

          input {
            cursor: pointer;
          }
        }
      }

      .shipping {
        .shipping-details {
          flex-wrap: wrap;
          input {
            cursor: pointer;
          }
        }
      }

      .payment {
        margin-top: 61px;

        .left {
          justify-content: space-between;
        }

        .right {
          .right-details {
            position: relative;

            input {
              cursor: pointer;
            }

            .placeholder {
              position: absolute;
              top: 18px;
              left: 60px;
              font-weight: bold;
            }

            input[type="radio"] {
              display: none;
            }

            label {
              position: relative;
              position: absolute;
              top: 20px;
              left: 12px;
              cursor: pointer;
              font-weight: bold;
            }

            label:nth-last-child(1) {
              padding-right: 0;
            }

            label::before {
              content: "";
              border: 2px solid grey;
              display: inline-block;
              width: 20px;
              height: 20px;
              margin: -8px 20px;
              margin-left: 10px;
              border-radius: 50%;
            }

            label::after {
              content: "";
              display: inline-block;
              position: absolute;
              width: 10px;
              height: 10px;
              background: rgba(216, 125, 74, 0);
              left: 17px;
              top: 12px;
              margin: -8px 20px;
              margin-left: 0;
              border-radius: 50%;

              transition: all 0.4s;
            }

            input[type="radio"]:checked + label::after {
              background: rgba(216, 125, 74, 1);
            }
          }
        }
      }
    }

    .pay {
      width: 350px;
      height: 612px;
      background-color: #ffffff;
      border-radius: 8px;
      @media only screen and (max-width: 768px) {
        width: 689px;
      }

      .content {
        padding: 32px 33px;
        @media only screen and (max-width: 768px) {
          padding: 0 33px 32px 33px;
          width: 623px;
        }

        .bottom {
          margin-bottom: 31px;
        }

        &-details {
          margin-bottom: 24px;
          @media only screen and (max-width: 768px) {
            width: 623px;
          }

          .img {
            width: 64px;
            height: 64px;
            border-radius: 8px;
          }

          .info {
            align-items: center;
            @media only screen and (max-width: 768px) {
              width: 559px;
            }

            .title-price {
              justify-content: flex-start;
              margin-left: 16px;
              @media only screen and (max-width: 768px) {
                width: 100px;
              }
            }

            .count {
              font-weight: bold;
              opacity: 0.5;
              margin-left: 114px;
              @media only screen and (max-width: 768px) {
                margin-left: 355px;
              }
            }
          }
        }

        .detail {
          justify-content: space-between;
          width: 284px;
          height: 25px;
          margin-bottom: 8px;
          @media only screen and (max-width: 768px) {
            width: 550px;
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

        .bottom {
          margin-bottom: 24px;
        }

        .btn {
          width: 284px;
          @media only screen and (max-width: 768px) {
            width: 550px;
          }
        }
      }
    }
  }
}
</style>