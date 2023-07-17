<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
    name: 'App',
    components:{
      NavBar,
    },
    props: {
        
    },
    computed: {
    },
    methods: {
    
    },
}
</script>

<style lang="scss">
  @import "./main.scss";
</style>
