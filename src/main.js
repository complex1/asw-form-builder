import Vue from 'vue'
import App from './App.vue'
import JsonViewer from 'vue-json-viewer/ssr'
import 'vue-json-viewer/style.css'
// Import JsonViewer as a Vue.js plugin
Vue.use(JsonViewer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
