<template>
  <div>
    <div v-for="(headphone, index) in headphones" :key="index">
      <section class="headphone flex">
        <div class="headphone-left">
          <img class="img-headphone" :src="headphone.image" alt="headphone" />
        </div>
        <div class="headphone-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">{{ headphone.title }}</div>
          <div class="text">
            {{ headphone.text }}
          </div>

          <div>
            <router-link :to="{ name: 'ProductDetail' }">
              <button @click="addCurrentProduct(headphone)" class="btn-orange">
                SEE product
              </button>
            </router-link>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["headphones"],
  methods: {
    ...mapActions(["currentProduct"]),

    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.headphone {
  margin-top: 110px;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 689px;
    margin: 120px 39px;
  }
  @media only screen and (max-width: 376px) {
    width: 375px;
    margin: 64px 24px;
  }

  .headphone-left {
    flex-basis: 50%;

    .img-headphone {
      border-radius: 8px;
      width: 555px;
      height: 560px;
      @media only screen and (max-width: 768px) {
        width: 689px;
        height: 352px;
        object-fit: cover;
      }
      @media only screen and (max-width: 376px) {
        width: 327px;
        margin: 0;
      }
    }
  }

  .headphone-right {
    gap: 32px;
    flex-basis: 50%;
    width: 555px;
    padding-left: 125px;
    justify-content: center;
    align-items: flex-start;
    @media only screen and (max-width: 768px) {
      width: 572px;
      height: 302px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    @media only screen and (max-width: 376px) {
      width: 327px;
      height: 340px;
      margin: 0;
      padding-left: 0;
    }

    .new-orange {
      @media only screen and (max-width: 768px) {
        margin-top: 52px;
      }
    }
    .name {
      @media only screen and (max-width: 376px) {
        font-size: 28px;
        margin-top: 20px;
      }
    }
  }

  .headphone-right-mark-I {
    gap: 32px;
    flex-basis: 50%;
    width: 555px;
    padding-right: 125px;
    padding-left: 0;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 768px) {
      align-items: center;
      padding: 0 98px;
      width: 572px;
      margin: 0 auto;
      text-align: center;
    }
    @media only screen and (max-width: 376px) {
      max-width: 327px;
      height: 340px;
      margin: 0;
    }

    .name {
      @media only screen and (max-width: 376px) {
        font-size: 28px;
        width: 327px;
        margin-top: 20px;
      }
    }

    .text {
      @media only screen and (max-width: 376px) {
        width: 327px;
      }
    }
  }
}

.mark-I {
  flex-direction: column-reverse;
}
</style>