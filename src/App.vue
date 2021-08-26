<template>

  <div id="app-shell">
    <app-header></app-header>
    <app-notification></app-notification>
    <div class="container">
      <router-view />
    </div>
  </div>

</template>

<script>
import Header from "./components/Header";
import Notification from "./components/Notification";

export default {
  name: "app",
  components: {
    appHeader: Header,
    appNotification: Notification,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background: #f7f7f7;
}
#app-shell {
  font-family: "Lato", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #545454;
}
.container {
  margin: 0 auto;
  max-width: 1549px;
  padding: 0 60px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #545454;
}
a:hover {
  color: #378daf;
}
.dropdown-toggle {
  padding: 5px 10px 8px 5px !important;
  font-family: "Lato", Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  color: #484848 !important;
  margin-top: 4px;
  max-width: 210px;
}
.dropdown-menu {
  max-height: 300px;
  overflow-y: auto;
}
.caret {
  border-right: 2px solid !important;
  border-top: 0 !important;
  border-bottom: 2px solid !important;
  border-left: 0 !important;
  height: 12px !important;
  width: 12px !important;
  transform: rotate(45deg) !important;
  top: 11px !important;
  right: 20px !important;
  color: #858585 !important;
}
@media only screen and (max-width: 960px) {
  .container {
    padding: 0 20px;
  }
}
</style>
