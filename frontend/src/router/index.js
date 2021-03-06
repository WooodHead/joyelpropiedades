import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Service from '@/components/Service'
import Bootstrap from '@/components/Bootstrap'
import Registro from '@/components/Registro'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/callservice',
      name: 'Service',
      component: Service
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
