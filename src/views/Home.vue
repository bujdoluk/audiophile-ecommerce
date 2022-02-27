9<template>
  <div class="home">
    <Navbar />
    <div class="content">
      <div
        class="content-details flex flex-row"
        v-for="(headphone, index) in getHeadphones.slice(2, 3)"
        :key="index"
      >
        <div class="left flex flex-column">
          <div class="new">new product</div>
          <div class="name">XX99 mark II headphones</div>
          <div class="text">
            Experience natural, lifelike audio adn exceptional build quality
            made for the passionate music enthusiast.
          </div>
          <div>
            <router-link :to="{ name: 'ProductDetail' }">
              <button class="btn-orange" @click="addCurrentProduct(headphone)">
                SEE product
              </button>
            </router-link>
          </div>
        </div>
        <div class="right">
          <img src="../assets/home/desktop/headphone.png" alt="hero" />
        </div>
      </div>
    </div>
    <Categories />
    <section
      class="speaker flex"
      v-for="(speaker, index) in getSpeakers.slice(1, 2)"
      :key="index"
    >
      <div class="speaker-left">
        <img
          class="img-speaker"
          src="../assets/home/desktop/image-speaker-zx9.png"
          alt="speaker"
        />
      </div>
      <div class="speaker-right flex flex-column">
        <div class="name">ZX9 Speaker</div>
        <div class="text">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>
        <div>
          <router-link :to="{ name: 'ProductDetail' }">
            <button class="btn-black" @click="addCurrentProduct(speaker)">
              SEE product
            </button>
          </router-link>
        </div>
      </div>
      <div></div>
    </section>
    <section
      class="speaker-2 flex"
      v-for="(speaker, index) in getSpeakers.slice(0, 1)"
      :key="index"
    >
      <div class="speaker-2-content flex flex-column">
        <div class="name">ZX7 speaker</div>
        <div>
          <router-link :to="{ name: 'ProductDetail' }">
            <button class="btn-white" @click="addCurrentProduct(speaker)">
              SEE product
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <section
      class="speaker-3 flex"
      v-for="(earphone, index) in getEarphones.slice(0, 1)"
      :key="index"
    >
      <div class="speaker-3-left">
        <img
          class="img"
          src="../assets/home/desktop/image-earphones-yx1.jpg"
          alt="earphones"
        />
      </div>
      <div class="speaker-3-right flex flex-column">
        <div class="name">YX1 earphones</div>
        <div>
          <router-link :to="{ name: 'ProductDetail' }">
            <button class="btn-white" @click="addCurrentProduct(earphone)">
              SEE product
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <Gear />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "../components/Navbar.vue";
import Categories from "../components/Categories.vue";
import Footer from "../components/Footer.vue";
import Gear from "../components/Gear.vue";
export default {
  name: "Home",
  components: { Navbar, Categories, Footer, Gear },
  methods: {
    ...mapActions(["currentProduct"]),
    newCart() {
      this.toggleCartModal();
    },

    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
  computed: {
    ...mapGetters([
      "getAllProducts",
      "getSpeakers",
      "toggleCartModal",
      "getEarphones",
      "getHeadphones",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #0e0e0e;
  height: 729px;
  margin: 0 auto;
  z-index: 1;

  // Navbar //
  .nav {
    position: fixed;
    width: 100vw;
    height: 96px;
    margin: 0 auto;
    background-color: #000000;
    z-index: 3;
    @media only screen and (max-width: 768px) {
      width: 768px;
    }
    .navbar {
      width: 1440px;
      border-bottom: 1px solid #979797;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      line-height: 25px;
      padding: 30px 0;
      letter-spacing: 2px;
      background-color: #000000;
      @media only screen and (max-width: 768px) {
        width: 768px;
        padding: 30px 40px;
      }

      .logo {
        font-weight: bold;
      }

      .category {
        gap: 34px;
        text-transform: uppercase;
      }
      .cart {
        cursor: pointer;
      }

      .link {
        text-decoration: none;
        color: #ffffff;
      }

      .link:hover {
        color: #d87d4a;
      }
    }
  }
  // Navbar end //

  .content {
    width: 1440px;
    color: #ffffff;
    z-index: 2;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 180px;
    overflow-x: hidden;

    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;
    @media only screen and (max-width: 376px) {
      height: 600px;
      margin-bottom: 120px;
    }

    &-details {
      z-index: 2;
      @media only screen and (max-width: 768px) {
        position: relative;
        width: 379px;
        margin-left: 194px;
      }
      @media only screen and (max-width: 376px) {
        margin: 0;
      }

      .left {
        flex-basis: 50%;
        gap: 24px;
        justify-content: center;
        @media only screen and (max-width: 768px) {
          flex-basis: 100%;
          z-index: 3;
          text-align: center;
          margin-top: 216px;
        }
        @media only screen and (max-width: 376px) {
          flex-basis: 100%;
          width: 375px;
        }

        .new {
          text-transform: uppercase;
          opacity: 0.5;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 10px;
        }

        .name {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 56px;
          @media only screen and (max-width: 376px) {
            font-size: 36px;
          }
        }
        .text {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          opacity: 0.5;
          @media only screen and (max-width: 376px) {
            margin: 0 30px;
          }
        }

        .link {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }

    .right {
      flex-basis: 50%;
      @media only screen and (max-width: 768px) {
        flex-basis: 100%;
        position: absolute;
        top: 100px;
        left: -100px;
        z-index: 2;
        transform: scale(130%);
      }
      @media only screen and (max-width: 376px) {
        flex-basis: 0%;
        transform: scale(90%);
      }
    }
  }

  .speaker {
    flex-direction: row;
    background: #d87d4a;
    border-radius: 8px;
    width: 1110px;
    height: 560px;
    margin: 0 auto;
    color: #ffffff;
    overflow: hidden;
    background-image: url(../assets/home/desktop/pattern-circles.svg);
    background-repeat: no-repeat;
    background-position-x: -90%;
    @media only screen and (max-width: 768px) {
      width: 768px;
      margin: 0 40px;
      width: 689px;
      height: 720px;
      flex-direction: column;
      background-position-x: 45%;
      background-position-y: 100%;
    }
    @media only screen and (max-width: 376px) {
      margin: 0 24px;
      width: 327px;
    }

    .speaker-left {
      flex-basis: 50%;
      position: relative;

      .img-speaker {
        position: absolute;
        bottom: -10px;
        left: 120px;
        width: 370px;
        height: 453px;
        @media only screen and (max-width: 768px) {
          width: 200px;
          height: 240px;
          transform: translate(50%, 50%);
          top: 0;
          left: 150px;
        }
        @media only screen and (max-width: 376px) {
          width: 200px;
          height: 240px;
          transform: translate(50%, 50%);
          top: 0;
          left: -35px;
        }
      }
    }

    .speaker-right {
      flex-basis: 50%;
      justify-content: center;
      padding: 0 95px;
      gap: 24px;
      @media only screen and (max-width: 768px) {
        align-items: center;
        width: 370px;
        padding: 0;
        margin: 0 auto;
        text-align: center;
      }
      @media only screen and (max-width: 376px) {
        width: 327px;
      }

      .name {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 56px;
      }

      .text {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        opacity: 0.5;
        @media only screen and (max-width: 376px) {
          margin: 0 24px;
        }
      }
    }
  }

  .speaker-2 {
    background-color: #979797;
    border-radius: 8px;
    width: 1110px;
    height: 320px;
    margin: 48px auto;
    overflow: hidden;
    background-image: url(../assets/home/desktop/image-speaker-zx7.jpg);
    background-repeat: no-repeat;
    background-position-x: -90%;
    align-items: center;

    @media only screen and (max-width: 768px) {
      width: 689px;
      height: 320px;
      margin: 48px 40px;
      background-position-x: 40%;
    }
    @media only screen and (max-width: 376px) {
      width: 327px;
      height: 320px;
      margin: 48px 24px;
      background-position-x: 55%;
      background-position-y: 30%;
      background-size: 1200px;
    }

    .speaker-2-content {
      align-items: flex-start;
      margin-left: 95px;
      gap: 32px;
      @media only screen and (max-width: 376px) {
        margin-left: 45px;
      }

      .name {
        font-weight: bold;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }

  .speaker-3 {
    width: 1110px;
    height: 320px;
    margin: 0 auto;
    gap: 30px;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
      width: 689px;
      height: 320px;
      margin: 48px 40px;
    }
    @media only screen and (max-width: 376px) {
      width: 327px;
      flex-direction: column;
      margin: 48px 24px;
    }
    .speaker-3-left {
      border-radius: 8px;
      @media only screen and (max-width: 768px) {
        width: 339px;
        height: 320px;
      }

      .img {
        border-radius: 8px;
        @media only screen and (max-width: 768px) {
          width: 339px;
          height: 320px;
        }
        @media only screen and (max-width: 376px) {
          width: 327px;
          height: 200px;
        }
      }
    }

    .speaker-3-right {
      background: #f1f1f1;
      border-radius: 8px;
      flex-basis: 50%;
      padding-left: 95px;
      justify-content: center;
      gap: 32px;
      @media only screen and (max-width: 768px) {
        width: 339px;
        height: 320px;
        justify-content: center;
        align-items: flex-start;
        padding-left: 35px;
      }
      @media only screen and (max-width: 376px) {
        width: 327px;
        min-height: 200px;
      }

      .name {
        font-weight: bold;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
