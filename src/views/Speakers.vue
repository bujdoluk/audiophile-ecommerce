<template>
  <div class="speakers">
    <Navbar />
    <div class="title flex">speakers</div>
    <div class="content flex flex-column">
      <SpeakerList :speakers="getSpeakers" />
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
import SpeakerList from "./SpeakerList.vue";
import { mapGetters } from "vuex";

export default {
  name: "Speakers",
  components: {
    Navbar,
    Gear,
    Footer,
    Categories,
    SpeakerList,
  },
  computed: {
    ...mapGetters(["getSpeakers"]),
  },
};
</script>

<style lang="scss" scoped>
.speakers {
  background: #0e0e0e;
  height: 336px;
  margin: 0 auto;
  @media only screen and (max-width: 376px) {
    height: 192px;
  }

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
    @media only screen and (max-width: 768px) {
      width: 768px;
    }
    @media only screen and (max-width: 376px) {
      width: 375px;
      height: 102px;
      margin-top: 96px;
      font-size: 30px;
    }
  }

  .content {
    width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      margin: 0;
    }

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