import Vue from 'vue'
import VueRouter from 'vue-router'
import Genome from '../views/Genome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Genome',
    component: Genome
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Jobs.vue')
  },
  {
    path: '/People',
    name: 'People',
    component: () => import('../views/People.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
