<template>
    <div class="navbar-container">
        <div class="icon">
            <p>Icon</p>
        </div>
        <div class="links">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        
    },
    computed: {
    },
    methods: {
    
    },
}
</script>