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
    path: '/genome/:userId',
    name: 'GenomeProfile',
    component: () => import ('../views/Genome.vue'),
    props: true
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
