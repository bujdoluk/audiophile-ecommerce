<template>
  <section class="speaker flex">
    <div class="speaker-right-mark-I flex flex-column">
      <div class="name">{{ x9.title }}</div>
      <div class="text">
        {{ x9.text }}
      </div>
      <div>
        <button class="btn-orange">SEE product</button>
      </div>
    </div>
    <div class="speaker-left">
      <img
        class="img-speaker"
        src="../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
        alt="speaker"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: ["x9"],
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
        flex-direction: column-reverse;
        width: 689px;
        gap: 30px;
        margin: 0 39px;
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
        }
      }

      .speaker-right-mark-I {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-right: 125px;
        padding-left: 0;
        justify-content: center;
        align-items: flex-start;
        @media only screen and (max-width: 768px) {
          text-align: center;
          align-items: center;
          flex-basis: 100%;
          padding-right: 0;
          width: 689px;
          margin-bottom: 60px;
        }
      }
    }
  }
}
</style>