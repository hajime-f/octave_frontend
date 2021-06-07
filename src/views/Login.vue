<template>
  <section class="sectionBuilder no-padding masthead">
    <div class="container -wide">
      <Login/>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Login',
  components: {
    Login
  }
}
</script>

<style scoped>
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
  section * {
  -webkit-font-smoothing: antialiased;
  }
  .sectionBuilder {
  position: relative;
  }
  .no-padding {
  padding: 0 auto;
  }
  .masthead {
  background: #fff;
  min-height: 800px;
  max-height: 1000px;
  padding-top: 55px;
  overflow: hidden;
  }
  .container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding-top: 0;
  }
  .container.-wide {
  max-width: 1312px;
  width: calc(100% - 128px);
  }
</style>
