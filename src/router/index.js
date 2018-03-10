import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ChuckJoke from '@/components/ChuckJoke'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chuck',
      name: 'ChuckJoke',
      component: ChuckJoke
    }
  ]
})
