import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
        price: null
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
        'SET_FILTERS'(state, { price }) {
            state.price = price;
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
            return axios.get('/restaurants', {
                params: {
                    per_page: state.perPage,
                    name: state.name,
                    page: page,
                    zip: state.zip,
                    city: state.city,
                    state: state.chosenState.value,
                    price: state.price
                }
            })
                .then((response) => {
                    commit('SET_RESTAURANTS', response.data)
                })
                .catch((error) => {
                    console.error(error);
                    commit('SET_RESTAURANTS', {})
                });
        }
    },
    getters: {
        restaurantList(state) {
            return state.restaurants.map(restaurant => {
                restaurant.rating = Math.floor(Math.random() * 5) + 1;
                return restaurant;
            })
        },
    }
})

