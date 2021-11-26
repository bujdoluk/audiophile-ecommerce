<template>
  <div class="earphones">
    <Navbar />
    <div class="title flex">earphones</div>
    <div class="content flex flex-column">
      <section class="earphone flex flex-row">
        <div class="earphone-left">
          <img
            class="img-earphone"
            src="../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
            alt="earphone"
          />
        </div>
        <div class="earphone-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">YX1 Wireless Earphones</div>
          <div class="text">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </div>
          <div>
            <button class="btn-orange">SEE product</button>
          </div>
        </div>
        <div></div>
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
  name: "Earphones",
  components: { Navbar, Gear, Footer, Categories },
};
</script>

<style lang="scss" scoped>
.earphones {
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
  }

  .content {
    width: 1110px;
    margin: 0 auto;

    .earphone {
      margin-top: 110px;
      .earphone-left {
        flex-basis: 50%;

        .img-earphone {
          border-radius: 8px;
          width: 555px;
          height: 560px;
        }
      }

      .earphone-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;
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
  }
}
</style>