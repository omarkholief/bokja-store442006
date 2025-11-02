<template>
  <div class="sm:hidden">
    <Swiper :modules="[Navigation, Pagination, Autoplay]" navigation pagination autoplay loop>
      <SwiperSlide v-for="(p, i) in products" :key="i">
        <ProductCard
          :product="p"
          :isFavorite="isFavorite(p)"
          @toggleFavorite="toggleFavorite"
          @addToCart="addToCart"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  products: Array,
  isFavorite: Function,
  toggleFavorite: Function,
  addToCart: Function
})
</script>
