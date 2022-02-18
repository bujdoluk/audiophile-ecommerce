<template>
  <div>
    <div v-for="(speaker, index) in speakers" :key="index">
      <section class="speaker flex">
        <div class="speaker-left">
          <img class="img-speaker" :src="speaker.image" alt="speaker" />
        </div>
        <div class="speaker-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">{{ speaker.title }}</div>
          <div class="text">
            {{ speaker.text }}
          </div>
          <div>
            <router-link :to="{ name: 'ProductDetail' }">
              <button @click="addCurrentProduct(speaker)" class="btn-orange">
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
  props: ["speakers"],
  methods: {
    ...mapActions(["currentProduct"]),

    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.speakers {
  background: #0e0e0e;
  height: 336px;
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
    margin-top: 60px;
  }

  .content {
    width: 1110px;
    margin: 0 auto;

    .speaker {
      margin-top: 110px;
      flex-direction: row;
      @media only screen and (max-width: 768px) {
        width: 689px;
        flex-direction: column;
        gap: 30px;
        margin: 110px 39px;
      }
      @media only screen and (max-width: 376px) {
        margin: 0 24px;
      }
      .speaker-left {
        flex-basis: 50%;
        @media only screen and (max-width: 768px) {
          flex-basis: 100%;
        }

        .img-speaker {
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
            height: 340px;
          }
        }
      }

      .speaker-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;
        @media only screen and (max-width: 768px) {
          text-align: center;
          align-items: center;
        }
        @media only screen and (max-width: 376px) {
          width: 327px;
          padding: 0;
        }
      }
    }
  }
}
</style>