import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myComponent from '@/components/myComponent/myComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'My Component',
      component: myComponent
    },
    {
      path: '/hello/',
      name: 'Hello',
      component: Hello
    }
  ]
})
