// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueHighcharts from 'vue-highcharts'
import store from './store/store'
import apollo from './store/apollo'

apollo.init()

Vue.config.productionTip = false

let highcharts

if (window['Highcharts'] !== undefined) {
  highcharts = window['Highcharts']
}

Vue.use(VueHighcharts, {
  Highcharts: highcharts
})

/* eslint-disable no-new */
let DashboardsApp = {
  create: function () {
    this.app = new Vue({
      el: '#app',
      template: '<App/>',
      components: {App},
      store: store
    })
  },

  destroy: function () {
    if (this.app !== undefined) {
      this.app.$destroy()
      this.app = undefined
    }
  }
}

DashboardsApp.create()

window['DashboardsApp'] = DashboardsApp
