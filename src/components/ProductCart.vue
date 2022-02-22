<template>
  <div>
    <div v-for="(product, index) in allproducts" :key="index">
      <section class="card">
        <div class="card-image">
          <img class="image" :src="product.imageCart" alt="image" />
        </div>
        <div class="card-info">
          <div>{{ product.name }}</div>
          <div class="feature">{{ product.text }}</div>
          <div>$ {{ product.price }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["allproducts"],
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 360px;
  background-color: white;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin-bottom: 20px;

  &-image {
    height: 60%;
    width: 100%;

    .image {
      border-radius: 8px 8px 0 0;
      object-fit: contain;
    }
  }

  &-info {
    background-color: white;
    height: 40%;
    width: 100%;

    .feature {
      font-size: 12px;
    }
  }
}
</style>