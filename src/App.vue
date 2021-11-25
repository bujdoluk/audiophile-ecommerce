<template>
  <div class="app">
    <router-view />
    <Home />
  </div>
</template>

<script>
export default {};
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
  background-color: #ffffff;
  color: #000000;
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
</style>
