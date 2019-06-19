import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorldNew from '@/components/HelloWorldNew'
import Fracong from '@/components/public/fracong'
import Login from '@/components/public/login/Login'
import Index from '@/components/public/index/Index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
	{
      path: '/new',
      name: 'HelloWorldNew',
      component: HelloWorldNew
    },
	{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
      path: '/fracong',
      name: 'Fracong',
      component: Fracong
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
