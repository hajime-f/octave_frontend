<template>
  <section class="sectionBuilder no-padding masthead">
    <div class="container -wide">
      <Top__without_login/>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Top__without_login from '@/components/Top__without_login.vue'
import Top__with_login from '@/components/Top__with_login.vue'

export default {
  name: 'Top__without_login',
  components: {
    Top__without_login
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
