<template lang="html">

  <section class="search-wrap">
    <form class="search" @submit="search">
      <div class="form-group">
        <img class="ico home" src="../assets/home-ico.png">
        <input type="text" id="searchName" v-model="name" placeholder="Restaurant name">
      </div>
      <div class="seperator">
        or
      </div>
      <div class="form-group">
        <img class="ico" src="../assets/location-ico-blue.png">
        <input type="text" pattern="[0-9]{5}" id="zip" v-model="zip" placeholder="Zip code">
      </div>
      <div class="seperator">
        or
      </div>
      <div class="form-group city-name-box">
        <div class="city">
          <img class="ico" src="../assets/location-ico-blue.png">
          <input type="text" id="city" pattern="[A-Za-z\s]*" v-model="city" placeholder="City name">
         </div>
        <div class="state">
          <dropdown
            :options="arrayOfStates"
            :selected="chosenState"
            v-on:updateOption="setState">
          </dropdown>
        </div>
      </div>
      <button id="search" type="submit" :disabled="!zip && !name && !city && !chosenState.value">
        <i class="fa fa-search" aria-hidden="true"></i>
        &nbsp;Search
      </button>
    </form>
    <div class="text-wrap">
      {{ totalEntries }} result found
    </div>
  </section>

</template>

<script lang="js">
  import dropdown from 'vue-dropdowns';
  import { mapActions, mapState, mapGetters } from 'vuex';
  import states from '../states';
  
  export default  {
    name: 'app-search',
    data () {
      return {
        arrayOfStates: states,
        chosenState: null,
        name: null,
        zip: null,
        city: null,
      }
    },
    created() {
      this.chosenState = this.$store.state.chosenState;
    },
    methods: {
      ...mapActions([
        'searchRestaurants'
      ]),
      setState(chosenState) {
        this.chosenState = chosenState;
      },
      search(e) {
        e.preventDefault();

        let searchPayload = {
          name: this.name,
          zip: this.zip,
          city: this.city,
          chosenState: this.chosenState
        };
        this.searchRestaurants(searchPayload);  
      }
    },
    components: {
      'dropdown': dropdown
    },
    computed: {
      ...mapState([
        'totalEntries'
      ])
    }
  }
</script>
<style lang="scss">
.state {
  .dropdown-toggle {
    max-width: 100%;
    display: flex;
    margin-right: 0;
    @media screen and (max-width: 500px) {
      margin-left: 46px;
    }
  }
}
</style>
<style scoped lang="scss">
.search-wrap {
  position: relative;
}
.search {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 2px;
  padding: 0;
  height: 50px;
  position: relative;
  -webkit-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #d2d2d2;
    padding: 5px 10px 5px 5px;
    font-size: 16px;
    font-family: "Lato", Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    color: #484848;
    width: 100%;
    min-width: 80px;
    background: none !important;
  }
  .form-group {
    display: flex;
    width: 100%;
    align-items: center;
    margin-right: 20px;
  }
  .ico {
    margin-right: 10px;
  }
  .ico.home {
    margin-left: 20px;
  }
  #search {
    display: flex;
    align-items: center;
  }
  #search img {
    width: 20px;
    margin-right: 5px;
  }
  .fa.fa-search {
    color: #ffffff;
    font-size: 24px;
  }
  .seperator {
    margin-right: 20px;
    font-size: 26px;
    font-weight: 400;
    color: #dbdbdb;
  }
  .state {
    width: 100%;
    .btn-group {
      width: 100%;
    }
    .dropdown-toggle {
      width: 100%;
      max-width: 100%;
      display: flex;
    }
  }
  button {
    border: none;
    background-color: #1183a8;
    padding: 14px 20px;
    border-radius: 0px 4px 4px 0px;
    -moz-border-radius: 0px 4px 4px 0px;
    -webkit-border-radius: 0px 4px 4px 0px;
    color: #ffffff;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    justify-content: flex-end;
    cursor: pointer;
  }
  button[disabled] {
    opacity: 0.75;
    cursor: auto;
  }
  .city-name-box {
    display: flex;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
    .city {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
    }
  }
}
.text-wrap {
  font-weight: 700;
  font-size: 18px;
  text-align: right;
  position: absolute;
  right: 0;
  margin-top: 15px;
}
@media screen and (max-width: 1020px) {
  .search {
    flex-direction: column;
    height: auto;
    padding: 20px;
    justify-content: center;
    margin: 60px auto 20px auto;
  }
  .search .form-group {
    width: 100%;
  }
  .search .ico,
  .search .ico.home {
    margin-left: 10px;
  }
  .text-wrap {
    font-weight: 700;
    font-size: 18px;
    position: static;
    right: 0;
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;
  }
  .seperator {
    margin: 20px 0 10px 0;
  }
  .search button {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    margin-top: 10px;
  }
}
</style>
