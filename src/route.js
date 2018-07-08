import Vue from 'vue'
import Router from 'vue-router'
import content1Component from '@/components/contentFirst'
import content2Component from '@/components/contentSecond'
Vue.use(Router) //这句别忘记了
export default new Router({
  mode: 'history', //使用history防止url中出现#
  routes: [{
    path: '/',
    name: 'content1Component',
    component: content1Component
  }, {
    path: '/content2Component',
    name: 'content2Component',
    component: content2Component
  }]
})
