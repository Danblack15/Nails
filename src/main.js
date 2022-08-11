import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

//fullPage.js
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import components from '@/components/ui/index'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(store)
    .use(router)
    .use(VueFullPage)
    .mount('#app')
