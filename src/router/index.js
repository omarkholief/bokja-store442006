import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../pages/LoginView.vue'
import HomeView from '../pages/HomeView.vue'
import SignUpView from '../pages/SignUpView.vue'
import Favourites from '../pages/Favourites.vue'
import CategoryPage from '../pages/CategoryPage.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactUs from '../pages/ContactUs.vue'
import ExclusiveOffers from '../pages/ExclusiveOffers.vue'
import Checkout from '../pages/Checkout.vue'
import CheckoutPage from '../pages/CheckoutPage.vue'
import TrackingOrders from '../pages/TrackingOrders.vue'
import UserProfile from '../pages/UserProfile.vue'
import Category from '../pages/Category.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      hideLayout: true,
    },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
    meta: {
      hideLayout: true,
    },
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: Favourites,
  },
  {
    path: '/category/:category',
    name: 'category',
    component: CategoryPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs,
  },
  {
    path: '/exclusive-offers',
    name: 'exclusive-offers',
    component: ExclusiveOffers,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/checkout-page',
    name: 'checkout-page',
    component: CheckoutPage,
  },
  {
    path: '/tracking-orders',
    name: 'tracking-orders',
    component: TrackingOrders,
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
  },
  {
    path: '/category-page',
    name: 'category-page',
    component: Category,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
