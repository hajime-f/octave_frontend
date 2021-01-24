<template>
  <header class="siteHeader">
    <div class="siteHeader__wrapper">
      <div class="siteHeader__nav-group">
	<a href="/" class="siteHeader__logo">
          <h1 class="siteHeader__logo-h1">
            <img alt="Octave" src="@/assets/octave_logo.png">
          </h1>
	</a>
      </div>
      <div class="siteHeader__nav-group">
	<nav class="siteHeader__nav">
          <ul class="siteHeader__nav-top-links">
            <li class="siteHeader__nav-top-links-items"><router-link to="/">Home</router-link></li> |
            <li class="siteHeader__nav-top-links-items"><router-link to="/about">About</router-link></li>
          </ul>
	</nav>	
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
  top: 10px;
  position: fixed;
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
  height: 100%
  }
  
  .siteHeader__logo {
  display: block;
  position: relative;
  }

  .siteHeader__logo-h1 {
  margin: 0 auto;
  padding: 0 auto;
  }
  
  .siteHeader__nav {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  }
  
  .siteHeader__nav-top-links {
  list-style: none;
  }
  
  .siteHeader__nav-top-links-items {
  display: inline-block;
  position: relative;
  }
  
</style>
