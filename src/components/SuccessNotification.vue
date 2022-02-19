<template>
  <div>
    <span class="success">Product was successfully added to your cart! :)</span>
  </div>
</template>

<script>
export default {
  name: "SuccessNotification",
};
</script>

<style lang="scss" scoped>
.success {
  color: white;
  background-color: rgb(121, 207, 121);
  width: 230px;
  max-height: 70px;
  padding: 10px;
  border-radius: 8px;
  margin-left: 30px;
}
</style>