<template lang="html">

  <section class="list-item">
    <div class="card">
      <div class="img-cropper">
        <img class="restaurant-img" :src="restaurant.image_url">
      </div>
      <div class="restaurant-wrap">
        <div class="restaurant-name">{{ restaurant.name }}</div>
        <div class="restaurant-type">Restaurant Type</div>
        <div class="restaurant-location">
          <img class="location-ico" src="../assets/location.png">
          <div>{{ restaurant.address + ', ' + restaurant.city + ', ' + restaurant.state + ', ' + restaurant.postal_code }}</div>
        </div>
        <div class="price-filter-wrap">
          <img src="../assets/dollar-ico-orange.png">
          <img v-show="restaurant.price > 1" src="../assets/dollar-ico-orange.png">
          <img v-show="restaurant.price > 2" src="../assets/dollar-ico-orange.png">
          <img v-show="restaurant.price > 3" src="../assets/dollar-ico-orange.png">
          <img v-show="restaurant.price < 2" src="../assets/dollar-ico-grey.png">
          <img v-show="restaurant.price < 3" src="../assets/dollar-ico-grey.png">
          <img v-show="restaurant.price < 4" src="../assets/dollar-ico-grey.png">
        </div>
      </div>
      <div class="rating-wrap">
        <app-rating :grade="restaurant.rating" :maxStars="5" :hasCounter="true"></app-rating>
      </div>
      <div class="reservation-wrap">
        <div class="make-reserv">Make a Reservation</div>
        <button class="primary">
          <i class="fa fa-phone fa-blank" aria-hidden="true"></i>
          &nbsp;<span class="phone-number">{{ restaurant.phone | phoneformat }}</span>
        </button>
        <div class="connect">
          <a href="#">See website</a> 
          &nbsp;<span class="divider">|</span>
         <img class="heart-ico" src="../assets/heart-ico.png"> 
         <span class="save">Save</span>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import Rating from "../components/Rating"

  export default  {
    name: 'app-list-item',
    props: ["restaurant"],
    components: {
      appRating: Rating
    }
  }
</script>

<style scoped lang="scss">
.list-item {
  margin-bottom: 20px;
  display: flex;
  .card {
    width: 100%;
    background: #ffffff;
    display: flex;
    align-items: flex-start;
    border-radius: 10px;
    padding: 16px;
    -webkit-box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
    -moz-box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
    box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
  }
  .restaurant-img {
    margin-right: 20px;
  }
  .img-cropper {
    position: relative;
    width: 160px;
    height: 160px;
    overflow: hidden;
    margin-right: 16px;
    -webkit-border-top-left-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-bottomleft: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .restaurant-img {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    width: auto;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .restaurant-wrap {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    max-width: 30%;
  }
  .restaurant-name {
    font-size: 24px;
    line-height: 1.2em;
    color: #525252;
    font-weight: 900;
    margin-bottom: 8px;
  }
  .restaurant-type {
    color: #804d28;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2em;
  }
  .restaurant-location {
    display: flex;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 700;
  }
  .divider {
    font-weight: 300;
    font-size: 28px;
  }
  .location-ico {
    margin: 5px 10px 0 -5px;
    @media screen and (max-width: 870px) {
      margin: 0;
      position: relative;
      top: -5px;
      left: 20px;
    }
  }
  .price-filter-wrap {
    margin-top: 15px;
    img {
      width: 18px;
    }
  }
  .reservation-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-left: auto;
  }
  button.primary {
    border: 0;
    outline: 0;
    cursor: pointer;
    background-color: #1183a8;
    padding: 8px 20px;
    border-radius: 3px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .phone-number {
    margin-left: 8px;
  }
  .make-reserv {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 18px;
  }
  .connect a {
    font-weight: 400;
    color: #777877;
    font-size: 18px;
  }
  .connect .save {
    font-size: 18px;
    font-weight: 700;
    color: #484848;
  }
  .connect .heart-ico {
    position: relative;
    top: 5px;
  }
  .fa.fa-phone {
    color: #ffffff;
    font-size: 20px;
    transform: scaleX(-1);
  }
}
@media screen and (max-width: 870px) {
  .list-item {
    .card {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
    }
    .reservation-wrap {
      margin: 0 auto;
    }
    .restaurant-wrap {
      margin: 0 auto;
      max-width: 100%;
    }
  }
}
</style>
