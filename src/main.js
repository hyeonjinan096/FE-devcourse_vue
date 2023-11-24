import {createApp} from 'vue'
import App from './App.vue'
import BtnNew from '~/components/BtnNew'

const app = createApp(App)
app.component('BtnNew', BtnNew)
app.mount('#app')