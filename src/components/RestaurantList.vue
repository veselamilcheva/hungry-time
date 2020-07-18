<template lang="html">

  <section class="restaurant-list">
    <div class="list-item-wrap">
      <transition-group name="slide" mode="out-in">
        <app-list-item v-if="restaurants.length" v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"></app-list-item>
      </transition-group>
      <div v-if="!restaurants.length" class="message-no-lists">Nothing found! Please try again.</div>
      <pagination
        v-if="restaurants.length"
        :total-pages="totalPages"
        :per-page="perPage"
        :current-page="currentPage"
        @pagechanged="onPageChange">
      </pagination>
    </div>
    <div v-if="restaurants.length" class="map-wrap">
      <app-map :restaurants="restaurants"></app-map>
    </div>
  </section>

</template>

<script lang="js">
  import ListItem from "../components/ListItem"
  import AppMap from "../components/Map"
  import Pagination from "../components/Pagination"
  import { mapGetters, mapState, mapActions } from 'vuex';

  export default  {
    name: 'app-restaurant-list',
    methods: {
      ...mapActions([
        'getRestaurantsFromApi'
      ]),
      onPageChange(page) {
        this.getRestaurantsFromApi(page);
      }
    },
    computed: {
       ...mapGetters({
        restaurants: 'restaurantList'
      }),
      ...mapState([
        'currentPage',
        'totalPages',
        'perPage'
      ])
    },
    components: {
      appListItem: ListItem,
      appMap: AppMap,
      Pagination
    }
  }
</script>

<style scoped lang="scss">
.restaurant-list {
  display: flex;
  margin-top: 26px;
  align-items: flex-start;
  .list-item-wrap {
    width: 65%;
  }
  .map-wrap {
    width: 35%;
    padding-left: 20px;
  }
  .message-no-lists {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }
}
@media only screen and (max-width: 1350px) {
  .restaurant-list {
    flex-direction: column-reverse;
    .list-item-wrap {
      width: 100%;
    }
    .map-wrap {
      width: 100%;
      padding-left: 0;
      margin-bottom: 30px;
    }
  }
}
@media only screen and (max-width: 1020px) {
  .restaurant-list {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
}

//animation
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
