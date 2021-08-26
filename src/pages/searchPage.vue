<template>
  <div>
    <app-search></app-search>
    <app-filter></app-filter>
    <app-restaurant-list></app-restaurant-list>
  </div>
</template>
<script>
import Search from "./../components/Search";
import Filter from "./../components/Filter";
import RestaurantList from "./../components/RestaurantList";
import { mapActions } from 'vuex';

export default {
  name: "searchPage",
  components: {
    appSearch: Search,
    appFilter: Filter,
    appRestaurantList: RestaurantList
  },
  created() {
    this.getRestaurantsFromApi();
  },
  methods: {
    ...mapActions([
      'getRestaurantsFromApi'
    ]),
  }
};
</script>
