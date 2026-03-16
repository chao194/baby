import { createRouter, createWebHistory } from 'vue-router'

/**
 * 路由配置文件
 * @依赖 Vue Router：实现页面路由导航
 * @适配版本 Vue Router4.2.4+
 */

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '愉愉&超超 - 一周年纪念'
    }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/Timeline.vue'),
    meta: {
      title: '愉愉&超超 - 一周年纪念'
    }
  },
  // {
  //   path: '/messages',
  //   name: 'Messages',
  //   component: () => import('@/views/Messages.vue'),
  //   meta: {
  //     title: '愉愉&超超 - 一周年纪念'
  //   }
  // },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/Gallery.vue'),
    meta: {
      title: '愉愉&超超 - 一周年纪念'
    }
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () => import('@/views/Stories.vue'),
    meta: {
      title: '愉愉&超超 - 一周年纪念'
    }
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('@/views/Quiz.vue'),
    meta: {
      title: '愉愉&超超 - 一周年纪念'
    }
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('@/views/Wishlist.vue'),
    meta: {
      title: '愉愉&超超 - 一周年纪念'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由前置守卫，设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '一周年纪念'
  next()
})

export default router
