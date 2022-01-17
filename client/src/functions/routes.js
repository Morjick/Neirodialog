import VueRouter from 'vue-router'

import home from '@/pages/home'
import shop from '@/pages/shop'
import gallery from '@/pages/gallery'
import basket from '@/pages/basket'
import learn from '@/pages/laern'
import course from '@/pages/course'


export default new VueRouter({
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/shop',
      component: shop,
    },
    {
      path: '/gallery',
      component: gallery,
    },
    {
      path: '/basket',
      component: basket,
    },
    {
      path: '/learn',
      component: learn,
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      name: 'course',
      path: '/learn/:course',
      component: course
    },
    {
      path: '/learn/:*',
      redirect: '/'
    },
  ]
})