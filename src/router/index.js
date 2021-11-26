import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Headphones from '../views/Headphones.vue'
import Earphones from '../views/Earphones.vue'
import Speakers from '../views/Speakers.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home",
    }
  },
  {
    path: '/headphones',
    name: 'Headphones',
    component: Headphones,
    meta: {
      title: "Headphones",
    }
  },
  {
    path: '/earphones',
    name: 'Earphones',
    component: Earphones,
    meta: {
      title: "Earphones",
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: Speakers,
    meta: {
      title: "Speakers",
    }
  },
  {
    path: '/productdetail',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: {
      title: "ProductDetail",
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  document.title = `${to.meta.title}`;
  next();
});

export default router