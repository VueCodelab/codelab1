import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
<<<<<<< HEAD
import Form from '@/components/Form'
=======
import List from '@/components/List'
>>>>>>> 670a93425c8d2ff24ded56470d75c09bf465ea96

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/form',
      name: 'Form',
      component: Form
=======
      path: '/list',
      name: 'List',
      component: List
>>>>>>> 670a93425c8d2ff24ded56470d75c09bf465ea96
    }
  ]
})
