9<template>
  <div class="home">
    <div class="content">
      <Navbar />
      <div class="content-details flex flex-row">
        <div class="left flex flex-column">
          <div class="new">new product</div>
          <div class="name">XX99 mark II headphones</div>
          <div class="text">
            Experience natural, lifelike audio adn exceptional build quality
            made for the passionate music enthusiast.
          </div>
          <div>
            <button class="btn-orange">See Product</button>
          </div>
        </div>
        <div class="right">
          <img src="../assets/home/desktop/headphone.png" alt="hero" />
        </div>
      </div>
    </div>
    <Categories />
    <section class="speaker flex flex-row">
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
          <button class="btn-black">SEE product</button>
        </div>
      </div>
      <div></div>
    </section>
    <section class="speaker-2 flex">
      <div class="speaker-2-content flex flex-column">
        <div class="name">ZX7 speaker</div>
        <div>
          <button class="btn-white">see product</button>
        </div>
      </div>
    </section>
    <section class="speaker-3 flex flex row">
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
          <button class="btn-white">see product</button>
        </div>
      </div>
    </section>
    <Gear />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Categories from "../components/Categories.vue";
import Footer from "../components/Footer.vue";
import Gear from "../components/Gear.vue";
export default {
  name: "Home",
  components: { Navbar, Categories, Footer, Gear },
};
</script>

<style lang="scss" scoped>
.home {
  background: #0e0e0e;
  height: 729px;
  margin: 0 auto;
  z-index: 1;

  .content {
    width: 1440px;
    color: #ffffff;
    z-index: 2;
    margin: 0 auto;

    &-details {
      .left {
        flex-basis: 50%;
        gap: 24px;
        justify-content: center;
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
        }
        .text {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          opacity: 0.5;
        }
      }
    }

    .right {
      flex-basis: 50%;
    }
  }

  .speaker {
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

    .speaker-left {
      flex-basis: 50%;
      position: relative;

      .img-speaker {
        position: absolute;
        bottom: -10px;
        left: 120px;
        width: 370px;
        height: 453px;
      }
    }

    .speaker-right {
      flex-basis: 50%;
      justify-content: center;
      padding: 0 95px;
      gap: 24px;

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

    .speaker-2-content {
      align-items: flex-start;
      margin-left: 95px;
      gap: 32px;

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
    .speaker-3-left {
      border-radius: 8px;

      .img {
        border-radius: 8px;
      }
    }

    .speaker-3-right {
      background: #f1f1f1;
      border-radius: 8px;
      flex-basis: 50%;
      padding-left: 95px;
      justify-content: center;
      gap: 32px;

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
