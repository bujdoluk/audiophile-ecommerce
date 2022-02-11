<template>
  <div class="headphones">
    <Navbar />
    <div class="title flex">headphones</div>
    <div class="content flex flex-column">
      <HeadphoneList :headphones="getHeadphones" />
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
import { mapGetters } from "vuex";
import HeadphoneList from "./HeadphoneList.vue";
export default {
  name: "Headphones",
  props: ["Headphones"],
  components: { Navbar, Gear, Footer, Categories, HeadphoneList },
  computed: {
    ...mapGetters(["getHeadphones"]),
  },
};
</script>

<style lang="scss" scoped>
.headphones {
  background: #0e0e0e;
  height: 336px;
  margin: 0 auto;
  @media only screen and (max-width: 376px) {
    width: 375px;
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
      width: 689px;
      margin: 0;
    }
    @media only screen and (max-width: 376px) {
      width: 375px;
      margin: 0;
    }
  }
}
</style>