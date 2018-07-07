import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import donghua from '@/components/donghua'
Vue.use(Router) //这句别忘记了
export default new Router({
  mode: 'history', //使用history防止url中出现#
  routes: [{
    path: '/',
    name: 'first',
    component: first
  }, {
    path: '/donghua',
    name: 'donghua',
    component: donghua
  }]
})
