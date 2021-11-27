<template>
  <div @click="checkClick" ref="modalWrap" class="modal-wrap">
    <form class="modal-content">
      <button type="button" @click="closeInvoice" class="red">Cancel</button>
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Cart",
  components: { Navbar },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),

    checkClick(e) {
      if (e.target === this.$refs.modalWrap) {
        this.TOGGLE_MODAL();
      }
    },

    closeInvoice() {
      this.TOGGLE_INVOICE();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 1;

  .modal-content {
    position: relative;
    width: 100%;
    z-index: 90;
    max-width: 700px;
    width: 100%;
    height: 1200px;
    background-color: #000000;
    opacity: 0.5;
    color: white;
  }
}
</style>