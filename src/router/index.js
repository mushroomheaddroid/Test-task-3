import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lessons',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue')
  },
  {
    path: '/lesson/:id',
    name: 'Lesson',
    component: () => import('../views/Lesson.vue'),
    props: true,
    children: [
      {
        path: 'tests',
        component: () => import('../views/Tests.vue'),
      },
      {
        path: 'stats',
        component: () => import('../views/Statistics.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
