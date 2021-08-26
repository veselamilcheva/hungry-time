<template lang="html">

  <section class="filter">
    <dropdown
      :options="priceOptions"
      :selected="selectedPrice"
      @updateOption="onSelectPrice"
    ></dropdown>
    <dropdown
      :options="distanceOptions"
      :selected="selectedDistance"
      @updateOption="onSelectDistance"
    ></dropdown>
    <dropdown
      :options="ratingOptions"
      :selected="selectedRating"
      @updateOption="onSelectRating"
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
        ratingOptions: [
          { name: "Any Rating", value: null },
          { name:"4 and up", value: 4 },
          { name:"3 and up", value: 3 },
          { name:"2 and up", value: 2 }
        ],
        selectedRating: {
          name: 'Any Rating',
          value: null,
        },
        priceOptions: [
          { name: "Any Price", value: null },
          { name:"$", value: 1 },
          { name:"$$", value: 2 },
          { name:"$$$", value: 3 },
          { name:"$$$$", value: 4 }
        ],
        selectedPrice: {
          name: 'Any Price',
          value: null,
        },
        distanceOptions: [
          { name: "Any Distance", value: null },
          { name:"5-10", value: 10 },
          { name:"10-20", value: 20 },
          { name:"20-30", value: 30 } 
        ],
        selectedDistance: {
          name: 'Any Distance',
          value: null,
        }
      }
    },
    methods: {
      ...mapActions([
        'filterRestaurants'
      ]),
      onSelectPrice(selectedPrice) {
        this.selectedPrice = selectedPrice;
        this.executeFilter();
      },

      onSelectDistance(selectedDistance) {
        this.selectedDistance = selectedDistance;
        this.executeFilter();
      },

      onSelectRating(selectedRating) {
        this.selectedRating = selectedRating;
        this.executeFilter();
      },
      executeFilter() {
        let filterPayload = {
          price: this.selectedPrice.value,
          distance: this.selectedDistance.value,
          rating: this.selectedRating.value,
        }

        this.filterRestaurants(filterPayload);
      }
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
    color: #1c8fb1 !important;
    top: 12px !important;
    right: 25px !important;
  }
  .dropdown-toggle {
    border: 2px solid #1c8fb1 !important;
    border-radius: 3px !important;
    -webkit-box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
    -moz-box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
    box-shadow: -1px 0px 5px 0px rgb(165, 165, 165);
    font-weight: 700 !important;
    padding: 6px 16px !important;
    min-width: 130px !important;
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
