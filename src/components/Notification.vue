<template lang="html">

  <section v-if="showBanner" class="notification">
      <div class="alert-info">Enjoy our discounts! Create an account <a href="#">here</a></div>
      <div class="closing-ico" @click="showBanner = false">&times;</div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'app-notification',
    data() {
      return {
        showBanner: true
      }
    }
  }
</script>

<style scoped lang="scss">
.notification {
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: #cdeff6;
  color: #000000;
  font-size: 16px;
  font-weight: 700;

  .alert-info {
    max-width: 100%;
    @media screen and (max-width: 400px) {
      max-width: 276px;
    }
  }

  .alert-info a {
    color: #378daf;
    font-weight: 900;
    text-decoration: none;
  }
  .closing-ico {
    position: absolute;
    top: -4px;
    right: 10px;
    font-size: 40px;
    font-weight: 400;
    cursor: pointer;
  }
}
</style>
