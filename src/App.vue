<template>
  <header class="main-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h1 class="over-all-top-heading">
            <a href="/"><img alt="Octave" src="@/assets/octave_logo.png"></a>
          </h1>
          <div class="main-header__menu">
            <nav class="top-links-nav visible-lg visible-md">
              <ul class="top-links-list">
                <li class="top-links-list__item siteHeader-button button hidden-logged-in">無料で登録</li>
                <li class="top-links-list__item"><router-link to="/">Home</router-link></li> |
                <li class="top-links-list__item"><router-link to="/about">About</router-link></li>
              </ul>
            </nav>	
          </div>
        </div>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style scoped>
  
  @media (min-width: 768px)
  .main-header {
  background-color: #fff;
  }

  .main-header {
  background: #fff;
  margin-bottom: 0;
  color: #fff;
  border-bottom: 0;
  }

  .main-header {
  font-size: 14px;
  letter-spacing: .2px;
  font-weight: 400;
  }

  .main-header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .container-fluid {
  position: relative;
  z-index: 1;
  }

  @media (min-width: 768px)
  .container-fluid {
  padding-left: 30px;
  padding-right: 30px;
  }

  .container-fluid {
  margin-right: auto;
  margin-left: auto;
  }

  .container-fluid:before {
  display: table;
  content: "";
  }

  .container-fluid:after {
  clear: both;
  }

  .container-fluid:after {
  display: table;
  content: "";
  }
  
  @media (min-width: 768px)
  .row {
  margin-left: -30px;
  margin-right: -30px;
  }

  .row:before {
  display: table;
  content: "";
  }

  .row:after {
  clear: both;
  }

  @media (min-width: 768px)
  .col-md-12 {
  height: 70px;
  padding-left: 30px;
  padding-right: 30px;
  }

  .col-md-12 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  }

  .col-md-12 {
  padding: 0;
  }
  
  @media (min-width: 992px)
  .col-md-12 {
  width: 100%;
  }

  @media (min-width: 992px)
  .col-md-12 {
  float: left;
  }

  .col-md-12 {
  position: relative;
  min-height: 1px;
  }

  over-all-top-heading {
  display: inline-block;
  margin: 0;
  }

  .main-header__menu {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  }

  .top-links-nav {
  display: block;
  }
  
  @media (min-width: 1200px)
  .visible-lg {
  display: block !important;
  }

  .top-links-list {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  font-size: 0;
  line-height: 0;
  }

  nav {
  display: block;
  }
  
  ul {
  margin-top: 0;
  }

  ul {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  }

  .top-links-list__item {
  display: inline-block;
  position: relative;
  }
  
  *:before, *:after {
  box-sizing: border-box;
  }
  
  * {
  box-sizing: border-box;
  }
  
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
