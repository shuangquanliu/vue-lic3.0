<template>
  <div>
    <Footer v-if="$route.meta.isShowFooter"/>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './components/Footer/Footer.vue'

import {reqAddress,reqShops,reqCatorgorys} from './api/index'
  export default {
    /* async mounted(){
      const result = await reqAddress('41.10049','119.36868')
      console.log(result)
    }, 
    */
   mounted(){
      this.$store.dispatch('autoLogin')
   },
    components:{
      Footer
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
