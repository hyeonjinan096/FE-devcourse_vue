import {createApp} from 'vue'
import App from './App.vue'
import store from '~/store'

const app = createApp(App)
app.use(store) //플러그인 등록
app.mount('#app') 