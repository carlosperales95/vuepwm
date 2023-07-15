<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      In order to use this project,<br>
      You have to log in
      <router-link to="/login">Login</router-link>
    </p>
    <h3>Made By</h3>
    <p>
      carlosperales95 - a.k.a SapoKode
    </p>
    <ul>
      <li><a href="https://github.com/carlosperales95" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://carlosperales95.github.io/personal-website/" target="_blank" rel="noopener">PersonalSite</a></li>
      <li><a href="https://www.linkedin.com/in/carlos-perales-0b168375/" target="_blank" rel="noopener">LinkedIn</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
