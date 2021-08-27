<template>
  <div>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <app-avatar/>
          </li>
          <li><router-link to='/dashboard' exact-active-class="active">Dashboard</router-link></li>
          <li><router-link to='/' exact-active-class="active">Search</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script lang="js">
import Avatar from "./Avatar";

export default  {
  name: 'app-mobile-nav',
  components: {
    appAvatar: Avatar,
  }
}
</script>
<style scoped lang="scss">
  #menuToggle {
    display: block;
    position: relative;
    top: 5px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: #378daf;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 26px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #545454;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    width: 150px;
    height: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -150px;
    margin: 0;
    padding-top: 50px;
    background: #d6e2e8;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform: none;
  }

  #menu li {
    margin-top: 8px;
    margin-left: 24px;
    font-size: 18px;
  }

  #menuToggle input:checked ~ ul {
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
</style>
