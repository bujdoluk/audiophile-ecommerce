<template>
  <div class="speakers">
    <Navbar />
    <div class="title flex">speakers</div>
    <div class="content flex flex-column">
      <section class="speaker flex flex-row">
        <div class="speaker-left">
          <img
            class="img-speaker"
            src="../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
            alt="headphone"
          />
        </div>
        <div class="speaker-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">ZX9 speaker</div>
          <div class="text">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity -
            creating new possibilities for more pleasing and practical audio
            setups.
          </div>
          <div>
            <button class="btn-orange">SEE product</button>
          </div>
        </div>
        <div></div>
      </section>
      <section class="speaker flex flex-row">
        <div class="speaker-right-mark-I flex flex-column">
          <div class="name">ZX7 speaker</div>
          <div class="text">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
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
export default {
  name: "Speakers",
  components: { Navbar, Gear, Footer, Categories },
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
      .speaker-left {
        flex-basis: 50%;

        .img-speaker {
          border-radius: 8px;
          width: 555px;
          height: 560px;
        }
      }

      .speaker-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;
      }

      .speaker-right-mark-I {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-right: 125px;
        padding-left: 0;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
}
</style>