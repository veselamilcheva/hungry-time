<template lang="html">

  <section class="filter">
      <dropdown
      :options="price"
      :selected="priceObject"
      v-on:updateOption="onSelectPrice"
      ></dropdown>
      <dropdown
      :options="distance"
      :selected="distanceObject"
      ></dropdown>
      <dropdown
      :options="rating"
      :selected="ratingObject"
      ></dropdown>
  </section>

</template>

<script lang="js">
  import dropdown from 'vue-dropdowns';
  import { mapActions } from 'vuex';

  export default  {
    name: 'app-filter',
    props: [],
    mounted () {

    },
    data () {
      return {
        rating: [
          { name:"4,5 and up", value:'5' },
          { name:"3,5 and up", value:'4' },
          { name:"2,5 and up", value:'3' },
          { name:"2,0 and up", value:'2' }
        ],
        ratingObject: {
          name: 'Rating',
        },
        price: [
          { name: "All Prices", value: null },
          { name:"$$", value: 2 },
          { name:"$$$", value: 3 },
          { name:"$$$$", value: 4 }
        ],
        priceObject: {
          name: 'Price',
        },
        distance: [
          { name:"5-10", value: 10 },
          { name:"10-20", value: 20 },
          { name:"20-30", value: 30 } 
        ],
        distanceObject: {
          name: 'Distance',
        }
      }
    },
    methods: {
      ...mapActions([
        'filterRestaurants'
      ]),
      onSelectPrice(selectedPrice) {
        this.priceObject = selectedPrice;

        let filterPayload = {
          price: selectedPrice.value
        }
        
        this.filterRestaurants(filterPayload);  
      }
    },
    computed: {

    },
    components: {
      'dropdown': dropdown
    }
}


</script>

<style lang="scss">
  .filter {
    margin-left: -10px;
    display: flex;
    .caret {
      color: #1C8FB1 !important;
      top: 12px !important;
      right: 25px !important;
    }
    .dropdown-toggle {
      border: 2px solid #1C8FB1 !important;
      border-radius: 3px !important;
      -webkit-box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
      -moz-box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
      box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
      font-weight: 700 !important;
      padding: 6px 16px !important;
      min-width: 100px !important;
      font-size: 18px !important;
      background-image: none !important;
    }
  }
  @media only screen and (max-width: 1020px) {
    .filter {
      justify-content: center;
      margin: 0;
    }
  }
</style>
