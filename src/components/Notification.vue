<template lang="html">

  <section class="notification">
      <div class="alert-info">Enjoy our discounts! Create an account <a href="#">here</a></div>
      <div class="closing-ico">&times;</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'app-notification',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

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
    background: #CDEFF6;
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    .alert-info a {
      color: #378DAF;
      font-weight: 900;
      text-decoration: none;
    }
    .closing-ico {
      position: absolute;
      top: -4px;
      right: 10px;
      font-size: 40px;
      font-weight: 400;
    }
  }
</style>
