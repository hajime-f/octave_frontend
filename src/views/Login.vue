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
