import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import { createI18n } from 'vue-i18n';
import en from './locale/en.json';
import pl from './locale/pl.json';
import ua from './locale/ua.json';
import ru from './locale/ru.json';

if (!window.sessionStorage.getItem('locale')) {
    window.sessionStorage.setItem('locale', 'en');
}

const i18n = createI18n({
    locale: window.sessionStorage.getItem('locale'),
    legacy: false,
    messages: {
        en: en,
        pl: pl,
        ua: ua,
        ru: ru
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
    .provide('i18n', i18n)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
