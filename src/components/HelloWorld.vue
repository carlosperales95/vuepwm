<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      In order to use this project,<br>
      You have to log in
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
