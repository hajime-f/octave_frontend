<template>
  <v-app>
    <v-main>
      <GlobalHeader/>
      <router-view/>
      <GlobalFooter/>
    </v-main>
  </v-app>
</template>

<script>
  import GlobalHeader from '@/components/GlobalHeader'
  import GlobalFooter from '@/components/GlobalFooter'
  
  export default {
      components: {
          GlobalHeader,
          GlobalFooter
      },
      
      name: 'App',
      
      data: () => ({
          //
      }),
  }
</script>
