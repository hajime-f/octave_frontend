<template>
  <header class="siteHeader">
    <div class="siteHeader__row">
      ::before
      <div class="siteHeader__wrapper">
        <div class="siteHeader__nav_group">
          <a class="siteHeader__logo" href="/">
            ::before
            <img alt="Octave" src="@/assets/octave_logo.png">
          </a>
          <nav class="horizontalNavigation">
            <ul class="horizontalnavigation__list">
              <li class="horizontalnavigation__list-item"><router-link to="/">Home</router-link></li></li> |
              <li class="horizontalnavigation__list-item"><router-link to="/about">About</router-link></li></li>
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
