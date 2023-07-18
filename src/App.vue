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
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
</style>
