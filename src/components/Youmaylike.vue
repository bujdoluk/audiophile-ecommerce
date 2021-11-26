<template>
  <div>
    <div class="title">You may also like</div>
    <div class="youmaylike flex flex-row">
      <div class="item flex flex-column">
        <div>
          <img
            class="img"
            src="../assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
            alt="mark I"
          />
        </div>
        <h4>XX99 Mark I</h4>
        <button class="btn-orange">SEE product</button>
      </div>
      <div class="item flex flex-column">
        <div>
          <img
            class="img"
            src="../assets/shared/desktop/image-xx59-headphones.jpg"
            alt="mark I"
          />
        </div>
        <h4>XX59</h4>
        <button class="btn-orange">SEE product</button>
      </div>
      <div class="item flex flex-column">
        <div>
          <img
            class="img"
            src="../assets/shared/desktop/image-zx9-speaker.jpg"
            alt="mark I"
          />
        </div>
        <h4>ZX9 Speaker</h4>
        <button class="btn-orange">SEE product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin-bottom: 64px;
  margin-top: 110px;
}
.youmaylike {
  width: 1110px;
  gap: 30px;

  .item {
    gap: 40px;
    justify-content: center;
    align-items: center;
    .img {
      width: 350px;
      height: 318px;
      border-radius: 8px;
    }
  }
}
</style>