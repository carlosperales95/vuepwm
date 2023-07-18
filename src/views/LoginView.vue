<template>
    <main class="login">
        <AlertComponent :title="'Login Response'" :msg="loginResponse"/>
        <h1> Log in the password manager</h1>
        <form>
            <label :for="username"> Username </label><br>
            <input type="text" name="username"><br>
            <label :for="password"> Password </label><br>
            <input type="text" name="password"><br>
            <button type="submit" @click="doLogin()">Log me in</button>
        </form>
    </main>
</template>

<script>
import axios from 'axios';
import AlertComponent from '../components/Alert.vue';
export default {
    name: 'LoginView',
    components: {
        AlertComponent,
    },
    props: {
    },
    computed: {
    },
    data(){
        return {
            loginResponse: null,
        }
    },
    async mounted() {
    },

    methods: {
        async doLogin() {
            let username = document.getElementsByName("username")[0].value;
            let password = document.getElementsByName("password")[0].value;
            console.log(username);

            const data = {username: username, password: password}
            console.log(data)

            axios.post('http://localhost:8080/login', data)
                .then(response => {
                    console.log(response);
                    this.loginResponse = response;
                    // window.location.href = 'home';
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
}
</script>