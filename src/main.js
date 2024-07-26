import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';

const pinia = createPinia() 
const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
});
app.use(ToastService)
app.use(pinia)

app.component('PButton', Button)
app.component('PInputText', InputText)
app.component('PFloatLabel', FloatLabel)
app.component('PTextarea', Textarea)
app.component('PToast', Toast)
app.component('PMessage', Message)



app.mount('#app')

