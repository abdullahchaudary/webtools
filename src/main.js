import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import CryptoJS from 'crypto-js'
import configureMeasurements, {allMeasures} from 'convert-units'

const convertLib = configureMeasurements(allMeasures);


const app = createApp(App)


app.use(router)
// app.use(CryptoJS)
app.mount('#app')
app.config.globalProperties.CryptoJS = CryptoJS
app.config.globalProperties.convertLib = convertLib

