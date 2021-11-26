<template>
  <section class="gear flex flex-row">
    <div class="gear-left flex flex-column">
      <div class="name">bringing you the <span>best</span> audio gear</div>
      <div class="text">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </div>
    </div>
    <div class="gear-right">
      <img
        class="img"
        src="../assets/shared/desktop/image-best-gear.jpg"
        alt="gear"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gear {
  width: 1110px;
  height: 588px;
  margin: 110px auto;

  .gear-left {
    flex-basis: 50%;
    gap: 32px;
    justify-content: center;
    margin-right: 125px;
    .name {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 44px;
      letter-spacing: 1.42857px;
      text-transform: uppercase;

      span {
        color: #d87d4a;
      }
    }
  }

  .gear-right {
    flex-basis: 50%;
    .img {
      border-radius: 8px;
    }
  }
}
</style>