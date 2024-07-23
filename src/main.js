import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


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





const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
});
app.use(ToastService)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Textarea', Textarea)
app.component('Toast', Toast)
app.component('Message', Message)



app.mount('#app')

