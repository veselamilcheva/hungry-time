<template lang="html">

  <section class="map">
    <gmaps-map :options="getCenterMarker">
      <gmaps-marker v-for="(marker, i) in getArrayMarkers" :key="i" :options="marker.options" />
    </gmaps-map>
  </section>

</template>

<script lang="js">
  import { gmapsMap, gmapsMarker } from 'x5-gmaps';

  export default  {
    name: 'app-map',
    props: ['restaurants'],
    mounted () {

    },
    data () {
      return {
       
      }
    },
    methods: {

    },
    computed: {
      getArrayMarkers() {
        return this.restaurants.map((restaurant) => {
            return { options: { position: { lat: restaurant.lat, lng: restaurant.lng } } }
        })
      },
      getCenterMarker() {
        return  {
          center: { lat: this.restaurants[0].lat, lng: this.restaurants[0].lng },
          zoom: 8,
        }
      }
    },
    components: { 
      gmapsMap, gmapsMarker 
    }
}


</script>

<style scoped lang="scss">
  .map {
    height: 500px;
  }
  @media only screen and (max-width: 1350px) {
    .map {
      height: 200px;
    }
  }
</style>
