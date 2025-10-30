<!-- src/components/HeroSection.vue -->
<template>

  <!-- Sidebar -->
  <TheSidebar />

  <!-- New Arrivals -->
  <TheNewArrivals />

  <!-- Store Info -->
  <TheStore />

  <!-- Featured Products -->
  <TheFeatured />
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TheFeatured from '@/components/TheHome/TheFeatured.vue'
import TheStore from '@/components/TheHome/TheStore.vue'
import TheNewArrivals from '@/components/TheHome/TheNewArrivals.vue'
import TheSidebar from '@/components/TheHome/TheSidebar.vue'


</script>
