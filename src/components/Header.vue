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
        <img src="../assets/user-ico.png">
      </div>  
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'app-header',
  }
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #deebef;
  padding: 0 40px;
  background: #ffffff;
  .navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
}
@media only screen and (max-width: 1020px) {
  .header {
    padding: 5px;
  }
  .header .logo img {
    width: 160px;
  }
}
@media only screen and (max-width: 530px) {
  .header .navigation .nav a {
    font-size: 13px;
  }
}
</style>
