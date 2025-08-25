<!-- components/Navbar.vue -->
<template>
  <nav class="shadow-sm w-full sticky top-0 z-50 bg-white">
    <div class="max-w-[1300px] mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <router-link to="/home"><i class="fas fa-store text-[#008D7C]"></i>
          <span class="text-xl font-normal">Bokja Store</span></router-link>
      </div>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <router-link v-for="link in links" :key="link.name" :to="link.path"
          class="hover:text-[#008D7C] border-b-2 border-transparent hover:border-[#008D7C]"
          active-class="text-[#008D7C] border-b-[#008D7C]">{{ link.name }}</router-link>
      </ul>

      <ul class="flex items-center gap-4">
        <router-link to="/profile">
          <li><i class="fas fa-user cursor-pointer"></i></li>
        </router-link>
        <router-link to="/category-page">
          <li><i class="fas fa-search cursor-pointer"></i></li>
        </router-link>
        <router-link to="/favourites">
          <li><i class="fas fa-heart cursor-pointer"></i></li>
        </router-link>
        <router-link to="/checkout">
          <li><i class="fas fa-shopping-cart cursor-pointer"></i></li>
        </router-link>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Links -->
    <div v-if="isOpen" class="md:hidden bg-white border-t">
      <ul class="flex flex-col p-4 gap-3 text-gray-700 font-medium">
        <router-link to="/home" class="hover:text-blue-500 border-b-2 border-transparent w-10" exact-active-class="text-[#008D7C] border-b-[#008D7C]">Home</router-link>
        <router-link to="/delivery-points" class="hover:text-blue-500 border-b-2 border-transparent" exact-active-class="text-[#008D7C] border-b-[#008D7C]">Delivery Points</router-link>
        <router-link to="/about" class="hover:text-blue-500 border-b-2 border-transparent w-16" exact-active-class="text-[#008D7C] border-b-[#008D7C]">About us</router-link>
        <router-link to="/contact" class="hover:text-blue-500 border-b-2 border-transparent w-19" exact-active-class="text-[#008D7C] border-b-[#008D7C]">Contact us</router-link>
        <router-link to="/exclusive-offers" class="hover:text-blue-500 border-b-2 border-transparent w-28" exact-active-class="text-[#008D7C] border-b-[#008D7C]">Exclusive offers</router-link>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const links = [
  { name: 'Home', path: '/home' },
  { name: 'Delivery Points', path: '/delivery-points' },
  { name: 'About us', path: '/about' },
  { name: 'Contact us', path: '/contact' },
  { name: 'Exclusive offers', path: '/exclusive-offers' },
];

const isOpen = ref(false)
</script>
