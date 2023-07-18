import { library } from '@fortawesome/fontawesome-svg-core'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faShieldHalved, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faShieldHalved)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
