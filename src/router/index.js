import Vue from 'vue'
import VueRouter from 'vue-router'

const ShowView = () => import('@/components/ShowView')
const AddBlog = () => import('@/components/AddBlog')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/show' // 重定向
  },
  {
    path: '/show',
    component: ShowView
  },
  {
    path: '/add',
    component: AddBlog
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'action'
})

export default router
