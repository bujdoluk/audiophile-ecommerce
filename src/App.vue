<template>
  <div class="app flex">
    <div class="app-content flex">
      <transition name="cart">
        <CartModal v-if="cartModal" />
      </transition>
      <transition name="thankyou">
        <ThankyouModal v-if="thankyouModal" />
      </transition>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./components/Navbar.vue";
import CartModal from "./views/CartModal.vue";
import ThankyouModal from "./views/ThankyouModal.vue";
export default {
  components: {
    Navbar,
    CartModal,
    ThankyouModal,
  },
  computed: {
    ...mapState(["cartModal", "thankyouModal"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");
// Reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}
.app {
  width: 100vw;
  background-color: #f2f2f2;

  .app-content {
    flex: 1;
    position: relative;
  }
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.black {
  color: #000000;
}

.black-light {
  color: #101010;
}

.white {
  color: #ffffff;
}

.grey-dark {
  color: #f1f1f1;
}

.grey-light {
  color: #fafafa;
}

.orange-light {
  color: #fbaf85;
}

.orange-dark {
  color: #d87d4a;
}

.btn-orange {
  background-color: #d87d4a;
  color: white;
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
  width: 160px;
  height: 48px;
}

.btn-orange:hover {
  background-color: #fbaf85;
}

.btn-white {
  background-color: transparent;
  color: #000000;
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  border: 1px solid #000000;
  font-weight: bold;
  cursor: pointer;
}

.btn-white:hover {
  background-color: #000000;
  color: #ffffff;
}

.btn-black {
  background-color: #000000;
  color: #ffffff;
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.btn-black:hover {
  background-color: #4c4c4c;
  color: #ffffff;
}

.btn-shop {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
  width: 58px;
  height: 18px;
  color: #000000;
  opacity: 0.5;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.btn-shop:hover {
  color: #d87d4a;
}

.new {
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
}

.new-orange {
  color: #d87d4a;
  text-transform: uppercase;

  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
}

.name {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 56px;
  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 376px) {
    font-size: 28px;
  }
}
.text {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  opacity: 0.5;
  @media only screen and (max-width: 768px) {
    width: 339px;
  }
  @media only screen and (max-width: 376px) {
    width: 327px;
  }
}

.text-features {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  opacity: 0.5;
  @media only screen and (max-width: 768px) {
    width: 689px;
    text-align: center;
  }
  @media only screen and (max-width: 376px) {
    width: 327px;
  }
}

.price {
  font-weight: bold;
  font-size: 18px;
}

.price-small {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 25px;
  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
}

.back {
  margin: 0 auto;
  margin-top: 79px;

  width: 1110px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  /* identical to box height, or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
}

.right {
  margin-right: 16px;
}

.long {
  width: 634px;
}

input {
  width: 309px;
  height: 56px;
  background: #ffffff;
  border: 2px solid #cfcfcf;
  border-radius: 8px;

  margin-bottom: 24px;
}

input:focus {
  border-color: #d87d4a;
  outline: none !important;
}

label {
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  margin-bottom: 9px;
  color: #000000;
}

h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin-bottom: 41px;
  @media only screen and (max-width: 376px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
}

h4 {
  text-transform: uppercase;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
}

h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 25px;
  margin-bottom: 16px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;

  color: #d87d4a;
}

h6 {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}

// animate transition
.cart-enter-active,
.cart-leave-active {
  transition: 0.8s ease all;
}
.cart-enter-from,
.cart-leave-to {
  transform: translateX(-2000px);
}

.thankyou-enter-active,
.thankyou-leave-active {
  transition: 0.8s ease all;
}
.thankyou-enter-from,
.thankyou-leave-to {
  transform: translateX(-2000px);
}

// Errors

.error {
  color: red;
}
</style>
