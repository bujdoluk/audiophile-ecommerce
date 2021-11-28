<template>
  <div class="headphones">
    <Navbar />
    <div class="title flex">headphones</div>
    <div class="content flex flex-column">
      <section class="headphone flex flex-row">
        <div class="headphone-left">
          <img
            class="img-headphone"
            src="../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="headphone"
          />
        </div>
        <div class="headphone-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">XX99 Mark II Headphones</div>
          <div class="text">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium heaphone experience by repdocusing the
            balanced depth and precision of studio-quality sound.
          </div>
          <div>
            <button class="btn-orange">SEE product</button>
          </div>
        </div>
        <div></div>
      </section>
      <section class="headphone flex flex-row">
        <div class="headphone-right-mark-I flex flex-column">
          <div class="name">XX99 mark I heaphones</div>
          <div class="text">
            As the gold standart for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and musix adicionados alike in studios and on the go.
          </div>
          <div>
            <button class="btn-orange">SEE product</button>
          </div>
        </div>
        <div class="headphone-left">
          <img
            class="img-headphone"
            src="../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
            alt="headphone"
          />
        </div>
      </section>
      <section class="headphone flex flex-row">
        <div class="headphone-left">
          <img
            class="img-headphone"
            src="../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
            alt="headphone"
          />
        </div>
        <div class="headphone-right flex flex-column">
          <div class="name">XX59 heaphones</div>
          <div class="text">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is brilliant companion at home or on the move.
          </div>
          <div>
            <button class="btn-orange">SEE product</button>
          </div>
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
  name: "Headphones",
  components: { Navbar, Gear, Footer, Categories },
};
</script>

<style lang="scss" scoped>
.headphones {
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

    .headphone {
      margin-top: 110px;
      .headphone-left {
        flex-basis: 50%;

        .img-headphone {
          border-radius: 8px;
          width: 555px;
          height: 560px;
        }
      }

      .headphone-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;
      }

      .headphone-right-mark-I {
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