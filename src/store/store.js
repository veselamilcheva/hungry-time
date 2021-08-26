import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
import restaurantsStub from "./restaurantsStub";

Vue.use(Vuex)

const FIRST_PAGE = 1;

export default new Vuex.Store({
  state: {
    perPage: 5,
    totalPages: 0,
    totalEntries: 0,
    currentPage: FIRST_PAGE,
    restaurants: [],
    name: null,
    zip: null,
    city: null,
    chosenState: {
      name: "Florida",
      value: "FL"
    },
    price: null,
    distance: null,
    rating: null,
  },
  mutations: {
    'SET_RESTAURANTS'(state, { restaurants, total_entries, current_page }) {
      state.restaurants = restaurants || [];
      state.currentPage = current_page || FIRST_PAGE;
      state.totalPages = Math.ceil(total_entries / state.perPage);
      state.totalEntries = total_entries || 0;
    },
    'SET_SEARCH'(state, { name, zip, city, chosenState }) {
      state.name = name;
      state.zip = zip;
      state.city = city;
      state.chosenState = chosenState;
    },
    'SET_FILTERS'(state, { price, distance, rating }) {
      state.price = price;
      state.distance = distance;
      state.rating = rating;
    },
  },
  actions: {
    searchRestaurants({ commit, dispatch }, searchPayload) {
      commit('SET_SEARCH', searchPayload)
      dispatch('getRestaurantsFromApi');
    },
    filterRestaurants({ commit, dispatch }, filterPayload) {
      commit('SET_FILTERS', filterPayload)
      dispatch('getRestaurantsFromApi');
    },
    getRestaurantsFromApi({ commit, state }, page) {
      page = page || FIRST_PAGE;

      // Originally this was using the OpenTable API, which is no longer available

      // return axios
      //   .get('/restaurants', {
      //     params: {
      //       per_page: state.perPage,
      //       name: state.name,
      //       page: page,
      //       zip: state.zip,
      //       city: state.city,
      //       state: state.chosenState.value,
      //       price: state.price
      //     }
      //   })
      //   .then((response) => {
      //     commit('SET_RESTAURANTS', response.data)
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     commit('SET_RESTAURANTS', {})
      //   });

      let restaurants = restaurantsStub.filter(item => {
        if (state.name && !item.name.toLowerCase().includes(state.name.toLowerCase())) {
          return false;
        }
        if (state.zip && item.postal_code.toString() !== state.zip.toString()) {
          return false;
        }
        if (state.city && state.city.length && !item.city.toLowerCase().includes(state.city.toLowerCase())) {
          return false;
        }
        if (state.chosenState && state.chosenState.value && item.state !== state.chosenState.value) {
          return false;
        }
        if (state.price && item.price !== state.price) {
          return false;
        }
        if (state.distance && item.distance !== state.distance) {
          return false;
        }
        if (state.rating && item.rating < state.rating) {
          return false;
        }

        return true;
      });
      commit('SET_RESTAURANTS', {
        restaurants: restaurants.slice((page - 1) * state.perPage, page * state.perPage),
        total_entries: restaurants.length,
        current_page: page
      })
    }
  },
  getters: {
    restaurantList(state) {
      return state.restaurants.map(restaurant => {
        // Random ratings are needed when using the OpenTable API
        // restaurant.rating = Math.floor(Math.random() * 5) + 1;
        return restaurant;
      })
    },
  }
})
