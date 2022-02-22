<template>
  <AllProductsList :products="getAllProducts" />
</template>

<script>
import { mapGetters } from "vuex";
import AllProductsList from "../views/AllProductsList.vue";
export default {
  components: { AllProductsList },
  computed: {
    ...mapGetters(["getAllProducts"]),
  },
};
</script>

<style lang="scss" scoped>
</style>