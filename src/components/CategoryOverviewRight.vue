<template>
  <section class="speaker flex">
    <div class="speaker-left">
      <img
        class="img-speaker"
        src="../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
        alt="headphone"
      />
    </div>
    <div class="speaker-right flex flex-column">
      <div class="new-orange">new product</div>
      <div class="name">{{ x7.title }}</div>
      <div class="text">
        {{ x7.text }}
      </div>
      <div>
        <button class="btn-orange">SEE product</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["x7"],
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
        margin: 0 39px;
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