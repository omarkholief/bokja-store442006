<template>
  <div class="block md:hidden relative">
    <swiper
      :slides-per-view="1.2"
      :space-between="15"
      :modules="[Navigation]"
      :navigation="{ nextEl: '.nextBtn', prevEl: '.prevBtn' }"
      class="pb-10"
    >
      <swiper-slide v-for="(product, i) in products" :key="i">
        <ProductCard
          :product="product"
          :isFavorite="isFavorite(product)"
          @toggle-favorite="toggleFavorite"
        />
      </swiper-slide>
    </swiper>

    <div class="prevBtn absolute top-1/2 -left-3 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div class="nextBtn absolute top-1/2 -right-3 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/TheCategory/ProductCard.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

defineProps(["products", "isFavorite"])
defineEmits(["toggle-favorite"])
</script>
