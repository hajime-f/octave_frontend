<template>
  <header class="siteHeader">
    <div class="siteHeader__row">
      <div class="siteHeader__wrapper">
        <div class="siteHeader__nav-group">
          <a href="/" class="siteHeader__logo">
            <h1><img alt="Octave" src="@/assets/octave_logo.png"></h1>
          </a>
        </div>
        <div class="siteHeader__nav-group">
          <nav class="siteHeader__nav">
            <ul class="siteHeader__nav-top-links">
              <li class="siteHeader__nav-top-links-items siteHeader-button button hidden-logged-in">無料で登録</li>
              <li class="siteHeader__nav-top-links-items"><router-link to="/">Home</router-link></li> |
              <li class="siteHeader__nav-top-links-items"><router-link to="/about">About</router-link></li>
            </ul>
          </nav>	
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
  transition: padding 225ms, transform .3s ease-out;
  width: 100%;
  z-index: 900;
  box-shadow: none;
  top: 0;
  position: fixed;
  margin: 0 auto;
  padding: 0 auto;
  }

  .siteHeader__row {
  height: 56px;
  width: 100%;
  position: relative;
  z-index: 10;
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
  orverflow: hidden;
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
  transform: scale(1,1);
  }

  .siteHeader__nav {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  }
  
  .siteHeader__nav-top-links {
  margin: 0 auto;
  padding: 0 auto;
  list-style: none;
  }
  
  .siteHeader__nav-top-links-items {
  display: inline-block;
  position: relative;
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
