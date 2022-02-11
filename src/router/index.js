import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Headphones from '../views/Headphones.vue';
import Earphones from '../views/Earphones.vue';
import Speakers from '../views/Speakers.vue';
import EarphoneProductDetail from '../views/EarphoneProductDetail.vue';
import HeadphoneProductDetail from '../views/HeadphoneProductDetail.vue';
import Checkout from '../views/Checkout.vue';

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
    path: '/earphoneproductdetail',
    name: 'EarphoneProductDetail',
    component: EarphoneProductDetail,
    meta: {
      title: "EarphoneDetail",
    }
  },
  {
    path: '/headphoneproductdetail',
    name: 'HeadphoneProductDetail',
    component: HeadphoneProductDetail,
    meta: {
      title: "HeadphoneDetail",
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: {
      title: "Checkout",
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
