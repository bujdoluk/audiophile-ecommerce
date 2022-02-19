<template>
  <div class="products">
    <Navbar />
    <transition name="success">
      <SuccessNotification v-if="showSuccessNotification" />
    </transition>

    <div class="back" @click="back()">Go back</div>
    <div class="content flex flex-column">
      <section class="product flex">
        <div class="product-left flex">
          <img class="img-product" :src="currentProduct.image" alt="product" />
        </div>
        <div class="product-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">{{ currentProduct.title }}</div>
          <div class="text">
            {{ currentProduct.text }}
          </div>
          <div class="price">$ {{ currentProduct.price }}</div>
          <div class="counter flex flex-row">
            <form class="buttons flex flex-row">
              <div
                class="value-button flex flex-column"
                v-on:click="decrease(currentProduct)"
              >
                -
              </div>
              <div class="input">{{ counter }}</div>
              <div
                class="value-button flex flex-column"
                v-on:click="increase(currentProduct)"
              >
                +
              </div>
            </form>
            <button
              @click="addProductToCart(currentProduct)"
              class="btn-orange"
            >
              add to cart
            </button>
          </div>
        </div>
        <div></div>
      </section>

      <section class="features flex">
        <div class="features-left flex flex-column">
          <div class="title">Features</div>
          <div class="text-features">
            {{ currentProduct.features1 }}
          </div>
          <div class="text-features">
            {{ currentProduct.features2 }}
          </div>
        </div>
        <div class="features-right flex">
          <div class="title">in the box</div>
          <div class="description">
            <ul class="flex flex-column">
              <li class="flex">
                <span>{{ currentProduct.boxqty2 }}x</span>
                <p>{{ currentProduct.boxname1 }}</p>
              </li>
              <li class="flex">
                <span>{{ currentProduct.boxqty6 }}x</span>
                <p>{{ currentProduct.boxname2 }}</p>
              </li>
              <li class="flex">
                <span>{{ currentProduct.boxqty1 }}x</span>
                <p>{{ currentProduct.boxname3 }}</p>
              </li>
              <li class="flex">
                <span>{{ currentProduct.boxqty1 }}x</span>
                <p>{{ currentProduct.boxname4 }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="imgs flex">
        <div class="left flex flex-column">
          <div>
            <img
              class="img-left"
              :src="currentProduct.imagedesktoplefttop"
              alt="photo-left-1"
            />
          </div>
          <div>
            <img
              class="img-left"
              :src="currentProduct.imagedesktopleftbottom"
              alt="photo-left-2"
            />
          </div>
        </div>
        <div class="right">
          <img
            class="img-right"
            :src="currentProduct.imagedesktopright"
            alt="photo-right"
          />
        </div>
      </section>
      <Youmaylike />
      <Categories />
      <Gear />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Gear from "../components/Gear.vue";
import Footer from "../components/Footer.vue";
import Categories from "../components/Categories.vue";
import Youmaylike from "../components/Youmaylike.vue";
import { mapActions, mapGetters } from "vuex";
import SuccessNotification from "../components/SuccessNotification.vue";
export default {
  name: "ProductDetail",
  components: {
    Navbar,
    Gear,
    Footer,
    Categories,
    Youmaylike,
    SuccessNotification,
  },
  data() {
    return {
      counter: 1,
      showSuccessNotification: false,
    };
  },
  methods: {
    ...mapActions(["addProduct"]),

    addProductToCart(product) {
      this.addProduct(product);
      console.log(product.quantity);
      this.showSuccessNotification = true;
      setTimeout(() => (this.showSuccessNotification = false), 5000);
    },

    back() {
      history.back();
    },

    increase(product) {
      this.counter++;
      product.quantity++;
      console.log(product.quantity++);
    },

    decrease(product) {
      if (this.counter > 1) {
        this.counter -= 1;
        product.quantity--;
      }
    },
  },
  computed: {
    ...mapGetters({ currentProduct: "getCurrentProduct" }),
  },
};
</script>

<style lang="scss" scoped>
.products {
  background: #0e0e0e;
  height: 95px;
  margin: 0 auto;

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

  // .success-leave-from {
  //   opacity: 1;
  //   transform: translateY(130px);
  // }

  // .success-leave-to {
  //   opacity: 0;
  //   transform: translateY(100px);
  //   transition: all 1.5s ease-out;
  // }

  .title {
    height: 240px;
    color: #ffffff;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
  }

  .back {
    width: 1110px;
    margin: 0 auto;
    margin-top: 128px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
      margin-left: 39px;
      width: 768px;
    }
    @media only screen and (max-width: 376px) {
      margin-left: 24px;
      width: 376px;
    }
  }

  .back:hover {
    color: #d87d4a;
    font-weight: bold;
  }

  .content {
    width: 1110px;
    margin: 0 auto;
    margin-top: -54px;

    .product {
      margin-top: 110px;
      flex-direction: row;
      @media only screen and (max-width: 768px) {
        width: 768px;
        margin: 0 39px;
        margin-top: 110px;
      }
      @media only screen and (max-width: 376px) {
        flex-direction: column;
        margin-top: 90px;
      }
      .product-left {
        flex-basis: 50%;
        @media only screen and (max-width: 768px) {
          width: 340px;
          flex-basis: 45%;
        }

        @media only screen and (max-width: 376px) {
          width: 300px;
          justify-content: center;
          margin-bottom: 32px;
        }

        .img-product {
          border-radius: 8px;
          width: 555px;
          height: 560px;
          @media only screen and (max-width: 768px) {
            width: 281px;
            height: 480px;
            object-fit: cover;
          }
          @media only screen and (max-width: 376px) {
            width: 327px;
            height: 327px;
          }
        }
      }

      .product-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;
        @media only screen and (max-width: 768px) {
          width: 340px;
          padding-left: 0;
          gap: 32px;
        }
        @media only screen and (max-width: 376px) {
          width: 327px;
          padding-left: 0;
        }

        .counter {
          gap: 16px;
          .buttons {
            .number {
              width: 40px;
            }

            .input {
              outline: none;
              border: none;
              background-image: none;
              background-color: transparent;
              -webkit-box-shadow: none;
              -moz-box-shadow: none;
              box-shadow: none;
              width: 5rem;
              height: 3rem;
              border-radius: 0;
              background-color: #f1f1f1;
              text-align: center;
              font-weight: bold;
              vertical-align: baseline;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .input:hover {
              cursor: pointer;
            }

            /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            /* Firefox */
            input[type="number"] {
              -moz-appearance: textfield;
            }

            .value-button {
              width: 40px;
              height: 48px;
              background-color: #f1f1f1;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              border: 0;
            }

            .value-button:hover {
              color: #d87d4a;
              cursor: pointer;
            }
          }
        }
      }

      .product-right-mark-I {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-right: 125px;
        padding-left: 0;
        justify-content: center;
        align-items: flex-start;
      }
    }

    .features {
      height: 318px;
      margin-top: 110px;
      flex-direction: row;
      @media only screen and (max-width: 768px) {
        width: 768px;
        margin: 0 39px;
        margin-top: 110px;
        flex-direction: column;
      }
      @media only screen and (max-width: 376px) {
        margin-top: 88px;
        flex-direction: column;
        width: 376px;
      }
      .features-left {
        flex-basis: 50%;
        gap: 32px;
        @media only screen and (max-width: 768px) {
          width: 768px;
          height: 250px;
        }

        @media only screen and (max-width: 376px) {
          width: 376px;
          height: 475px;
        }

        .title {
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          color: #000000;

          /* identical to box height, or 112% */
          letter-spacing: 1.14286px;
          text-transform: uppercase;
        }
      }
      .features-right {
        flex-basis: 50%;
        padding-left: 125px;
        height: 225px;
        flex-direction: column;
        @media only screen and (max-width: 768px) {
          margin-top: 110px;
          width: 768px;
          flex-direction: row;
          padding-left: 0;
        }
        @media only screen and (max-width: 376px) {
          padding-left: 0;
          width: 376px;
          flex-direction: column;
        }
        .title {
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          color: #000000;

          /* identical to box height, or 112% */
          letter-spacing: 1.14286px;
          text-transform: uppercase;
        }

        ul {
          list-style: none;
          gap: 8px;
          @media only screen and (max-width: 768px) {
            padding-left: 125px;
            margin-bottom: 50px;
          }
          @media only screen and (max-width: 376px) {
            flex-direction: column;
            padding-left: 0;
          }

          li {
            span {
              color: #d87d4a;
              font-weight: bold;
              padding-right: 24px;
            }

            p {
              opacity: 0.5;
            }
          }
        }
      }
    }

    .imgs {
      margin-top: 110px;
      gap: 30px;
      flex-direction: row;
      @media only screen and (max-width: 768px) {
        width: 768px;
        gap: 20px;
        margin: 0 39px;
        margin-top: 170px;
      }
      @media only screen and (max-width: 376px) {
        flex-direction: column;
        margin: 0 24px;
        margin-top: 510px;
      }
      .left {
        gap: 30px;
        @media only screen and (max-width: 768px) {
          gap: 20px;
        }
      }

      .img-left {
        gap: 30px;
        width: 445px;
        height: 280px;
        border-radius: 8px;
        @media only screen and (max-width: 768px) {
          width: 277px;
          height: 174px;
          gap: 20px;
        }
        @media only screen and (max-width: 376px) {
          width: 327px;
          height: 174px;
        }
      }

      .img-right {
        width: 635px;
        height: 592px;
        border-radius: 8px;
        @media only screen and (max-width: 768px) {
          width: 395px;
          height: 368px;
        }
        @media only screen and (max-width: 376px) {
          width: 327px;
          height: 756px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>