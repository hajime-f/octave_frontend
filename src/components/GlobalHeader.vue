<template>
  <header class="siteHeader">
    <div class="siteHeader__row">
      <div class="siteHeader__nav_group">
        <h1 class="siteHeader__logo"><img alt="Octave" src="@/assets/octave_logo.png"></h1>
      </div>
      <div class="siteHeader__nav_group">
        <nav class="horizontalNavigation">
          <ul class="horizontalNavigation__list">
            <li class="horizontalNavigation__list-item"><router-link to="/">Home</router-link></li> |
            <li class="horizontalNavigation__list-item"><router-link to="/">About</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'site-header',
    }
</script>

<style scoped>
  
  .siteHeader {
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #fff;
  align-items: center;
  }

  .siteHeader__logo {
  margin-right: auto;
  }

  .horizontalNavigation__list {
  list-style: none;
  display: inline-block;
  padding: 10px;
  }
  
  
</style>
