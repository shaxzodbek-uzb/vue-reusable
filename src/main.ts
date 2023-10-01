import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import directives from '@/helpers/directives.js'
// import modules from '@/helpers/modules.js'
// import { setupI18n } from '@/helpers/i18n.js'
import axios from '@/helpers/axios.js'
import auth from '@/helpers/auth.js'
// import inputMask from '@/helpers/input-mask.js'
// import numberFormat from '@/helpers/number-format.js'
// import Maska from 'maska'
// import Toast from "vue-toastification"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(modules, router)
app.use(axios)
app.use(auth, router)
// app.use(setupI18n({locale: 'uz', legacy: false}))
// app.use(directives)
// app.use(inputMask)
// app.use(numberFormat)
// app.use(Maska)
// app.use(tippy)
// app.use(Toast, toastOptions)

app.mount('#app')
