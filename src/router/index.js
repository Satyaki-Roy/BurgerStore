import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderBurger from '../views/OrderBurger.vue'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'OrderBurger',
    component: OrderBurger
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
