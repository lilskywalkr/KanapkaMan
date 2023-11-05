import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/plugins/router'

// Fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab);

createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
