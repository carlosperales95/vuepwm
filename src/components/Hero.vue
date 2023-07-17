<template>
    <div class="hero-container">
        <img class="hero-show" alt="PWM logo" src="../assets/backgif.gif">
        <div class="keyshape" id="key2">
            <KeyIcon/>
        </div>
        <div class="keyshape" id="key3">
            <KeyIcon/>
        </div>
        <div class="keyshape" id="key1">
            <KeyIcon/>
        </div>
        <ButtonComponent/>
    </div>
</template>

<script>
import ButtonComponent from './Button.vue';
import KeyIcon from './KeyIcon.vue';

export default {
    name: 'HeroComponent',
    components: {
    KeyIcon,
    ButtonComponent,
    },
    props: {
        
    },
    computed: {
    },
    methods: {
    
    },
}
</script>