<template>
    <div class="navbar-container">
        <div class="icon font-medium">
            <font-awesome-icon icon="fa-solid fa-user-secret" />
        </div>
        <div class="links font-regular">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {
    },
    props: {
    },
    computed: {
    },
    methods: {
    
    },
}
</script>