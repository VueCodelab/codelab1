import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import ChuckJoke from '@/components/ChuckJoke'
import List from '@/components/List'
import Form from '@/components/Form'
import Search from '@/components/Search'

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
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
