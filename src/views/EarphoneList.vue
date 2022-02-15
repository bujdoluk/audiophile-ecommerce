<template>
  <div>
    <div v-for="(earphone, index) in earphones" :key="index">
      <section class="earphone flex">
        <div class="earphone-left">
          <img class="img-earphone" :src="earphone.image" alt="earphone" />
        </div>
        <div class="earphone-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">{{ earphone.title }}</div>
          <div class="text">
            {{ earphone.text }}
          </div>
          <div>
            <router-link :to="{ name: 'ProductDetail' }">
              <button @click="addCurrentProduct(earphone)" class="btn-orange">
                SEE product
              </button>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["earphones"],
  methods: {
    ...mapActions(["currentProduct"]),

    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.earphone {
  margin-top: 110px;
  flex-direction: row;
  width: 689px;
  margin: 120px 39px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 376px) {
    margin: 0 24px;
  }

  .earphone-left {
    flex-basis: 50%;
    @media only screen and (max-width: 768px) {
      margin: 120px 0 60px 0;
    }
    @media only screen and (max-width: 376px) {
      margin: 60px 0 60px 0;
    }
    .img-earphone {
      border-radius: 8px;
      width: 555px;
      height: 560px;
      @media only screen and (max-width: 768px) {
        width: 689px;
        height: 352px;
        object-fit: contain;
      }
      @media only screen and (max-width: 376px) {
        width: 327px;
      }
    }
  }

  .earphone-right {
    gap: 32px;
    flex-basis: 50%;
    width: 555px;
    padding-left: 125px;
    justify-content: center;
    align-items: flex-start;
    @media only screen and (max-width: 768px) {
      align-items: center;
      margin-bottom: 60px;
    }
    @media only screen and (max-width: 376px) {
      padding: 0;
      width: 327px;
    }

    .name {
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
      @media only screen and (max-width: 376px) {
        font-size: 36px;
      }
    }

    .text {
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }

  .earphone-right-mark-I {
    gap: 32px;
    flex-basis: 50%;
    width: 555px;
    padding-right: 125px;
    padding-left: 0;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>