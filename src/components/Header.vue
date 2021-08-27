<template lang="html">
  <section class="header">
    <div class="logo">
      <img class="img-logo" src="../assets/logo.png">
    </div>
    <div class="navigation">
      <div class="nav">
        <ul>
          <li><router-link to='/dashboard' exact-active-class="active">Dashboard</router-link></li>
          <li><router-link to='/' exact-active-class="active">Search</router-link></li>
        </ul>
      </div>
      <div class="notification">
        <img src="../assets/notification-ico.png">
      </div>
      <div class="user">
        <app-avatar/>
      </div>
    </div>
    <div class="navigation-mobile">
      <div class="notification">
        <img src="../assets/notification-ico.png">
      </div>
      <app-mobile-nav></app-mobile-nav>
    </div>
  </section>

</template>

<script lang="js">
  import Avatar from "./Avatar";
  import MobileNav from "./MobileNav";

  export default  {
    name: 'app-header',
    components: {
      appAvatar: Avatar,
      appMobileNav: MobileNav
    }
  }
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #deebef;
  padding: 10px 40px;
  background: #ffffff;
  .navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .navigation .nav a {
    text-decoration: none;
    cursor: pointer;
    font-weight: 900;
  }
  .navigation .nav .active {
    color: #378daf;
  }
  .navigation .notification {
    margin: 5px 20px 0 10px;
  }
  .img-logo {
    width: 180px;
  }
  .navigation-mobile {
    display: none;
    @media screen and (max-width: 500px) {
      display: flex;
    }
  }
}
@media screen and (max-width: 1020px) {
  .header {
    padding: 5px;
  }
  .header .logo img {
    width: 160px;
  }
}
@media screen and (max-width: 530px) {
  .header .navigation .nav a {
    font-size: 13px;
  }
}
</style>
