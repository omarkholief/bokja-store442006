<template>
  <div class="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    <ProductCard
      v-for="(p, i) in products"
      :key="i"
      :product="p"
      :isFavorite="isFavorite(p)"
      @toggleFavorite="toggleFavorite"
      @addToCart="addToCart"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

const props = defineProps({
  products: Array,
  isFavorite: Function,
  toggleFavorite: Function,
  addToCart: Function
})
</script>
