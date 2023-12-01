import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import { createI18n } from 'vue-i18n';
import en from './locale/en.json';
import pl from './locale/pl.json';

const i18n = createI18n({
    locale: "en",
    messages: {
        en: en,
        pl: pl
    }
});

// Fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab);

createApp(App)
    .use(router)
    .use(i18n)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
