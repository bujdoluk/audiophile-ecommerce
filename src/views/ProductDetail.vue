<template>
  <div class="products">
    <Navbar />
    <div class="back" @click="back()">Go back</div>
    <div class="content flex flex-column">
      <section class="product flex flex-row">
        <div class="product-left">
          <img
            class="img-product"
            src="../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="product"
          />
        </div>
        <div class="product-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">XX99 mark II heaphones</div>
          <div class="text">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium heaphone experience by repdocusing the
            balanced depth and precision of studio-quality sound.
          </div>
          <div class="price">$ 2,999</div>
          <div class="counter flex flex-row">
            <form class="buttons flex flex-row">
              <div class="value-button flex flex-column" id="decrease">-</div>
              <input class="input" type="number" id="number" value="0" />
              <div class="value-button flex flex-column" id="increase">+</div>
            </form>
            <button class="btn-orange">add to cart</button>
          </div>
        </div>
        <div></div>
      </section>

      <section class="features flex flex-row">
        <div class="features-left flex flex-column">
          <div class="title">Features</div>
          <div class="text">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </div>
          <div class="text">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </div>
        </div>
        <div class="features-right flex flex-column">
          <div class="title">in the box</div>
          <div class="description">
            <ul class="flex flex-column">
              <li class="flex">
                <span>1x</span>
                <p>Headphone Unit</p>
              </li>
              <li class="flex">
                <span>2x</span>
                <p>Replacement Earcups</p>
              </li>
              <li class="flex">
                <span>1x</span>
                <p>User Manual</p>
              </li>
              <li class="flex">
                <span>1x</span>
                <p>3.5mm 5m Audio Cable</p>
              </li>
              <li class="flex">
                <span>1x</span>
                <p>Travel Bag</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="imgs flex flex-row">
        <div class="left flex flex-column">
          <div>
            <img
              class="img-left"
              src="../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
              alt="photo-left-1"
            />
          </div>
          <div>
            <img
              class="img-left"
              src="../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
              alt="photo-left-2"
            />
          </div>
        </div>
        <div class="right">
          <img
            class="img-right"
            src="../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
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
import router from "vue-router";
export default {
  name: "ProductDetail",
  components: { Navbar, Gear, Footer, Categories, Youmaylike },
  methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  background: #0e0e0e;
  height: 95px;
  margin: 0 auto;

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
      .product-left {
        flex-basis: 50%;

        .img-product {
          border-radius: 8px;
          width: 555px;
          height: 560px;
        }
      }

      .product-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;

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
              width: 40px;
              background-color: #f1f1f1;
              text-align: center;
              font-weight: bold;
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

    .imgs {
      margin-top: 110px;
      gap: 30px;
      .left {
        gap: 30px;
      }

      .img-left {
        gap: 30px;
        width: 445px;
        height: 280px;
        border-radius: 8px;
      }

      .img-right {
        width: 635px;
        height: 592px;
        border-radius: 8px;
      }
    }

    .features {
      height: 318px;
      margin-top: 110px;
      .features-left {
        flex-basis: 50%;
        gap: 32px;

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
  }
}
</style>