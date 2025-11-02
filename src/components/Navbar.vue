<template>
  <nav class="shadow-sm w-full sticky top-0 z-50 bg-white">
    <div class="max-w-[1300px] mx-auto px-4 py-3 flex justify-between items-center">

      <NavbarLogo />
      <NavbarLinks :links="links" />
      <NavbarIcons />

      <!-- Mobile Button -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <i class="fas fa-bars w-6 h-6"></i>
      </button>
    </div>

    <NavbarMobileMenu :isOpen="isOpen" :links="links" :closeMenu="() => isOpen = false" />

  </nav>
</template>

<script setup>
import { ref } from 'vue'

import NavbarLogo from './TheNavbar/NavbarLogo.vue'
import NavbarLinks from './TheNavbar/NavbarLinks.vue'
import NavbarIcons from './TheNavbar/NavbarIcons.vue'
import NavbarMobileMenu from './TheNavbar/NavbarMobileMenu.vue'

const links = [
  { name: 'Home', path: '/home' },
  { name: 'Delivery Points', path: '/delivery-points' },
  { name: 'About us', path: '/about' },
  { name: 'Contact us', path: '/contact' },
  { name: 'Exclusive offers', path: '/exclusive-offers' },
]

const isOpen = ref(false)
</script>
