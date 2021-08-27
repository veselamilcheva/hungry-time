<template>
  <div class="dashboard">
    Home belongs to dynamic components and slots:
    <br />
    <br />
    <button class="dashboard_btn dashboard_btn--primary" @click="selectedComponent = 'appBlue'">Load Blue</button>
    <button class="dashboard_btn dashboard_btn--success" @click="selectedComponent = 'appGreen'">Load Green</button>
    <button class="dashboard_btn dashboard_btn--danger" @click="selectedComponent = 'appRed'">Load Red</button>
    <hr>
    <component :is="selectedComponent">
      <template v-slot:blue>{{ pageTemplateDetails.blue }}</template>
      <template v-slot:green>{{ pageTemplateDetails.green }}</template>
      <template v-slot:red>{{ pageTemplateDetails.red }}</template>
    </component>
  </div>
</template>
<script>
import Blue from './../components/Blue.vue';
import Green from './../components/Green.vue';
import Red from './../components/Red.vue';

export default {
  data() {
    return {
      selectedComponent: 'appBlue',
      pageTemplateDetails: {
        blue: 'I am blue',
        green: 'I am green',
        red: 'I am red'
      }
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
}
</script>
<style scoped lang="scss">
.dashboard {
  &_btn {
    outline: none;
    width: 120px;
    padding: 8px;
    border-radius: 4px;
    border: none;
    &--primary {
      background: #1183a8;
      color: #fff;
    }
    &--success {
      background: #c6ecc6;
    }
    &--danger {
      background: #ffcccc;
    }
  }

}
</style>
