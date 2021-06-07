<template>
  <header class="siteHeader">
    <div class="siteHeader__row">
      <div class="siteHeader__nav_group">
        <h1 class="siteHeader__logo"><img alt="Octave" src="@/assets/img/octave_logo.png"></h1>
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
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
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
