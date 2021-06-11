<template>
  <header>
    <v-app-bar app dark>
      <v-toolbar-title>
        <v-img alt="Octave" src="@/assets/img/octave_logo.png"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined sm="4">ログイン</v-btn>
      <v-btn color="light-green" sm="4">無料で始める</v-btn>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary app right>
      <v-container>
        <v-list nav dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>ABOUT</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>ログイン</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </header>
</template>

<script>
  export default {
      data () {
          return {
              drawer: null
          }
      }
  }
 
</script>

<style scoped>
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
</style>
