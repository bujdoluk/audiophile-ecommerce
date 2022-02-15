<template>
  <div>
    <div class="title">You may also like</div>
    <div class="youmaylike flex flex-row">
      <div
        class="item flex flex-column"
        v-for="(headphone, index) in getHeadphones.slice(1, 2)"
        :key="index"
      >
        <div>
          <img
            class="img"
            src="../assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
            alt="mark I"
          />
        </div>
        <h4>XX99 Mark I</h4>
        <router-link :to="{ name: 'ProductDetail' }" @click="scrollToTop">
          <button class="btn-orange" @click="addCurrentProduct(headphone)">
            SEE product
          </button>
        </router-link>
      </div>
      <div
        class="item flex flex-column"
        v-for="(headphone, index) in getHeadphones.slice(0, 1)"
        :key="index"
      >
        <div>
          <img
            class="img"
            src="../assets/shared/desktop/image-xx59-headphones.jpg"
            alt="mark I"
          />
        </div>
        <h4>XX59</h4>
        <router-link :to="{ name: 'ProductDetail' }" @click="scrollToTop">
          <button class="btn-orange" @click="addCurrentProduct(headphone)">
            SEE product
          </button>
        </router-link>
      </div>
      <div
        class="item flex flex-column"
        v-for="(speaker, index) in getSpeakers.slice(1, 2)"
        :key="index"
      >
        <div>
          <img
            class="img"
            src="../assets/shared/desktop/image-zx9-speaker.jpg"
            alt="mark I"
          />
        </div>
        <h4>ZX9 Speaker</h4>
        <router-link :to="{ name: 'ProductDetail' }" @click="scrollToTop">
          <button class="btn-orange" @click="addCurrentProduct(speaker)">
            SEE product
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["currentProduct"]),

    addCurrentProduct(product) {
      this.currentProduct(product);
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    ...mapGetters(["getSpeakers", "getHeadphones"]),
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin-bottom: 64px;
  margin-top: 110px;
}
.youmaylike {
  width: 1110px;
  gap: 30px;

  .item {
    gap: 40px;
    justify-content: center;
    align-items: center;
    .img {
      width: 350px;
      height: 318px;
      border-radius: 8px;
    }
  }
}
</style>