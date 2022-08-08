import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkhlbnJpcXVlIEQiLCJlbWFpbCI6ImhoaGhoaEBnZ2dnLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTk5OTEzMjUsImV4cCI6MTY2MDI1MDUyNX0.YlT8HNpEDzNt7q3g_KboW2b7OIc2fZHTpOyMeD7tIgI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')