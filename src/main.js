import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

// imports of translations
import de from '@/locales/de.json';
import en from '@/locales/en.json';

// configure i18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { de, en },
});

const app = createApp(App);

import BaseButton from '@/components/base_components/BaseButton.vue';
import SvgIcon from './components/base_components/SvgIcon.vue';
import BaseDialog from './components/base_components/BaseDialog.vue';
import Loader from './components/base_components/Loader.vue';

app.use(router);

app.component('BaseButton', BaseButton);
app.component('SvgIcon', SvgIcon);
app.component('BaseDialog', BaseDialog);
app.component('Loader', Loader);

app.use(i18n);
app.mount('#app');
