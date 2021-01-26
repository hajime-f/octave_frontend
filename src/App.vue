<template>
  <header class="siteHeader">
    <div class="siteHeader__row">
      <div class="siteHeader__wrapper">
        <div class="siteHeader__nav_group">
          <a class="siteHeader__logo" href="/">
            <img alt="Octave" src="@/assets/octave_logo.png">
          </a>
          <nav class="horizontalNavigation">
            <ul class="horizontalnavigation__list">
              <li class="horizontalnavigation__list-item"><router-link to="/">Home</router-link></li> |
              <li class="horizontalnavigation__list-item"><router-link to="/about">About</router-link></li>
            </ul>
          </nav>
        </div>
        <div class="siteHeader__nav_group">
          <div class="navigation__link navigation__contact-sales contact-sales">aaa</div>
          <div class="navigation__link navigation__sign-in hidden-logged-in">bbb</div>
          <div class="siteHeader-buttons hidden-device-mobile">
            <div class="siteHeader-button button hidden-logged-in">無料で試す</div>
          </div>
	</div>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style scoped>
  
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

  .siteHeader {
  justify-content: space-between;
  transition: padding 225ms,transform .3s ease-out;
  width: 100%;
  z-index: 900;
  box-shadow: none;
  top: 0;
  position: fixed;
  }
  
  article, aside, footer, header, nav, section {
  display: block;
  }
  
  *, :after, :before {
  box-sizing: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: inherit;
  vertical-align: inherit;
  }
  
  * {
  cursor: inherit;
  margin: 0;
  padding: 0;
  }
  
  *, :after, :before {
  background-repeat: no-repeat;
  }  

  .siteHeader__row {
  height: 56px;
  width: 100%;
  position: relative;
  z-index: 10;
  }
    
  div {
  display: block;
  }

  .new-homepage .siteHeader__row:before {
  opacity: 1;
  }
  .siteHeader__row:before {
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  box-shadow: 0 2px 12px 0 rgba(36,50,66,.075);
  background-color: #fff;
    transition: opacity .3s ease-in-out;
  }  
  
  .siteHeader__wrapper {
  height: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 64px;
  overflow: hidden;
  }
  
  :last-child {
  margin-bottom: 0!important;
  }

  .siteHeader__nav-group {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 100%;
  }

  .siteHeader__logo {
  display: block;
  position: relative;
  }
  
  .-a, a {
  background-color: transparent;
  color: #796eff;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: color .3s;
  }
  
  .siteHeader__logo:before {
  content: "";
  position: absolute;
  border-radius: 3px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  top: -10px;
  left: -10px;
  background: #edf1f2;
  z-index: -1;
  opacity: 0;
  transform: scale(1.1);
  transition: opacity .2s ease-in-out,transform .2s ease-in-out;
  }

  .siteHeader .horizontalNavigation {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 0 32px;
  }
  
  .siteHeader .horizontalNavigation__list {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin: 0;
  padding: 0;
  }

  .siteHeader .horizontalNavigation__list-item {
  margin: 0;
  padding: 0;
  }
  
  ol li, ul li {
  margin-bottom: 8px;
  position: relative;
  }
  
  nav ol, nav ul {
  list-style: none;
  }
  
  ol, ul {
  margin-bottom: 32px;
  padding-left: 32px;
  }
  
  ul {
  list-style-type: disc;
  }

  .siteHeader .navigation__contact-sales, .siteHeader .navigation__sign-in {
  padding: 0 12px;
  margin: 0;
  }
  
  .siteHeader .navigation__link {
  padding: 0 13px;
  margin: 0;
  background: none;
  border-radius: 0;
  border: 0;
  color: #646f79;
  position: relative;
  display: inline-block;
  height: 100%;
  letter-spacing: 0;
  font-size: 14px;
  line-height: 56px;
  }
  
  .siteHeader-button {
  color: #fff;
  background-color: #273240;
  }

  .hidden-logged-in {
  display: block;
  }

  .button {
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  letter-spaceing: .5px;
  line-height: 36px;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  }
  
</style>
