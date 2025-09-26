import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)

import BaseButton from '@/components/base_components/BaseButton.vue';
import SvgIcon from './components/base_components/SvgIcon.vue';
import BaseDialog from './components/base_components/BaseDialog.vue';
import Loader from './components/base_components/Loader.vue';

app.use(router);

app.component('BaseButton', BaseButton);
app.component('SvgIcon', SvgIcon);
app.component('BaseDialog', BaseDialog);
app.component('Loader', Loader);


app.mount('#app');


