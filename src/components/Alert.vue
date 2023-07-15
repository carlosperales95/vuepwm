<template>
    <div class="alert-container" v-if="msg != null">
        <h2>{{ title }}</h2>
        <p>{{ msg.data }}</p>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    components: {
    },
    props: {
        title: String,
        msg: String,
    }
}
</script>
