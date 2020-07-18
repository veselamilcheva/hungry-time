<template lang="html">

  <section class="rating-wrap">
     <div class="rating">
      <ul class="list">
        <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
        <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i> 
        </li>
      </ul>
      <div v-if="hasCounter" class="info counter">
        <span class="score-rating">{{ stars }}</span>
        <span class="divider">/</span>
        <span class="score-max">{{ maxStars }}</span>
      </div>
  </div>
  </section>

</template>

<script lang="js">
  import { mapActions } from 'vuex';

  export default  {
    name: 'app-rating',
    props: ['grade', 'maxStars', 'hasCounter'],
    mounted () {

    },
    data () {
      return {
        stars: this.grade
      }
    },
    methods: {
      rate(star) {
        if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
          this.stars = this.stars === star ? star - 1 : star;
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
.rating {
  display: flex;
  padding: 20px 0;
  color: #1183A8;
  background: #fff;
  .list {
    padding: 0;
    margin: 0 5px 0 0;
    &:hover {
      .star {
        color: #1183A8;
      }
    }
    .star {
      display: inline-block;
      font-size: 13px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        .star:not(.active) {
          color: inherit;
        }
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: #1183A8;
      }
    }
  }
  .info {
    font-size: 15px;
    text-align: center;
    display: table;
    .divider {
      margin: 0 5px;
      font-size: 15px;
    }
    .score-max {
      font-size: 15px;
    }
  }
  ul li {
    margin: 2px;
  }
}
@media only screen and (max-width: 1040px) {
  .rating {
    padding: 10px;
  }
}
</style>
